import React, {Component} from 'react'
const ApiContext = React.createContext({
    classes: [''],
    insertClasses: () => {},
    logIn: false,
    setLogIn: () => {}
})

export default ApiContext

export class ApiProvider extends Component { 
  state = { 
    classes: [],
    logIn: false
  }

  insertClasses = (classes) => {
    this.setState({
        classes: classes
    })
  }

  setLogIn = () => {
    this.setState({
      logIn: !this.state.logIn
    })
  }


  render() {
    const value = {
      classes: this.state.classes,
      insertClasses: this.insertClasses,
      logIn: this.state.logIn,
      setLogIn: this.setLogIn
    }
    return (
      <ApiContext.Provider value={value}>
        {this.props.children}
      </ApiContext.Provider>
    )
  }
}