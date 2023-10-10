import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Fischer from "./software/Fischer"
import PersonalWebsite from "./software/PersonalWebsite";
import Dive from "./software/Dive";
import StockVisualizer from "./software/StockVisualizer";
import CoffeeCastle from "./software/CoffeeCastle";
import { useState } from "react";

const projects = [<Fischer />, <PersonalWebsite />, <Dive />, <StockVisualizer/>, <CoffeeCastle />]

const SoftwareProjects = () => {
    const [projNum, setProjNum] = useState(0)

    const selectProj = (num:number) => {
        if(num > projects.length -1){
            setProjNum(0)
            return projNum
        }
        if(num < 0){
            setProjNum(projects.length -1)
            return projNum
        }
        else{
            setProjNum(num)
            return projNum
        }
    }   

    return (
        <div id="softwareprojects">
            <h1 className="py-12 pl-[25vw] text-left text-5xl font-bold">Software Projects</h1>
            <div className="p-8 text-left flex items-center justify-center">
                <IconButton onClick={() => {selectProj(projNum - 1)}} color="primary" size="large">
                    <ArrowBackIosNewIcon fontSize="inherit"/>
                </IconButton>
                <div className="w-[50vw] h-auto">
                    {projects[projNum]}
                </div>
                <IconButton onClick={() => {selectProj(projNum + 1)}} color="primary" size="large">
                    <ArrowForwardIosIcon fontSize="inherit"/>
                </IconButton>
            </div>
        </div>
    )
}

export default SoftwareProjects;