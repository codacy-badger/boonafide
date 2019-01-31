import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { clearMessages } from '../lib/redux/actions';
import styled from '@emotion/styled';

const BottomNav = styled.nav`
  height: 3em;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background-color: black;
  a {
    margin-right: 1em;
    color: red;
  }
`;

export const BottomMenu = connect(store => ({user: store.user}))(({user, dispatch}) => {
  return (
    <BottomNav>
      <NavLink exact to="/" onClick={()=> dispatch(clearMessages())}>Home</NavLink>
      <NavLink to="/search" onClick={()=> dispatch(clearMessages())}>Search</NavLink>
      <NavLink to="/newFavor" onClick={()=> dispatch(clearMessages())}>NewFavor</NavLink>
      <NavLink to="/messages" onClick={()=> dispatch(clearMessages())}>Messages</NavLink>
      <NavLink to="/philosophy" onClick={()=> dispatch(clearMessages())}>Philosophy</NavLink>
    </BottomNav>
  )
});
