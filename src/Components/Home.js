
import { Button, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useHistory } from 'react-router';

function Home() {
    const history=useHistory()
    let clickHandler = () => {
        history.push('/slots')
    }
    return (<div className="App">
        <Typography variant="h2" className="text-center">
            Ticket Booking System
        </Typography>
        <div className="center_horizontal_vertical">
            <Button
                onClick={clickHandler}
                variant="contained">
                Book Appointments <ArrowForwardIcon></ArrowForwardIcon>
            </Button>
        </div>
    </div>);
}

export default Home;