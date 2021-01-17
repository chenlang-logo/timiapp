// import React, { useContext, useState, useEffect, useRef, Component } from 'react';
// import axios from 'axios'
// import Dialogbox from "../Dialogbox"
// import { Table, Input, Button, Popconfirm, Form } from 'antd';
// import "./index.css";
// const EditableContext = React.createContext(null);


// export default class StudentClass extends Component {
//   render() {
//     return (
//       <EditableTable />
//     )
//   }
// }



// const EditableRow = ({ index, ...props }) => {
//   const [form] = Form.useForm();
//   return (
//     <Form form={form} component={false}>
//       <EditableContext.Provider value={form}>
//         <tr {...props} />
//       </EditableContext.Provider>
//     </Form>
//   );
// };

// const EditableCell = ({
//   title,
//   editable,
//   children,
//   dataIndex,
//   record,
//   handleSave,
//   ...restProps
// }) => {
//   const [editing, setEditing] = useState(false);
//   const inputRef = useRef(null);
//   const form = useContext(EditableContext);
//   useEffect(() => {
//     if (editing) {
//       inputRef.current.focus();
//     }
//   }, [editing]);

//   const toggleEdit = () => {
//     setEditing(!editing);
//     form.setFieldsValue({
//       [dataIndex]: record[dataIndex],
//     });
//   };



//   let childNode = children;

//   if (editable) {
//     childNode = editing ? (
//       <Form.Item
//         style={{
//           margin: 0,
//         }}
//         name={dataIndex}
//         rules={[
//           {
//             required: true,
//             message: `${title} is required.`,
//           },
//         ]}
//       >
//         <Input ref={inputRef}  />
//       </Form.Item>
//     ) : (
//         <div
//           className="editable-cell-value-wrap"
//           style={{
//             paddingRight: 24,
//           }}
//           onClick={toggleEdit}
//         >
//           {children}
//         </div>
//       );
//   }

//   return <td {...restProps}>{childNode}</td>;
// };

// class EditableTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.columns = [

//       {
//         title: '楼管',
//         dataIndex: 'dormAdmin',
//         width: '15%',
//         editable: true,
//       },
//       {
//         title: '学生',
//         dataIndex: 'stuName',
//         editable: true,
//       },
//       ,
//       {
//         title: '宿舍号',
//         width: '10%',
//         dataIndex: 'dromname',
//         editable: true,
//       }
//       ,
//       {
//         title: '学号',
//         dataIndex: 'sid',
//         editable: true,
//       },
//       {
//         title: '家庭住址',
//         dataIndex: 'stuAddress',
//         editable: true,
//       },
//       {
//         title: '修改',
//         dataIndex: 'chenge',
//         render: (_, record) =>
//           this.state.dataSource.length >= 1 ? (

//             <a>修改</a>

//           ) : null,
//       },
//       {
//         title: '删除',
//         dataIndex: 'operation',
//         render: (_, record) =>
//           this.state.dataSource.length >= 1 ? (
//             <Popconfirm title="确定要删除吗" onConfirm={() => this.handleDelete(record.key1)}>
//             <a>删除</a>
//           </Popconfirm>
          
//           ) : null,
//       },
//     ];
//     this.state = {
//       count: 2
//     }
//   }


//   componentDidMount() {
//     axios({
//       url: " http://localhost:3000/dorStudent"

//     }).then(res => {
      
//         this.setState({
//           dataSource: res.data,
//         })
//     })
//   };
// //删除元素
//   handleDelete = (key) => {

//     //后台删除
//     // axios({
//     //   url:"http://localhost:3000"
//     // }).then(res=>{
//     //   this.setState({
//     //     dataSource:res.data
//     //   })

//     // } )
     
    
//     const dataSource = [...this.state.dataSource];
   
    
//     this.setState({
//       dataSource: dataSource.filter((item) => item.key1 !== key),
//     });
//   };


//   //修改学生信息
//   // handleDelete=(key)={


//   // }
//   handleSave=async ()=>{
//       try {
//        axios({
//          url:"http://localhost:3000/dorStudent",
//          post:"post",
//          data:{}
//        }).then(
//          res=>{
//            this.setState={
//                newData: res.data
//            }
        
//          }
//        )
  
        
//       } catch (errInfo) {
//         console.log('Save failed:', errInfo);
//       }
//     };
  

//   //添加学生
//   handleAdd = () => {
//     // const { count, dataSource } = this.state;

//     // const newData = {
//     //   key: count,
//     //   dormAdmin: '扶苏',
//     //   stuName: '天明',
//     //   dromname: '124',
//     //   sid:"12345",
//     //   stuAddress:"西安",
//     //   chenge:"修改"
//     // };
//     // this.setState({
//     //   dataSource: [...dataSource, newData],
//     //   count: count + 1,
//     // });

//     return <Dialogbox></Dialogbox>
//   };


//   render() {
//     const { dataSource } = this.state;
   
//     const components = {
//       body: {
//         row: EditableRow,
//         cell: EditableCell,
//       },
//     };
//     const columns = this.columns.map((col) => {
//       if (!col.editable) {
//         return col;
//       }

//       return {
//         ...col,
//         onCell: (record) => ({
//           record,
//           editable: col.editable,
//           dataIndex: col.dataIndex,
//           title: col.title,
  
//         }),
//       };
//     });
//     return (
//       <div>
//         <Button
//           onClick={this.handleAdd}
//           type="primary"
//           style={{
//             marginBottom: 16,
//           }}
//         >
//           添加学生
//         </Button>

//         {/* 保存 */}
//         <Button
//           onClick={this.handleSave}
//           type="primary"
//           style={{
//             marginBottom: 16,
//           }}
//         >

//           保存
//         </Button>
//         <Table
//           components={components}
//           rowClassName={() => 'editable-row'}
//           bordered
//           dataSource={dataSource}
//           columns={columns}
//         />
//       </div>
//     );

//    }
  
// }










