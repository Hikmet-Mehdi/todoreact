import { useState } from "react";
import PostList from "./components/PostList";
import Button from "./components/ui/button/Button";
import Navbar from "./components/Navbar";
import './App.css'

function App() {

  const filterPosts = (value) => {
    setFilterPost(value)
  }

  const addNewPost = (e) => {
    e.preventDefault()

    if (post.trim().length === 0){
      alert("введите задачу")
      setPost('')
      return
    }

    const newPost = {
      id: Date.now(),
      date: new Date().toLocaleDateString("en-GB"),
      post,
      isDelete: false,
      isCompleted: false,
      isCurrent: true
    }
    setPosts([...posts, newPost])
    console.log(posts)
    setPost('')
  }


  const removePost = (post, value) => {
    const index = posts.find(p => p.id == post.id)
    index[value] = !index[value];
    index['isCurrent'] = !index['isCurrent'];
    console.log(posts)
  }

  const [filterPost, setFilterPost] = useState();
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState('');
  return (
    <div>
      <Navbar filterPosts={filterPosts}/>
      <form>
        <input value={post} onChange={e => setPost(e.target.value)} type="text" placeholder="текст" required/>
        <button onClick={addNewPost}>отправить</button>
      </form>
      <PostList value={filterPost || 'isCurrent'} remove={removePost} posts={posts}/>
    </div>
  );
}

export default App;
