import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Worksheets from './Worksheets';


it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <Worksheets />
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})