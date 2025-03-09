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

  // 드래그 시작 핸들러
  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> & React.TouchEvent<HTMLDivElement>
  ) => {
    setIsDragging(true);
    // 마우스나 터치 이벤트 위치 저장
    const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    setStartX(clientX);
  };

  // 드래그 중 핸들러
  const handleDragMove = (
    e: React.MouseEvent<HTMLDivElement> & React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return;

    // 이벤트 취소하여 스크롤 방지
    e.preventDefault();

    // 현재 마우스/터치 위치 계산
    const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    const diff = clientX - startX;

    // 드래그 오프셋 설정 (슬라이더 이동 위치)
    setDragOffset(diff);
  };

  // 드래그 종료 핸들러
  const handleDragEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);

    // 슬라이더 너비
    const sliderWidth = (sliderRef.current as unknown as HTMLDivElement)
      .offsetWidth;

    // 드래그 거리가 슬라이더 너비의 20% 이상이면 슬라이드 변경
    if (Math.abs(dragOffset) > sliderWidth * 0.2) {
      if (dragOffset > 0 && currentSlide > 0) {
        // 오른쪽으로 드래그 -> 이전 슬라이드
        setCurrentSlide(currentSlide - 1);
      } else if (dragOffset < 0 && currentSlide < totalSlide - 1) {
        // 왼쪽으로 드래그 -> 다음 슬라이드
        setCurrentSlide(currentSlide + 1);
      }
    }
    // 드래그 오프셋 초기화
    setDragOffset(0);
  };

  // 특정 슬라이드로 이동하는 함수
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setDragOffset(0);
  };

  return (
    <div
      className={styles.sliderContainer}
      style={{ width: `${slideWidth}px` }}
    >
      {/* 슬라이더 컨테이너 */}
      <div className={styles.sliderWrapper} ref={sliderRef}>
        {/* 슬라이더 트랙 */}
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
          {/* 슬라이드 아이템들 */}
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

      {/* 페이지네이션 도트 */}
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
