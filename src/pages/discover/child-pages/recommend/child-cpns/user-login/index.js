import React, { memo } from "react";

import { UserLoginWrapper } from "./style";

const UserLogin = memo(() => {
  return (
    <UserLoginWrapper className="sprite_02">
      <div className="user_login_top">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </div>
      <a href="/login" className="user_login_bottom sprite_02">
        用户登录
      </a>
    </UserLoginWrapper>
  );
});

export default UserLogin;
