import { IconName } from "@/types/icon";
import styles from "./index.module.scss";
import Icon from "@/components/atoms/Icon";
import clsx from "clsx";

interface ListItemProps {
  left_title: string;
  left_description: string;
  right_title: string;
  right_description: string;
  iconName: IconName;
}
const ListItem = ({
  left_title,
  left_description,
  right_title,
  right_description,
  iconName,
}: ListItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.icon_box}>
          <Icon name={iconName} width={32} height={32} />
        </div>
        <div className={styles.text_box}>
          <div className={styles.title}>{left_title}</div>
          <div className={styles.description}>{left_description}</div>
        </div>
      </div>
      <div className={clsx(styles.text_box, styles.right)}>
        <div className={styles.title}>{right_title}</div>
        <div className={styles.description}>{right_description}</div>
      </div>
    </div>
  );
};

export default ListItem;
