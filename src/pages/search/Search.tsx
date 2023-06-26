import { useState, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import './Search.css'

const Search = () => {
        type dataSongs = {
                title: string;
                type: string;
                images: { background: string }
        }[]

        const handleSearch = (event: any) => {
                event.preventDefault();
                const searchText = event.target.search.value;
                const newText = searchText.toLocaleLowerCase();
                searching(newText);
        }
        const [allSongs, setAllSongs] = useState<dataSongs | []>([]);

        const songs = useAxios();

        useEffect(() => {
                setAllSongs(songs)
        }, [songs])


        const searching = (name: string) => {
                let newSongs = [];
                const data = songs.map(song => song.title.toLocaleLowerCase());
                const filtered = data.filter(song => song.startsWith(name));
                for (const matched of filtered) {
                        const catchSongs = songs.find(song => song.title.toLocaleLowerCase() === matched);
                        newSongs.push(catchSongs);
                        console.log(catchSongs)
                }
                setAllSongs(newSongs);
        }

        return (
                <div>
                        <form onSubmit={handleSearch} className="d-flex" role="search">
                                <input name="search" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className="songCardContainer mt-5">
                                {
                                        allSongs.map(song =>
                                                <div className="songCard" key={song.title}>
                                                        <div>{song.title.length < 12 ? <p>{song.title}</p> : <p>{song.title.slice(0, 12)}...</p>}</div>
                                                        <img className="songImg" src={song.images.background} alt="" />
                                                </div>)
                                }
                        </div>
                </div>
        );
};

export default Search;