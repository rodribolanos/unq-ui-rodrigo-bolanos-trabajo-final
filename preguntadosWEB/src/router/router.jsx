import Home from "../views/Home/Home.jsx";
import {Route, Routes} from "react-router-dom";
import Difficulty from "../views/Difficulty/DIfficulty.jsx";
import Questions from "../views/Questions/Questions.jsx";

const RouterApp = () => (
    <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path={"/difficulty"} element= {<Difficulty/>}/>
        <Route path={"/play"} element={<Questions/>} />
    </Routes>
);

export default RouterApp