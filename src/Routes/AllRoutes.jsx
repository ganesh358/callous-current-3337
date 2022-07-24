import Home from "../pages/Home";
import Pricing from "../pages/Pricing";

import { Route, Routes} from "react-router-dom"
import Login from "../pages/Login";

function AllRoutes(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Pricing" element={<Pricing />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </div>
    )
}

export default AllRoutes;