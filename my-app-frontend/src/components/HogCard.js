import{Link} from "react-router-dom";


function HogCard({hog}){

    return (
        
        <div className="hog_card">
            <h4>{hog.username}</h4>
            <Link to = {`hog/${hog.id}`}>
                <img src={hog.image} alt={hog.username} className = "hog_pic" />
            </Link>
            <h5>{hog.caption}</h5>

        </div>
    )
}

export default HogCard; 