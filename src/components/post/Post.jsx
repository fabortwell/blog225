import { useEffect, useState } from "react";
import "./post.css"



export default function Post() {

 
  const [posts, setPosts] = useState([]);
 useEffect(() => {
  fetch("http://localhost:9292/posts")
  .then((r) => r.json())
  .then((data) => setPosts(data));
 }, [])

 console.log(posts)
  return (
    <div className="post">
    <img 
    className="postImg"
    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?cs=srgb&dl=pexels-syed-qaarif-andrabi-6685428.jpg&fm=jpg" alt=""/>


    {posts.map((post) => {
      return (
        <div className="postInfo">
          <div className="postCats">
        <div className key={post.id} >
          <p className="postTitle">{post.title}</p>
          <p className="postCat">{post.category}</p>
          <p className="postDesc">{post.content}</p>
          <p className="postDate">{post.date}</p>
          <img 
    className="postImg"
    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?cs=srgb&dl=pexels-syed-qaarif-andrabi-6685428.jpg&fm=jpg" alt=""/>
         
        </div>
        </div>
        </div>
        
      )
    })}

</div>
  )
}
