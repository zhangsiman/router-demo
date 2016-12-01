import React, { PropTypes } from 'react'
import {Card} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from "axios";
import Loading from '../component/Loading';
import Finish from "../component/Finish";




class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      //0 的时候就是还没有搜索　1的时候就是正在等待 2的时候就是接收成功
      wait:0
    }

  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({
      wait:1
    })
    let value=this.refs.gitname.getValue();
    this.refs.form.reset();//提交完之后清空文本框
    axios.get(`https://api.github.com/users/${value}`)
          .then(res=>this.setState({
            data:res.data,
            wait:2
          }))
          .catch(error=> {console.log(error);this.setState({wait:0})})
    }

  render(){
    let showGitInfor=this.state.wait==0 ? null : this.state.wait==1 ? <Loading /> : <Finish data={this.state.data}/>

      return(
        <div className="about-wrap">
          <div className='git-card'>
              <h2 style={{color:"#ccc"}}>Search Github info</h2>
              <form className="about-form" onSubmit={this.handleSubmit.bind(this)} ref='form'>
                <TextField hintText="Hint Text" floatingLabelText="github username" underlineFocusStyle={{borderColor:'orange500'}} style={{width:'60%'}}ref="gitname"/>
                <RaisedButton label="Search" secondary={true} style={{marginLeft:'10px'}}/>
              </form>
              {showGitInfor}
          </div>
        </div>
      )
  }
}

export default About;
