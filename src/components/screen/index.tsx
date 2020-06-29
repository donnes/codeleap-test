import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { ScreenProps } from './props';

import { SafeAreaView, ScrollView } from './styles';

const Screen: React.FC<ScreenProps> = ({ children, style }) => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  });

  return (
    <SafeAreaView>
      <ScrollView style={style}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen;
