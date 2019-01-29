import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getIndustryIDSaga } from '../../actions/industyActions'
import IndustryElement from './IndustryElement';

class IndustriesDetail extends Component {

  componentDidMount(){
    this.props.getIndustryIDSaga({
      token:this.props.appData.token,
      id:this.props.match.params.id
    })
  }

  render() {
    return (
      <div>
        <h2>Detalle</h2> 
        <IndustryElement element={this.props.industryData.industry}/>
      </div>
    )
  }
}


//Set the main stage to props i need to use on this component
const mapStateToProps = (state) => {
  const {
      appData,
      industryData
  } = state;

  return {
      appData,
      industryData
  };
};

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    getIndustryIDSaga
  }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(IndustriesDetail);
