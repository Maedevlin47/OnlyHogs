
import Pigstagram from "./Pigstagram.png";
import {NavLink} from 'react-router-dom'; 

function NavBar() {

    return(
        <div className="nav_bar">  
            <div>
                <img src={Pigstagram} alt="Pigstagram Logo" className = "logo" />
            </div>
            <div className="nav_item">
                <NavLink className="button" role="button" exact to ="/">HOME</NavLink>
                <NavLink className="button" role="button" exact to ="/post">POST A PIG</NavLink>
            </div>
        </div>
    )
}

export default NavBar;
