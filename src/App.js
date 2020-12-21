import { useState } from "react";
import { Header } from "./components/header/Header";
import { ListGrid } from './components/list/ListGrid';
import './styles/index.css';

function App() {

  const [classListGrid, setClassListGrid] = useState('columnList');

  const [orderBy, setOrderBy] = useState({
    date: true,
    alphabet: false
  });

  const [inputSearch, setInputSearch] = useState('');

  const handleOrderByDate = () => {
    setOrderBy({
      date: true,
      alphabet: false
    });
  }

  const handleOrderByAlphabet = () => {
    setOrderBy({
      date: false,
      alphabet: true
    });
  }

  const handleList = () => {
    setClassListGrid('columnList')
  };

  const handleGrid = () => {
    setClassListGrid('columnGrid');
  }

  return (
    <div className="container mt-5">
      <Header handleList={ handleList } handleGrid={ handleGrid } 
        handleOrderByDate={ handleOrderByDate } handleOrderByAlphabet={ handleOrderByAlphabet } setInputSearch={ setInputSearch }/>
      <ListGrid classListGrid={ classListGrid } orderBy={ orderBy } inputSearch={ inputSearch }/>
    </div>
  );
}

export default App;
