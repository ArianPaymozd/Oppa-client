import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './LandingPage'
import TeacherClasses from './TeacherClasses';
// import config from './config'
import './App.css'
import CreateClass from './CreateClass';
import ClassPage from './TeacherClassPage';
import Worksheet from './AddWorksheet';
import WorksheetPage from './WorksheetPage';


class App extends React.Component {


    render() {
        return (
                <div className='App'>
                    <div className="main_content">
                        <main className='App_main'>
                          <header className='header'><h1>Oppa</h1></header>
                                <Switch>
                                    <Route
                                        exact
                                        path={'/'}
                                        component={LandingPage}
                                    />
                                    <Route
                                        exact
                                        path={'/teacher_classes'}
                                        component={TeacherClasses}
                                    />
                                    <Route
                                        exact
                                        path={'/teacher_classes/:class_id'}
                                        component={ClassPage}
                                    />
                                    <Route
                                        path={'/create_class'}
                                        component={CreateClass}
                                    />
                                     <Route
                                     exact
                                        path={'/add_worksheet/:class_id'}
                                        component={Worksheet}
                                    />
                                     <Route
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