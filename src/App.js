import React from 'react';
import NavHeader from './component/NavHeader';
import NavFooter from './component/NavFooter';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      title:"Home"
    }
  }
  getChildContext(){
    return{muiTheme: getMuiTheme()}
  }

  componentWillReceiveProps(){
    this.setwill()
  }

  componentWillMount(){
    this.setwill()
  }
  setwill(){
    this.setState({
      title:this.props.router.isActive('/',true) ? 'Home':
            this.props.router.isActive('/blog') ? 'Blog':
            this.props.router.isActive('/about') ? 'About': 
            this.props.router.isActive('/work') ? 'Work':"Blog"
    })
  }
  render () {
    return(
      <div className="my-wrap">
          <NavHeader title={this.state.title}/>
          <div className="main">
            {this.props.children}
          </div>
          <NavFooter />
      </div>
    )
  }
}
App.childContextTypes={
  muiTheme:React.PropTypes.object.isRequired,
}

export default App;
