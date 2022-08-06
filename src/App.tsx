import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.scss';
import Slider from './main-page/slider/component/Slider';
import HeaderCategories from './main-page/header_categories/component/HeaderCategories';
import HeaderPersonalInfo from './main-page/header_linkedin/component/HeaderPersonalInfo';
import Login from "./login/component/Login";
import Register from "./register/component/Register";

function App() {
    return (
        <BrowserRouter>
            <HeaderPersonalInfo></HeaderPersonalInfo>
            <HeaderCategories></HeaderCategories>

            <Routes>
                <Route path="" element={ <Slider />}></Route>
                <Route path="/user">
                    <Route index element={<Login />} />  
                    <Route path="register" element={ <Register /> }></Route>
                </Route>
            </Routes>
            
        </BrowserRouter>
    );
}

export default App;