import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Img1 from '../image/a.jpg'



class NavHeader extends React.Component {
  constructor(){
    super();
    this.state={
      show:true
    }
  }
  handleClick(){
    this.context.router.goBack();//要是想直接返回home 页面的话就用.push('/')
  }
  handleMa(){
      this.setState({
        show:!this.state.show
      })
  }
  render () {
    let styles={
          span:{fontSize:'20px',cursor:'pointer'}
    }
      return(
        <div className="nav-header">
          <div>
              <span className="glyphicon glyphicon-th-list" onClick={this.handleClick.bind(this)} style={styles.span}></span>
          </div>
              <h3>SiMan@{this.props.title}</h3>
            <div>
              <span className="glyphicon glyphicon-barcode"  style={styles.span}></span>

            </div>

        </div>
      )
  }
}
NavHeader.contextTypes={
  router:React.PropTypes.object
}
export default NavHeader;
