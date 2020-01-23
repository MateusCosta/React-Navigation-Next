import styled from 'styled-components/native';
import {
    widthPercentageToDP,
    heightPercentageToDP,
    WHeight,
    WWidth,
  } from '../../utils';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex: 1;
  font-family: Raleway-Regular;
`;

export const MenuItem = styled.View`
  /* /* flex:1; */
  flex-direction: row;
  padding-left: 10px;
  margin-top: 10px;
`;

export const MenuItemIcon = styled(Icon).attrs({
    size: heightPercentageToDP('5%'),
    color: '#F43F3C'
})`
    height: ${heightPercentageToDP('5%')};
`;

export const MenuItemText = styled.Text`
  padding-left: ${widthPercentageToDP('4%')};
  text-align: left;
  line-height: ${heightPercentageToDP('5%')};
 
`;

export const ContainerProfile = styled.ImageBackground`
  align-items: center;
  flex: 0.25;
`;

export const ProfileImage = styled.Image`
  width: ${widthPercentageToDP('20%')};
  height: ${widthPercentageToDP('20%')};
  border-radius: ${heightPercentageToDP('10%')};
  margin-top:${heightPercentageToDP('4%')};
`;

export const ProfileName = styled.Text`
  color: #e31e28;
  margin-top:${heightPercentageToDP('1%')};
  font-size: ${heightPercentageToDP('4%')};

  font-family: Raleway-Regular;
`;

export const ProfileEmail = styled.Text``;

export const ContainerMenu = styled.View`
  flex: 0.75;
  margin-top: ${heightPercentageToDP('2%')};
`;
