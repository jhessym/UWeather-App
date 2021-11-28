import 'react-native-gesture-handler';
import React , {useEffect} from 'react';
import { LogBox } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import{firebaseApp} from './src/utils/firebase';
import Navigation from "./src/navigation/Navigation";

LogBox.ignoreLogs(['Setting a timer']);

export default function App() {

  return (
    <PaperProvider>
      <Navigation/>
    </PaperProvider>
  )
  
}
