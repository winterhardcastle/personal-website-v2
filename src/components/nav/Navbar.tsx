import { Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <div className='bg-white dark-bg-white select-none flex justify-center items-center'>
            <div className="p-4 flex align-center items-center justify-center">
                <Link to="/" className="pl-12">Home</Link>
                <Link to="/about" className="px-12">About</Link>
                <Link to="/contact" className="pr-12">Contact</Link>
                <a className="max-md:hidden"target="_blank" download="WinterHardcastle_resume" href='/Winter Hardcastle_resume.pdf'> 
                    <Button color="inherit" sx={{fontFamily: "helvetica", fontWeight:"bold", cursor:"crosshair"}} variant="outlined" endIcon={<DownloadIcon />}>RESUME</Button>
                </a>
            </div>
        </div>
        </>
    )
}

export default Navbar