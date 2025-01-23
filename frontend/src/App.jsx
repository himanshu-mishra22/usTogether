import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import Explore from "./pages/Explore";
import Likes from "./pages/Likes";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="flex min-h-screen w-full bg-gray-900">
      {/*bg-gray-900*/}
      <Sidebar />
      <div className="my-5 pt-14 text-white mx-auto transition-all duration-300 flex-1">
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/likes" element={<Likes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;