import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getIndustrySaga } from '../../actions/industyActions'
import { Empty } from 'antd';

class IndustriesList extends Component {
    componentDidMount() {
        this.props.getIndustrySaga(this.props.appData.token)
    }
    render() {
        return (
            <div>
                Detalle de industrias
            </div>
        )
    }
}

//Set the main stage to props i need to use on this component
const mapStateToProps = (state) => {
    const {
        appData
    } = state;

    return {
        appData
    };
};

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        getIndustrySaga
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(IndustriesList);
