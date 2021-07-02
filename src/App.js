// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import  React,{useState} from 'react';


import SeriesList from './SeriesList';
import series from './shows.json';
// import Ajoutedefavoris from './Ajoutedefavoris';
import SearchBox from './SearchBox';
function App() {
//   const [series,setSeries]= useState([])
const [searchWord,setsearchWord]=useState("");
console.log(searchWord);
  return (
  <div>
    <div>
        <SearchBox onChange={
  (value) => {
  setsearchWord(value)
  }
  
        }/>
    </div>
    <div className='container-fluid'> 
      <SeriesList series ={series}/>
    </div>

</div>
  );
};

export default App;

