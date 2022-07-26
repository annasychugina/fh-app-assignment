import React from 'react';
import {IconButton} from 'react-native-paper';
import {SelectDropdownProps} from 'react-native-select-dropdown';

import {Colors} from '../../lib/theme';
import {StyledDropDown} from './styles';

type Props = {
  data: number[] | string[];
} & SelectDropdownProps;

export const Dropdown: React.FC<Props> = ({
  data,
  onSelect,
  defaultButtonText,
}) => {
  const handleSelect = (selectedItem, index) => {
    onSelect(selectedItem, index);
  };

  const renderDropdownIcon = (opened: boolean) => {
    return (
      <IconButton
        style={{marginRight: -5}}
        icon={opened ? 'chevron-up' : 'chevron-down'}
        color={Colors.blueRibbon}
        size={24}
      />
    );
  };

  return (
    <StyledDropDown
      data={data}
      dropdownIconPosition="right"
      defaultButtonText={defaultButtonText}
      onSelect={handleSelect}
      renderDropdownIcon={renderDropdownIcon}
    />
  );
};
