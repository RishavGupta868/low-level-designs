import About from "./components/About";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import {  useState } from "react";
import Accordian from "./components/Accordian";
import CommentBox from "./components/nestedComments/CommentBox"
import ImageSlider from "./components/imageSlider/ImageSlider";
import LiveChat from "./components/youtube-live-chats/LiveChat";
import Search from "./components/SearchUI/Search";

const AppLayout = () => {
  const [lang , setLang]= useState('en');
  
  return (
    <div>
      
      <Header lang={lang} setLang={setLang} />
      <Outlet context={{lang}} />
      
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        )
      },
      {
        path: "/accordian",
        element: <Accordian />,
      },
      {
        path: "/comments",
        element: <CommentBox/>,
      },
      {
        path: "/image-slider",
        element: <ImageSlider/>,
      },
      {
        path: "/live-chat",
        element: <LiveChat/>,
      },
      {
        path: "/search-ui",
        element: <Search/>,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
