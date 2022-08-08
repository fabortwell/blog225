import { useEffect, useState } from "react";
import "./post.css"




export default function Post() {
  const [rate, setRate] = useState(0);

  const [posts, setPosts] = useState([]);
 useEffect(() => {
  fetch("/posts")
  .then((r) => r.json())
  .then((data) => setPosts(data));
 }, [])

 console.log(posts)
  return (
    <div className="post">
   


    {posts.map((post) => {
      return (
                <div className="blog-card spring-fever">
                <div className="title-content">
                  <h3><a href="/">{post.category}</a></h3>
                  <div className="intro"> <a href="/">{post.title}</a> </div>
                </div>
                <div className="card-info">
                  {post.content}
                  <a href="/">Read Article<span class="licon icon-arr icon-black"></span></a>
                </div>
                <div className="utility-info">
                  <ul className="utility-list">
                    <li><span className="licon icon-dat"></span>{post.updated_at}</li>
                    <li><span className="licon icon-tag"></span><a href="/">{post.category}</a></li>
                  </ul>
                </div>
                <div class="gradient-overlay"></div>
                <div class="color-overlay"></div>
              </div>   
      )
    })}

</div>
  )
}






//  return (
//       {posts.map((post) => {
//       <div className="blog-card spring-fever">
//       <div className="title-content">
//         <h3><a href="/">{Post.title}</a></h3>
//         <div className="intro"> <a href="/">Inspiration</a> </div>
//       </div>
//       <div className="card-info">
//         {Post.content}
//         <a href="/">Read Article<span class="licon icon-arr icon-black"></span></a>
//       </div>
//       <div className="utility-info">
//         <ul className="utility-list">
//           <li><span className="licon icon-like"></span><a href="/">2</a></li>
//           <li><span className="licon icon-com"></span><a href="/">12</a></li>
//           <li><span className="licon icon-dat"></span>{Post.updated_at}</li>
//           <li><span className="licon icon-tag"></span><a href="/">Photos</a>, <a href="/">Nice</a></li>
//         </ul>
//       </div>
//       <div class="gradient-overlay"></div>
//       <div class="color-overlay"></div>
//     </div>
//   )
// }
// export default Post