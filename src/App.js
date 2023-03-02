import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import '../src/style/sytle.scss'
import Iphone from "./pages/Iphone/Iphone";
import Basket from "./pages/Basket/Basket";
import Favorite from "./pages/Favorite/Favorite";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={''} element={<Layout/>}>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/iphone'} element={<Iphone/>}/>
            <Route path={'/basket'} element={<Basket/>}/>
            <Route path={'/favorite'} element={<Favorite/>}/>

        </Route>





      </Routes>



    </div>
  );
}

export default App;
