import { NativeBaseProvider, StatusBar } from "native-base";
import { Theme } from './src/theme/theme';

import Home from "./src/screens/home/Home";

export default function App() {
  return (
    <NativeBaseProvider theme={Theme}>
      <StatusBar backgroundColor={Theme.colors.blue[800]} />
      <Home/>
    </NativeBaseProvider>
  );
}
