import React, {Component} from 'react'
const ApiContext = React.createContext({
    classes: [''], insertClasses: () => {}
})

export default ApiContext

export class ApiProvider extends Component { 
state = { classes: [] }

  insertClasses = (classes) => {
    this.setState({
        classes: classes
    })
  }

  render() {
    const value = {
      classes: this.state.classes,
      insertClasses: this.insertClasses
    }
    return (
      <ApiContext.Provider value={value}>
        {this.props.children}
      </ApiContext.Provider>
    )
  }
}