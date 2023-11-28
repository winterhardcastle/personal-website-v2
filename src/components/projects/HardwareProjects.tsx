import { useEffect, useRef, useState } from 'react'
import { IconButton } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, PresentationControls, AccumulativeShadows, RandomizedLight, Environment} from "@react-three/drei"
import {Speaker, BikeBrake, BucklingSpring, ElektraBoilerCap, ElektraSteamKnob, FilmCanister, Slavboard, KeyboardMounts} from './files'
import { useSwipeable } from "react-swipeable";


const models = [<Speaker />, <BucklingSpring />, <BikeBrake />, <FilmCanister />, <Slavboard />, <KeyboardMounts />, <ElektraBoilerCap/>, <ElektraSteamKnob />]

const HardwareProjects = () => {
    const [modelNum, setModelNum] = useState(0)

    const selectModel = (num:number) => {
        if(num > models.length -1){
            setModelNum(0)
            return modelNum
        }
        if(num < 0){
            setModelNum(models.length -1)
            return modelNum
        }
        else{
            setModelNum(num)
            return modelNum
        }
    }

    const mobileSwipe = useSwipeable({
        onSwipedLeft: () => {selectModel(modelNum - 1)},
        onSwipedRight: () => {selectModel(modelNum + 1)}
    }) 

    return (
        <div className='pt-48 pb-12'>
            <h1 className="md:pl-[25vw] font-bold text-left max-md:text-4xl text-5xl">Designs and Hardware Projects</h1>
            <div {...mobileSwipe} className="md:p-12 flex items-center justify-center">
                <div className="max-md:hidden">
                    <IconButton color="primary" onClick={() => {selectModel(modelNum - 1)}} size="large">
                        <ArrowBackIosNewIcon fontSize="inherit"/>
                    </IconButton>
                </div>
                <div className="md:w-[50vw] h-[75vh]">
                    <Canvas camera={{ fov: 90, near: 0.5, far: 750, position: [0, 0, 6]}}>
                        <OrbitControls enablePan= {false} enableZoom={false} />
                        <ambientLight color="#BA5624" intensity={.5}/>
                        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
                        <directionalLight position={[0, 0, 5]} intensity={1}/>
                        {models[modelNum]}
                    </Canvas>
                </div>
                <div className="max-md:hidden">
                    <IconButton color="primary" onClick={() => {selectModel(modelNum + 1)}} size="large">
                        <ArrowForwardIosIcon fontSize="inherit"/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default HardwareProjects;