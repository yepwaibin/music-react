import React, { memo } from "react";

import { HotRadioWrapper } from "./style";
import ThemeHeaderSmall from "@/components/theme-header-small";
import { hotRadios } from "@/common/local-data";
import { getSizeImage } from "@/utils/format-utils";

const HotRadio = memo(() => {
  return (
    <HotRadioWrapper>
      <ThemeHeaderSmall title="热门主播" />
      <div className="radio-list">
        {hotRadios.map((item, index) => {
          return (
            <div className="item" key={item.url}>
              <img src={getSizeImage(item.picUrl, 40)} alt="" />
              <div className="info">
                <a className="name" href={item.url}>
                  {item.name}
                </a>
                <div className="describe">{item.position}</div>
              </div>
            </div>
          );
        })}
      </div>
    </HotRadioWrapper>
  );
});

export default HotRadio;
