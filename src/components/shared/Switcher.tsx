import React from 'react';
import * as Styled from './Switcher.styled'

const OPTION_WIDTH = 200

type SwitcherOption = {
  title: string;
  onClick: Function;
  isSelected: boolean;
}

type PropTypes = {
  switcherOptions: SwitcherOption[];
  selectedOption: any;
}

const Switcher = ({ switcherOptions }: PropTypes) => {
  return (
    <Styled.Wrapper width={switcherOptions.length * OPTION_WIDTH}>
      {switcherOptions.map(switcher => (
        <Styled.Option
          onClick={() => switcher.onClick()}
          key={switcher.title}
          isSelected={switcher.isSelected}
        >
          { switcher.title }
        </Styled.Option>
      ))}
    </Styled.Wrapper>
  );
};

export default Switcher;
