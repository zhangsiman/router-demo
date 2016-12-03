import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class BlogCard extends React.Component {
  render () {
        return(
          <div className='blog-card'>
            <div className='blog-index'><span>{this.props.index}</span></div>
            <div className='blog-content clearfix' >
              <h3>{this.props.title}</h3>
              <p>{this.props.desc}</p>
              <MuiThemeProvider>
              <RaisedButton label="阅读更多" labelColor='#757575'/>
              </MuiThemeProvider>
            </div>
          </div>
        )
  }
}
BlogCard.defaultProps={
  index:1,
  title:'我是默认标题',
  desc:'我是内容'
}
BlogCard.propTypes={
  index:React.PropTypes.number,
  title:React.PropTypes.string,
  desc:React.PropTypes.string
}
export default BlogCard;
