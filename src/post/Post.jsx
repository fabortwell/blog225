import "./post.css"

export default function Post() {
  return (
    <div className="post">
    <img 
    className="postImg"
    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?cs=srgb&dl=pexels-syed-qaarif-andrabi-6685428.jpg&fm=jpg" alt=""/>

    <div className="postInfo">
        <div className="postCats">
         <span className="postCat">Technology</span>
         <span className="postCat">Sports</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, laborum. 
        Accusantium quae accusamus ipsa cupiditate. Quia, dignissimos. 
        Maiores minima quo magni tenetur. Accusamus corporis cum enim error at? Rerum, amet?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, laborum. 
        Accusantium quae accusamus ipsa cupiditate. Quia, dignissimos. 
        Maiores minima quo magni tenetur. Accusamus corporis cum enim error at? Rerum, amet?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, laborum. 
        Accusantium quae accusamus ipsa cupiditate. Quia, dignissimos. 
        Maiores minima quo magni tenetur. Accusamus corporis cum enim error at? Rerum, amet?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, laborum. 
        Accusantium quae accusamus ipsa cupiditate. Quia, dignissimos. 
        Maiores minima quo magni tenetur. Accusamus corporis cum enim error at? Rerum, amet?
    </p>
    </div>
  )
}
