import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import TableEntry from './TableEntry'

class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
      states:[]
    }
  }

  componentDidMount() {
      const met = axios.get(`https://hechinger.org/interactives/datastore/assets/data.json`)
          .then(res => {
            const state_data = res.data;
            this.setState({ states:state_data });
          })
    }
  render() {
    var states = this.state.states;
    
    var display = ""
    return (
      <ul className='table'>
        {
            states.map((item) => {
              if (item.data[0].length == 0){
                display = "none" 
              } else {
                display = ""
              }
              return <TableEntry key={item.Abbreviation} insert={item} display={display} />
            } 
              
            )
        }
      </ul>
    );
  }
}
export default TableComponent