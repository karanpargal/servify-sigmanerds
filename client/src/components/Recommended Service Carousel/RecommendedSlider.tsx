import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Slide = ({ isActive, slide }) => {
  if (isActive) {
    return (
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      >
        <Box
          p="2em"
          border="1px solid #eee"
          borderRadius="5px"
          shadow="md"
          m="5"
        >
          {slide}
        </Box>
      </motion.div>
    );
  }
  return null;
};

const Dots = ({ slides, currentSlide, displayed, setActive }) => {
  if (!displayed) return null;

  return (
    <Flex>
      {slides.map((slide) => {
        return (
          <Box p="3">
            <Box
              h="10px"
              cursor="pointer"
              onClick={() => setActive(slide)}
              w="10px"
              borderRadius="50%"
              transition="0.2s"
              bg={currentSlide === slide ? "blue.500" : "#eee"}
            />
          </Box>
        );
      })}
    </Flex>
  );
};

const SlideShow = ({ autoplay, delay }) => {
  const slides = [1, 2, 3];
  const [active, setActive] = useState(1);

  const prev = () =>
    setActive(active > 1 ? active - 1 : slides[slides.length - 1]);
  const next = () => setActive(active < slides.length ? active + 1 : 1);

  useEffect(() => {
    if (autoplay) {
      setTimeout(() => {
        next();
      }, delay || 3000);
    }
  }, [active, next]);

  return (
    <div>
      <AnimatePresence>
        {slides.map((slide) => {
          return <Slide isActive={active === slide} slide={slide} />;
        })}
      </AnimatePresence>
      <Dots
        displayed
        currentSlide={active}
        slides={slides}
        setActive={setActive}
      />
      <p>active: {active} </p>
      <Button onClick={prev}>prev</Button>
      <Button onClick={next}>next</Button>
    </div>
  );
};

export default SlideShow;
