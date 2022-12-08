import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import OinkButton from "./OinkButton.png";


function HogCardDetails() {

    
    const [hogCard, setHogCard] = useState([]);
    const {username, image, caption, likes}= hogCard;
    const [oinkCount, setOinkCount] = useState(likes);
    

    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/posts/${id}`)
        .then(response => response.json())
        .then(data => setHogCard(data))
    },[id])


    const handleOinks = () => {

        const updatedOinkCount = oinkCount + 1;

        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",            
            },
            body: JSON.stringify({likes: updatedOinkCount})
        };

        fetch(`http://localhost:9292/posts/${id}`, configObj)
        .then( r => r.json())
        .then( () => {
            setOinkCount(oinkCount + 1);
        });
    }

    return (
        <div>
        <div classname='Post'>
            <h3>{username}</h3>
            <button onClick={handleOinks}><img className="Oink" src={OinkButton} alt="OinkButton"/></button>
            <h6>{hogCard.likes} OINKS</h6>
            <img src={image} alt={username} />
            <h5>{caption}</h5>
        </div>
            <div>
                
            </div>
        </div>
    )
}
export default HogCardDetails