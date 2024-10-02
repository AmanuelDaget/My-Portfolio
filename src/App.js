import { createBrowserRouter, createRoutesFromElements, NavLink, Outlet, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import './components/darkTheme.css'
import { Home } from './components/home';
import { Contact } from './components/contact';
import { AboutMe } from './components/aboutMe';
import { Root } from './components/root';
import { Projects } from './components/projects';

function App() {
    const router=createBrowserRouter(
       createRoutesFromElements(
        <Route path='/' element={<Root/>}>
           <Route index element={<Home />} />
           <Route path='aboutme' element={<AboutMe />} />
           <Route path='contact' element={<Contact />} />
           <Route path='projects' element={<Projects />} />
        </Route>
       )
    )
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;


// const Root=()=>{
//   return(
//       <>
//         <header>
//           <NavLink to='/'> Amanuel </NavLink>
//           <NavLink to='/contact'> Contact </NavLink>
//           <NavLink to='/aboutme'> About Me </NavLink>
//         </header>
//         <div>
//           <Outlet />
//         </div>
//       </>
//   );
// }
