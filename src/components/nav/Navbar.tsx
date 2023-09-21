import { Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <div className='bg-white dark-bg-white select-none flex justify-center items-center'>
            <div className="p-4 flex font-semibold align-center items-center justify-center">
                <Link to="/" className="hover:text-reseda pl-12">HOME</Link>
                <Link to="/about" className="hover:text-orange px-12">ABOUT</Link>
                <Link to="/contact" className="hover:text-reseda pr-12">CONTACT</Link>
                <a className="max-md:hidden"target="_blank" download="WinterHardcastle_resume" href='/Winter Hardcastle_resume.pdf'> 
                    <Button color="inherit" sx={{fontFamily: "helvetica", fontWeight:"bold", cursor:"crosshair"}} variant="outlined" endIcon={<DownloadIcon />}>RESUME</Button>
                </a>
            </div>
        </div>
        </>
    )
}

export default Navbar