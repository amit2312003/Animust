import {View, Text} from 'react-native';
import React from 'react';
import {BackButtonIcon, BackButton} from './BackButton.styles';
import {useNavigation} from '@react-navigation/native';

interface Props {
  isModal: boolean;
  visible?: boolean;
  setVisible?: (value: boolean) => void;
}

const BackButtonComponent = ({isModal, setVisible, visible}: Props) => {
  const navigation = useNavigation();

  const goBack = () => {
    if (!isModal) navigation.goBack();
    if (isModal && setVisible && visible) setVisible(false);
    if (isModal && setVisible && !visible) setVisible(true);
  };

  return (
    <BackButton onPress={goBack}>
      <BackButtonIcon name="arrow-left" />
    </BackButton>
  );
};

export default BackButtonComponent;
