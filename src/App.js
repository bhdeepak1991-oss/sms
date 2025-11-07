import logo from './logo.svg';
import './App.css';
import SidemenuComponent from './components/home/sidemenu-component';
import FooterComponent from './components/home/footer-component';
import HeaderComponent from './components/home/header-component';
import DashboardPage from './pages/dashboard/dashboard-page';

function App() {
  return (
   <>
<>
  <div className="wrapper">
    <HeaderComponent/>
    <SidemenuComponent/>
    <DashboardPage/>
    <FooterComponent/>
  </div>
  
</>

</>

  );
}

export default App;
