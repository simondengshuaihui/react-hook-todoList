import React, { useContext } from "react";
import { List, Button } from "antd";
import { AppContext } from "./App";
import classNames from "classnames";

const TodoList = props => {
  // 使用useContext钩子获取共享的AppContext数据
  const { todoList, dispatch } = useContext(AppContext);
  const onDelete = id => {
    dispatch({ type: "DEL_TODO", id });
  };
  const onToggleFinished = id => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  return (
    <List>
      {todoList.map(item => {
        const className = classNames({
          "list-item": true,
          "list-item__finished": item.done
        });
        let {queryText} = props
        if (queryText && !item.name.includes(queryText)) return null;
        return (
          <List.Item className={className} key={item.id}>
            <div className="list-item-wrap">
              <span
                style={{ width: "80%" }}
                onClick={() => onToggleFinished(item.id)}
              >
                {item.name}
              </span>
              <Button size="small" type="danger" onClick={() => onDelete(item.id)}>删除</Button>
            </div>
          </List.Item>
        );
      })}
    </List>
  );
};

export default TodoList;
