import { useState } from "react";
import { connect } from "react-redux";

const PostForm=(props)=>{

    let [message, setMessage] = useState('')

    let handleSubmit=()=>{
        const messages = message
        const data={
            id: new Date(),
            messages
        }
        props.dispatch({
            type: "ADD_POST",
            data
        })
        setMessage('')
    }

    return(
        <div className="content">
            <div className="box-comment">
                <h1>Comment here</h1>
                <input value={message} onChange={(e)=>{
                    setMessage(e.target.value)
                }} type="text" placeholder="Write what your thinking?" required/><br/>
                <button onClick={handleSubmit} type="submit">Comment</button>
            </div>
        </div>
    )
}

export default connect()(PostForm);