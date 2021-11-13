import 'react-native-gesture-handler';
import React , {useEffect} from 'react';
import Navigation from "./src/navigation/Navigation";
import { Provider as PaperProvider } from 'react-native-paper';
import{firebaseApp} from './src/utils/firebase';

export default function App() {

  return (
    <PaperProvider>
      <Navigation/>
    </PaperProvider>
  )
  
}
