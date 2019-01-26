import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {uploadIndustrySaga} from "../../actions/industyActions"
import {
    Form, Icon, Input, Button,
} from 'antd';

class IndustriesForm extends Component {
    state = {
        app: {}
    }

    handleChange = (e) => {
        const { app } = this.state
        const field = e.target.name
        app[field] = e.target.value
        this.setState({ app })
    }
    handleFileChange = (e) =>{
        //console.log(e.target.files[0])
        const {app} = this.state
        app.file = e.target.files[0]
        this.setState({app})
        console.log(this.state.app)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.app)
        console.log(this.props.appData.token)
        //this.props.uploadIndustrySaga({this.props.appData.token,this.state.app})
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
                        <Input prefix={<Icon type="file" style={{ color: 'rgba(0,0,0,.25)' }} />} type="file" onChange={this.handleFileChange}/>
                    </Form.Item>
                    <Form.Item>

                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
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
        uploadIndustrySaga
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(IndustriesForm);
