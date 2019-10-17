import React,{useState,useEffect,useReducer} from 'react';
import getList from './api'
import { Card } from 'antd';
import Search from './search-input'
import AddTodo from './add-input'
import TodoList from './todo-list'
import todosReducer from './reducer'

export const AppContext = React.createContext({}) //新建AppContext对象

function App() {

  const [queryText, setQuertText] = useState('');
  // reducer钩子
  const [state, dispatch] = useReducer(todosReducer, []);
  // 用useEffect钩子发送请求
  useEffect(() => {
    getList().then(res=>{
      dispatch({type:'INIT',list:res})
    })
  },[]);
  return (
    // 用AppContext.Provider提供共享的数据
    <AppContext.Provider value={{todoList:state,dispatch}}>
       <Card title="Todo list"  style={{ width: 500 }}>
         <Search setQuertText={setQuertText}></Search>
         <AddTodo></AddTodo>
         <TodoList queryText = {queryText}></TodoList>
        </Card>
    </AppContext.Provider>
  );
}

export default App;
