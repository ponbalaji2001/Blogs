import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import './manageBlog.css'

const ManageBlog=(props)=>{
    const [title, setTitle]= useState('');
    const [description, setDescription]= useState('');
    const [author, setAuthor]= useState('');
    const [imgurl, setImgurl]= useState('');
    const history = useHistory();
    const params=useParams();

    function titleChangeEvent(event){
        setTitle(event.target.value)
    }
    function descriptionChangeEvent(event){
        setDescription(event.target.value)
    }
    function authorChangeEvent(event){
        setAuthor(event.target.value)
    }
    function imgurlChangeEvent(event){
        setImgurl(event.target.value)
    }

    useEffect(() => {
        if (params.option === "update" && props.blogData && params.blogId) {

          const blogDetail = props.blogData.find(blog => blog.id === params.blogId);

          if (blogDetail) {
            setTitle(blogDetail.title);
            setDescription(blogDetail.description);
            setAuthor(blogDetail.author.name); 
            setImgurl(blogDetail.imgurl);
          }
        }
      }, [params.option, props.blogData, params.blogId]);

    function onHandleSubmit(event){
        event.preventDefault();

        const blogDataPayload={
            "id": params.option === 'add' ? (props.blogData.length + 1)+"" : params.blogId,
            "imgurl": imgurl,
            "title": title,
            "description": description,
            "author": {
                "authorid": Math.random(),
                "name":author,
                "date": new Date().toLocaleDateString('en-US', {
                    month: '2-digit',
                    day: '2-digit',
                    year: 'numeric'
                  })
            }
        }

        if (params.option === 'add') {
            props.onAddBlog(blogDataPayload);
        } else if (params.option === 'update') {
            props.onEditBlog(blogDataPayload);
        }
        history.push('/blogs');
    }

    return(
        <div className="add-container">
            <h2 className="form-title">{params.option === 'add' ? "Add Blog" : "Update Blog"}</h2>
            <form onSubmit={onHandleSubmit}>
              <label>Title</label>
              <input id="title" type="text" className="form-control" value={title} onChange={titleChangeEvent}/>
              <label>Author</label>
              <input id="author" type="text" className="form-control" value={author} onChange={authorChangeEvent}/>
              <label>Image Link</label>
              <input id="imgurl" type="text" className="form-control" value={imgurl} onChange={imgurlChangeEvent}/>
              <label>Content</label>
              <textarea id="description" type="text" className="textArea" value={description} onChange={descriptionChangeEvent}/>
              <button type='submit' className="button">Submit</button>
            </form>
        </div>
    )
}
export default ManageBlog