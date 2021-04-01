import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import VineClimb from './VineClimb'


it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <VineClimb />
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})