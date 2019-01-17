import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import home from '../Home/Home';
import Register from '../register-work/Register'
import songs from '../my-songs/my-songs'; 
import revenue from '../check-revenue/revenue'; 
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';


let content = () => {
    return (
        <div className="ContentCard">
            <div className="Content">
                <Route render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition 
                        key={location.key}
                        timeout={450}
                        classNames="fade" 
                        >
                            <Switch location={location}>
                                <Route exact path="/" component={home} />
                                <Route path="/register-work" component={Register} />
                                <Route path="/check-revenue" component={revenue} />
                                <Route exact path="/my-songs" component={songs} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )} />
            </div>
        </div>
    )
}

export default content