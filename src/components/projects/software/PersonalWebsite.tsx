import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';

const PersonalWebsite = () => {
    return (
        <div className="flex flex-col justify-center">
        <div className="drop-shadow-xl h-auto w-max-full">
            <img src="./images/personal-website.png" alt='V1 portfolio website' />
        </div>
        <div className="text-black">
            <div className="py-2 flex items-bottom">
                <h1 className="pr-2 pt-1 text-4xl font-bold">Portfolio Site V1</h1>
                <a href="https://faction-fischer.vercel.app/posts" target="_blank" rel="noopener noreferrer">
                <IconButton color="primary" size="large">
                    <OpenInNewIcon fontSize="inherit"/>
                </IconButton>
                </a>
                <a href="https://github.com/winterhardcastle/personal-website" target="_blank" rel="noopener noreferrer">
                <IconButton color="primary" size="large">
                    <GitHubIcon fontSize="inherit"/>
                </IconButton>
                </a>
            </div>
            <p> This was V1 of my Portfolio website. The DOM existed entirely within a Three.js canvas, which lent itself to some interesting problems and solutions
            </p>
        </div>
        </div>
    )
}

export default PersonalWebsite;
