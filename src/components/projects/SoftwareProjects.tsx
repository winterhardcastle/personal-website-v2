import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Fischer from "./software/Fischer"

const SoftwareProjects = () => {
    return (
            <div className="p-8 text-left flex items-center justify-center">
                <IconButton  size="large">
                    <ArrowBackIosIcon fontSize="inherit"/>
                </IconButton>
                <div className="w-[50vw] h-auto">
                    <Fischer />
                </div>
                <IconButton  size="large">
                    <ArrowForwardIosIcon fontSize="inherit"/>
                </IconButton>
            </div>
    )
}

export default SoftwareProjects;