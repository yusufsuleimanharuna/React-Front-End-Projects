import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ImageCollage from "../components/ImageCollage";

const Tour = () => (
    <Container sx={{ width: 900 }}>
        <Typography variant="h3" component="h1" marginTop={3}>
            Explore the World in Vegas
        </Typography>
        <Box marginTop={3} sx={{ display: "flex" }}>
            <img src="https://cdn.pixabay.com/photo/2016/11/19/18/57/godafoss-1840758_960_720.jpg" alt="" height={325} />
            <ImageCollage />
        </Box>
    </Container>
)


export default Tour;