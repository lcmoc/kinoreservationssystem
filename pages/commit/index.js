import Link from "next/link";
import styles from "../../styles/Login.module.css";

const Commit = () => {
  return (
    <main className={styles.main}>
      <Link href="/">
        <a className={styles.BackLink}>zurück &rarr;</a>
      </Link>

      <h2 className="text-blue-500 text-3xl mb-7">Bestätige deine E-Mail</h2>

      <form className="flex items-start justify-start flex-col shadow-2xl bg-white border border-black rounded">
        <div className="w-full p-10">
          <p>
            Wir haben eine Bestätigungsmail gesendet, bitte überprüfe deinen
            Posteingang.
          </p>
          <div className="flex items-center justify-center mt-5">
            <Link href="/films">
              <a>
                <button className="SubmitButton border border-black rounded p-2 w-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white">ok</button>
              </a>
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Commit;
