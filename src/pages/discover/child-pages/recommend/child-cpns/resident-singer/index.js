import React, { memo, useEffect } from "react";

import ThemeHeaderSmall from "@/components/theme-header-small";
import { ResidentSingerWrapper } from "./style";
import { getResidentSingerAction } from "../../store/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { getSizeImage } from "@/utils/format-utils";
const ResidentSinger = memo(() => {
  const { residentSinger } = useSelector((state) => ({
    residentSinger: state.getIn(["recommend", "residentSinger"]),
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getResidentSingerAction(5, 5001));
  }, [dispatch]);

  return (
    <ResidentSingerWrapper>
      <ThemeHeaderSmall title="入驻歌手" more="查看全部" />
      <div className="singer-list">
        {residentSinger.map((item, index) => {
          return (
            <a href="/todo" key={item.id} className="item">
              <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
              <div className="info">
                <div className="title">{item.name}</div>
                <div className="name">{item.alias.join("") || item.name}</div>
              </div>
            </a>
          );
        })}
      </div>
      <a href="/todo" className="resident-singer-bottom">
        申请成为网易音乐人
      </a>
    </ResidentSingerWrapper>
  );
});

export default ResidentSinger;
