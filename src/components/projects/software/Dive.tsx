import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';

const Dive = () => {
    return (
        <div className="flex flex-col justify-center">
        <div className="drop-shadow-xl h-auto w-max-full">
            <img src="./images/AUV.jpg" alt='DIVE LD auv' />
        </div>
        <div className="text-black">
            <div className="py-2 flex items-bottom">
                <h1 className="pr-2 pt-1 text-4xl font-bold">Dive Data Depot</h1>
                <a href="" target="_blank" rel="noopener noreferrer">
                <IconButton color="primary" size="large">
                    <OpenInNewIcon fontSize="inherit"/>
                </IconButton>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                <IconButton color="primary" size="large">
                    <GitHubIcon fontSize="inherit"/>
                </IconButton>
                </a>
            </div>
            <p>Developed for Anduril Industries(formerly Dive Technologies),  This is a data aggregation 
                and analysis program that obtains critical mission statistics from AUV sensor data.
            </p>
        </div>
        </div>
    )
}

export default Dive;
