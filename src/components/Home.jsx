import React, { Component } from 'react'
import { Tabs, Layout } from 'antd';
import AppForm from './app/AppForm';
import IndustriesForm from './industries/IndustriesForm';
import IndustriesList from './industries/IndustriesList';
import {getIndustrySaga} from '../actions/industyActions'
const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
    if(key==3){
        this.props.getIndustrySaga(this.props.appData.token)
    }
}
const {
    Header, Footer, Content,
} = Layout;

export default class Home extends Component {
    render() {
        return (
            <Layout>
                <Header><h2 style={{ color: "white" }}>Industries App</h2></Header>
                <Content style={{display:"flex",justifyContent:"center"}}>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Registro de Apps" key="1"><AppForm /></TabPane>
                        <TabPane tab="Agregar Industria" key="2"><IndustriesForm /></TabPane>
                        <TabPane tab="Mostrar Industrias" key="3"><IndustriesList /></TabPane>
                    </Tabs>,
                </Content>
                <Footer>Code by Mike</Footer>
            </Layout>
        )
    }
}
