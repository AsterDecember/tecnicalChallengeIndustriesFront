import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getIndustrySaga } from '../../actions/industyActions'
import { Empty } from 'antd';

class IndustriesList extends Component {

    fetchIndustries() {
        //this.props.getIndustrySaga(this.props.appData.token)
    }
    drawIndustries() {
        return this.props.industryData.industries.map((e, i) => {
            return <li key={i}>ID:{e.id} Nombre:{e.name}</li>
        })
    }

    render() {
        return (
            <div>

                {this.props.industryData.industries.length > 0 ? (
                    <div>
                        {this.drawIndustries()}

                    </div>
                ) : (
                    <Empty
                        description={
                            <span>
                                No te registraste aun
                            </span>
                        } />
                )}
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
        getIndustrySaga
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(IndustriesList);
