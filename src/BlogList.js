import './Blog.css'
import { Link } from 'react-router-dom'
const BlogList=(props)=>{
    
    return(
        <div> 
        <Link to='/addBlog'>
            <button type='button' className='button'>+Add New Blog</button>
        </Link>
        <div className="blog-container">
          {props.blogData.map(list=>(
            <Link to={`/blogSingle/${list.id}`}>
            <div className="blog-thumbnail col-4">
                <div className="img-wrapper">
                    <img src={list.imgurl}/>
                </div>
                <div className='blog content'>
                    <div className='blog-header'>
                      {list.title}
                    </div>
                    <div className='blog-description'>
                      {list.description}
                    </div>
                </div>
                <div className='blog-author'>
                    <div className="author-name">
                        {list.author.name}
                    </div>
                    <div className="blog-date">
                        {list.author.date}
                    </div>
                </div>
            </div>
            </Link>
         ))}
        </div>
        </div>
    )
}
export default BlogList
