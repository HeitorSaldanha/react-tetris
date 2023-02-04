import styled from 'styled-components';
import { CELL_CONTENT } from '@enums';

interface Props {
  content: CELL_CONTENT;
  color: string;
}

export const StyledCell = styled.div<Props>`
  width: auto;
  background: rgba(${(props) => props.color}, 0.8);
  border: ${(props) =>
    props.content === CELL_CONTENT.EMPTY ? '0px solid' : '4px solid'};
  border-bottom-color: rgba(${(props) => props.color}, 0.1);
  border-right-color: rgba(${(props) => props.color}, 1);
  border-top-color: rgba(${(props) => props.color}, 1);
  border-left-color: rgba(${(props) => props.color}, 0.3);
`;
