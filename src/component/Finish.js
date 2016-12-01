import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';

class Finish extends React.Component {
  render () {
      const style = {
              height: 130,
              width: 130,
              margin: 20,
              textAlign: 'center',
              display: 'inline-block',
            };
    return(
      <div>
      <p style={{fontWeight:'blod'}}>{this.props.data.login}</p>
      <Paper style={style} zDepth={2} circle={true}>
        <img src={this.props.data.avatar_url} style={{width:'100%',borderRadius:"50%"}}></img>
      </Paper>
        <div className="show-git">
          <p>Fllowers<br/>{this.props.data.followers+100}</p>
          <p>following<br/>{this.props.data.followig+100}</p>
          <p>public_repos<br/>{this.props.data.public_repos}</p>
        </div>
      </div>
    )
  }
}

export default Finish;
