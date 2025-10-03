import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Persnoldetails from './pages/details/Persnoldetails';
import Dashbord from './pages/dashbord/Dashbord';
import Profile from './pages/dashbord/profile/Profie';
import Buy from './pages/dashbord/buy/Buy';
import Payment from './pages/dashbord/buy/Payment';
import CheackDetails from './pages/dashbord/buy/CheackDetails';
import Myorders from './pages/dashbord/orders/Myorders';
import Ongoing from './pages/dashbord/orders/Ongoing';
import Trackorders from './pages/dashbord/orders/Trackorders';
import Cancelorder from './pages/dashbord/orders/Cancelorder';
import Deliverd from './pages/dashbord/orders/Deliverd';
import Cancelled from './pages/dashbord/orders/Cancelled';
function Approutes(){
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/personldetails' element={<Persnoldetails/>}/>
            <Route path='/dashbord' element={<Dashbord/>}/>
            <Route path='/dashbord/profile' element={<Profile/>}/>
            <Route path='/dashbord/buy' element={<Buy/>}/>
            <Route path='/dashbord/buy/cheackdetails' element={<CheackDetails/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path="/dashbord/myorders" element={<Myorders/>}>
                {/* Nested Route */}
                <Route path="ongoing" element={<Ongoing/>}/>
                <Route path="trackorders" element={<Trackorders/>}/>
                <Route path="cancelorder" element={<Cancelorder/>}/>

                <Route path="deliverd" element={<Deliverd/>} />
                <Route path="cancelled" element={<Cancelled/>} />


            </Route>
             
        </Routes>
    )
}
export default Approutes;