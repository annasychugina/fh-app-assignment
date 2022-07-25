import styled from 'styled-components/native';

export const Container = styled.View({
  flex: 1,
});

export const ContentWrapper = styled.View({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const StyledView = styled.View({
  flex: 0.5,
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  paddingVertical: 4,
});
