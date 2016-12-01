import React, { PropTypes } from 'react'
import {Link} from "react-router"
class NavFooter extends React.Component {
  render () {
    return(
      <div className="nav-footer">
        <Link to="/" onlyActiveOnIndex={true} activeStyle={{color:'#4DB6AC'}}><span className="glyphicon glyphicon-home" ></span><br/>Home</Link>
        <Link to="blog" activeStyle={{color:'#4DB6AC'}}><span className="glyphicon glyphicon-th-large" ></span><br/>Blog</Link>
        <Link to="about" activeStyle={{color:'#4DB6AC'}}><span className="glyphicon glyphicon-heart" ></span><br/>About</Link>
        <Link to="work" activeStyle={{color:'#4DB6AC'}}><span className="glyphicon glyphicon-user" ></span><br/>Work</Link>
      </div>
    )

  }
}

export default NavFooter;
