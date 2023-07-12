import {configureStore} from '@reduxjs/toolkit';
import homeReducer from '@/store/modules/home.js'
import entireReducer from '@/store/modules/entire/index.js'

const store = configureStore({
    reducer: {
        home: homeReducer,
        entire: entireReducer
    }
})

export default store
