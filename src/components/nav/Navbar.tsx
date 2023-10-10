import { Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from "react-router-dom";
import {scrollToElement} from '../../utils/functions'

const Navbar = () => {
    return(
        <>
        <div className='bg-white dark-bg-white select-none flex justify-center items-center'>
            <div className="p-4 flex font-semibold align-center items-center justify-center">
                <Link to="/" className="pl-12">HOME</Link>
                {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="px-12" onClick={() => {scrollToElement('softwareprojects')}}>PROJECTS</a>
                {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a onClick={() => {scrollToElement('aboutme')}}>ABOUT</a>
                <Link to="/contact" className="px-12">CONTACT</Link>
                <a className="max-md:hidden"target="_blank" download="WinterHardcastle_resume" href='/Winter Hardcastle_resume.pdf'> 
                    <Button color="primary" sx={{fontFamily: "helvetica", fontWeight:"bold", cursor:"crosshair"}} variant="outlined" endIcon={<DownloadIcon />}>RESUME</Button>
                </a>
            </div>
        </div>
        </>
    )
}

export default Navbar