import React, {useState} from "react";
import axios from "axios";
import './AddSong.css'


const AddSong = (props) => {
    const[title, setTitle] = useState('');
    const[artist, setArtist] = useState('');
    const[album, setAlbum] = useState('');
    const[releaseDate, setReleaseDate] = useState('');
    const[genre, setGenre] = useState('');


    async function AddSong(){
        let createSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre,
            };
        let response = await axios.post('http://127.0.0.1:8000/music/', createSong)
        if(response.status === 201){
            await props.getAllSongs();
        }}
    function handleSubmit(event) {
        event.preventDefault();
        AddSong();
        
        }

    return (  
        <form className="form" onSubmit={handleSubmit}>
            <h4>Add your song</h4>
            <div>
                <label className="label">Title</label>
                <input type="text"  value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <div>
                <label className="label">Artist</label>
                <input type="text"  value={artist} onChange={(event) => setArtist(event.target.value)}/>
            </div>
            <div>
                <label className="label">Album</label>
                <input type="text"  value={album} onChange={(event) => setAlbum(event.target.value)}/>
            </div>
            <div>
                <label className="label">Release Date</label>
                <input type="text" placeholder="YYYY-MM-DD" value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
            </div>
            <div>
                <label className="label">Genre</label>
                <input type="text"  value={genre} onChange={(event) => setGenre(event.target.value)}/>
            </div>
            <button className="add-button" type='submit'>Add Song</button>
        </form>
    );
}
 
export default AddSong;