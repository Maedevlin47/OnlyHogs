import React, {useState} from 'react';
function HogPost ({addHog}) {
    const [username, setUsername] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [caption, setCaption] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='new-hog-form'>
            <h2>Post a Pig</h2>
            <form onSubmit = {handleSubmit}>
            <input type="text" name="username" placeholder="Username" value = {username} onChange ={(e) => setUsername(e.target.value)}/>
            <input type="text" name="imageURL" placeholder="Image URL" value = {imageURL} onChange ={(e) => setImageURL(e.target.value)}/>
            <input type="text" name="caption" placeholder="Caption" value = {caption} onChange ={(e) => setCaption(e.target.value)}/>
            <button type="submit">Add Pig</button>
            </form>
        </div>
        
    ) 
}       

export default HogPost;
