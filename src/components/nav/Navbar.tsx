import { Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <div className='bg-white dark-bg-white select-none flex justify-center items-center'>
            <div className="p-4 flex font-semibold align-center items-center justify-center">
                <Link to="/" className="pl-12">HOME</Link>
                <Link to="/contact" className="pr-12">CONTACT</Link>
                <a className="max-md:hidden"target="_blank" download="WinterHardcastle_resume" href='/Winter Hardcastle_resume.pdf'> 
                    <Button color="primary" sx={{fontFamily: "helvetica", fontWeight:"bold", cursor:"crosshair"}} variant="outlined" endIcon={<DownloadIcon />}>RESUME</Button>
                </a>
            </div>
        </div>
        </>
    )
}

export default Navbar