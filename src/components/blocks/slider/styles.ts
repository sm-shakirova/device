import styled from 'styled-components';
import { IBulletProps } from './slider';

export const StyledSlider = styled.section`
  padding: 0 ${(props) => props.theme.pagePadding};
`;

export const Slides = styled.ul`
  background: linear-gradient(to bottom, ${(props) => props.theme.colors.themeMain} 154px, transparent 0);
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Slide = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${(props) => props.theme.layoutGap};
`;

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const RightArrow = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 20px;
  margin: auto;
  background: url('images/arrows/tall-arrow.svg') no-repeat center;
  width: 40px;
  height: 80px;
  border: none;
  cursor: pointer;
  padding: 40px;
  
  &:hover {
    opacity: 0.6;
  }
`;

export const LeftArrow = styled(RightArrow)`
  transform: rotate(180deg);
  right: unset;
  left: 20px;
`;

export const TextContent = styled.div`
  position: relative;
`;

export const BulletList = styled.ol`
  list-style: none;
  padding: none;
  margin: none;
  display: grid;
  grid-template-columns: repeat(3, min-content);
  position: absolute;
  bottom: 150px;
  right: 60px;
  
  li {
    padding: 11px;
  }
`;

export const Bullet = styled.button<IBulletProps>`
  background-color: ${(props) => props.isCurrent ? props.theme.colors.basicBlack : 'transparent'};
  width: 12px;
  height: 12px;
  border: 2px solid ${(props) => props.theme.colors.basicBlack};
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
`;


