import { useState, useEffect } from "react";
import Head from "next/head";
import { Container, Grid } from "@material-ui/core";
import { getAllRecipes } from "../utils/recipes";

import RecipeCards from "../components/recipeCards/recipeCards";

import Carousel from "../components/Carousel/Carousel";
import Filters from "../components/Filters/filters";

export default function Home(props) {
  const [displayedRecipes, setDisplayedRecipes] = useState(props.allRecipes);
  const [activeFilters, setActiveFilters] = useState([]);
  const [page, setPage] = useState(1);
  const [isMobile, setIsmobile] = useState(null);
  const [slide, setSlide] = useState({
    scrollingDistance: 72,
    filtersOpened: false,
    startedScrollingAt: null,
    finishedScrollingAt: null,
    distanceScrolled: null,
    position: -87,
  });

  useEffect(() => {
    let recipesToShow;
    if (activeFilters.length) {
      recipesToShow = props.allRecipes.filter((recipe) => {
        for (let filter of activeFilters) {
          if (recipe.tags.includes(filter.toUpperCase())) {
            return true;
          }
        }
      });
      setDisplayedRecipes(recipesToShow);
    } else {
      setDisplayedRecipes(props.allRecipes);
    }
  }, [activeFilters]);

  const changeActiveFilters = (clickedFilter) => {
    const updatedActiveFilters = [...activeFilters];
    if (updatedActiveFilters.includes(clickedFilter)) {
      const index = updatedActiveFilters.indexOf(clickedFilter);
      updatedActiveFilters.splice(index, 1);
    } else {
      updatedActiveFilters.push(clickedFilter);
    }
    setActiveFilters(updatedActiveFilters);
  };

  const positionWhenOpened = -15;
  const positionWhenClosed = -87;

  const handleTouchStart = (event) => {
    const startedAt = Math.round(event.touches[0].clientX);
    const updatedSlideState = { ...slide, startedScrollingAt: startedAt };
    setSlide(updatedSlideState);
  };
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
    const updatedSlideState = {
      ...slide,
      finishedScrollingAt: currentPosition,
      position: newPosition,
      distanceScrolled: distanceScrolled,
    };
    setSlide(updatedSlideState);
  };
  const handleTouchEnd = () => {
    const tresholdPassed = slide.distanceScrolled > slide.scrollingDistance / 2;
    if (slide.filtersOpened) {
      if (slide.finishedScrollingAt < slide.startedScrollingAt) {
        return;
      }
      if (tresholdPassed) {
        setSlide({
          ...slide,
          filtersOpened: false,
          position: positionWhenClosed,
        });
      } else {
        setSlide({
          ...slide,
          filtersOpened: true,
          position: positionWhenOpened,
        });
      }
    } else {
      if (tresholdPassed) {
        setSlide({
          ...slide,
          filtersOpened: true,
          position: positionWhenOpened,
        });
      } else {
        setSlide({
          ...slide,
          filtersOpened: false,
          position: positionWhenClosed,
        });
      }
    }
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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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
