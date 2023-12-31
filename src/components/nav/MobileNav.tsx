import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, {useState} from 'react';
import { Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from "react-router-dom";
import {scrollToElement} from '../../utils/functions'

const MobileNav = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
        <MenuIcon className="absolute top-4 right-5" onClick={() => {setOpen(!open)}}/>
        {open ? 
            <div className="flex items-center justify-center fixed left-0 top-0 z-10 bg-white w-screen h-screen">
                <CloseIcon onClick={() => {setOpen(!open)}} className="absolute top-4 right-5"/>
                <div onClick={() => {setOpen(!open)}} className="flex flex-col justify-between align-center">
                    <Link to="/" className="text-xl p-4">HOME</Link>
                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="text-xl p-4" onClick={() => {scrollToElement('softwareprojects')}}>PROJECTS</a>
                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="text-xl p-4" onClick={() => {scrollToElement('aboutme')}}>ABOUT</a>
                    <Link to="/contact" className="text-xl p-4">CONTACT</Link>
                    <a className="p-12" target="_blank" download="WinterHardcastle_resume" href='/Winter Hardcastle_resume.pdf'> 
                    <Button color="primary" sx={{fontFamily: "helvetica", fontWeight:"bold", cursor:"crosshair"}} variant="outlined" endIcon={<DownloadIcon />}>RESUME</Button>
                    </a>
                </div>
            </div>
        : null}
        
        </>
    )
}

export default MobileNav;
