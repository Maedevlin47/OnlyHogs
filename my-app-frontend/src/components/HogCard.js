import{Link} from "react-router-dom";


function HogCard({hog,setChange}){

function handleDelete () {
    
        fetch(`http://localhost:9292/posts/${hog.id}`, {
            method:"DELETE"}).then(()=>{setChange(prev=>!prev)})
        
    }



    return (
        
        <div className="hog_card">
            <h4>{hog.username}</h4>
            <Link to = {`hog/${hog.id}`}>
                <img style={{height:"50px", width:"50px"}} src={hog.image} alt={hog.username} className = "hog_pic" />
            </Link>
            <h5>{hog.caption}</h5>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    )
}

export default HogCard; 