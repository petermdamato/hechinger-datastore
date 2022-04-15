import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="header-contain">
                    <div className="header-item">
                <a href="https://hechingerreport.org/" className="custom-logo-link" rel="home"><img width="200" height="40" src="https://i2.wp.com/hechingerreport.org/wp-content/uploads/2020/03/hechinger-logo-1-300x60-1.gif" className="custom-logo" alt="The Hechinger Report" /></a></div>
                    <div className="site-identity header-sub">
                                    
                                        <p className="site-description">
                                    Covering Innovation &amp; Inequality in Education               </p>
                            </div>
                            <div className="filler">
                            </div>
                            <div className="data-store-label">
                                Data
                            </div>
                </div>
            </div>
        )
    }
}

export default Header