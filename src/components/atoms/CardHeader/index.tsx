import styles from "./index.module.scss";

interface CardHeaderProps {
  title: string;
  description: string;
}

const CardHeader = ({ title, description }: CardHeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default CardHeader;
