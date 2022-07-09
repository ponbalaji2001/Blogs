import { useState } from "react"
import { Link } from "react-router-dom";
import './addBlog.css'
const AddBlog=(props)=>{
    const [title, setTitle]= useState('');
    const [description, setDescription]= useState('');
    const [author, setAuthor]= useState('');
    const [imgurl, setImgurl]= useState('');

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

    return(
        <div className="add-container">
            <h3>Add Blog</h3>
            <form onSubmit={props.onFormSubmitHandler}>
              <label>Title</label>
              <input id="title" type="text" className="form-control" onChange={titleChangeEvent}/>
              <label>description</label>
              <input id="description" type="text" className="form-control" onChange={descriptionChangeEvent}/>
              <label>imgurl</label>
              <input id="imgurl" type="text" className="form-control" onChange={imgurlChangeEvent}/>
              <label>author</label>
              <input id="author" type="text" className="form-control" onChange={authorChangeEvent}/>
              {/* <Link to='/BlogList'> */}
                  <button type='submit' className="button">Submit</button>
              {/* </Link> */}
            </form>
             
        </div>
    )
}
export default AddBlog