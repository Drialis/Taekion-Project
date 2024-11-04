import { Routes, Route } from "react-router-dom";

import Homepage from "../pages/HomePage/HomePage.jsx";
import BlogPage from "../pages/BlogPage/BlogPage.jsx";
import SignupPage from "../pages/SignupPage/SignupPage";
import UserProfilePage from '../pages/UserProfilePage/UserProfilePage.jsx'
import EditUserProfilePage from '../pages/EditUserProfile/EditUserProfile.jsx'
import ReservationPage from "../pages/ReservationPage/ReservationPage.jsx";
import LegendsPage from "../pages/LegendsPage/LegendsPage.jsx";
import LegendsDetailsPage from "../pages/LegendsDetailsPage/LegendsDetailsPage.jsx";

import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx'
import PrivateRoute from "./PrivateRoute.jsx";
import LegendsFormPage from "../pages/LegendsFormPage/LegendsFormPage.jsx";
import ContactPage from "../pages/ContactPage/ContactPage.jsx";


const AppRoutes = () => {
  return (
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/signup"} element={<SignupPage />} />
        <Route path={"/blog"} element={<BlogPage />} />
        <Route path={"/reserva-tu-clase"} element={<ReservationPage/>}/>
        <Route path={"/leyendas-de-la-escuela"} element={<LegendsPage/>}/>
        <Route path={"/leyendas-de-la-escuela/:id"} element={<LegendsDetailsPage/>}/>
        <Route path={"/contacto"} element={<ContactPage/>}/>
        

        <Route element={<PrivateRoute />}> 
          <Route path={"/profile"} element={<UserProfilePage />} />
          <Route path={"/profile/edit"} element={<EditUserProfilePage />} />
        </Route> 
        
        <Route element={<PrivateRoute onlyAdmin={true} />}/>
        {/*Esta ruta debería ser privada y acceder a ella solo a través del perfil del admin */}
        <Route path={"/new-legend"} element={<LegendsFormPage/>}/>
        {/* <Route path={"/blog/:postId"} element={<PostDetailsPage />} /> */}
        
        <Route path="/*" element={<NotFoundPage/>}/> 
      </Routes>
  )
}

export default AppRoutes