import React, { memo } from "react";

import { getSizeImage } from "@/utils/format-utils";
import { TopRankingWrapper } from "./style";

import { useDispatch } from "react-redux";
import { getSongDetailAction } from "@/pages/player/store";
import { NavLink } from "react-router-dom";

const TopRanking = memo((props) => {
  const { info } = props;
  const { tracks = [] } = info;
  const dispatch = useDispatch();

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  };

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} alt="" />
          <a href="/todo" className="image_cover">
            ranking
          </a>
        </div>
        <div className="info">
          <a className="" href="/todo">
            {info.name}
          </a>
          <div>
            <button className="btn sprite_02 play"></button>
            <button className="btn sprite_02 favor"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div className="list-item" key={item.id}>
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="operate">
                  <button
                    className="btn sprite_02 play"
                    onClick={(e) => playMusic(item)}
                  ></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <NavLink to="/discover/toplist">查看全部 &gt;</NavLink>
      </div>
    </TopRankingWrapper>
  );
});

export default TopRanking;
