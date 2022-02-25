import {songs} from '../songs';
import React,{createContext,useReducer} from 'react';
import reducer from './reducer.js';

const initializer = {
   list: songs,
   curr_song: 0,
   playing: false,
   player: new Audio(songs[0].audio)
}

export const GlobalContext = createContext(initializer);

export const GlobalContextProvider = ({children}) =>{
   return <GlobalContext.Provider value={useReducer(reducer,initializer)}>
      {children}
   </GlobalContext.Provider>
}