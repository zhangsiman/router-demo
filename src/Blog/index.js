import React, { PropTypes } from 'react';
import BlogCard from '../component/BlogCard'

let data=[
  {index:1,title:'hello',desc:'one'},
  {index:2,title:'hi',desc:'two'},
  {index:3,title:'how',desc:'three'},
  {index:4,title:'nice',desc:'four'}
]

class Blog extends React.Component {
  render () {
    let cards=data.map((item,i) => <BlogCard key={i} {...item} />)
    return(
      <div className='blog-wrap'>
          {cards}
      </div>
    )
  }
}

export default Blog;
