import React, {useState} from 'react';

function HogPost ({addHog}) {

    const [username, setUsername] = useState('')
    const [image, setImage] = useState('')
    const [caption, setCaption] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        let newHog = {
            username: username,
            image: image,
            caption: caption
        }
        fetch("http://localhost:9292/posts", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newHog)
        })
        .then(r => r.json())
        .then( () => addHog(newHog))
    }
    return (
        <div className='new-hog-form'>
            <h2>NEW PIG</h2>
            <form onSubmit = {handleSubmit}>
                <input type="text" name="username" placeholder="Username" value = {username} onChange ={(e) => setUsername(e.target.value)}/>
                <input type="text" name="image" placeholder="Image" value = {image} onChange ={(e) => setImage(e.target.value)}/>
                <input type="text" name="caption" placeholder="Caption" value = {caption} onChange ={(e) => setCaption(e.target.value)}/>
                <button type="submit" value="Add Pig" className="detail_button">POST PIG </button>
            </form>
        </div>
        
    ) 
}       

export default HogPost;
