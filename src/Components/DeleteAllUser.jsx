import React from 'react';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { clearALlUsers } from '../store/slices/UserSlice';

export const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteUsers = () =>{
    dispatch(clearALlUsers())
  }
  return (
    <Wrapper>
      <button className='btn clear-btn' onClick={deleteUsers}>clear users</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`
