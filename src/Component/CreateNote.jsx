import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNote from "./AddNote";

const CreateNote = () => {
    const [note, SetNote] = useState([]);
    const NewNote = (Note) => {
        SetNote((oldValue) => {
            return [...oldValue, Note];
        });
    };
    const ReomveNote=(id)=>{
        SetNote((oldValue)=>{
            return oldValue.filter((value,index)=>{
                return index !== id;
            })
        })
    }
    return (
        <>
            <Header />
            <Note AddItem={NewNote} />
            {note.map((value, index) => {
                return <AddNote id={index} key={index} data={value} remove ={ReomveNote} />
            })}
           
            <Footer />
        </>
    );
};

export default CreateNote;