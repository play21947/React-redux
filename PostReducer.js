const PostReducer =(state = [], action)=>{
    if(action.type === "ADD_POST"){
        return state.concat([action.data]) //if action.type === "ADD_POST" already This line gonna return new state that is get data from action.data
    }
    else if(action.type === 'DELETE_POST'){
        return state.filter((post) => post.id !== action.id);
    }
    else{
        return state
    }
}

export default PostReducer;