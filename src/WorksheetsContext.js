import React, {Component} from 'react'
const WorksheetsContext = React.createContext({
    worksheet: {}, insertWorksheet: () => {}
})

export default WorksheetsContext

export class WorksheetsProvider extends Component { 
state = { worksheet: {} }

  insertWorksheet = (worksheet) => {
    this.setState({
        worksheet: worksheet
    })
  }

  render() {
    const value = {
      worksheet: this.state.worksheet,
      insertWorksheet: this.insertWorksheet
    }
    return (
      <WorksheetsContext.Provider value={value}>
        {this.props.children}
      </WorksheetsContext.Provider>
    )
  }
}