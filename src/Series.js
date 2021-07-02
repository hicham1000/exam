import './series.css'; 
import Ajoutedefavoris from './Ajoutedefavoris';
// import SearchBox from './SearchBox';



export default function Series(props) {
  const { series } = props;
  // import SeriesList2 from 'SeriesList2';

  // const tags = series.tags.map(tag => <span key={tag} className="badge">{tag}</span>);

  return (
    
<div className="container">

    <h1 className=" justify-content-center" role="presentation">
      {series.title}<i className=" " /></h1>
      <div className="justify-content-center">  <Ajoutedefavoris series = {series} favorit={series.user.favorited} />
    
      </div>
      
        <div class="clearfix"></div>
        <div className="clearbetweensections">
        </div>

         <div className="justify-content-center"><p>{series.description}</p></div>
          
          {/* <div class="clearfix">...</div> */}
            <div className="clearbetweensections">
          </div>
          <div className="" role="presentation">

          <div>
            <img className="g-5 img-fluid " src={series.images.poster} alt=""></img>
            {/* <img src={series.images.show} alt=""></img> */}
            <img className="img-fluid"src={series.images.banner} alt=""></img>
           
          </div>
          </div>
          </div> 
   
  )
}

