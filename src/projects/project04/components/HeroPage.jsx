import { VideoProvider } from "../context/VideoContext";
import Navbar from "./Navbar";
import VideoShow from "./VideoShow";

const HeroPage = () => {
    return (
        <div className="w-full">
            <title>Welcome to CyberTube | Watch Education content and attain your dream career</title>
            <VideoProvider>
                <Navbar />

                <VideoShow />
            </VideoProvider>
        </div>
    );
};

export default HeroPage;