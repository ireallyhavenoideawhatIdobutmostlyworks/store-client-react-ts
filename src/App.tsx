import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.scss';
import Slider from './main-page/slider/Slider';
import HeaderCategories from './main-page/header_categories/HeaderCategories';
import HeaderPersonalInfo from './main-page/header_linkedin/HeaderPersonalInfo';
import LoginRegister from './login_register_page/LoginRegister';


function App() {
    return (
        <BrowserRouter>
            <HeaderPersonalInfo></HeaderPersonalInfo>
            <HeaderCategories></HeaderCategories>

            <Routes>
                <Route path="user" element={ <LoginRegister />}></Route>
                <Route path="" element={ <Slider />}></Route>
            </Routes>
            
        </BrowserRouter>
    );
}

export default App;
