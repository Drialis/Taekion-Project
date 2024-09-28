import { Routes, Route } from "react-router-dom";

import Homepage from "../pages/HomePage/HomePage.jsx";
import BlogPage from "../pages/BlogPage/BlogPage.jsx";

import SignupPage from "../pages/SignupPage/SignupPage";
import UserProfilePage from '../pages/UserProfilePage/UserProfilePage.jsx'
import EditUserProfilePage from '../pages/EditUserProfile/EditUserProfile.jsx'
import ReservationPage from "../pages/ReservationPage/ReservationPage.jsx";

import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "./PrivateRoute.jsx";
import { Container } from "react-bootstrap";



const AppRoutes = () => {
  return (
    <Container fluid className="AppRoutes">
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/signup"} element={<SignupPage />} />
        <Route path={"/blog"} element={<BlogPage />} />
        <Route path={"/reserva-tu-clase"} element={<ReservationPage/>}/>
        {/* <Route path={"/blog/:postId"} element={<PostDetailsPage />} /> */}

        <Route element={<PrivateRoute />}> 
          <Route path={"/profile"} element={<UserProfilePage />} />
          <Route path={"/profile/edit"} element={<EditUserProfilePage />} />
        </Route> 
        
        <Route element={<PrivateRoute onlyAdmin={true} />}/>

        <Route path={"/*"} element={<NotFoundPage />} /> 

      </Routes>
    </Container>
  )
}

export default AppRoutes