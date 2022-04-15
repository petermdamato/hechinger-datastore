import React from 'react';
import useCollapse from 'react-collapsed';
import Arrow from './Arrow'
import Dropdown from './Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

function TableEntry(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <li className="collapsible">
        <div className="state-row header" {...getToggleProps()}>
            <div className="dropdown-button">
                {/* <div>{props.insert.Abbreviation}</div> */}
                <div className="state-name">{props.insert.State}</div><FontAwesomeIcon className={"push icon " + props.insert.Flag} icon={faCircle} /></div>        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                <div className="content-inner">
                <div className="data-available">
                <div className="label">Available data</div>
                    <ul>
                    {
                        props.insert.Available.map(tags => {
                             return <li key={tags}>{tags}</li>
                          })
                      }
                    </ul>
                </div>

                <div className="chart-container">

                    <div className="label state-chart-label">State trend</div>

                    <div className="state-chart">
                        <Arrow data={props.insert.Overview[0]}/>
                    </div>
                </div>
                </div>
                <div 
                     className={props.display ? 'dropdown-container hidden' : 'dropdown-container'}>
                    <div className="label dropdown-label">Download data</div>
                    <Dropdown
                        display={props.display}
                        abbreviation={props.insert.Abbreviation}
                        data={props.insert.data}
                        />
                </div>
            </div>
        </div>
    </li>
    );
}

export default TableEntry