import * as React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import ScheduleScene from "./scenes/Schedule";
import DefaultScene from "./scenes/Default";
var AppRouter = function () {
    return (React.createElement(Router, null,
        React.createElement(Switch, null,
            React.createElement(Route, { path: '/', component: ScheduleScene, exact: true }),
            React.createElement(Route, { path: '/schedule', component: ScheduleScene }),
            React.createElement(Route, { path: '*', component: DefaultScene }))));
};
export default AppRouter;
//# sourceMappingURL=routes.js.map