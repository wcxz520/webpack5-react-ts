import React, { useState } from "react";

import ad from "@/assets/images/ad.png";

import styles from "./index.module.less";

const Home = () => {
  const [num, setNum] = useState(0);

  return (
    <div className={styles.home}>
      <h3>Home</h3>
      <div>
        <img src={ad} alt="" onClick={() => setNum((n) => n + 1)} />
        <div>{num}</div>
      </div>
    </div>
  );
};

export default Home;
