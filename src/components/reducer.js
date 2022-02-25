const reducer = (state,action) =>{
   // console.log(action.curr_song)
   switch(action.type){
      case 'SET_SONG':{
         return {...state,
            curr_song: action.curr_song,
            playing: action.playing, 
            player: action.player
         };
      }
      default: 
         return state;
   }
}

export default reducer;