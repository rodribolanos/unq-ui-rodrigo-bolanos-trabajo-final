import Home from "../views/Home/Home.jsx";
import {Route, Routes} from "react-router-dom";

const RouterApp = () => (
    <Routes>
        <Route path ="/" element={<Home />}/>
        {/*<Route path={"/difficulty"} element= {<Difficulty/>}/>*/}
        {/*<Route path={"/questions"} element=  {<Questions/>}/>*/}
        {/*<Route path={"/help"} element=  {<Help/>}/>*/}
        {/*<Route path={"/finish"} element=  {<Finish/>}/>*/}
    </Routes>
);

export default RouterApp