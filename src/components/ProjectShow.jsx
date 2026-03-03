import Navbar from "./Navbar";
import ProjectLink from "./ProjectLink";

import productsData from "../data/productsData.js";

const ProjectShow = () => {
    return (
        <main className="w-full bg-light-gray text-blacky">
            <Navbar />

            {/* main projects */}
            <ProjectLink data={productsData} />
        </main>
    );
};

export default ProjectShow;