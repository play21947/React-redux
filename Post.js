import { connect } from "react-redux"

const Post=(props)=>{
    return(
        <div>
            <h2>{props.post.messages}</h2>
            <button onClick={()=>{
                props.dispatch({
                    type: "LIKE_POST",
                    id: props.post.id
                })
            }}>Like</button>
            <button onClick={()=>{
                props.dispatch({
                    type: "DELETE_POST",
                    id: props.post.id
                })
            }}>Delete</button>
        </div>
    )
}

export default connect()(Post);