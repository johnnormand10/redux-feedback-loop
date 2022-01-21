//importing stuff
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Comment(){
    //declaring dispatch
    const dispatch = useDispatch();

    //declaring state variables
    const [comment, setComment] = useState(0);

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