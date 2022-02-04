import styled from 'styled-components';
import {colors, shadow, margin, padding, button, border, font, gradient} from '../../global.Styles';

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: 500;
  border-radius: 0.5rem;
  border: 0.25rem solid black;
  margin-bottom: 0.5rem;
  cursor: pointer;
  background-color: ${colors.yellow};
`;
