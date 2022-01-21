//importing stuff
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Support(){
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
                type: 'ADD_SUPPORT',
                payload: value
            })
            //setting value back to 0
            setValue(0);
        }
    }

    return(
        <div>
            <h3>How well are you being supported?</h3>

            <input 
                type='number'
                value={value}
                placeholder='1-5'
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />

            <button onClick={handleChange}>Submit</button>
            <Link to='/questions/comments'><button>Go to Comments</button></Link>
            <Link to='/questions/understanding'><button>Go back to Understanding</button></Link>
        </div>
    )
}