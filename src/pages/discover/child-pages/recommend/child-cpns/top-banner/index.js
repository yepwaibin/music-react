import React, { memo, useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getBanner } from "../../store/actionCreators";

import { Carousel } from "antd";
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";

const TopBanner = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // 组件和redux关联，获取数组操作
  const state = useSelector(
    (state) => ({
      banners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  const bannerRef = useRef();

  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);

  const bannerChange = useCallback((current) => {
    setTimeout(() => {
      setCurrentIndex(current);
    }, 0);
  }, []);

  const bgImage =
    state.banners[currentIndex] &&
    state.banners[currentIndex].imageUrl + "?imageView&blur=40x20";
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            effect="fade"
            afterChange={bannerChange}
            ref={bannerRef}
          >
            {state.banners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt="item.typeTitle"
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl className="control">
          <button
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          />
          <button
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          />
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});

export default TopBanner;
