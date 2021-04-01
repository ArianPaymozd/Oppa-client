import React from 'react'
import { Switch } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Classes from './Components/Classes/Classes';
// import config from './config'
import './App.css'
import CreateClass from './Components//CreateClass/CreateClass';
import Worksheets from './Components/Worksheets/Worksheets';
import AddWorksheet from './Components/AddWorksheet/AddWorksheet';
import WorksheetPage from './Components/WorksheetPage/WorksheetPage';
import PublicOnlyRoute from './Utils/PublicOnlyRoute';
import PrivateRoute from './Utils/PrivateRoute';
import TokenService from './services/token-service';


class App extends React.Component {
    state = {
        logIn: false
    }

    componentDidMount() {
        TokenService.hasAuthToken() ?
        this.setState({logIn: true})
        : this.setState({logIn: false})
    }

    render() {
        return (
                <div className='App'>
                    <div className="main_content">
                        <main className='App_main'>
                                <Switch>
                                    <PublicOnlyRoute
                                        exact
                                        path={'/'}
                                        component={LandingPage}
                                    />
                                    <PrivateRoute
                                        exact
                                        path={'/teacher_classes'}
                                        component={Classes}
                                    />
                                    <PrivateRoute
                                        exact
                                        path={'/teacher_classes/:class_id'}
                                        component={Worksheets}
                                    />
                                    <PrivateRoute
                                        path={'/create_class'}
                                        component={CreateClass}
                                    />
                                     <PrivateRoute
                                     exact
                                        path={'/add_worksheet/:class_id'}
                                        component={AddWorksheet}
                                    />
                                     <PrivateRoute
                                     exact
                                        path={'/worksheet/:worksheet_id'}
                                        component={WorksheetPage}
                                    />
                                </Switch>
                        </main>
                    </div>
                </div>
        )
    }
}

export default App