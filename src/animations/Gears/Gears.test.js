import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Gears from './gears'


it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <Gears />
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})