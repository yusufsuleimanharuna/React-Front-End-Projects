import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const TourCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3} >
                <img src='https://cdn.pixabay.com/photo/2013/11/26/11/27/niagara-falls-218591_960_720.jpg' alt='' />
            </Paper>
        </Grid>

    )
}


export default TourCard;