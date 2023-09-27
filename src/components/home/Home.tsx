import HardwareProjects from "../projects/HardwareProjects";
import SoftwareProjects from "../projects/SoftwareProjects";

const Home = () => {
    return (
        <>
        <div>
            <h1 className="text-black font-bold text-8xl">WINTER HARDCASTLE</h1>
        </div>
            <SoftwareProjects />
            <HardwareProjects />
        </>
    )
}

export default Home;