//importing stuff
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feelings(){
    const dispatch = useDispatch();
    const history = useHistory();

    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        event.preventDefault();
        if(value === 0){
            return
        }
        else{
            dispatch({
                type: 'ADD_FEELING',
                payload: value
            })
        }
        //resetting value back to 0
        setValue(0);
    }

    return(
        <div>
            <h3>How are you feeling?</h3>

            <input 
                type='number'
                value={value}
                placeholder='1-5'
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />

            <button onClick={handleChange}>Submit</button>
        </div>
    )
}

export default Feelings;