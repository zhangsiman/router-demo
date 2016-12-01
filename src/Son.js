import React, { PropTypes } from 'react'

class Son extends React.Component {
  render () {
      return(
        <div>
            son{this.context.color}
        </div>
      )
  }
}
Son.contextTypes = {
  color: React.PropTypes.string
};
export default Son;
