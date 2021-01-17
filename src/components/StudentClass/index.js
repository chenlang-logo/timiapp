import { Table, Tag, Space } from 'antd';
import axios from 'axios';

import React, { Component } from 'react'

export default class DormitoryManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "columns": [
        {
          title: '学号',
          dataIndex: 's_id',
          width: '15%',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: '姓名',
          dataIndex: 'stu_name',
          key: 'age',
        },
        {
          title: '性别',
          width: '8%',
          dataIndex: 'stu_sex',

          key: 'address',
        },
        {
          title: '成绩',
          dataIndex: 'stuCored',
          key: 'address',
        },
        {
          title: '电话',
          dataIndex: 'stu_tel',
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
          key: '0',
          s_id: '121211',
          stu_name: '天明',
          stu_sex: '男',
          stuCored:"查看",
          stu_tel:"18577441452",
          chenge:"修改",
          tags: ['nice', 'developer'],
        },


      ],
    }

 
  }

  // componentDidMount() {
  //   axios({
  //   url: "http://asutr3.natappfree.ccGET /teacher/findstudentAll",
  //  params:{}
  //   }).then(res => {
  //     console.log("res.data",res.data)
    
  //     // this.setState({
      
  //     //   data:res.data
  //     // })
  //   },
  //   // console.log("res.data",this.state.data)
  //   )
  
  //   }


  componentDidMount() {
    axios({
    url: " http://5qp2h6.natappfree.cc/teacher/findstudentAll"
  
    }).then(res => {
    
        // this.setState({
  
        //   data: res.data,
        // })
        console.log("res.data",res.data);
    })
  }
   
  render() {
    console.log(this.state.dataSouse);
    return (
      <div>
        <Table columns={this.state.columns} dataSource={this.state.data} />
      </div>
    )
  }
  
}


