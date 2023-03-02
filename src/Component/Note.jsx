import React, { useState } from "react";
import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/Add';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const Note = (props) => {
    const [Note, setNote] = useState({
        title: "",
        content: "",
    });
    const [value, setValue] = useState(false);

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setNote((oldValue) => {
            return {
                ...oldValue,
                [name]: value,
            };
        });
    }

    const btnEvent = () => {
        props.AddItem(Note);
        setNote((oldValue) => {
            return {
                title: "",
                content: ""
            }
        });
    }
    const addEvent =()=>{
        setValue(true);
    }
    const SetNormal = ()=>{
        setValue(false);
    }

    return (
        <div className="note__container" style={{height:value?"200px":"100px"}} onDoubleClick={SetNormal}>
            <form >
                {value ? <input type="text" name="title" placeholder="Title" autoComplete="of" value={Note.title} onChange={InputEvent} /> : ""}

                <textarea name="content" rows="" cols="40" placeholder="Write a note..." value={Note.content} onClick={addEvent} onChange={InputEvent}></textarea>
                {value ? <Button onClick={btnEvent} className="form_btn"><AddRoundedIcon /></Button> : ""}
            </form>
        </div>
    )
}

export default Note;