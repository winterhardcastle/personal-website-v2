const About = () => {
    return (
        <div className="h-screen flex flex-col justify-center">
            <h1 className="pb-12 pl-[25vw] font-bold text-left text-5xl">About Me</h1>
            <div className="flex justify-around">
                <div className="w-1/2 flex gap-4 justify-left">
                    <div className="md:text-left text-center">
                        <p className="py-4 text-sm md:text-lg">
                        My name is Winter Hardcastle, I'm a web developer and creative who is passionate about building great software.
                        I believe creativity is the catalyst for motivational energy, and I'm constantly striving to learn new things. I’m always looking for exciting opportunities, so don’t hesitate to reach out if you want to work together!
                        </p>
                        <p className="py-2">
                        <span className="font-bold">Location: </span> New York City
                        </p>
                        <p className="py-2">
                        <span className="font-bold">Interests: </span> Climbing, Cycling, 3D printing, Design, Soccer, Mechanical Keyboards(the list goes on...)
                        </p>
                        <p className="font-bold py-2">
                        Current Skillset: 
                        </p>
                        <img src="https://skillicons.dev/icons?i=react,ts,js,py,css,html,redux,postgres,express,tailwind,nextjs,sequelize,threejs,vite,git&theme=light" alt="Winter's Skills"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;