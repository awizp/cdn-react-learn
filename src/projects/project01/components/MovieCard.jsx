const MovieCard = ({ data, isLoading }) => {
    return (
        <>
            {data.length == 0 ? <p>No movies found</p> :
                (!isLoading && data.map((movie, idx) => {
                    return <div key={movie?.id + idx} className='w-full movie-card border-2 border-white/20 rounded-2xl overflow-hidden relative cursor-pointer'>
                        <img
                            src={!movie?.poster_path ? "https://picsum.photos/seed/picsum/200/300" : movie?.poster_path}
                            alt={`${movie?.original_title} banner`}
                            className='w-full h-full object-cover'
                        />

                        <div className='movie-overlay'></div>

                        <div className="movie-content">
                            <p className='text-lg text-center font-semibold text-red-600'>{movie?.original_title}</p>
                            <p className='text-sm text-center font-semibold text-gray-400'>{movie?.release_date}</p>
                        </div>
                    </div>;
                }))}
        </>
    );
};

export default MovieCard;