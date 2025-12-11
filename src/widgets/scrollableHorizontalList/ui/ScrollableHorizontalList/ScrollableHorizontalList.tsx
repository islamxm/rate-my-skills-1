"use client";
import { Box, Button, Stack, SxProps } from "@mui/material";
import { FC, PropsWithChildren, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";

type Props = PropsWithChildren<{
  itemWidth: number;
}>;

const navButtonSx: SxProps = {
    position: "absolute",
    height: "100%",
    minWidth: "unset",
    p: 0,
    width: "4rem",
    top: 0,
    zIndex: 2,
    background: "rgba(79,70,229, .4)",
    backdropFilter: "blur(10px)",
    fontSize: "5rem",
  };

export const ScrollableHorizontalList: FC<Props> = ({
  children,
  itemWidth,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canSlideNext, setCanSlideNext] = useState(true);
  const [canSlidePrev, setCanSlidePrev] = useState(false);

  const prev = () => {
    if (sliderRef.current) {
      const leftOffset = sliderRef.current.scrollLeft - itemWidth * 10;
      sliderRef.current.scrollTo({
        left: leftOffset,
        behavior: "smooth",
      });
    }
  };
  const next = () => {
    if (sliderRef.current) {
      const leftOffset = sliderRef.current.scrollLeft + itemWidth * 10;
      sliderRef.current.scrollTo({
        left: leftOffset,
        behavior: "smooth",
      });
    }
  };

  const onScrollEnd = () => {
    const container = containerRef.current;
    const slider = sliderRef.current;
    if (container && slider) {
      if (slider.scrollLeft > 0) {
        setCanSlidePrev(true);
      } else {
        setCanSlidePrev(false);
      }
      if (slider.scrollWidth - slider.scrollLeft <= container.scrollWidth) {
        setCanSlideNext(false);
      }
      if (slider.scrollWidth - slider.scrollLeft > container.scrollWidth) {
        setCanSlideNext(true);
      }
    }
  };

  return (
    <Box ref={containerRef} sx={{ position: "relative" }}>
      <AnimatePresence>
        {canSlidePrev && (
          <Button
            variant={"contained"}
            sx={{
              ...navButtonSx,
              left: 0,
            }}
            onClick={prev}
            component={motion.button}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <RxChevronLeft />
          </Button>
        )}
      </AnimatePresence>
      <Stack
        onScrollEnd={onScrollEnd}
        direction={"row"}
        sx={{
          overflowX: "scroll",
          overflowY: "visible",
          scrollbarWidth: "none",
          scrollSnapType: "x mandatory",
          scrollMarginInlineStart: "2rem",
          gap: "1rem",
        }}
        component={"div"}
        ref={sliderRef}
      >
        {children}
      </Stack>
      <AnimatePresence>
        {canSlideNext && (
          <Button
            variant={"contained"}
            sx={{
              ...navButtonSx,
              right: 0,
            }}
            onClick={next}
            component={motion.button}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <RxChevronRight />
          </Button>
        )}
      </AnimatePresence>
    </Box>
  );
};
