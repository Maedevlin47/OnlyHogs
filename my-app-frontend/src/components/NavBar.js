
import OnlyHogsLogo from "./OnlyHogsLogo.png";
import {NavLink} from 'react-router-dom'; 

function NavBar({addHog}) {

    return(
        <div>
            <img className="Logo" src={OnlyHogsLogo} alt="OnlyHogs Logo"/>
            <NavLink className="button" role="button" exact to ="/">HOME</NavLink>
            <NavLink className="button" role="button" exact to ="/post">POST A HOG</NavLink>
        </div>
    )
}

export default NavBar;
