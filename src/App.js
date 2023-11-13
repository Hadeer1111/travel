import './App.css';
import AirlinesComponent from './Components/AirlinesComponent';
import BookingsComponent from './Components/BookingsComponent';
import CardsComponents from './Components/CardsComponent';
import ClientsComponent from './Components/ClientsComponent';
import DashBoard from './Components/DashBoard';
import FooterComponent from './Components/FooterComponent';
import HoneymoonComponent from './Components/HoneymoonComponent';
import NavComponent from './Components/NavComponent';
import PackagesComponent from './Components/PackagesComponent';
import PromotionComponent from './Components/PromotionComponent';
import SecondBackgroundComponent from './Components/SecondBackgroundComponent';
import ServiceComponent from './Components/ServicesComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
    <div>
      <NavComponent/>
     <AirlinesComponent/>
     <ServiceComponent/>
     <HoneymoonComponent/>
     <BookingsComponent/>
     <SecondBackgroundComponent/>
     <PromotionComponent/>
     <PackagesComponent/>
     <CardsComponents/>
     <ClientsComponent/>
     <FooterComponent/>
    </div>
    </Route>
    <Route exact path="/dashboard">
       <DashBoard></DashBoard>
    </Route>
    </Switch>
    </Router>
  );
}

export default App;
