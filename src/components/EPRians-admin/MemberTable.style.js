import styled from 'styled-components';
import * as font from '../../styles/font';

export const S = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  gap: 1.5rem;
`;

S.MemberNum = styled.div`
  width: 100%;
  ${font.bold24}
  color: var(--white);
`;

S.GenInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 2.5rem;

  background-color: var(--grey500);

  ${font.reg18}
  color: var(--white);

  border: 0;

  &:focus {
    outline: none;
  }
`;

S.Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

S.Th = styled.th`
  width: ${props => props.$width || null};
  border-right: ${props => props.$border || '1px solid var(--grey300);'};
  box-sizing: border-box;
  background-color: ${props => props.$color || 'var(--grey500)'};
  ${font.reg18}
  color: var(--white);
  padding: 0.5rem 1.25rem;
`;

S.Td = styled.td`
  background-color: ${props => props.$color || 'var(--grey500)'};
  border-top: ${props => props.$top || '1px solid var(--grey300);'};
  border-right: ${props => props.$right || '1px solid var(--grey300);'};
  border-left: ${props => props.$left || '1px solid var(--grey300);'};
`;

S.TInput = styled.input`
  background-color: inherit;
  width: 100%;
  border: 0;
  box-sizing: border-box;
  padding: 0.5rem 1rem;

  ${font.reg14}
  color: var(--white);

  &:focus {
    outline: none;
  }
`;

S.TFileInput = styled.label`
  background-color: inherit;
  width: 100%;
  border: 0;
  box-sizing: border-box;
  ${font.reg14}
  color: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

S.TFileName = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  max-width: 70%;
`;

S.TdContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

S.CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

S.DeleteButton = styled.button`
  background-color: transparent;
  ${font.reg14}
  color: var(--grey300);

  width: 50%;
  height: 2.5rem;
  border-left: 1px solid var(--grey300);
`;

S.SaveButton = styled.button`
  margin-left: 0.75rem;
  padding: 0.25rem 1.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;

  color: var(--black);
  background-color: ${props =>
    props.disabled ? 'var(--grey300)' : 'var(--red)'};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;

S.ButtonTab = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

S.RowButton = styled.button`
  padding: 0.5rem 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  ${font.bold18}
  color:var(--grey100);
  background-color: transparent;
`;
