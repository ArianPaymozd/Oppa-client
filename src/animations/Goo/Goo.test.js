import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Goo from './Goo'


it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <Goo />
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})