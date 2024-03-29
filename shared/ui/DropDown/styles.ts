import RNDropdown from 'react-native-select-dropdown';
import styled from 'styled-components/native';

import {Colors} from '../../lib/theme';
import {rem} from '../helpers';

export const StyledDropDown = styled(RNDropdown).attrs(() => ({
  buttonStyle: {
    width: rem(100),
    height: rem(40),
    borderRadius: 8,
    backgroundColor: Colors.white,
    borderWidth: 0.8,
    borderColor: Colors.tropicalBlue,
  },
  buttonTextStyle: {
    color: Colors.ebonyClay,
    textAlign: 'left',
    fontSize: rem(16),
    lineHeight: 20,
    fontFamily: 'Inter_600SemiBold',
  },
  dropdownStyle: {backgroundColor: Colors.white},
}))``;
