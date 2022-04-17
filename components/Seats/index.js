import react, { useState } from "react";

import styles from "../../styles/Reservation.module.css";

const Seat = ({ seatNumber }) => {
  const [clicked, setClicked] = useState(false);

  const style = {
    borderColor: '#0070f3'
  }
  
  return (
    <div className={styles.card} onClick={() => setClicked(!clicked)} style={clicked ? style : null}>
      {seatNumber}
    </div>
  );
};

export default Seat;
