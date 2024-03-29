import React, { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
const CreateNote = (props) => {

    const [note, setNote] = useState({
        title:"",
        content:"",
    });
    const InputEvent=(event)=>{
      
        const {name,value} = event.target;
        setNote((prevData) =>{
            return{
                ...prevData,
               [name]:value,   
            }
        })

    };
    const addEvent=() =>{
        props.passNote(note);
    };

    return (
        <>
            <div className="main_note">
                <form>
                    <input name="title" type="text" value={note.note} onChange={InputEvent} placeholder="Title" autofill="off" />
                    <textarea name="content"rows="" column="" value={note.content} onChange={InputEvent} placeholder="write your note" />
                    <Button className="B"  onClick={addEvent} variant="contained" endIcon={<SendIcon className="S"/>}>
        Send
      </Button>
                </form>

            </div>
        </>
    );
};

export default CreateNote;
