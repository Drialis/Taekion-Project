import { Routes, Route } from "react-router-dom";
import './AppRoutes.css'

import SignupPage from "../pages/SignupPage/SignupPage.jsx";

import Homepage from "../pages/Homepage/Homepage.jsx";
import BlogPage from "../pages/BlogPage/BlogPage.jsx";
import PostDetailsPage from "../pages/PostDetailsPage/PostDetailsPage.jsx";


import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
//import PrivateRoute from "./PrivateRoute.jsx";



const AppRoutes = () => {
  return (
    <div className="AppRoutes">
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/signup"} element={<SignupPage />} />
        <Route path={"/blog"} element={<BlogPage />} />
        <Route path={"/blog/:postId"} element={<PostDetailsPage />} />

        {/* <Route element={<PrivateRoute />}> */}
        {/* <Route element={<PrivateRoute onlyAdmin={true} />}> */}
        {/* </Route> */}
        {/* </Route> */}

        <Route path={"/*"} element={<NotFoundPage />} />

      </Routes>
    </div >
  )
}

export default AppRoutes