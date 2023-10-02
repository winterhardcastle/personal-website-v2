import HardwareProjects from "../projects/HardwareProjects";
import SoftwareProjects from "../projects/SoftwareProjects";

const Home = () => {
    return (
        <div>
        <div className="h-screen flex justify-around items-center">
        <div className="pb-32">
            <h1 className="text-black font-bold max-md:text-6xl text-8xl">WINTER HARDCASTLE</h1>
            <p className="text-black text-2xl text-left">Software Developer and Maker</p>
        </div>
        </div>
            <SoftwareProjects />
            <HardwareProjects />
        </div>
    )
}

export default Home;