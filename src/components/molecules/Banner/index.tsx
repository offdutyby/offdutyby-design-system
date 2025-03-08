import Icon from "@/components/atoms/Icon";
import styles from "./index.module.scss";
import { IconName } from "@/types/icon";

interface BannerProps {
  title: string;
  description: string;
  iconName: IconName;
}

const Banner = ({ title, description, iconName }: BannerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      {iconName && <Icon name={iconName} width={56} height={56} />}
    </div>
  );
};

export default Banner;
