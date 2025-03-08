import Icon from "@/components/atoms/Icon";
import styles from "./index.module.scss";

interface PaginationDotsProps {
  totalPages?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}
const PaginationDots = ({
  totalPages = 2,
  currentPage,
  onPageChange,
}: PaginationDotsProps) => {
  return (
    <div className={styles.container}>
      {Array.from({ length: totalPages }, (_, index) => (
        <div key={index}>
          <Icon
            onClick={() => onPageChange?.(index + 1)}
            name={
              currentPage === index + 1
                ? "pagination-dot_active"
                : "pagination-dot_inactive"
            }
            width={6}
            height={6}
          />
        </div>
      ))}
    </div>
  );
};

export default PaginationDots;
