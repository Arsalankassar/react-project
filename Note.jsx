import React from "react";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

const Note = (props)=>{

    const deleteNote=()=>{
        props.deleteItem(props.id);
    };
    return(
        <>
        <div className="note">
          <h1> {props.title}</h1>
          <br/>
          <p>{props.content}</p>
        
          < DeleteSweepIcon className="delete" onClick={deleteNote}/>
          
        </div>
        </>
    );
};
export default Note;