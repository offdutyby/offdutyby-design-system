import CardHeader from "@/components/atoms/CardHeader";
import ListItem from "@/components/atoms/ListItem";
import PaginationDots from "@/components/molecules/PaginationDots";
import styles from "./index.module.scss";
import Box from "@/components/molecules/Box";
import Slider from "@/components/organism/Slider";
const Card = () => {
  return (
    <Box>
      <div className={styles.container}>
        <CardHeader title="혜택받기" description="17분 전" />
        <Slider
          totalSlide={2}
          slideWidth={358}
          slides={[
            <ListItem
              left_title="홈플러스"
              left_description="10.06 - 10.12"
              right_title="3000원"
              right_description="청구결제"
              iconName="illustration_icon-coin"
            />,
            <ListItem
              left_title="홈플러스"
              left_description="10.06 - 10.12"
              right_title="3000원"
              right_description="청구결제"
              iconName="illustration_icon-coin"
            />,
          ]}
        />

        <PaginationDots totalPages={2} currentPage={1} />
      </div>
    </Box>
  );
};

export default Card;
