import React,{useContext, useEffect} from 'react';
import './controls.css';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { GlobalContext } from './GlobalStateContext';

function Controls() {

   let [{list,curr_song,playing,player},dispatch] = useContext(GlobalContext);

   const prevNext = (inc) => {
      let next_ind = (curr_song+inc+list.length)%list.length;
      player.pause();
      let new_player = new Audio(list[next_ind]?.audio);
      dispatch({
         type: 'SET_SONG',
         curr_song: next_ind,
         playing: true,
         player: new_player
      });
      new_player.play();

   }

   const playPause = () =>{
      if(playing)
         player?.pause();
      else
         player?.play();
      dispatch({
         type: 'SET_SONG',
         curr_song: curr_song,
         playing: !playing,
         player: player
      })
   }

  return (
    <div className="controls">
      <button onClick = {() => prevNext(-1)}><SkipPreviousIcon /></button>
      <button onClick = {playPause}>
         {
            !playing?
            <PlayCircleFilledWhiteIcon className = 'controls__play-btn'sx={{fontSize: 50, color: 'rgb(255, 196, 0);'}}/>:
            <PauseCircleFilledIcon className = 'controls__play-btn'sx={{fontSize: 50, color: 'rgb(255, 196, 0);'}}/>
         }
         </button>
      <button onClick = {() => prevNext(1)}><SkipNextIcon /></button>
    </div>
  )
}

export default Controls;