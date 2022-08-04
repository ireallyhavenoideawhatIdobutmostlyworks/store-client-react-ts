import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.scss';
import Slider from './main-page/slider/Slider';
import HeaderCategories from './main-page/header_categories/HeaderCategories';
import HeaderPersonalInfo from './main-page/header_linkedin/HeaderPersonalInfo';
import LoginRegister from './login_register_page/LoginRegister';
<<<<<<< HEAD
import RegisterForm from "./login_register_page/register_form/RegisterForm";
=======

>>>>>>> 1105b4b6be7cbd14aeb79279102d945f5f9a9903

function App() {
    return (
        <BrowserRouter>
            <HeaderPersonalInfo></HeaderPersonalInfo>
            <HeaderCategories></HeaderCategories>

            <Routes>
<<<<<<< HEAD
                <Route path="" element={ <Slider />}></Route>
                <Route path="/user">
                    <Route index element={<LoginRegister />} />  
                    <Route path="register" element={ <RegisterForm /> }></Route>
                </Route>
=======
                <Route path="user" element={ <LoginRegister />}></Route>
                <Route path="" element={ <Slider />}></Route>
>>>>>>> 1105b4b6be7cbd14aeb79279102d945f5f9a9903
            </Routes>
            
        </BrowserRouter>
    );
}

export default App;
