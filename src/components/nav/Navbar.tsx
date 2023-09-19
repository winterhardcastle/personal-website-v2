import { Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';

const Navbar = () => {
    return(
        <>
        <div className='bg-white dark-bg-white select-none flex justify-center items-center'>
            <div className="p-4 flex align-center items-center justify-center">
                <a href="#0" className="px-12">About</a>
                <a href="#0" className="pr-12">Contact</a>
                <a className="max-md:hidden"target="_blank" download="WinterHardcastle_resume" href='/Winter Hardcastle_resume.pdf'> 
                    <Button color="inherit" sx={{fontFamily: "monospace", fontWeight:"bold", cursor:"crosshair"}} variant="outlined" endIcon={<DownloadIcon />}>RESUME</Button>
                </a>
            </div>
        </div>
        </>
    )
}

export default Navbar