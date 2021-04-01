import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import WorksheetPage from './WorksheetPage';


it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <WorksheetPage />
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})