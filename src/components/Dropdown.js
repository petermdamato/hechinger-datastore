import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this.state = {
      state: this.props.abbreviation,
      items: this.props.data,
      option: ""
    }
  }

  componentDidMount() {
    if (this.state.state == "DC" || this.state.state == "CO" || this.state.state == "IN" || this.state.state == "ME"|| this.state.state == "NE") {
      this.setState({option:"https://hechinger.org/interactives/store/K12/" + this.state.state + "/" + this.state.state + " " + this.state.items[0] + " Historical Enrollment.xlsx"})
    } else {
      this.setState({option:"https://hechinger.org/interactives/store/K12/" + this.state.state + "/" + this.state.state + " " + this.state.items[0].replace("-20","-") + " Enrollment.xlsx"})
    }
  }

  _handleClick() {

  }
  _handleChange(e) {
    if (this.state.state == "DC" || this.state.state == "CO" || this.state.state == "IN" || this.state.state == "ME"|| this.state.state == "NE") {
      this.setState({option:"https://hechinger.org/interactives/store/K12/" + this.state.state + "/" + this.state.state + " " + e.target.value + " Historical Enrollment.xlsx"})
    } else {
      this.setState({option:"https://hechinger.org/interactives/store/K12/" + this.state.state + "/" + this.state.state + " " + e.target.value.replace("-20","-") + " Enrollment.xlsx"})
    }
  }

  render() {
    return (
      <div className='inner-table'
          ref={a => this._acc = a} 
          >
          <label>Choose a year: </label>
          <select onChange={this._handleChange} name="data-years" id="data-years">
                  {
              this.state.items.map((item, index) => {
                return <option key={index} value={item}>{item}</option>
              })
            } 
          </select>
          <a className={this.props.display ? 'dropdown-download-container disabled': 'dropdown-download-container'}
            href={this.state.option} download>
            <FontAwesomeIcon className="save-icon icon" icon={faFileDownload} />
          </a>
      </div>
    )
  }
}

export default Dropdown;