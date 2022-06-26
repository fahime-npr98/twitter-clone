import { LeftSide, Home, Explore, RightSide, Notifications, Messages, Profil } from "./components";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <LeftSide />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
      <RightSide />
    </div>
  );
}

export default App;
