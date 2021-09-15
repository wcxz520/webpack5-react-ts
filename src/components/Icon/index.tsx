import React, { FC, useMemo, CSSProperties } from "react";

import styles from "./index.module.less";

type IProps = {
  type: string;
  style?: CSSProperties;
};

const Icon: FC<IProps> = ({ type, style }) => {
  const xlinkHref = useMemo(() => `#${type}`, [type]);

  return (
    <svg className={styles.icon} style={style} aria-hidden="true">
      <use xlinkHref={xlinkHref}></use>
    </svg>
  );
};

export default React.memo(Icon);
