import * as actionTypes from "./constants";
import {getRandomNumber} from '@/utils/math-utils'

import { getSongDetail } from "@/services/player";

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

const changePlayList = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
});

const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex,
});

export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_PLAY_SEQUENCE,
  sequence
})

export const changeCurrentSong = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', "playList"])
    let currentSongIndex = getState().getIn(['player', "currentSongIndex"])
    const sequence = getState().getIn(["player", "sequence"])
    switch(sequence) {
      case 1:
        let randomNumber = getRandomNumber(playList.length)
        currentSongIndex = randomNumber;
        break;
      default:
        currentSongIndex += tag;
        if (currentSongIndex >= playList.length) {
          currentSongIndex = 0;
        }
        if (currentSongIndex < 0) {
          currentSongIndex = playList.length - 1;
        }
    }
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex))
  }
}

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"]);
    const songIndex = playList.findIndex((song) => song.id === ids);
    if (songIndex !== -1) {
      dispatch(changeCurrentSongIndexAction(songIndex));
      const song = playList[songIndex];
      dispatch(changeCurrentSongAction(song));
    } else {
      getSongDetail(ids).then((res) => {
        const song = res.songs && res.songs[0];
        if (!song) return;

        const newPlayList = [...playList];
        newPlayList.push(song);

        dispatch(changePlayList(newPlayList));
        dispatch(changeCurrentSongAction(song));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
      });
    }
  };
};
