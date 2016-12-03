import React, { PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class Loading extends React.Component {
  render () {
    return(
      <div style={{textAlign:'center'}}>

          <CircularProgress />
      </div>
    )
  }
}

export default Loading;
