import * as React from 'react'
import {Route, Switch} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import ScheduleScene from "./scenes/Schedule"
import DefaultScene from "./scenes/Default";
import StudentsScene from './scenes/Students';
import ScheduleHeader from './modules/Schedule/Header';
import NavigationModal from './modules/Navigation-Modal';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class AppRouter extends React.Component {

    @observable
    isNavigationOpen: boolean = false

    render() {
        return (
            <Router>
                <div>
                    {
                        this.isNavigationOpen &&
                            <NavigationModal
                                onClose={this.toggleNavigationModal}
                            />
                    }
                    <ScheduleHeader openNavigationModal={this.toggleNavigationModal}/>
                    <Switch>
                        <Route path={'/'} component={ScheduleScene} exact/>
                        <Route path={'/schedule'} component={ScheduleScene}/>
                        <Route path={'/students'} component={StudentsScene}/>
                        <Route path={'*'} component={DefaultScene}/>
                    </Switch>
                </div>
            </Router>
        )
    }
    private toggleNavigationModal = action(() => {
        this.isNavigationOpen = !this.isNavigationOpen
    })
}

export default AppRouter