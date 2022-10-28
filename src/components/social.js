import { Button, Container } from "react-bootstrap";
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Social () {
    return (
        <Container fluid="true" id="social" className="Social">
            <hr className="hr"/>
            <h6>Find me on social media!</h6>
            <IconButton aria-label="github" href="https://github.com/lilf4p">
                <GitHubIcon fontSize="large"/>
            </IconButton>
            <IconButton aria-label="twitter" href="https://twitter.com/lilf4p">
                <TwitterIcon fontSize="large" color="primary"/>
            </IconButton>
            <IconButton aria-label="instagram" href="https://www.instagram.com/lilf4p/">
                <InstagramIcon fontSize="large" color="secondary"/>
            </IconButton>
        </Container>
    );
}

export default Social;