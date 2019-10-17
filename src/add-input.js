import React,{useContext,useState} from "react";
import { Input, Button, Row, Col } from "antd";
import {AppContext} from './App'
const AddTodo = () => {
  const { dispatch,todoList } = useContext(AppContext)
  // useState()对组件内的状态进行管理
  const [todoName, setTodoName] = useState('');
  const len = todoList.length
  const lastOne = len>0?todoList[len-1]:{id:0}
  const addTodo = ()=>{
    dispatch({type:'ADD_TODO',todo:{id:lastOne.id+1,name:todoName,done:false}})
    setTodoName('')
  }
  return (
    <Row style={{marginTop:'10px'}}>
      <Col span={16}>
        <Input
          onPressEnter={addTodo}
          placeholder="添加任务"
          value={todoName}
          onChange={e => setTodoName(e.target.value)}
        ></Input>
      </Col>
      <Col span={2}></Col>
      <Col span={6}>
        <Button type="primary" onClick={addTodo}>添加任务</Button>
      </Col>
    </Row>
  );
};

export default AddTodo;
