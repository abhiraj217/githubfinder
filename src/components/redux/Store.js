import { configureStore } from "@reduxjs/toolkit";
import githubReducer from "../../components/redux/github/GithubSlice";

const Store = configureStore({
    reducer :{
        githubUsers: githubReducer
    }
})

export default Store;