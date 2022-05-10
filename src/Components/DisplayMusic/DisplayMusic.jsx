import React from 'react';
import './DisplayMusic.css'



const DisplayMusic = (props) => {

    return (
        <div>
            <h3>Music Library</h3>
            <table>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </tr>
                    {props.songs.map((song)=> {
                        return (
                        <tr key={song.id}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayMusic;