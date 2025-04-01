import { useState, useRef, ReactNode } from "react";
import styles from "./index.module.scss";
import PaginationDots from "@/components/molecules/PaginationDots";

interface SlideProps {
  totalSlide: number;
  slideWidth: number;
  slides: ReactNode[];
  paginationDotsPosition?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

const Slider = ({
  slides,
  totalSlide,
  slideWidth,
  paginationDotsPosition,
}: SlideProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef(null);

  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> & React.TouchEvent<HTMLDivElement>
  ) => {
    setIsDragging(true);
    const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    setStartX(clientX);
  };

  const handleDragMove = (
    e: React.MouseEvent<HTMLDivElement> & React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return;

    e.preventDefault();

    const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    const diff = clientX - startX;

    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const sliderWidth = (sliderRef.current as unknown as HTMLDivElement)
      .offsetWidth;

    if (Math.abs(dragOffset) > sliderWidth * 0.2) {
      if (dragOffset > 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else if (dragOffset < 0 && currentSlide < totalSlide - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    }
    setDragOffset(0);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setDragOffset(0);
  };

  return (
    <div
      className={styles.sliderContainer}
      style={{ width: `${slideWidth}px` }}
    >
      <div className={styles.sliderWrapper} ref={sliderRef}>
        <div
          className={styles.sliderTrack}
          style={{
            transform: `translateX(calc(-${
              currentSlide * 100
            }% + ${dragOffset}px))`,
          }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {slides.map((slide) => (
            <div
              className={styles.slideItem}
              style={{ width: `${slideWidth}px` }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div
        className={styles.paginationDots}
        style={{
          top: paginationDotsPosition?.top,
          bottom: paginationDotsPosition?.bottom,
          left: paginationDotsPosition?.left,
          right: paginationDotsPosition?.right,
        }}
      >
        <PaginationDots
          currentPage={currentSlide + 1}
          totalPages={totalSlide}
          onPageChange={(page) => goToSlide(page - 1)}
        />
      </div>
    </div>
  );
};

export default Slider;
