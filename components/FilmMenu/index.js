import Link from "next/link";
import styles from "../../styles/FilmMenu.module.css"

const FilmMenu = ({link, txt}) => {
  return (
    <Link href={link}>
      <a className={styles.MenuItem}>{txt}</a>
    </Link>
  );
};

export default FilmMenu