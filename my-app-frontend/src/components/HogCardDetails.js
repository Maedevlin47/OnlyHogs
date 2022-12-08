import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import OinkButton from "./OinkButton.png";


function HogCardDetails() {

    
    const [hogCard, setHogCard] = useState({
        username:"",
        image: "",
        likes:0,
        caption: ""
    });

    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/posts/${id}`)
        .then(response => response.json())
        .then(data => {
            setHogCard({...data})
        })
    },[id])


    const handleOinks = () => {

        const updatedOinkCount = hogCard.likes + 1;

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
        .then( (data) => {
            setHogCard({...data})
        });
    }

    return (
        <div>
        <div className='Post'>
            <h3>{hogCard.username}</h3>
            <button onClick={handleOinks}><img className="Oink" src={OinkButton} alt="OinkButton"/></button>
            <h6>{hogCard.likes} OINKS</h6>
            <img src={hogCard.image} alt={hogCard.username} />
            <h5>{hogCard.caption}</h5>
        </div>
            <div>
                <h3>Comments Section</h3>
                
            </div>
        </div>
    )
}
export default HogCardDetails
