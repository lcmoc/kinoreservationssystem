import Link from "next/link";
import styles from "../../styles/Login.module.css";

const Login = () => {
  return (
    <main className={styles.main}>
      <Link href="/">
        <a className={styles.BackLink}>zurück &rarr;</a>
      </Link>

      <h2 className="text-blue-500 text-3xl mb-7">Anmelden</h2>

      <form className="flex items-start justify-start flex-col shadow-2xl bg-white border border-black rounded">
        <div className="w-full p-10">
          <label htmlFor="a" className="text-lg text-gray-500 font-bold">
            Benutzername
          </label>
          <input
            type="text"
            name="username"
            className="bg-gray-100 border border-black w-full rounded h-8 mt-1 mb-3 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:bg-white focus:border-transparent appearance-none shadow-lg"
          />
          <label htmlFor="c" className="text-lg text-gray-500 font-bold">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="bg-gray-100 border border-black w-full rounded h-8 mt-1 mb-3 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:bg-white focus:border-transparent appearance-none shadow-lg"
          />
          <p>
            Kein Konto?{" "}
            <a href="/register" className="hover:text-blue-600 underline">
              Registrieren
            </a>
          </p>
          <div className="flex items-center justify-center">
            <Link href="/films">
              <a>
                <button className="SubmitButton border border-black rounded p-2 w-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white mt-4">
                  Einloggen
                </button>
              </a>
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Login;
