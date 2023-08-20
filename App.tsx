import React from 'react';
import { NativeBaseProvider, StorageManager, ColorMode, StatusBar, extendTheme, theme } from 'native-base';
import Routes from './src/Routes';

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

export default function App() {
  return (
    <NativeBaseProvider config={config} >
      <Routes/>
    </NativeBaseProvider>
  );
}
