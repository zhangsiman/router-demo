import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';



class NavHeader extends React.Component {
  handleClick(){
    this.context.router.push('/');
  }
  render () {
      return(
        <div className="nav-header">
          <button type="button" className="btn btn-default btn-sm" onClick={this.handleClick.bind(this)}>
            <span className="glyphicon glyphicon-chevron-left"></span> Back
          </button>
              <h3>SiMan@{this.props.title}</h3>
          <button type="button" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-camera"></span>
          </button>
        </div>
      )
  }
}
NavHeader.contextTypes={
  router:React.PropTypes.object
}
export default NavHeader;
