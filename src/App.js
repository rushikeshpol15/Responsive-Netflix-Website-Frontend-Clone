import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./homepage/HomePage";
import ContactUs from "./ContactUs/ContactUs";
import LegalNotice from "./LegalNotice/LegalNotice";
import Account from "./Account/Account";
import HelpCenter from "./HelpCenter/HelpCenter";
import Privacy from "./Privacy/Privacy";
import TermsOfUse from "./TermsOfUse/TermsOfUse";
import CorporateInformation from "./CorporateInformation/CorporateInformation";
import FAQ from "./FAQ/FAQ";
import Jobs from './Jobs/Jobs';
import CoockiePreferences from './CoockiePreferences/CoockiePreferences';
import WayToWatch from './WayToWatch/WayToWatch';
import InvestorRelations from './InvestorRelations/InvestorRelations';
import MediaCenter from './MediaCenter/MediaCenter';
import OnlyOnNetflix from './OnlyOnNetflix/OnlyOnNetflix';
import JoinNowOne from './JoinNowOne/JoinNowOne';
import JoinNowMain from './JoinNowMain/JoinNowMain';
import JoinNowTwo from './JoinNowTwo/JoinNowTwo';
import JoinNowThree from './JoinNowThree/JoinNowThree';
import JoinNowFour from './JoinNowFour/JoinNowFour';
import JoinNowFiveOne from './JoinNowFiveOne/JoinNowFiveOne';
import JoinNowFiveTwo from './JoinNowFiveTwo/JoinNowFiveTwo';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import { useState } from 'react';
function App() {

  let[subsriptionplan,setSubscriptionPlan]=useState("Basic");
  let[subsriptionplanPrice,setSubscriptionPlanPrice]=useState("199");
  let[emailId,setEmailId]=useState("");

  function handleEmail(mail)
  {
    setEmailId(mail);
  }

  function handleSubscription(plan,price)
  {
    setSubscriptionPlan(plan);
    setSubscriptionPlanPrice(price);

  }

  return (

         <HashRouter basename=''>
          <Routes>
            <Route path='/' element={<HomePage handleEmail={handleEmail}/>}/>
            <Route path='/Account' element={<Account handleEmail={handleEmail}/>} />
            <Route path='/ForgotPassword' element={<ForgotPassword/>} />
            <Route path='/HelpCenter' element={<HelpCenter/>}/>
            <Route path='/CorporateInformation'  element={<CorporateInformation/>}/>
            <Route path='/Privacy' element={<Privacy/>}/>
            <Route path='/ContactUs' element={<ContactUs/>}/>
            <Route path='/LegalNotice' element={<LegalNotice/>}/>
            <Route path='/TermsOfUse' element={<TermsOfUse/>}/>
            <Route path='/FAQ' element={<FAQ/>}/>
            <Route path='/InvestorRelations' element={<InvestorRelations/>}/>
            <Route path='/Jobs' element={<Jobs/>}/>
            <Route path='/MediaCenter' element={<MediaCenter/>}/>
            <Route path='/OnlyOnNetflix' element={<OnlyOnNetflix/>}/>
            <Route path='/WayToWatch' element={<WayToWatch/>}/>
            <Route path='/JoinNowMain' element={<JoinNowMain/>} />
            <Route path='/JoinNowOne' element={ <JoinNowOne mailId={emailId}/>}/>
            <Route path='/JoinNowTwo' element={ <JoinNowTwo/>}/>    
            <Route path='/JoinNowThree' element={ <JoinNowThree handleSubsciption={handleSubscription}/>}/>
            <Route path='/JoinNowFour' element={ <JoinNowFour/>}/>
            <Route path='/JoinNowFiveOne' element={<JoinNowFiveOne plan={subsriptionplan} price={subsriptionplanPrice}/>} />
            <Route path='/JoinNowFiveTwo' element={<JoinNowFiveTwo />} />



          </Routes>
        </HashRouter>





    )
}

export default App;
