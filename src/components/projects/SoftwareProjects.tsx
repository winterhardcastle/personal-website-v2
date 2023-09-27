import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Fischer from "./software/Fischer"

const SoftwareProjects = () => {
    return (
            <div className="p-8 text-left flex items-center justify-center">
                <IconButton color="primary" size="large">
                    <ArrowBackIosNewIcon fontSize="inherit"/>
                </IconButton>
                <div className="w-[50vw] h-auto">
                    <Fischer />
                </div>
                <IconButton color="primary" size="large">
                    <ArrowForwardIosIcon fontSize="inherit"/>
                </IconButton>
            </div>
    )
}

export default SoftwareProjects;