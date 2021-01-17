import { Table, Tag, Space } from 'antd';
import axios from 'axios';
import React, { Component } from 'react'
// import { Modal, Button } from 'antd';
import Main from "../../Main"
// import React, { Component } from 'react'
// import Dialogbox from "../Dialogbox";
// import pubsub from"../pubsub"



export default class DormitoryManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "columns": [
        {
          title: '楼管',
          dataIndex: 'dormAdmin',
          width: '15%',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: '学生',
          dataIndex: 'stuName',
          key: 'age',
        },
        {
          title: '宿舍号',
          width: '10%',
          dataIndex: 'dromname',

          key: 'address',
        },
        {
          title: '学号',
          dataIndex: 'sid',
          key: 'address',
        },
        {
          title: '家庭住址',
          dataIndex: 'stuAddress',
          key: 'address',
        },
        {
          title: '修改',
          dataIndex: 'chenge',
          key: 'address',
        },

        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a>修改 {record.name}</a>
              <a>删除</a>
            </Space>
          ),
        },
      ],


      "data": [
        {
          key: '1',
          dormAdmin: '盖聂',
          stuName: 32,
          dromname: "9b211",
          sid: "1001",
          stuAddress: "中国",

          chenge: "修改",
          tags: ['nice', 'developer'],
        },


      ],

      loading: false,
      visible: false,

      dormBuildId: ""


    }

}






  // state = {
  //   loading: false,
  //   visible: false,
  // };


  componentDidMount() {
    axios({
      url: "http://5qp2h6.natappfree.cc/dorm/dormbuild",
      params: {
        dormBuildId: 3
      }
    }).then(res => {
      console.log("res.data",res.data);

     this.setState({
       data:res.data
     })
    })
  }

  // this.setState({

  //   data:res.data
  // })

  // console.log("res.data",this.state.data)





  //获取后台数据
  getnumber(e) {

    //获取输入框的值
    this.setState({
      dormBuildId: e.target.value
    })


  }



  // getBiuldnumber = (e) => {
  //   console.log("event.target.getAttribute", e.key);

  // }
  //服务器发送请求查询数据
  putnumber = () => {
    axios({
      url: "http://asutr3.natappfree.cc/dorm/findbuilds",
      params: {
        dormBuildId: this.state.dormBuildId
      }
    }).then(res => {

      this.setState({

        data: res.data
      })
    })
  }

  render() {
    console.log(this.state.dataSource);
    return (
      <div>
        {/* <Dialogbox/> */}
        <input type="text" onChange={(e) => this.getnumber(e)} />  <input type="button" value="查询 " onClick={this.putnumber()} />

        <Table columns={this.state.columns} dataSource={this.state.data} />
      </div>
    )
  }
}



