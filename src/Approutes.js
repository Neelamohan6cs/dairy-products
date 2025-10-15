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
import Main from './pages/dashbord/Main';
import Pop from './pages/demo/Profilepop';



function Approutes() {
  return (
    <Routes>
      <Route path='/pop' element={<Pop />} />
      


      <Route path='/' element={<Login />} />
      <Route path='/personldetails' element={<Persnoldetails />} />

      <Route path='/dashbord' element={<Main />}>
        <Route index element={<Dashbord />} />
        <Route path='profile' element={<Profile />} />
        <Route path='buy' element={<Buy />} />
        <Route path='buy/cheackdetails' element={<CheackDetails />} />
        <Route path='payment' element={<Payment />} />
        

        <Route path='myorders' element={<Myorders />}>
          <Route index element={<Ongoing />} />
          <Route path='trackorders' element={<Trackorders />} />
          <Route path='cancelorder' element={<Cancelorder />} />
          <Route path='deliverd' element={<Deliverd />} />
          <Route path='cancelled' element={<Cancelled />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Approutes;
