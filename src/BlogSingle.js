import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import './BlogSingle.css';

function BlogSingle(props){
   const params=useParams();
   const blogDetail=props.blogData.filter(id=>id.id===params.blogId);
   return (
    <div className="blog-single-container">
    <div className="blog-single-btns">
        <Link to={`/manageblog/update/${blogDetail[0].id}`}>
            <button type='submit' className="edit-btn">Edit</button>
        </Link>
        <button type='submit' className="delete-btn" onClick={()=>props.onDeleteBlog(blogDetail[0].id)}>Delete</button>
    </div>
    <div className="blog-single-content">
        <div className="single-blog-content-header">
            <h1 className="title">{blogDetail[0].title}</h1>
            <p className="author-info">{blogDetail[0].author.name},&nbsp;&nbsp;{blogDetail[0].author.date}</p>
        </div>
        <p className="description">{blogDetail[0].description}</p>
    </div>
    </div>
  )
}
export default BlogSingle