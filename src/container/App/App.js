import React from 'react';
import './App.module.scss';
import CardList from '../../components/CardList/CardList';
import Styles from "./App.module.scss";
import Card from "../../components/Cards/Card";

function App() {
  return (
   <main className={Styles.App}>
     <header>
       <h1> Weather update</h1>
      </header> 
     <CardList />
     {/* <Card /> */}

   </main>
  );
}

export default App;
