import React, { useContext, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import SignIn from './pages/SignIn/index';
import SignUp from './pages/Signup/index';
import ResetPassword from './pages/ResetPassword';
import Colleges from './pages/colleges/colleges';
import Scholorships from './pages/scholorships/sholorships';
import PastPapers from './pages/pastPapers/pastPapers';
import ScrollToTop from './components/ScrollToTop';

const Routes = () => {
    return (
        // <ScrollToTop>
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/colleges" component={Colleges} />
                <Route exact path="/scholorships" component={Scholorships} />
                <Route exact path="/pastPapers" component={PastPapers} />
                <Route exact path="/resetPassword/:resetToken" component={ResetPassword} />
                <Redirect to="/" />
            </Switch>
            {/* <Footer /> */}
        </>
        // </ScrollToTop >
    )
}

export default Routes;