import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import CreateClass from './CreateClass';


it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <CreateClass />
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})