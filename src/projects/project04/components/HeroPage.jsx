import { VideoProvider } from "../context/VideoContext";
import Navbar from "./Navbar";
import VideoShow from "./VideoShow";

const HeroPage = () => {
    return (
        <div className="w-full">
            <VideoProvider>
                <Navbar />

                <VideoShow />
            </VideoProvider>
        </div>
    );
};

export default HeroPage;