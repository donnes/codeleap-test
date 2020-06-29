import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { ScreenProps } from './props';

import { SafeAreaView, ScrollView } from './styles';

const Screen: React.FC<ScreenProps> = ({
  children,
  style,
  refreshControl,
  ...props
}) => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  });

  return (
    <SafeAreaView>
      <ScrollView
        style={style}
        refreshControl={refreshControl}
        {...props}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen;
