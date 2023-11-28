import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Fischer from "./software/Fischer"
import PersonalWebsite from "./software/PersonalWebsite";
import Dive from "./software/Dive";
import StockVisualizer from "./software/StockVisualizer";
import CoffeeCastle from "./software/CoffeeCastle";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";


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

    const mobileSwipe = useSwipeable({
        onSwipedLeft: () => {selectProj(projNum - 1)},
        onSwipedRight: () => {selectProj(projNum + 1)}
    })


    return (
        <div id="softwareprojects">
            <h1 className="py-12 md:pl-[25vw] text-left text-5xl font-bold max-md:text-4xl">Software Projects</h1>
            <div {...mobileSwipe} className="md:p-8 text-left flex items-center justify-center">
                <div className="max-md:hidden">
                    <IconButton onClick={() => {selectProj(projNum - 1)}} color="primary" size="large">
                        <ArrowBackIosNewIcon fontSize="inherit"/>
                    </IconButton>
                </div>
                <div className="md:w-[50vw] h-auto">
                    {projects[projNum]}
                </div>
                <div className="max-md:hidden">
                    <IconButton onClick={() => {selectProj(projNum + 1)}} color="primary" size="large">
                        <ArrowForwardIosIcon fontSize="inherit"/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default SoftwareProjects;