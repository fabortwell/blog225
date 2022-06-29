import "./write.css"
import {Link} from "react-router-dom";
import React, { useState } from "react";


function Write({currentUser, onAddPost}) {
  const [body, setBody] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: currentUser.username,
        body: body,
      }),
    })
      .then((r) => r.json())
      .then((newPost) => {
        onAddPost(newPost);
        setBody("");
      });
  }



  return (
    <div className="write">
        <img 
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="" 
        />
       <form className="writeForm" onSubmit={handleSubmit}>
           <div className="writeFormGroup">
               <label htmlFor="fileInput">
               <i className="writeIcon fa-solid fa-file-circle-plus"></i>
               </label>
                <input type="file"  value={body}
                onChange={(e) => setBody(e.target.value)} name="body"  autoComplete="off" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
           </div>
           <div className="writeFormGroup">
               <textarea 
               placeholder="Tell your story..." 
               type="text" className="writeInput writeText">
               </textarea>
           </div>
           <button className="writeSubmit">Publish</button>
           <Link className="link"  to="/write">Write</Link>

       </form>
    </div>
  )
}

export default Write