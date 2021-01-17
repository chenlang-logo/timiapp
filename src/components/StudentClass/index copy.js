import React, { useContext, useState, useEffect, useRef,Component } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import "./index.css";
const EditableContext = React.createContext(null);


export default class StudentClass extends Component {
  render() {
    return (
   <EditableTable />
    )
  }
}



const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      // {
      //   title: 'name',
      //   dataIndex: 'name',
       
      // },
      {
        title: '学号',
        dataIndex: 's_id',
        width: '15%',
        editable: false,
      },
      {
        title: '姓名',
        dataIndex: 'stu_name',
        editable: false,
      },
      ,
      {
        title: '性别',
        width: '8%',
        dataIndex: 'stu_sex',
        editable: false,
      }
      ,
      {
        title: '成绩',
        dataIndex: 'stuCored',
        editable: false,
      },
      {
        title: '电话',
        dataIndex: 'stu_tel',
        editable: false,
      },
      {
        title: '修改',
        dataIndex: 'chenge',
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
      
              <a>修改</a>
  
          ) : null,
      },
      
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
        {
          key: '0',
          s_id: '121211',
          stu_name: '天明',
          stu_sex: '男',
          stuCored:"查看",
          stu_tel:"18577441452",
          chenge:"修改"

        },
        {
          key: '1',
          s_id: '121211',
          stu_name: '天明',
          stu_sex: '男',
          stuCored:"查看",
          stu_tel:"18577441452",
          chenge:"修改"

        },
        {
          key: '2',
          s_id: '121211',
          stu_name: '天明',
          stu_sex: '男',
          stuCored:"查看",
          stu_tel:"18577441452",
          chenge:"修改"

        }
        
      ],
      count: 2,
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };


  handleAdd = () => {

  
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: '32',
      address: `London, Park Lane no. ${count}`,

      
    };

    
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }

  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Button
          onClick={this.handleAdd}
        >
          添加学生
        </Button>
        <Button
          onClick={this.handleSave}
        >
          保存
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}







