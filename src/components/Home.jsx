import React, { Component } from 'react'
import { Tabs, Layout } from 'antd';
import AppForm from './app/AppForm';
import IndustriesForm from './industries/IndustriesForm';
import IndustriesList from './industries/IndustriesList';

const TabPane = Tabs.TabPane;


const {
    Header, Footer, Content,
} = Layout;

class Home extends Component {

     callback(key) {
        console.log(key);
        //console.log()
        
    }

    render() {
        return (
            <Layout>
                <Header><h2 style={{ color: "white" }}>Industries App</h2></Header>
                <Content style={{display:"flex",justifyContent:"center"}}>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
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

export default Home;