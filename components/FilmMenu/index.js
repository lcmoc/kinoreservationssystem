import Link from "next/link";

const FilmMenu = ({link, txt}) => {
  return (
    <Link href={link}>
      <a className="text-xl hover:text-white">{txt}</a>
    </Link>
  );
};

export default FilmMenu