import React from 'react'
import{
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdDelete
} from 'react-icons/md'
import styled from 'styled-components'
import cn from 'classnames'


const TodoListItem = ({todo,onRemove,onToggle}) => {
  const {id, text, checked} = todo;
  return (
    <TodoItemWrapper>
      <CheckBox 
      className={cn('checkbox', {checked})}
      onClick={(() => onToggle(id))}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className='text'>{text}</div>
      </CheckBox>
      <Delete onClick={()=> onRemove(id)}>
        <MdDelete />
      </Delete>
    </TodoItemWrapper>
  )
}

const TodoItemWrapper = styled.div`
  display : flex;
  align-items : center;
  padding : 1rem;
  border-top : 1px solid #dee2e6;
  &:last-child{
    border-bottom : 1px solid #dee2e6;
  }
  &:nth-child(even) {
    background : #f8f6fa
  };
`;

const CheckBox = styled.div`
  display : flex;
  align-items : center;
  cursor :pointer;
  flex : 1;
  
  svg{
    font-size : 1.3rem;
    color : #333;
  }

  .text{
    margin-left : 10px;
    color : #333;
  }

  &.checked{
    svg{
      color : #334455;
    }
    .text{
      color : #adb5bd;
      text-decoration: line-through;
    }
  }
`;

const Delete = styled.div`
  display : flex;
  align-items : center;
  font-size : 1.3rem;
  color : #ff6b6b;
  cursor :pointer;
  &:hover {
    color : #adb5bd;
  }
`;

export default TodoListItem