import { useRef } from 'react'
import { BucklingSpring } from "./files/BucklingSpring";
import { Canvas, useFrame} from "@react-three/fiber";
import { Speaker } from "./files/Speaker";
import {OrbitControls, PresentationControls, AccumulativeShadows, RandomizedLight, Environment} from "@react-three/drei"


const HardwareProjects = () => {
    return (
        <div className="flex items-center justify-center">
        <div className="w-[75vw] h-[75vh]">
            <Canvas camera={{ fov: 90, near: 0.5, far: 750, position: [0, 0, 6]}}>
                <OrbitControls enableZoom={false} />
                <ambientLight color="BA5624" intensity={.5}/>
                <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
                <directionalLight position={[0, 0, 5]} intensity={1}/>
                <Speaker />
            </Canvas>
        </div>
        </div>
    )
}

export default HardwareProjects;