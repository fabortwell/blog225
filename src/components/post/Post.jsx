import { useEffect, useState } from "react";
import "./post.css"


export default function Post() {
  
  const [posts, setPosts] = useState([]);
  const [isfetching, setisFetching] = useState(false)
  const getPost = async()=>{
    const response = await fetch("/posts")
    const posts = await response.json()
    setPosts(posts)
  }
 useEffect(() => {
 getPost()
 setisFetching(false)
 }, [isfetching])

//  console.log(posts)
  return (
    <div className="post">
   
    {posts.map((post) => (

                <div className="blog-card spring-fever" key={post.id}>
                <div className="title-content">
                  <h3><a href="/homme">{post.title}</a></h3>
                  <div className="intro"> <a href="/home">{post.category}</a> </div>
                </div>
                <div className="card-info">
                  {post.content}
                  <a href="/home">Read Article<span className="licon icon-arr icon-black"></span></a>
                </div>
                <div className="utility-info">
                  <ul className="utility-list">
                  <li><span className="licon icon-like"></span><a href="/home">2</a></li>
                  <li><span className="licon icon-com"></span><a href="/home">12</a></li>
                  <li><span className="licon icon-dat"></span>03 jun 2017</li>
                  <li><span className="licon icon-tag"></span><a href="/home">{post.author}</a></li>
                  </ul>
                </div>
                <div className="gradient-overlay"></div>
                <div className="color-overlay"></div>
              </div>   
      )
    )}

</div>
  )
}


