import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Classes from './Classes';


it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <Classes />
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})