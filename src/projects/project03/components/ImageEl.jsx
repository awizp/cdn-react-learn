const ImageEl = ({ src, alt }) => {

    // fallback image,
    const brokenLinkHandle = (e) => {
        e.target.onerror = null;
        e.target.src = "https://picsum.photos/seed/alarm/1500/1200";
    };

    return (
        <div className="w-full inset-0 overflow-hidden rounded-lg absolute top-0 left-0">
            <img src={src} alt={alt}
                className="w-full h-full object-fit"
                onError={brokenLinkHandle}
            />
        </div>
    );
};

export default ImageEl;