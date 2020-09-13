import React from "react";
import {Switch, Route} from 'react-router';
import FilmContainer from "../container/FilmContainer";
const PublicRoute = ()=>{
    return (
        <div>
            <div style={{height: '100%'}}>
                <div>
                    <Switch>
                        <Route exact path='/' component={FilmContainer} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}



export default PublicRoute;
