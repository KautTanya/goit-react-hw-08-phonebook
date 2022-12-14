import styled from 'styled-components';
export const Email = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #00457E;
  margin: 0;
  margin-left: auto;
  margin-right: 30px;
`;
export const Button = styled.button`
  display: flex;
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
`;
export const Box = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #00457E;
`;