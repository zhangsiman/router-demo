import React from 'react';
import NavHeader from './component/NavHeader';
import NavFooter from './component/NavFooter';
import LeftNav from './component/LeftNav'
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      title:"Home",
      showLeftNav:false
    }
  }

  getChildContext(){
    return{muiTheme: getMuiTheme()}
  }

  componentWillReceiveProps(){
    this.setwill()
  }

  componentWillMount(){
    this.setwill();
    this.setNavBar();
    }


  componentDidMount(){
    window.onresize=this.setNavBar.bind(this)
  }

setNavBar(){
  this.setState({
    showLeftNav:window.innerWidth>700 ? true :false
  })
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

          {this.state.showLeftNav ? <LeftNav title={this.state.title}/> :  <NavHeader title={this.state.title}/>}

          <div className="main">
            {this.props.children}
          </div>

          {this.state.showLeftNav ? null : <NavFooter />}

      </div>
    )
  }
}
App.childContextTypes={
  muiTheme:React.PropTypes.object.isRequired,
}

export default App;
