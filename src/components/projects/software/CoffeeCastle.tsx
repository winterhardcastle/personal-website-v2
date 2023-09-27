import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';

const CoffeeCastle = () => {
    return (
        <div className="flex flex-col justify-center">
        <div className="drop-shadow-xl h-auto w-max-full">
            <img src="./images/coffee-castle.png" alt='Coffee E-commerce Website Screenshot' />
        </div>
        <div className="text-black">
            <div className="py-2 flex items-bottom">
                <h1 className="pr-2 pt-1 text-4xl font-bold">Coffee Castle</h1>
                <a href="https://graceshopper-uewg.onrender.com/products/6" target="_blank" rel="noopener noreferrer">
                <IconButton color="primary" size="large">
                    <OpenInNewIcon fontSize="inherit"/>
                </IconButton>
                </a>
                <a href="https://github.com/Team-Chrome/GraceShopper" target="_blank" rel="noopener noreferrer">
                <IconButton color="primary" size="large">
                    <GitHubIcon fontSize="inherit"/>
                </IconButton>
                </a>
            </div>
            <p> An E-commerce website with a large collection of coffees for sale. My main contributions to this project are
                the checkout feature, and backend models.
            </p>
        </div>
        </div>
    )
}

export default CoffeeCastle;
