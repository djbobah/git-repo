import { useState } from "react";
import styles from "./repoInfo.module.scss";
const RepoInfo = () => {
  const [selectedRepo, setSelectedRepo] = useState("1");
  return (
    <>
      {!selectedRepo ? (
        <section className={styles.container + " " + styles.emptySelRepo}>
          <h5 className={styles.titleForEmpty}>Выберите репозитарий</h5>
        </section>
      ) : (
        <section className={styles.container}></section>
      )}
    </>
  );
};

export default RepoInfo;
