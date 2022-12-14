import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  background-color: transparent;
  color: #00457E;
  border: 3px solid #00457E;
  border-radius: 5px;
  max-height: 50px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #6B99C3;
    color: white;
  }
  &:not(:last-child) {
    margin-left: auto;
    margin-right: 40px;
  }
  &.active {
    pointer-events: none;
    background-color: #6B99C3;
    color: white;
  }
`;