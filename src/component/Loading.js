import React, { PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class Loading extends React.Component {
  render () {
    return(
      <div>
      
          <CircularProgress />
      </div>
    )
  }
}

export default Loading;
