import { createSlice } from "@reduxjs/toolkit";
import { app } from "../interfaces";

const initialState:app = {
  comicdata:[]
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: { 
    addcomic: (state:app, action) => {
      state.comicdata.push(action.payload);
    },
    addfavcomic: (state, action) => {
      const favfoundindex=state.comicdata.findIndex(comic=>comic.id===action.payload);
      if(favfoundindex!=-1){
        state.comicdata[favfoundindex].fav=true;
      }
    },
    deletefavcomic:(state, action) => {
      const favfoundindex=state.comicdata.findIndex(comic=>comic.id===action.payload);
      if(favfoundindex!=-1){
        state.comicdata[favfoundindex].fav=false;
      }
    },
  }, 
});

export const { addcomic , addfavcomic  , deletefavcomic} = appSlice.actions;
export default appSlice.reducer;