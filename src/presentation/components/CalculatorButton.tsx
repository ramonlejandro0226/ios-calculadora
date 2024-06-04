/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles, colors } from '../../app-theme';

interface Props{
    label:string;
    color?:string;
    doublesize?:boolean;
    blackText?:boolean;
    onPress:()=>void;

}

export const CalculatorButton = ({
    label,
    color = colors.darkgray,
    doublesize = false,
    blackText = false,
    onPress,
  }: Props) => {
    return (
      <Pressable
        onPress={() => onPress()}
        style={({ pressed }) => ({
          ...styles.button,
          width: doublesize ? 180 : 80,
          backgroundColor: color,
          opacity: pressed ? 0.8 : 1,
        })}
      >
        <Text
          style={{
            ...styles.buttText,
            color: blackText ? 'black' : 'white', // El operador ternario aquí
          }}
        >
          {label}
        </Text>
      </Pressable>
    );
  };
  
