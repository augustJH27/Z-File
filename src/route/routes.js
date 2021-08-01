import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BukaDonasi from '../components/BukaDonasi/BukaDonasi';
import Login from '../components/Login/Login';
import LandingPage from '../pages/landingpage';
import Register from '../components/SignUp/SignUp'
import TentangKami from '../components/TentangKami/TentangKami';
import SyaratDanKetentuan from '../components/SyaratDanKetentuan/SyaratDanKetentuan';
import UserPage from '../pages/userpage';
import DetailDonasiUrgent from '../components/DetailDonasiUrgent/detaildonasiurgent';
import DetailDonasiTerbaru from '../components/DetailDonasiTerbaru/detaildonasiterbaru';
import ForgetPassword from '../components/ForgotPassword/ForgotPassword';
import Pendidikan from '../components/Category/Pendidikan/Pendidikan';
import Kemanusiaan from '../components/Category/Kemanusiaan/kemanusiaan';
import Anak from '../components/Category/Anak/anak';
import Kesehatan from '../components/Category/Kesehatan/kesehatan';
import DonasiCardMap from '../components/DonasiCard/DonasiCardMap';
import Profile from '../components/UserDashboard/Container';
import FlowDonasi from '../components/FlowDonasi/flowdonasi';
import Dana from '../components/FlowDonasi/dana';
import Buku from '../components/FlowDonasi/Buku/Buku';
import Elektronik from '../components/FlowDonasi/Elektronik/Elektronik';
import Mainan from '../components/FlowDonasi/Mainan/Mainan';
import Makanan from '../components/FlowDonasi/Makanan/Makanan';
import Medis from '../components/FlowDonasi/Medis/Medis';
import Pakaian from '../components/FlowDonasi/Pakaian/Pakaian';
import ResultTerbaru from '../components/UserPage/ResultTerbaru';
import Search from '../components/SearchBar/Search';
import LihatSemuaCarousel1 from '../components/LihatSemuaCarousel1/LihatSemuaCarousel1';




const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/' exact component={LandingPage} />
                    <Route path='/beranda' exact component={LandingPage} />
                    <Route path='/ayo-donasi' exact component={DonasiCardMap} />
                    <Route path='/buka-donasi' exact component={BukaDonasi} />
                    <Route path='/masuk' exact component={Login} />
                    <Route path='/daftar' exact component={Register} />
                    <Route path='/donasi-sekarang' exact component={FlowDonasi} />
                    <Route path='/tentang-kami' exact component={TentangKami} />
                    <Route path='/Pelajari' exact component={SyaratDanKetentuan} />
                    <Route path='/userpage' exact component={UserPage} />
                    <Route path='/user-dashboard' exact component={Profile} />
                    <Route path='/all-needUrgent-donation' exact component={LihatSemuaCarousel1} />
                    <Route path='/all-needNew-donation' exact component={DetailDonasiTerbaru} />
                    <Route path='/forgetpassword' exact component={ForgetPassword} />
                    <Route path='/kategori-pendidikan' exact component={Pendidikan} />
                    <Route path='/kategori-kesehatan' exact component={Kesehatan} />
                    <Route path='/kategori-anak' exact component={Anak} />
                    <Route path='/kategori-kemanusiaan' exact component={Kemanusiaan} />
                    <Route path='/donasi-uang' exact component={Dana} />
                    <Route path='/donasi-buku' exact component={Buku} />
                    <Route path='/donasi-elektronik' exact component={Elektronik} />
                    <Route path='/donasi-mainan' exact component={Mainan} />
                    <Route path='/donasi-makanan' exact component={Makanan} />
                    <Route path='/donasi-medis' exact component={Medis} />
                    <Route path='/donasi-pakaian' exact component={Pakaian} />
                    <Route path='/new-result' exact component={ResultTerbaru} />
                    <Route path='/search' exact component={Search} />
                </Switch>
            </Router>
        </>
    );
}

export default Routes;