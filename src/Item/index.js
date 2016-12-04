import React, { PropTypes } from 'react';
import marked from "marked";
import axios from "axios";
import Loading from "../component/Loading"

// 就是为了把md格式转换为html格式
class Item extends React.Component {
      constructor(){
        super();
        this.state={
          data:''
        }
      }
    componentDidMount(){
      let address=this.props.params.title;
      axios.get(`https://raw.githubusercontent.com/zhangsiman/router-demo/master/data/${address}.md`)
            .then(res=>this.setState({data:res.data}))
            .catch(err=>alert(err))
    }
    render () {
    return(
      <div className='item-wrap'>
        {this.state.data.length==0 ? <Loading /> :
        <div dangerouslySetInnerHTML={{__html:marked(this.state.data)}}></div>}
      </div>
    )

  }
}

export default Item;
