import React, { useState, useCallback } from 'react'
import { MdAdd } from 'react-icons/md'
import styled from 'styled-components'

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value)
  },[])

  //버튼을 클릭하면 발생할 이벤트
  const onSubmit = useCallback((e)=> {
    onInsert(value);
    setValue('');
    e.preventDefault();
  },[onInsert,value])
 

  return (
    <TodoInserWrapper onSubmit={onSubmit}>
      <input 
      type="text" 
      placeholder='할 일을 입력하세요' 
      value={value}
      onChange={onChange}
      />
      <button><MdAdd /></button>
    </TodoInserWrapper>
  )
}

const TodoInserWrapper = styled.form`
  display : flex;
  margin: 5px;
  border: 1px solid #495057;
  border-radius: 5px;
  
  input{
    background : none;
    outline : none;
    border : none;
    padding : 0.5rem;
    font-size : 16px;
    line-height : 1.5;
    color : #fff;
    &::placeholder {
      color : #334455;
    }
    flex : 1;
  }

  button{
    background : #868296;
    outline : none;
    border : none;
    color : #fff;
    padding : 1rem;
    font-size : 16px;
    cursor : pointer;
    transition : all 0.2s;
    &:hover{
      background : #adb5bd;
    }
  }
`;

export default TodoInsert