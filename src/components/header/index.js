import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { headerLinks } from "@/common/local-data";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

export default memo(function Header() {
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return <NavLink to={item.link}>{item.title}</NavLink>;
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01" >网易云音乐</a>
          <div className="select-list">
            {headerLinks.map((item, index) => (
              <div className={classnames("select-item")} key={item.title}>
                {showSelectItem(item, index)}
              </div>
            ))}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className="center">创作者中心</div>
          <div className="">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
