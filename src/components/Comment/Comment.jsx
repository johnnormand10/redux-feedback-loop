//importing stuff
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Comment(){
    //declaring dispatch
    const dispatch = useDispatch();

    //declaring state variables
    const [comment, setComment] = useState(0);

    const handleChange = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comment
        })
        //resetting the value of comment
        setComment(null);
    }

    return(
        <div>
            <h3>Would you like to leave any comments?</h3>

            <input 
                type='text'
                value={comment}
                placeholder='Comment Here'
                onChange={(event) => setComment(event.target.value)}
            />

            <button onClick={handleChange}>Submit</button>
            <Link to='/questions/review'><button>Go to Review</button></Link>
            <Link to='/questions/support'><button>Go back to Support</button></Link>
        </div>
    )
}

export default Comment;