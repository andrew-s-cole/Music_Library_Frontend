import React, { useState } from 'react';
import './SearchBar.css'


const SearchBar = (props) => {
    const [search, setSearch] = useState('')

    function searchSong(event){
        event.preventDefault();
        
        let response = props.songs.filter((element) => {
            if (element.title.toLowercase().includes(search.toLowerCase())) {return true}
            else if (element.artist.toLowerCase().includes(search.toLowerCase())) {return true}
            else if (element.album.toLowerCase().includes(search.toLowerCase())) {return true}
            else if (element.release_date.toLowerCase().includes(search.toLowerCase())) {return true}
            else if (element.genre.toLowerCase().includes(search.toLowerCase())) {return true}
        });
        props.setSongs(response)
    }

return (
    <form onSubmit={searchSong} className='search'>
        <div>
            <input className='input' placeholder='Song' type='text'
            value={search}
            onChange={(event) =>setSearch(event.target.value)} />
            <button type='submit' className='search-button'>Search Song</button>
        </div>
    </form>
    );
}
export default SearchBar;