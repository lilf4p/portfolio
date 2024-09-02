import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}

function Social() {

    const fontsize = isMobile() ? "small" : "large"

    return (
        <div className="Social" >
            <IconButton aria-label="github" href="https://github.com/lilf4p" >
                <GitHubIcon fontSize={fontsize} sx={{
                    '&:hover': {
                        color: "gray",
                    },
                    color: "white"
                }} />
            </IconButton>
            <IconButton aria-label="twitter" href="https://twitter.com/lilf4p" >
                <TwitterIcon fontSize={fontsize} color='info' sx={{
                    '&:hover': {
                        color: "gray",
                    },
                    color: "white"
                }} />
            </IconButton>
            <IconButton aria-label="instagram" href="https://www.instagram.com/lilf4p/" >
                <InstagramIcon fontSize={fontsize} sx={{
                    '&:hover': {
                        color: "gray",
                    },
                    color: "white"
                }}></InstagramIcon>
            </IconButton>
            <IconButton aria-label="linkedin"href="https://www.linkedin.com/in/leonardo-stoppani-45090923a/" >
                <LinkedInIcon fontSize={fontsize} sx={{
                    '&:hover': {
                        color: "gray",
                    },
                    color: "white"
                }} />
            </IconButton>
        </div>
    );
}

export default Social;