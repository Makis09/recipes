import { useState, useEffect, useReducer, useCallback } from "react";
import Head from "next/head";
import { Container, Grid } from "@material-ui/core";
import { getAllRecipes } from "../utils/recipes";

import RecipeCards from "../components/recipeCards/recipeCards";

import Carousel from "../components/Carousel/Carousel";
import Filters from "../components/Filters/filters";

const sliderReducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, ...action.updated };
    case "SLIDE":
      return { ...state, ...action.updated };
    case "END":
      return { ...state, ...action.updated };
    default:
      throw new Error("Something is wrong");
  }
};

export default function Home({
  allRecipes,
  activeFilters,
  changeActiveFilters,
  page,
}) {
  const [displayedRecipes, setDisplayedRecipes] = useState(allRecipes);
  const [isMobile, setIsmobile] = useState(null);
  const [slide, dispatch] = useReducer(sliderReducer, {
    scrollingDistance: 72,
    filtersOpened: false,
    startedScrollingAt: null,
    finishedScrollingAt: null,
    willChange: false,
    distanceScrolled: null,
    position: -87,
  });
  const positionWhenOpened = -15;
  const positionWhenClosed = -87;

  useEffect(() => {
    let recipesToShow;
    if (activeFilters.length) {
      recipesToShow = allRecipes.filter((recipe) => {
        for (let filter of activeFilters) {
          if (recipe.tags.includes(filter.toUpperCase())) {
            return true;
          }
        }
      });
      setDisplayedRecipes(recipesToShow);
    } else {
      setDisplayedRecipes(allRecipes);
    }
  }, [activeFilters]);

  const handleTouchStart = useCallback((event) => {
    const startedAt = Math.round(event.touches[0].clientX);
    dispatch({
      type: "START",
      updated: { startedScrollingAt: startedAt, willChange: true },
    });
  }, []);
  const handleTouchMove = (event) => {
    const currentPosition = Math.round(event.touches[0].clientX);
    let distanceScrolled = Math.abs(slide.startedScrollingAt - currentPosition);
    if (slide.filtersOpened && currentPosition < slide.startedScrollingAt) {
      return;
    }
    if (distanceScrolled > 72) {
      distanceScrolled = 72;
    }
    const newPosition = slide.filtersOpened
      ? positionWhenOpened - distanceScrolled
      : positionWhenClosed + distanceScrolled;
    dispatch({
      type: "SLIDE",
      updated: {
        finishedScrollingAt: currentPosition,
        position: newPosition,
        distanceScrolled: distanceScrolled,
      },
    });
  };
  const handleTouchEnd = () => {
    const tresholdPassed = slide.distanceScrolled > slide.scrollingDistance / 2;
    const updatedSlideState = {};
    if (slide.filtersOpened) {
      if (slide.finishedScrollingAt < slide.startedScrollingAt) {
        return;
      }
      if (tresholdPassed) {
        (updatedSlideState.filtersOpened = false),
          (updatedSlideState.position = positionWhenClosed);
      } else {
        (updatedSlideState.filtersOpened = true),
          (updatedSlideState.position = positionWhenOpened);
      }
    } else {
      if (tresholdPassed) {
        (updatedSlideState.filtersOpened = true),
          (updatedSlideState.position = positionWhenOpened);
      } else {
        (updatedSlideState.filtersOpened = false),
          (updatedSlideState.position = positionWhenClosed);
      }
    }
    dispatch({
      type: "END",
      updated: { ...updatedSlideState, willChange: false },
    });
  };

  useEffect(() => {
    const match = window.matchMedia || window.msMatchMedia;
    if (match) {
      const mq = match("(pointer:coarse)");
      setIsmobile(mq.matches);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Recipes - Home page</title>
        <link rel="icon" href="/logo/logo.jpg" />
      </Head>
      <Carousel />
      <Container>
        <Grid container spacing={3} style={{ position: "relative" }}>
          <Filters
            handleTouchStart={handleTouchStart}
            handleTouchMove={handleTouchMove}
            handleTouchEnd={handleTouchEnd}
            changeActiveFilters={changeActiveFilters}
            activeFilters={activeFilters}
            isMobile={isMobile}
            slide={slide}
          />
          <RecipeCards
            allRecipes={displayedRecipes}
            isMobile={isMobile}
            slide={slide}
          />
        </Grid>
      </Container>
    </>
  );
}

export async function getStaticProps(context) {
  const allRecipes = await getAllRecipes(context);
  return {
    props: {
      allRecipes,
    },
  };
}
