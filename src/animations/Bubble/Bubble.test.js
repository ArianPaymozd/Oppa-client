import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Bubble from './Bubble'


it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <Bubble />
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})