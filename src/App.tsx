import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.scss';
import Slider from './main-page/slider/component/Slider';
import HeaderCategories from './main-page/header_categories/component/HeaderCategories';
import HeaderPersonalInfo from './main-page/header_linkedin/component/HeaderPersonalInfo';
import LoginRegister from './login_register_page/LoginRegister';
import RegisterForm from "./login_register_page/register_form/component/RegisterForm";

function App() {
    return (
        <BrowserRouter>
            <HeaderPersonalInfo></HeaderPersonalInfo>
            <HeaderCategories></HeaderCategories>

            <Routes>
                <Route path="" element={ <Slider />}></Route>
                <Route path="/user">
                    <Route index element={<LoginRegister />} />  
                    <Route path="register" element={ <RegisterForm /> }></Route>
                </Route>
            </Routes>
            
        </BrowserRouter>
    );
}

export default App;