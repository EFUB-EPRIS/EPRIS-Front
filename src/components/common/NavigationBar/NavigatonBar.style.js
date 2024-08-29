import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/logo/Logo.svg';
import { ReactComponent as NavMobile } from '../../../assets/NavBar/MobileNavMenu.svg';
import { ReactComponent as NavMobileX } from '../../../assets/NavBar/x.svg';
import { bold18, m_bold18 } from '../../../styles/font';

const S = {
  Layout: styled.nav`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1rem 10rem;
    width: calc(100% - 20rem);
    background-color: ${({ isMenuOpen }) =>
      isMenuOpen ? 'var(--black)' : 'none'};

    @media (max-width: 750px) {
      width: 100%;
      box-sizing: border-box;
      padding: 1rem 1.25rem;
    }
    @media (min-width: 750px) and (max-width: 1279px) {
      width: 100%;
      padding: 1rem 1.25rem;
      box-sizing: border-box;
      margin: 0 auto;
    }
    @media (min-width: 1440px) {
      width: 70rem;
      margin: 0 auto;
    }
  `,
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  LogoImg: styled(Logo)`
    cursor: pointer;
  `,
  NavContainer: styled.ul`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 1279px) {
      display: none;
    }
  `,
  NavLink: styled(NavLink)`
    padding: 0.75rem;
    ${bold18}
    color: var(--white);
    text-decoration: none;
    cursor: pointer;
    &.active {
      color: var(--red);
    }
    :hover {
      color: var(--red);
    }
    @media (max-width: 1279px) {
      padding: 1rem 0.125rem;

      ${m_bold18}
    }
  `,
};

const M = {
  NavMenu: styled(NavMobile).attrs(props => ({
    as: props.$isMenuOpen ? NavMobileX : NavMobile,
  }))`
    display: none;
    @media (max-width: 1279px) {
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      cursor: pointer;
    }
  `,
  NavContainer: styled.div`
    display: none;

    cursor: pointer;
    @media (max-width: 1279px) {
      display: flex;
      flex-direction: column;
      align-items: start;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      z-index: 2000;
      padding-left: 1.5rem;
      background-color: var(--black);
    }
  `,
};
export { S, M };
