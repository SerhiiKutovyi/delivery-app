import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  gap: 20px;
`;

export const BoxShop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 260px;

  gap: ${p => p.theme.space[4]}px;

  margin-top: 20px;
  margin-left: 20px;
  padding: ${p => p.theme.space[4] }px;

  background: ${p => p.theme.colors.silver};

  /* p {
    text-align: center;
  } */
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  text-align: center;

  width: 100%;

  border-radius: 10px;

  font-family: 'Roboto';
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xxl};
  line-height: ${p => p.theme.lineHeights.text};
  color: ${p => p.theme.colors.yellow};
  background: ${p => p.theme.colors.white};

  &.active {
    font-weight: bold;
    color: ${p => p.theme.colors.accent};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
  }
`;

export const StyledOutlet = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;

  width: 100%;

  margin-top: 20px;
  margin-right: 20px;
  padding: ${p => p.theme.space[4]}px;

  background: ${p => p.theme.colors.silver};
`;
