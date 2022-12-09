import {React, useState} from 'react';

function HogComments({hogCard, addComment}){

    // const [hogComments, setHogComments] = useState("")
    const [username, setUsername] = useState("")
    const [comment, setComment] = useState("")

    function mapComments (array) {
        if (array) {
            return array.map((comment, id) => {


                return(
                    <div key={id}>
                        <ul>{comment.username}: {comment.comment}</ul>
                    </div>
            
                )
            })
        }
        else {
            return (<></>)
        }
    }

    const commentsArray= mapComments(hogCard.comments)


    const handleSubmit = (e) => {
        e.preventDefault()
        let newComment = {
            username: username,
            comment: comment,
            post_id: hogCard.id
            
        }
        //needs id added back here
        fetch(`http://localhost:9292/posts/${hogCard.id}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newComment)
        })
        .then(r => r.json())
        .then( () => addComment(newComment))
    }
    return (
        <div>
            <div>
                <h4>COMMENT SECTION</h4>
                {commentsArray}
            </div>
            <div className='comment-form'>
                <h2>Add Comment</h2>
                <form onSubmit = {handleSubmit}>
                <input type="text" name="username" placeholder="Username" value = {username} onChange ={(e) => setUsername(e.target.value)}/>
                <input type="text" name="comment" placeholder="Comment" value = {comment} onChange ={(e) => setComment(e.target.value)}/>
                <button type="submit" value="Add Comment" className="detail_button">Add Comment</button>
                </form>
            </div>
        </div>
        
    ) 

}
export default HogComments;



// const commentsArray= hogCard.comments.map((comment) => {

// return(
    // <div key={comment.id}>
    //     <ul>{comment.comments}</ul>
    // </div>

// )
// })

// return(
// <div>
//     <h4>COMMENT SECTION</h4>
//     {commentsArray}
// </div>



// )