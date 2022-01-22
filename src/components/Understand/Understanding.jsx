//importing stuff
import React from 'react';
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


function Understanding(){
    //declaring dispatch
    const dispatch = useDispatch();

    //declaring state variable
    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        event.preventDefault();
        if(value === 0){
            return 
        }
        else{
            dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: value
            })
        //resetting value to 0
        setValue(0);
        }
    }

    return(
        <div>
            <h3>How well do you understand the material?</h3>

            <input 
                type='number'
                value={value}
                placeholder='1-5'
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />

            <button onClick={handleChange}>Submit</button>
            <Link to='/questions/support'><button>Go to Support</button></Link>
            <Link to='/questions/feelings'><button>Go back to Feelings</button></Link>
        </div>
    )
}

export default Understanding;