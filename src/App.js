
import Home from "./components/pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Settings from "./components/pages/settings/Settings";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import ErrorPage from "./components/pages/ErrorPage";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
  
    <Router>
        <TopBar/>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/write" element={<Write />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/single" element={<Single />} />
       <Route path="/settings" element={<Settings />} />
       <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
    // <Router>
    //   <TopBar />
    //   <Routes>
    //     <Routes exact path="/">
    //       <Home />
    //     </Routes>
    //     {/* <Route path="/posts">
    //       <Home />
    //     </Route>
    //     <Route path="/register">
    //       {currentUser ? <Home /> : <Register />}
    //     </Route>
    //     <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
    //     <Route path="/post/:id">
    //       <Single />
    //     </Route>
    //     <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
    //     <Route path="/settings">
    //       {currentUser ? <Settings /> : <Login />}
    //     </Route>
    //   </Switch>
    // </Router> */}
  );
}

export default App;

