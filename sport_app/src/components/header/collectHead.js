import SearchBar from './searchBar';
import CitySelector from './citySelector';
import "./collecHead.css";
export const CollectHead =(props)=>{
 return (<div className="container">
        <div className="box">
        <p className="header title">Sporting Adda</p>
        <p className='header'><SearchBar/></p>
        <p className="header city"><CitySelector/></p>
        <p className='header butt'>
        <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Login In</button>
        </p>
        </div>
        </div>
 );
}

//export default CollectHead;