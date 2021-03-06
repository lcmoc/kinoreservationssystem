import Card from "../../components/Card";
import FilmMenu from "../../components/FilmMenu";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Films.module.css";

const Films = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kinoreservationssystem</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.Header}>
        <div className="ml-10 pt-10">
          <Link href="/">
            <a className={styles.title}>Cinema.</a>
          </Link>
        </div>
        <div className="pt-14 mr-96 text-gray-300 font-bold ml-10 flex justify-between w-auto">
          <FilmMenu link="/films?beliebt" txt={"Beliebt"} />
          <FilmMenu link="/films?action" txt={"Action"} />
          <FilmMenu link="/films?horror" txt={"Horror"} />
          <FilmMenu link="/films?komedy" txt={"Komödie"} />
          <FilmMenu link="/films?drama" txt={"Drama"} />
          <FilmMenu link="/films?love" txt={"Liebe"} />
        </div>
      </div>

      <main className={styles.main}>
        <div>
          <Link href="/login">
            <a className={styles.LoginLink}>anmelden</a>
          </Link>
        </div>

        <div className={styles.grid}>
          <Card
            src={"/spiderman.webp"}
            alt="spiderman"
            title="No way home"
            txt="Nachdem Spider-Man demaskiert wurde, bittet er den Magier Doctor Strange, das Geheimnis um seine Identität wiederherzustellen."
            time={"20.00 - 22.30h"}
            actor="Alfred Molina"
            publishDate="15. Dezember 2021"
          />
          <Card
            src={"/batmanfilm.jpg"}
            alt="batman"
            title="THE BATMAN"
            txt="Seit zwei Jahren versetzt Bruce Wayne als Batman die Kriminellen von Gotham City in Angst und Schrecken."
            time={"20.00 - 22.30h"}
            actor="	Amber Sienna"
            publishDate="3. März 2022"
          />
          <Card
            src={"/jackass.jpg"}
            alt="jackass"
            title="JACKASS FOREVER"
            txt="Johnny Knoxville erlebt in diesem gigantischen Jackass-Spektakel den intensivsten Bullenritt seines Lebens. "
            time={"20.00 - 22.30h"}
            actor="Johnny Knoxville , Steve-O"
            publishDate="10. März 2022"
          />
          <Card
            src={"/uncharted.jpg"}
            alt="uncharted"
            title="UNCHARTED"
            txt="Der clevere Dieb Nathan Drake (Tom Holland) wird vom Schatzsucher Victor „Sully“ Sullivan (Mark Wahlberg) angeworben, ein Vermögen zu bergen."
            time={"20.00 - 22.30h"}
            actor="Tom Holland"
            publishDate="17. Februar 2022"
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Hatice & Luca
          <span className={styles.logo}></span>
        </a>
      </footer>
    </div>
  );
};

export default Films;
