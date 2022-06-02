import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import SearchBar from './Components/SearchBar/SearchBar';


function App() {
  document.body.style.backgroundColor = 'lightblue'

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/songs/');
    setSongs(response.data);
  }

  async function createSong(newSong){

    let response = await axios.post('http://127.0.0.1:8000/api/songs/', newSong);
    if(response.status === 201){
      await getAllSongs();
    }

  }

  
  
  return (
    <div className='background'>
      <h1 className='header'>Music Station</h1>
      <div>
        <DisplayMusic songs={songs}/>
      </div>
      <div>
        <SearchBar songs={songs} setSongs={setSongs} />
      </div>
    </div>
  );
}

export default App;