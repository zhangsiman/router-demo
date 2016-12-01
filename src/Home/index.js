import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Home extends React.Component {
  render () {
        return(
          <div className='home-wrap'>
            <div className='home-hover'>
              <div className='home-item'>
                <h3>I'AM ZHANGSI <span className="glyphicon glyphicon-leaf"></span> 曼 </h3>
                <p>Welcome To My Blog</p>
                
                  <MuiThemeProvider>
                  <RaisedButton label="Go To See"/>
                  </MuiThemeProvider>
              </div>
            </div>
          </div>
        )
  }
}

export default Home;
