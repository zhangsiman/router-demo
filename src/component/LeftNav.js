import React, { PropTypes } from 'react';
import{ Link} from 'react-router'

class LeftNav extends React.Component {
  render () {
    return(
      <div className="leftnav-wrap">
        <h3> SiMan@{this.props.title}</h3>
        <Link to="/"  onlyActiveOnIndex={true} activeStyle={{backgroundColor:'#ccc'}}><span className="glyphicon glyphicon-home"></span>Home</Link>
        <Link to="/blog" activeStyle={{backgroundColor:'#ccc'}}><span className="glyphicon glyphicon-th-large" ></span>Blog</Link>
        <Link to="/work" activeStyle={{backgroundColor:'#ccc'}}><span className="glyphicon glyphicon-heart" ></span>Work</Link>
        <Link to="/about" activeStyle={{backgroundColor:'#ccc'}}><span className="glyphicon glyphicon-user" ></span>About</Link>

      </div>
    )

  }
}

export default LeftNav;
