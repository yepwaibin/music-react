import React, { memo } from "react";

import { ThemeCoverWrapper } from "./style";

import { getCount, getSizeImage } from "@/utils/format-utils";

const SongsCover = memo((props) => {
  const { info } = props;

  return (
    <ThemeCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
    </ThemeCoverWrapper>
  );
});

export default SongsCover;
