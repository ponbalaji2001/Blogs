import './BlogList.css'
import { Link } from 'react-router-dom'
const BlogList=(props)=>{
    
    return(
        <div> 
        <Link to="/manageblog/add/new">
            <button type='button' className='add-btn'>+ Add</button>
        </Link>
        <div className="blog-container">
          {props.blogData.map(list=>(
            <Link key={list.id} to={`/blog/${list.id}`} className="blog-link">
            <div className="blog-content">
                <img src={list.imgurl} alt="blogImage"/>
                <h5 className='blog-header'>{list.title}</h5>
                <p className='blog-description'>{list.description}</p>
                <div className='blog-author'>
                    <p className="author-name">{list.author.name}</p>
                    <p className="blog-date">{list.author.date}</p>
                </div>
            </div>
            </Link>
         ))}
        </div>
    </div>
    )
}
export default BlogList
