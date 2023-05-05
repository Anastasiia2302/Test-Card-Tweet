import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";

const Home = lazy(() => import("./pages/Home"));
const Tweets = lazy(() => import("./pages/Tweets"));

 
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        
      </Route>
    </Routes>
  );
};

export default App;
