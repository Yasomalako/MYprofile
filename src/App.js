import './App.css';
import { useState } from 'react';
import Router from './componentes/pages/Router.component';
export const pages = ["home","about","contactus"]
function App() {
  const[page,setPage]=useState("home")
  return (
    <div>
     { pages.map(pageName=>
        <button onClick={()=>setPage(pageName)}>{pageName}</button>
      )
      }
     <Router page={page}/>
    </div>
  );
}

export default App;
