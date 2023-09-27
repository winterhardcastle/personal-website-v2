import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';

const Fischer = () => {
    return (
        <div className="flex flex-col justify-center">
        <div className="drop-shadow-xl h-auto w-max-full">
            <img src="./images/fischer-homepage.png" alt='Fischer homepage' />
        </div>
        <div className="text-black">
            <div className="py-2 flex items-bottom">
                <h1 className="pr-2 pt-1 text-4xl font-bold">Fischer</h1>
                <a href="https://faction-fischer.vercel.app/posts" target="_blank" rel="noopener noreferrer">
                <IconButton color="primary" size="large">
                    <OpenInNewIcon fontSize="inherit"/>
                </IconButton>
                </a>
                <a href="https://github.com/orgs/FSA2211-Team-6/repositories" target="_blank" rel="noopener noreferrer">
                <IconButton color="primary" size="large">
                    <GitHubIcon fontSize="inherit"/>
                </IconButton>
                </a>
            </div>
            <p>Fischer is a fact-checking webapp and chrome extension that integrates NLP 
                and user contributions to determine the truthiness of information on the web.
            </p>
        </div>
        </div>
    )
}

export default Fischer;
