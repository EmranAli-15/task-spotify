import useAxios from "../../hooks/useAxios";

const Playlists = () => {

        const songs = useAxios();

        return (
                <div>
                        <h1>
                                {
                                        songs.map(song => <p key={song.title}>{song.title}</p>)
                                }
                        </h1>
                </div>
        );
};

export default Playlists;