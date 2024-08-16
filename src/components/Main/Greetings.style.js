import styled from 'styled-components';
import {
  bold24,
  bold18,
  reg18,
  m_bold24,
  m_bold18,
  m_reg18,
} from '../../styles/font';

const S = {
  GreetingsLayout: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 7.75rem;
    @media (max-width: 1279px) {
      flex-direction: column;
      gap: 1.5rem;
    }
  `,
  PhotoWrapper: styled.img`
    width: 16.1875rem;
    height: 21.5833rem;
    border-radius: var(--xxs, 1rem);
    background: lightgray 50% / cover no-repeat;
    @media (max-width: 1279px) {
      width: 20.9375rem;
      height: 28.25rem;
    }
  `,
  MemberContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  NameText: styled.div`
    margin-bottom: 0.5rem;
    color: var(--grey100, #cfd1da);
    ${bold24}
    @media (max-width: 1279px) {
      margin-bottom: 0.3125rem;
      ${m_bold24}
    }
  `,
  RoleText: styled.div`
    margin-bottom: 3rem;
    color: var(--grey100, #cfd1da);
    ${bold18};
    @media (max-width: 1279px) {
      margin-bottom: 24px;
      ${m_bold18}
    }
  `,
  InfoText: styled.div`
    color: var(--grey100, #cfd1da);
    ${reg18};
    white-space: pre-line;
    @media (max-width: 1279px) {
      ${m_reg18}
    }
  `,
};

export { S };
