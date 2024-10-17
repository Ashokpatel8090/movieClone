import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Components/Layout/AppLayout";
import { ErrorPage } from "./Pages/ErrorPages";
import "./App.css"
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Movie } from "./Pages/Movie";
import { MovieDetails } from "./Components/UI/MovieDetails";
import { Contact, contactData } from "./Pages/Contact";
import { getMoviesData } from "./API/GetAPIData";
import { getMovieDetails } from "./API/GetMovieDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

  //Traditional Method
  
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element ={<Home/>}/>
  //       <Route path="/About" element ={<About/>}/>
  //       <Route path="/Movie" element ={<Movie/>}/>
  //       <Route path="/Contact" element ={<Contact/>}/>

  //     </Route>
  //   )
  // );

 