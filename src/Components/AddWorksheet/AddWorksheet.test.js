import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AddWorksheet from './AddWorksheet'


it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <AddWorksheet />
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})