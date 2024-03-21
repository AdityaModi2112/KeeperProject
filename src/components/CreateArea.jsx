import React, { useState } from "react";

function CreateArea(props) {
  const[note,setNote]=useState({
    title:"",
    content:""
  })
  function handleChange(event){
    const{name,value}=event.target;
    setNote(preValue=>{
      return{
        ...preValue,
        [name]:value
      };
    });
  }
  function submitNode(event){
    props.onAdd(note);
    setNote({
      title:"",
      content:""
    })
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />
        <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
        <button onClick={submitNode}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;










/*
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  const [isChecked,setCheck]=useState(false);
  function expand(){
    setCheck(true)
  }
  return (
    <div>
      <form className="create-note">
        {isChecked && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isChecked ? 3:1}
        />
        <Zoom in={isChecked}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
*/
/*keeper part-3
function CreateArea(props) {
  const [note,setNode]=useState({
    title:"",
    content:""
  })
  function handleChange(event){
    const {name,value}=event.target;
    setNode(preValue=>{
        return{
            ...preValue,
            [name]:value
        }
    })
  }
  function onAdd(event){
    props.onAdd(note);
    setNode({
      title:"",
      content:""
    })
    event.preventDefault();
  }
    return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={note.title}placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={note.content}placeholder="Take a note..." rows="3" />
        <Fab onClick={onAdd}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
*/