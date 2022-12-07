import HogPost from "./HogPost";
import OnlyHogsLogo from "./OnlyHogsLogo.png";
function NavBar({addHog}) {

    return(
        <div>
            <img className="Logo" src={OnlyHogsLogo} alt="OnlyHogs Logo"/>
            {/* <HogPost addHog={addHog}/> */}
        </div>
    )
}

export default NavBar;
