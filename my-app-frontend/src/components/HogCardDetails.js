import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";


function HogCardDetails(){

    const [hogCard, setHogCard] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/posts/${id}`)
        .then(response => response.json())
        .then(data => setHogCard(data))
    },[id])

    const {username, image, caption}= hogCard;

    return (
        <div>
        <div classname='Post'>
            <h3>{username}</h3>
            <img src={image} alt={username} />
            <h5>{caption}</h5>
        </div>
            <div>
                
            </div>
        </div>
    )
}
export default HogCardDetails