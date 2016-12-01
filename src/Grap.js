import React, { PropTypes } from 'react';
import Son from "./Son"

class Grap extends React.Component {
  getChildContext(){
return {color: "purple"};
}
  render () {

        return(
        <div>
            爷爷
            <Son />
        </div>
      )
  }
}
Grap.childContextTypes = {
  color: React.PropTypes.string
};
export default Grap;
