import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import JobCard from './jobCard';
import Myjobs from './../pages/myJobs';
import SignUp from './SignUp';
import Login from './Login';
import OnGoingJobs from './../pages/onGoingJobs';
import InterviewCard from './interviewCard';




function AppRouter() {
    return (
        <div>
            <Route path="/myjobs" component={Myjobs} />
            <Route path="/ongoingjobs" component={OnGoingJobs} />

            <Route path="/signup/" component={SignUp} />
            <Route path="/signin/" component={Login} />
            // <Route path="/interview/" component={InterviewCard} />

        </div>
    );
}

export default AppRouter;
