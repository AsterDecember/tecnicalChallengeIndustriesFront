import React, { Component } from 'react'
import { Tabs } from 'antd';
import AppForm from './app/AppForm';
import IndustriesForm from './industries/IndustriesForm';
import IndustriesList from './industries/IndustriesList';

const TabPane = Tabs.TabPane;



class Home extends Component {

    callback(key) {
        console.log(key);
        //console.log()

    }

    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Registro de Apps" key="1"><AppForm /></TabPane>
                    <TabPane tab="Agregar Industria" key="2"><IndustriesForm /></TabPane>
                    <TabPane tab="Mostrar Industrias" key="3"><IndustriesList /></TabPane>
                </Tabs> ,
            </div>
        )
    }
}

export default Home;