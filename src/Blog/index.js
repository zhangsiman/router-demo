import React, { PropTypes } from 'react';
import BlogCard from '../component/BlogCard';
import axios from 'axios';
import Loading from '../component/Loading'

class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/zhangsiman/router-demo/master/data/BlogCard.json?a')
          .then(res => this.setState({data:res.data,wait:false}) )
  }
  render () {

    return(
      <div className='blog-wrap'>
        {this.state.wait ? <Loading /> : this.state.data.map((item,i) => <BlogCard key={i} {...item} />)}
      </div>
    )
  }
}

export default Blog;
