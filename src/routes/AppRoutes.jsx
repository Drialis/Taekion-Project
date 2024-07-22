import { Routes, Route } from "react-router-dom";
import './AppRoutes.css'

import Homepage from "../pages/Homepage/Homepage";
import BlogPage from "../pages/BlogPage/BlogPage";


import SignupPage from "../pages/SignupPage/SignupPage";
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage";
import EditUserProfilePage from "../pages/EditUserProfile/EditUserProfile";

import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "./PrivateRoute.jsx";



const AppRoutes = () => {
  return (
    <div className="AppRoutes">
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/signup"} element={<SignupPage />} />
        <Route path={"/blog"} element={<BlogPage />} />
        <Route path={"/blog/:postId"} element={<PostDetailsPage />} />


        {/* <Route element={<PrivateRoute />}> */}

        <Route path={"/profile"} element={<UserProfilePage />} />
        <Route path={"/profile/edit"} element={<EditUserProfilePage />} />

        {/* </Route> */}

        <Route element={<PrivateRoute onlyAdmin={true} />}>


        </Route>

        <Route path={"/*"} element={<NotFoundPage />} />

      </Routes>
    </div>
  )
}

export default AppRoutes