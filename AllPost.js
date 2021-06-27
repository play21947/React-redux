import App from './App.css'

import {connect} from 'react-redux'
import Post from './Post'

const AllPost=(props)=>{
    return(
        <div className="content">
            <h1>All Posts</h1>
            {props.posts.map((post)=>{
                return <Post key={post.id} post={post}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        posts: state
    }
}

export default connect(mapStateToProps)(AllPost);