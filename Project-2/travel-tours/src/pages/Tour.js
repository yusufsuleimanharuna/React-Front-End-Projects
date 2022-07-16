import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordian"
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";

const Tour = () => (
    <Container sx={{ width: 900 }}>
        <Typography variant="h3" component="h1" marginTop={3}>
            Explore the World in Vegas
        </Typography>
        <Box marginTop={3} sx={{ display: "flex" }}>
            <img src="https://cdn.pixabay.com/photo/2016/11/19/18/57/godafoss-1840758_960_720.jpg" alt="" height={325} />
            <ImageCollage />
        </Box>
        <Box>
            <Typography variant="h6" component="h4" marginTop={3}>
                About this ticket
            </Typography>
            <Typography variant="paragraph" component="p" marginTop={3}>
                "On the other hand, we denounce with righteous indignation and dislike men who are so
                beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire,
                that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs
                to those who fail in their duty through weakness of will, which is the same as saying through shrinking from
                toil and pain. These
            </Typography>
        </Box>
        <Box marginBottom={10}>
            <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
                Frequently Asked Questions
            </Typography>
            <CustomizedAccordions />
        </Box>

        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation>

            </BottomNavigation>
        </Paper>
    </Container>
)


export default Tour;