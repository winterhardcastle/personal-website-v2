import { BucklingSpring } from "./files/BucklingSpring";
import { Canvas } from "@react-three/fiber";
import { Speaker } from "./files/Speaker";

const HardwareProjects = () => {
    return (
        <div>
            <Canvas camera={{ fov: 90, near: 0.5, far: 750, position: [0, 0, 6]}}>
                <ambientLight intensity={.2}/>
                <directionalLight position={[-2, 5, 2]} intensity={1}/>
                <Speaker />
            </Canvas>
        </div>
    )
}

export default HardwareProjects;