import React from "react";
import { Input } from "antd";

const { Search } = Input;
const SearchInput = (props) => {
    const {setQuertText} = props
  const searchList = query => {
    setQuertText(query)
  };
  return <Search onSearch={value => searchList(value)} enterButton></Search>;
};

export default SearchInput;
