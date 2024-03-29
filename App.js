import React, { useState } from "react";
import './App.css';
import Header from "./header";
import Footer from "./footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
const App = () => {
  const[addItem, setAddItem] = useState([]);
   const addNote=(note)=>{
   
       setAddItem((prevData)=>{
        return[...prevData, note];
       });
   };
   const onDelete=(id)=>{
    setAddItem((olddata)=>
    olddata.filter((currtdata, index)=>{
      return index !==id;
    })
    )

   };
  return (
    <>
                 <Header/>
                 <Footer/>
                <CreateNote 
                passNote={addNote}/>
               {  addItem.map((val,index)=>{
                  return( <Note
                  key={index}
                  id={index}
                  title={val.title}
                  content={val.content}
                  deleteItem={onDelete}
                 />
               );
})}
                 <Note/>   
    </>

  );
};
   

export default App;
