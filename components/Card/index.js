import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/FlipCard.module.css";

const Card = ({ src, alt, title, txt }) => {
  return (
    <div className={styles.FlipCard}>
      <div className={styles.FlipCardInner}>
        <div className={styles.FlipCardFront}>
          <Image src={src} alt={alt} height={700} width={500}></Image>
        </div>
        <div className={styles.FlipCardBack}>
          <div className="flex items-center justify-center text-center flex-col mt-6 mb-40">
            <h1 className="text-blue-600 text-xl">{title}</h1>
            <p>{txt}</p>
            <p>Zeit: 20.00 - 22.30h</p>
            <p>Darsteller: </p>
            <p>Erscheiungsdatum: </p>
            <p>Genre:</p>
          </div>
          <Link href="/reservation">
            <a>
              <button
                className="SubmitButton border border-black rounded p-2 w-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
              >
                Reservieren
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
