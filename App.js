import './App.css';

import PostForm from './PostForm';
import AllPost from './AllPost';

function App() {

  return (
    <div className="App">
      <div className="nav">
        <h1>Comment with your think!</h1>
      </div>
      <PostForm/>
      <AllPost/>
    </div>
  );
}

export default App;