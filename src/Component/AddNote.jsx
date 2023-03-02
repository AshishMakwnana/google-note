
import Button from '@material-ui/core/Button';
import React from "react";
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';


const AddNote =({data , id, remove})=>{

    const RemoveItem = () =>{
        remove(id);
    }
    return(
        <>
            <div className="NewCom">
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                <Button onClick={RemoveItem} class="btn"><DeleteRoundedIcon/></Button>
            </div>
        </>
    );
};

export default AddNote;