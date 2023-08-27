import React, {memo, useEffect, useState} from "react";
import airbnbService from '@/services/index'

const Home = memo(() => {
    // 定义状态
    // const [highScore, setHighScore] = useState({})
    //
    // // 网络请求
    // useEffect(() => {
    //     airbnbService.get({
    //         url: '/home/highscore',
    //     }).then(res => {
    //         // 成功获取数据之后，更新状态
    //         console.log(res)
    //         setHighScore(res)
    //     })
    //     // 这里传入空数组，确保代码只执行一次
    // }, [])

    return (
        <div>
            <h2>Home Page</h2>
        </div>
    )
})

export default Home