import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const TourCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3} >
                <img src='https://cdn.pixabay.com/photo/2016/11/19/18/57/godafoss-1840758_960_720.jpg' alt='' className='img' />
            </Paper>
        </Grid>

    )
}


export default TourCard;