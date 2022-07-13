import {HeaderBackButton} from '@react-navigation/elements';
import type {HeaderBackButtonProps} from '@react-navigation/elements';
import type {ComponentType} from 'react';
import React from 'react';
import styled from 'styled-components/native';

export type StyledHeaderBackButtonProps = {
  onPress?(): void;
  icon?: React.ReactNode;
  marginLeft?: number;
  marginRight?: number;
} & HeaderBackButtonProps;

export const StyledHeaderBackButton = styled<
  ComponentType<StyledHeaderBackButtonProps>
>(HeaderBackButton).attrs(({icon: Icon}) => ({
  backImage: () => Icon,
}))(({marginLeft = 12, marginRight}) => ({
  marginLeft,
  marginRight,
}));
