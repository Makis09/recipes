import { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import classes from "./Carousel.module.scss";

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const slides = [
    { id: 0, url: "/static/filter-images/Asian.jpg" },
    { id: 1, url: "/static/filter-images/Baked.jpg" },
    { id: 2, url: "/static/filter-images/Breakfast.jpg" },
    { id: 3, url: "/static/filter-images/Italian.jpg" },
    { id: 4, url: "/static/filter-images/Mexican.jpg" },
  ];

  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    const imageSlide = setInterval(
      () => setIndex((state) => (state + 1) % slides.length),
      7000
    );
    return () => clearInterval(imageSlide);
  }, []);

  return (
    <>
      <div className={classes.carousel}>
        {transitions.map(({ item, props, key }) => {
          return (
            <animated.div
              key={key}
              className={classes.bg}
              style={{
                ...props,
                backgroundImage: "url(" + `${`${item.url}`}` + ")",
              }}
            >
              <h1>Ready to <strong>cook</strong>? <br/>Look <strong>no</strong> further</h1>
            </animated.div>
          );
        })}
      </div>
      <div className={classes.indicators}>
        {slides.map((slide) => {
          return (
            <span
              key={slide.id}
              onClick={() => setIndex(slide.id)}
              style={{
                backgroundColor: slide.id === index && "rgb(252, 92, 94)",
              }}
            ></span>
          );
        })}
      </div>
    </>
  );
}
