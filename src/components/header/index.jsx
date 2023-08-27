import React, {memo} from "react";
// 引入 styled-components 库封装的组件
import {HeaderWrapper} from "@/components/header/style";
import HeaderLeft from "@/components/header/header-left";
import HeaderCenter from "@/components/header/header-center";
import HeaderRight from "@/components/header/header-right";

const Header = memo(() => {
    return (// 这里使用了 styled-components 库封装的组件
        <HeaderWrapper>
            <HeaderLeft></HeaderLeft>
            <HeaderCenter></HeaderCenter>
            <HeaderRight></HeaderRight>
        </HeaderWrapper>)
})

export default Header