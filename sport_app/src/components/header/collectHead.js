
import SearchBar from './searchBar';
import CitySelector from './citySelector';
import "./collecHead.css";
const CollectHead =()=>{
 return (<div className="container">
        <div className="box">
        <p className="header title">Sporting Adda</p>
        <p className='header'><SearchBar/></p>
        <p className="header city"><CitySelector/></p>
        </div>
        </div>
 );
}

export default CollectHead;