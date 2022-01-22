import { Link } from 'react-router-dom';

function Home(){
    return(
        <>
            <h3>Click on the quote to submit feedback!</h3>

            <Link to='/feelings'>
                <img src='https://growrevenue.io/wp-content/uploads/2017/12/feedback.jpg' 
                     alt='Image of two people holding megaphones with Feedback on the top'></img>
            </Link>
        </>
    )
}

export default Home;