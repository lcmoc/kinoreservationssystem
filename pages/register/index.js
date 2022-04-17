import Link from "next/link";
import styles from "../../styles/Login.module.css";

const Register = () => {
  return (
    <main className={styles.main}>
      <Link href="/">
        <a className={styles.BackLink}>zurück &rarr;</a>
      </Link>

      <h2 className="text-blue-500 text-3xl mb-7">Registrieren</h2>

      <form className="flex items-start justify-start flex-col shadow-2xl bg-white border border-black rounded">
        <div className="w-full p-10">
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="text-lg text-gray-500 font-bold"
                htmlFor="grid-first-name"
              >
                Vorname
              </label>
              <input
                className="bg-gray-100 border border-black w-full rounded h-8 mt-1 mb-3 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:bg-white focus:border-transparent appearance-none shadow-lg"
                id="grid-first-name"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="text-lg text-gray-500 font-bold"
                htmlFor="grid-last-name"
              >
                Nachname
              </label>
              <input
                className="bg-gray-100 border border-black w-full rounded h-8 mt-1 mb-3 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:bg-white focus:border-transparent appearance-none shadow-lg"
                id="grid-last-name"
                type="text"
              />
            </div>
          </div>
          <label htmlFor="username" className="text-lg text-gray-500 font-bold">
            E-Mail
          </label>
          <input
            type="email"
            name="email"
            className="bg-gray-100 border border-black w-full rounded h-8 mt-1 mb-3 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:bg-white focus:border-transparent appearance-none shadow-lg"
          />
          <label htmlFor="mail" className="text-lg text-gray-500 font-bold">
            Tel. Nr.
          </label>
          <input
            type="text"
            name="tel"
            className="bg-gray-100 border border-black w-full rounded h-8 mt-1 mb-3 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:bg-white focus:border-transparent appearance-none shadow-lg"
          />
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="text-lg text-gray-500 font-bold">
                Password
              </label>
              <input
                className="bg-gray-100 border border-black w-full rounded h-8 mt-1 mb-3 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:bg-white focus:border-transparent appearance-none shadow-lg"
                type="password"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="text-lg text-gray-500 font-bold">
                Password erneut eingeben
              </label>
              <input
                className="bg-gray-100 border border-black w-full rounded h-8 mt-1 mb-3 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:bg-white focus:border-transparent appearance-none shadow-lg"
                id="grid-last-name"
                type="text"
              />
            </div>
          </div>
          <p>
            Du hast bereits ein Konto?{" "}
            <a href="/login" className="hover:text-blue-600 underline">
              Einloggen
            </a>
          </p>
          <div className="flex items-center justify-center">
            <Link href="/commit">
              <a>
                <button className="SubmitButton border border-black rounded p-2 w-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white mt-4">
                  Registrieren
                </button>
              </a>
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Register;
