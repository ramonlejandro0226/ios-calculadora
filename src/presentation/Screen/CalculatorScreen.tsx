/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View,Text} from 'react-native';
import { colors, styles } from '../../app-theme';
import { CalculatorButton } from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';


export const CalculatorScreen = () => {

    const {number,prevnumber,buildNumber,clean,deleteOperation, divideOperation,
        muliplyOperation,
        addperation,
        substracOperation,toggleSign,calculaterResult,formula} = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
        <View style={{paddingHorizontal:30,paddingBottom:20}}>

        <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={styles.mainResult}>
        { formula}
        </Text>
        <Text
         adjustsFontSizeToFit
         numberOfLines={1}
        style={styles.subResult}>
          {(prevnumber ==='0')? '': prevnumber}
        </Text>
        </View>


        <View style={styles.row}>
          <CalculatorButton blackText  onPress={clean}    label="C" color={colors.lightgray}/>
          <CalculatorButton blackText  onPress={toggleSign}   label="+/-" color={colors.lightgray}/>
          <CalculatorButton blackText  onPress={deleteOperation}   label="del" color={colors.lightgray}/>
          <CalculatorButton  onPress={divideOperation}   label="÷" color={colors.orange}/>
        </View>

        <View style={styles.row}>
          <CalculatorButton  onPress={()=>buildNumber('7')}   label="7" color={colors.darkgray}/>
          <CalculatorButton  onPress={()=>buildNumber('8')}   label="8" color={colors.darkgray}/>
          <CalculatorButton  onPress={()=>buildNumber('9')}   label="9" color={colors.darkgray}/>
          <CalculatorButton  onPress={muliplyOperation}   label="x" color={colors.orange}/>
        </View>


        <View style={styles.row}>
          <CalculatorButton  onPress={()=>buildNumber('4')}   label="4" color={colors.darkgray}/>
          <CalculatorButton  onPress={()=>buildNumber('5')}   label="5" color={colors.darkgray}/>
          <CalculatorButton  onPress={()=>buildNumber('6')}   label="6" color={colors.darkgray}/>
          <CalculatorButton  onPress={substracOperation}   label="-" color={colors.orange}/>
        </View>

        <View style={styles.row}>
          <CalculatorButton  onPress={()=>buildNumber('1')}   label="1" color={colors.darkgray}/>
          <CalculatorButton  onPress={()=>buildNumber('2')}   label="2" color={colors.darkgray}/>
          <CalculatorButton  onPress={()=>buildNumber('3')}   label="3" color={colors.darkgray}/>
          <CalculatorButton  onPress={addperation}   label="+" color={colors.orange}/>
        </View>

        <View style={styles.row}>
          <CalculatorButton  onPress={()=>buildNumber('0')}   label="0" color={colors.darkgray } doublesize={true}/>
          <CalculatorButton  onPress={()=>buildNumber('.')}   label="." color={colors.darkgray}/>
          <CalculatorButton  onPress={calculaterResult}   label="=" color={colors.orange}/>
        </View>



    </View>
  );
};
