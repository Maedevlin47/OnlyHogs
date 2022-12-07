

function HogCard({hog}){

    return (
        <div className="hog-card">
            <h4>{hog.username}</h4>
            <img src={hog.image} alt={hog.username} />
            <h5>{hog.caption}</h5>

        </div>
    )
}

export default HogCard; 