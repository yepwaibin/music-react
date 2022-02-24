import React, { memo, useCallback, useEffect, useRef, useState } from "react";

import { NavLink } from "react-router-dom";
import { Slider } from "antd";
import { getSizeImage, formatDate, getPlaySong } from "@/utils/format-utils";
import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  getSongDetailAction,
  changeSequenceAction,
  changeCurrentSong,
} from "../store/actionCreators";

const AppPlayerBar = memo(() => {
  const [currentTime, setCurrentime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChangeing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef();
  const { currentSong, sequence } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      sequence: state.getIn(["player", "sequence"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongDetailAction());
  }, [dispatch]);
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
      });
  }, [currentSong]);

  const imgUrl = currentSong.al && currentSong.al.picUrl;
  const singerName = currentSong.ar && currentSong.ar[0].name;
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");

  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const timeUpdate = (e) => {
    if (!isChanging) {
      setCurrentime(e.target.currentTime * 1000);
      setProgress((currentTime / duration) * 100);
    }
  };

  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if (currentSequence > 2) {
      currentSequence = 0;
    }
    dispatch(changeSequenceAction(currentSequence));
  };

  const sliderChange = useCallback(
    (value) => {
      setIsChangeing(true);
      const currentTime = ((value / 100) * duration) / 1000;
      setCurrentime(currentTime * 1000);
      setProgress(value);
    },
    [duration]
  );
  const sliderAfterChange = useCallback(
    (value) => {
      const currentTime = ((value / 100) * duration) / 1000;
      audioRef.current.currentTime = currentTime;
      setCurrentime(currentTime * 1000);
      setIsChangeing(false);

      if (!isPlaying) {
        playMusic();
      }
    },
    [duration, isPlaying, playMusic]
  );

  const changeMusic = (tag) => {
    dispatch(changeCurrentSong(tag));
  };

  const handleMusicEnd = () => {
    if (sequence === 2) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCurrentSong(1));
    }
  };

  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button
            className="sprite_playbar btn prev"
            onClick={(e) => changeMusic(-1)}
          ></button>
          <button
            className="sprite_playbar btn play"
            onClick={(e) => playMusic()}
          ></button>
          <button
            className="sprite_playbar btn next"
            onClick={(e) => changeMusic(1)}
          ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(imgUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="#/" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider
                defaultValue={30}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="total-time">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button
              className="sprite_playbar btn loop"
              onClick={(e) => changeSequence()}
            ></button>
            <button className="sprite_playbar btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdate}
        onEnded={handleMusicEnd}
      />
    </PlaybarWrapper>
  );
});

export default AppPlayerBar;
