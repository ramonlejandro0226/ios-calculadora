/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {
  StatusBar,
  View,
} from 'react-native';
import { CalculatorScreen } from './presentation/Screen/CalculatorScreen';
import { styles } from './app-theme';



function App() {
  return (
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'}
       backgroundColor={'black'} />
       <CalculatorScreen/>
    </View>
  );
}



export default App;
