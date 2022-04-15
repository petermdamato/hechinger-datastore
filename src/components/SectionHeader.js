import React from 'react'
import axios from 'axios'
import Legend from './Legend'

class SectionHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            metadata:{}
        }
      }
    componentDidMount() {
      const met = axios.get(`https://hechinger.org/interactives/datastore/assets/meta.json`)
          .then(res => {
            const metadata = res.data;
            this.setState({ metadata });
          })
    }
    render() {
        var metadata = this.state.metadata;

        return (
            <div>
                <div className="headline">{metadata.headline}</div>
                <div className="section-header-contain">
                    <div className="section-header-table">
                        <table>
                          <tr>
                            <th>Data description</th>
                            <th>State(s)</th>
                            <th>Sector</th>
                            <th>Format</th>
                          </tr>
                          <tr>
                            <td>{metadata.description}</td>
                            <td>{metadata.states}</td>
                            <td>{metadata.sector}</td>
                            <td>{metadata.format}</td>
                          </tr>
                        </table>
                    </div>
                </div>
                <Legend meta={metadata}/>
            </div>
        )
    }
}

export default SectionHeader