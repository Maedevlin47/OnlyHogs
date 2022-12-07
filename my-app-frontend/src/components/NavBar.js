import HogPost from "./HogPost";
function NavBar({addHog}) {

    return(
        <div>
            <HogPost addHog={addHog}/>
        </div>
    )
}

export default NavBar;
