import React, { useEffect, createContext, useReducer, useContext } from 'react';
import Navbar1 from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Company from './components/screens/Company'
import Login from './components/screens/Login'
import Signup from './components/screens/Signup'
import Suggestion from './components/screens/Suggestion'
import AboutUs from './components/screens/AboutUs'
import Collection from './components/screens/Collection'
import Certificate from './components/screens/Certificate'
import Transportation from './components/screens/Transportation'
import EWaste from './components/screens/EWaste'
import Donation from './components/screens/Donation'
import Biogas from './components/screens/Biogas'
import FAQs from './components/screens/FAQs'
import ContactUs from './components/screens/ContactUs'
import CreatePost from './components/screens/CreatePost'
import { reducer, initialState } from './reducers/userReducer'
import Reset from './components/screens/reset'
import NewPassword from './components/screens/Newpassword'


export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch({ type: "USER", payload: user })
    }
  }, [])

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/about">
        <AboutUs />
      </Route>
      <Route path="/company">
        <Company />
      </Route>
      <Route path="/certificate">
        <Certificate />
      </Route>
      <Route path="/collection">
        <Collection />
      </Route>
      <Route path="/transport">
        <Transportation />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/ewaste">
        <EWaste />
      </Route>
      <Route path="/donation">
        <Donation />
      </Route>
      <Route path="/biogas">
        <Biogas />
      </Route>
      <Route path="/faqs">
        <FAQs />
      </Route>
      <Route path="/contact">
        <ContactUs />
      </Route>
      <Route exact path="/reset">
        <Reset />
      </Route>
      <Route path="/reset/:token">
        <NewPassword />
      </Route>
    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar1 />
        <Routing />
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>

  );
}

export default App;

