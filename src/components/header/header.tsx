import { Button, TextField } from "@mui/material";
import styles from "./header.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchRepositories } from "../store/searchSlice";

interface HeaderProps {
  searchString: string;
  setSearchString: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchString, setSearchString }) => {
  const dispatch = useAppDispatch();
  const { repositories, status, error } = useAppSelector(
    (state) => state.search
  );

  const handleSearch = () => {
    if (searchString) {
      dispatch(fetchRepositories(searchString));
    }
  };
  return (
    <header className={styles.header}>
      <TextField
        id="outlined-basic"
        placeholder="Введите поисковый запрос"
        variant="outlined"
        className={styles.input}
        InputProps={{
          sx: {
            height: "42px", // Установка высоты поля ввода
            // padding: "0 14px", // Отступы для правильного позиционирования текста
            // boxSizing: "border-box", // Включаем box-sizing
            alignItems: "center", // Выравнивание текста по вертикали
          },
        }}
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <Button
        variant="contained"
        className={styles.button}
        onClick={handleSearch}
      >
        Искать
      </Button>
    </header>
  );
};

export default Header;
