import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { getTokenSaga } from '../../actions/appActions'
import { getIndustrySaga } from '../../actions/industyActions'
import { connect } from "react-redux";
import {
    Form, Icon, Input, Button,
} from 'antd';

class AppForm extends Component {
    state = {
        app: {}
    }

    handleChange = (e) => {
        const { app } = this.state
        const field = e.target.name
        app[field] = e.target.value
        this.setState({ app })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.app)
        this.props.getTokenSaga(this.state.app)
    }
    componentDidUpdate(prevProps, prevState){
        if(this.props.appData.token){
            console.log('token!!')
            this.props.getIndustrySaga(this.props.appData.token)
        }
    }
    render() {
        return (
            <div style={{ width: "60vw", height: "60vh", display: "flex", justifyContent: "center" }}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>

                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} name="name" placeholder="Nombre"  onChange={this.handleChange}/>
                    </Form.Item>
                    <Form.Item>

                        <Input prefix={<Icon type="align-left" style={{ color: 'rgba(0,0,0,.25)' }} />} name ="description" placeholder="Descripcion" onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
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
        getTokenSaga,
        getIndustrySaga
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(AppForm);
