//importing stuff
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
//material ui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//css
import './Review.css';

function Review(){
    //declaring dispatch 
    const dispatch = useDispatch();
    const history = useHistory();
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
                    //clear
                    clearFeedback();
                    //puts you back on home page
                    history.push('/questions/feelings');
                    
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
        <div className="reviewTable">
            <Table container={Paper}>
                <TableBody>
                    <TableRow>
                        <TableCell variant="head">Feeling</TableCell>
                        <TableCell>{userRating[0]}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head">Understanding</TableCell>
                        <TableCell>{userRating[1]}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell variant="head">Support</TableCell>
                        <TableCell>{userRating[2]}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Comments</TableCell>
                        <TableCell>{userRating[3]}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </div>

            <div className='reviewBtn'>
            <Button variant="outlined" onClick={handleClick}>Submit</Button>
            </div>
        </>
    )
}

export default Review;