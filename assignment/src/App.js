import './App.css';
import React , {useState, useEffect} from "react";
import axios from "axios";
import Posts from "./Posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data)
      setLoading(false);
    };
    fetchData();
  },[]);

  console.log(posts)
 
  return (
    <div className="App">
      <Posts posts={posts} loading={loading}></Posts>
    </div>
  );
}

export default App;
