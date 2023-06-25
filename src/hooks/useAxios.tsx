import { useState, useEffect } from 'react'
import axios from 'axios'
const useAxios = () => {
        type dataSongs = {
                title: string;
                type: string
        }[]
        const [songs, setSongs] = useState<dataSongs | []>([])
        const options = {
                method: 'GET',
                url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
                params: {
                        key: '484129036',
                        locale: 'en-US'
                },
                headers: {
                        'X-RapidAPI-Key': 'a5464f6388msh3e08452700cd3a9p183538jsnf06f1d168ef7',
                        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
                }
        };
        useEffect(() => {
                const fetchData = async () => {
                        try {
                                const response = await axios.request(options);
                                setSongs(response.data.tracks)
                        } catch (error) {
                                console.error(error);
                        }
                }
                fetchData();

        }, [])

        return songs
};

export default useAxios;