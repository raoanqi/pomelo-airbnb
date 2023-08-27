import React, {memo} from 'react';
import {useRoutes} from "react-router-dom";
import routes from '@/router/index.js'
import Header from "@/components/header";
import Footer from "@/components/footer";

const App = memo(() => {
    return (
        <div className={'app'}>
            {/*<div className={'header'}>header</div>*/}
            <Header/>
            <div className={'page'}>
                {/*使用路由*/}
                {useRoutes(routes)}
            </div>
            <Footer/>
        </div>
    );
})

export default App