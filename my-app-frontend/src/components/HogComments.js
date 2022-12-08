import {React, useState} from 'react';

function HogComments({hogCard, addComment}){

    // const [hogComments, setHogComments] = useState("")
    const [username, setUsername] = useState("")
    const [comment, setComment] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        let newComment = {
            username: username,
            comment: comment
        }
        //needs id added back here
        fetch(`http://localhost:9292/posts/`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newComment)
        })
        .then(r => r.json())
        .then( () => addComment(newComment))
    }
    return (
        <div className='new-hog-form'>
            <h2>Post a Pig</h2>
            <form onSubmit = {handleSubmit}>
            <input type="text" name="username" placeholder="Username" value = {username} onChange ={(e) => setUsername(e.target.value)}/>
            <input type="text" name="comment" placeholder="comment" value = {comment} onChange ={(e) => setComment(e.target.value)}/>
            <button type="submit" value="Add Pig">Add Pig</button>
            </form>
        </div>
        
    ) 

}
export default HogComments;



// const commentsArray= hogCard.comments.map((comment) => {

// return(
//     <div key={comment.id}>
//         <ul>{comment.comments}</ul>
//     </div>

// )
// })

// return(
// <div>
//     <h4>COMMENT SECTION</h4>
//     {commentsArray}
// </div>



// )