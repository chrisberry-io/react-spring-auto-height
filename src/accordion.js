import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useMeasure } from "react-use";
import style from "./accordion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Accordion = () => {
  const defaultHeight = "100px";

  // Manages the open or cloased state of the accordion
  const [open, toggle] = useState(false);

  // The height of the content inside of the accordion
  const [contentHeight, setContentHeight] = useState(defaultHeight);

  // Gets the height of the element (ref)
  const [ref, { height }] = useMeasure();

  // Animations
  const expand = useSpring({
    config: { friction: 10 },
    height: open ? `${contentHeight}px` : defaultHeight
  });
  const spin = useSpring({
    config: { friction: 10 },
    transform: open ? "rotate(180deg)" : "rotate(0deg)"
  });

  useEffect(() => {
    //Sets initial height
    setContentHeight(height);

    //Adds resize event listener
    window.addEventListener("resize", setContentHeight(height));

    // Clean-up
    return window.removeEventListener("resize", setContentHeight(height));
  }, [height]);

  return (
    <div className={style.wrapper}>
      <animated.div className={style.accordion} style={expand}>
        <div ref={ref} className={style.content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
            augue laoreet, eleifend turpis a, tincidunt velit. Curabitur vitae
            felis sit amet arcu blandit pellentesque quis vitae odio. Aenean
            pharetra eu felis non suscipit. Etiam fermentum enim sit amet magna
            scelerisque, eu mattis ligula tristique. Aliquam sed cursus odio,
            sit amet condimentum eros. Proin molestie commodo urna, eget
            accumsan tellus laoreet ut. Morbi id est eu lorem tempor cursus.
            Aenean vitae ultrices sem. Phasellus venenatis velit in ultrices
            interdum. Cras semper, justo a maximus iaculis, nisl metus luctus
            nisl, ac sodales odio mauris et ante. Donec ipsum est, auctor a
            lorem ac, rutrum elementum magna.
          </p>
        </div>
      </animated.div>
      <animated.button
        className={style.expand}
        onClick={() => toggle(!open)}
        style={spin}
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </animated.button>
    </div>
  );
};

export default Accordion;
