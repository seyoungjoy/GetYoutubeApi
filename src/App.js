import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Youtube from './components/pages/Youtube';


//페이지 만드는 곳
function App(){
    return (
        <Router>
            <Route path="/" exact component={Youtube} />
        </Router>
    );
}

export default App;