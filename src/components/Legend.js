import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

class Legend extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <div>
                    <div className="header-legend">  
                        <div>
                                <div className="legend-label">Legend</div>
                                <div className="legend-label-left">
                                    <ul>
                                        <li><div className="header-legend-slug"><FontAwesomeIcon className="push icon green" icon={faCircle} /><div className="header-legend-label">{this.props.meta.greenlight}</div></div></li>
                                        <li><div className="header-legend-slug"><FontAwesomeIcon className="push icon red" icon={faCircle} /><div className="header-legend-label">{this.props.meta.redlight}</div></div></li>
                                        <li><div className="header-legend-slug"><FontAwesomeIcon className="push icon grey" icon={faCircle} /><div className="header-legend-label">{this.props.meta.greylight}</div></div></li>
                                    </ul>
                                </div>
                        </div>
                        <div className="legend-fluff-container">
                                <div className="legend-label">Notes</div>
                                <div className="legend-description">{this.props.meta.notes}</div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Legend