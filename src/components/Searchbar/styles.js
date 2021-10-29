import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  align-items: center;

  position: relative;
`;

export const Input = styled.input`
  height: 26px;
  padding: 3px 26px 3px 10px;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 3px;
  background: ${({ theme }) => theme.backgroundPrimary};

  color: ${({ theme }) => theme.fontColor};

  & + svg {
    transition: color 200ms ease-in-out;
  }

  &:hover,
  &:focus {
    & + svg {
      color: ${({ theme }) => theme.fontColor};
    }
  }
`;

export const Icon = styled(FiSearch)`
  height: 12px;
  right: 5px;

  position: absolute;

  color: ${({ theme }) => theme.iconColor};
`;
