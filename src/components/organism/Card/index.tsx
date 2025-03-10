import CardHeader from "@/components/atoms/CardHeader";
import styles from "./index.module.scss";
import Box from "@/components/molecules/Box";
import Slider from "@/components/organism/Slider";
import { ReactNode } from "react";

interface CardProps {
  header: {
    title: string;
    description: string;
  };
  slider: {
    totalSlide: number;
    slideWidth: number;
    paginationDotsPosition?: {
      top?: string;
      right?: string;
      bottom?: string;
      left?: string;
    };
    slides: ReactNode[];
  };
}

const Card = ({ header, slider }: CardProps) => {
  return (
    <Box>
      <div className={styles.container}>
        <CardHeader title={header.title} description={header.description} />
        <Slider
          totalSlide={slider.totalSlide}
          slideWidth={slider.slideWidth}
          slides={slider.slides}
          paginationDotsPosition={slider.paginationDotsPosition}
        />
      </div>
    </Box>
  );
};

export default Card;
