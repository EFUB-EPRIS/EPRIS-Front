import styled from 'styled-components';
import { bold24, m_bold18 } from '../../styles/font';
import { flexCenter } from '../../styles/common';

const S = {
  FloatingButtonContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 999;

    height: ${props => (props.$height ? props.$height : '17rem')};

    @media screen and (max-width: 1279px) {
      display: flex;
      position: static;
      flex-direction: row;
      justify-content: center;
      flex: 1 0 0;
      gap: 0.5rem;

      max-height: 4.25rem;
    }
    @media screen and (min-width: 1280px) {
      position: ${props => props.$position};
      top: 2rem;
      width: 11.875rem;
    }
  `,
  Button: styled.button`
    ${flexCenter}

    max-width: 10rem;
    padding: 1.25rem;

    border-radius: 0.75rem;
    background-color: var(--grey500);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);

    ${bold24}
    color: ${({ $isActive }) => ($isActive ? 'var(--red)' : 'var(--white)')};
    white-space: pre-line;

    @media screen and (max-width: 1279px) {
      padding: 1rem 1.25rem;
      max-width: 100%;
      width: 100%;

      ${m_bold18}
    }
  `,
};

export { S };
