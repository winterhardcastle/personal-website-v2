import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';

const StockVisualizer = () => {
    return (
        <div className="flex flex-col justify-center">
        <div className="drop-shadow-xl h-auto w-max-full">
            <img src="./images/robinhood-neopixel.jpg" alt='LED stock display in bedroom' />
        </div>
        <div className="text-black">
            <div className="py-2 flex items-bottom">
                <h1 className="pr-2 pt-1 text-4xl font-bold">Stock LED display</h1>
                <a href="" target="_blank" rel="noopener noreferrer">
                <IconButton color="primary" size="large">
                    <OpenInNewIcon fontSize="inherit"/>
                </IconButton>
                </a>
                <a href="https://github.com/winterhardcastle/robinhood-portfolio-visualizer" target="_blank" rel="noopener noreferrer">
                <IconButton color="primary" size="large">
                    <GitHubIcon fontSize="inherit"/>
                </IconButton>
                </a>
            </div>
            <p>This program displays a real-time visual representation of the success of your stock portfolio using Neopixel LED lights and
                    the Robinhood API! 
            </p>
        </div>
        </div>
    )
}

export default StockVisualizer;