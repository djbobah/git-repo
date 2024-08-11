import { useState } from "react";
import s from "./App.module.scss";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import RepoInfo from "./components/repoInfo/repoInfo";
import Result from "./components/result/result";
import EmptySearch from "./components/emptySearch/emptySearch";

function App() {
  const [result, setResult] = useState("1");
  const [searchString, setSearchString] = useState("");
  return (
    <>
      <Header searchString={searchString} setSearchString={setSearchString} />
      <main className={s.main}>
        {!result ? (
          <EmptySearch />
        ) : (
          <div className={s.content}>
            <Result />
            <RepoInfo />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
