import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { AccessTime } from "@mui/icons-material"


const TourCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3} >
                <img src='https://cdn.pixabay.com/photo/2016/11/19/18/57/godafoss-1840758_960_720.jpg' alt='' className='img' />
                <Box paddingX={1}>
                    <Typography variant="subtitle1" component="h2">
                        Immerse into the Falls
                    </Typography>

                    <Box sx={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <AccessTime sx={{ width: 12.5 }} />
                        <Typography variant="body2" component="p" marginLeft={0.5}>
                            5 hours
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                        marginTop={3}
                    >

                        <Rating
                            name="read-only" value={4.5} precision={0.5} readOnly size="small"
                        />

                        <Typography variant="body2" component="p" marginLeft={0.5}>
                            4.5
                        </Typography>
                        <Typography variant="body2" component="p" marginLeft={1.5}>
                            (655 reviews)
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="h3" marginTop={0}>
                            From XAF 450
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid >

    )
}


export default TourCard;