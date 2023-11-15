import HardwareProjects from "../projects/HardwareProjects";
import SoftwareProjects from "../projects/SoftwareProjects";
import About from "../about/About"
const Home = () => {
    return (
        <div className="max-md:px-2">
        <div className="h-screen flex justify-around items-center">
        <div className="max-md:p-2 pb-32">
            <h1 className="text-black font-bold max-md:text-left max-md:text-5xl text-8xl">WINTER HARDCASTLE</h1>
            <p className="text-black text-2xl text-left">Software Developer and Maker</p>
        </div>
        </div>
            <SoftwareProjects />
            <HardwareProjects />
            <About />
        </div>
    )
}

export default Home;