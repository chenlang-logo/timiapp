import { Layout, Menu, Breadcrumb } from 'antd';
import React from "react"
import "./index.css"
import { Route, Link } from 'react-router-dom'
import StudentClass from "../components/StudentClass"
import DormitoryManagement from "../components/DormitoryManagement"
// import Dialogbox from "../components/Dialogbox"
// import pubsub from"../components/pubsub"

import {
  DesktopOutlined,
  PieChartOutlined,
  // FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default class Main extends React.Component {

  constructor(props){
    super(props);
  }
  state = {
    collapsed: false,
 

  };

  getBiuldnumber(e){
    // pubsub.publish("Biuldnumber",{
    //   key1:  e.key
    // })
    
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

 

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="10" icon={<PieChartOutlined />}>
              老师个人信息
            </Menu.Item>
            <Menu.Item key="11" icon={<DesktopOutlined />}>
              班级学生成绩
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="班级管理">
              <Menu.Item key="3"> <Link to="/Main/StudentClass"> 本班学生信息</Link></Menu.Item>
    
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="宿舍管理">
 
            <Menu.Item key="1" data-dormBuildId="1" onClick={(e)=>this.getBiuldnumber(e)}> 1栋</Menu.Item>
              <Menu.Item key="2" data-dormBuildId="1" onClick={(e)=>this.getBiuldnumber(e)}>2栋</Menu.Item>
              
            <Menu.Item key="3" data-dormBuildId="1" onClick={(e)=>this.getBiuldnumber(e)}> 3栋</Menu.Item>
              <Menu.Item key="4" data-dormBuildId="1" onClick={(e)=>this.getBiuldnumber(e)}>4栋</Menu.Item>
              
            <Menu.Item key="5" data-dormBuildId="1" onClick={(e)=>this.getBiuldnumber(e)}> 5栋</Menu.Item>
              <Menu.Item key="6" data-dormBuildId="1" onClick={(e)=>this.getBiuldnumber(e)}>6栋</Menu.Item>
     
            </SubMenu>
            {/* <Menu.Item key="9" icon={<FileOutlined />}>
         
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
           
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              
              <Route path="/Main">  </Route>
              {/* <Route path="/StudentClass" component={Dialogbox}></Route> */}
            
              <Route path="/Main/StudentClass" component={StudentClass}></Route>
              <Route path="/Main/DormitoryManagement" component={DormitoryManagement}>
              </Route>
            </div>
          </Content>
         
        </Layout>
      </Layout>
    );
  }
}


