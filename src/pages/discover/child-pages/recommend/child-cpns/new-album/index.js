import React, { memo, useEffect, useRef } from "react";

import { AlbumWrapper } from "./style";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getNewAlbumAction } from "../../store/actionCreators";

import { Carousel } from "antd";
import AlbumCover from "@/components/album-cover";
const NewAlbum = memo(() => {
  const dispatch = useDispatch();
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);
  const carouselRef = useRef();
  return (
    <AlbumWrapper>
      <ThemeHeaderRcm title="新碟上架" />
      <div className="content">
        <div
          className="arrow arrow-left sprite_02"
          onClick={(e) => carouselRef.current.prev()}
        ></div>
        <div className="album">
          <Carousel ref={carouselRef} dots={false}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums
                    .slice(item * 5, (item + 1) * 5)
                    .map((album, index) => {
                      return <AlbumCover key={album.id} info={album} />;
                    })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div
          className="arrow arrow-right sprite_02"
          onClick={(e) => carouselRef.current.next()}
        ></div>
      </div>
    </AlbumWrapper>
  );
});

export default NewAlbum;
