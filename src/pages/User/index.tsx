import Icon from "@/components/Icon";
import React from "react";

import styles from "./index.module.less";

const User = () => {
  return (
    <div className={styles.user}>
      <h3 className={styles.userName}>User</h3>
      <div>
        <Icon type="icon-chenggong" />
      </div>
    </div>
  );
};

export default User;
