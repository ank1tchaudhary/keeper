import { useState } from 'react';
import './CreateArea.css';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from '@mui/material';


export default function CreateArea(props){
  
  const [note,setNote] = useState({
    title : "",
    content : ""
  });

  const [isExpended, setExpended] = useState(false);

  function handleChange(event){
    const {name, value} = event.target;
      setNote(prevValue => {
        return {
          ...prevValue,
          [name] : value
        }
      })
  }


  function handleExpend(event){
    setExpended(true);


  }



    return (
        <div>
          <form className="create-note">
            {isExpended ? <input onChange={handleChange} value={note.title} name="title" placeholder="Title" /> : null}
            <textarea  onClick={handleExpend} onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows={isExpended ? 3 : 1} />
            <Zoom in={isExpended}>
            <Fab onClick={(e) => {
              props.onAddNote(note);
              setNote({
                title : "",
                content : ""
              });
              e.preventDefault();
              }}><AddIcon /></Fab>
              </Zoom>
          </form>
        </div>
      );
}