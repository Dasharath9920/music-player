import React,{useContext} from 'react';
import './audiocard.css';
import Controls from './Controls';
import { GlobalContext } from './GlobalStateContext';

function AudioCard() {

   const [{list,curr_song,playing}] = useContext(GlobalContext);
   const song = list[curr_song];
   const next_ind = (curr_song+1)%list.length;
   const album_class = `audio-card__cover ${playing && 'rotateB'}`;
  return (
    <div className="audio-card">
       <h4>Playing now</h4>
       <div className = {album_class}>
         <img className = {playing && 'rotateA'} src={song?.cover} alt={song?.name} />
       </div>
       <h2>{song?.name}</h2>
       <h3 className = 'song-artist'>{song?.artist}</h3>
       <Controls />
       <p className = 'next-song__info'><b>Next up:</b> {list[next_ind]?.name} by {list[next_ind]?.artist}</p>
    </div>
  )
}

export default AudioCard;