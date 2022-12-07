

function HogCard({hog}){

    return (
        <div className="hog-card">
            <h4>{'Seductive Swine'}</h4>
            <img src={hog.imageURL} alt={hog.username} />
            <h5>{hog.caption}</h5>

        </div>
    )
}

export default HogCard; 