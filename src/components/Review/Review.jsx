//importing stuff
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function Review(){
    //declaring dispatch 
    const dispatch = useDispatch();
    //getting access to reducer in the store
    const userRating = useSelector(store => store.userRating);

    //validating button click
    const handleClick = (event) => {
        event.preventDefault();
        swal({
            title: "Are You Sure?",
            text: "Submitting your feedback cannot be undone!",
            icon: "warning",
            dangerMode: true,
            buttons: ["Cancel", "Yes, I am sure."]
        })
        //sending the data with POST 
        .then( (willSubmit) => {
            if(willSubmit) {
                axios({
                    method: 'POST',
                    url: '/feedback',
                    data: {
                        feeling: userRating[0],
                        understanding: userRating[1],
                        support: userRating[2],
                        comments: userRating[3]
                    }
                })
                .then(response => {
                    //puts you back on home page
                    history.push('/');
                    //clear
                    clearFeedback();
                })
                .catch((err) => {
                    console.log('POST error in Review.jsx', err);
                })
                swal("Thank you for submitting your feedback!", 
                {icon: "success",
            })
            }
            else{
                swal("Your feedback is safe!");
            }
        })
    }

    const clearFeedback = () => {
        dispatch({
            type: 'CLEAR_FEEDBACK'
        });
    }

    return(
        <>
        <h3>Your Feedback:</h3>
        <div>
            <table>
                <tr>
                    <td>Feeling</td>
                    <td>{userRating[0]}</td>
                </tr>
                <tr>
                    <td>Understanding</td>
                    <td>{userRating[1]}</td>
                </tr>
                <tr>
                    <td>Support</td>
                    <td>{userRating[2]}</td>
                </tr>
                <tr>
                    <td>Comments</td>
                    <td>{userRating[3]}</td>
                </tr>
            </table>
            </div>

            <button onClick={handleClick}>Submit</button>
        </>
    )
}

export default Review;