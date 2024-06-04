/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/func-call-spacing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useEffect, useRef, useState} from 'react';
import {CalculatorButton} from '../components/CalculatorButton';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevnumber, setprevNumber] = useState('0');

  const [formula, setformula] = useState('');

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulapart = formula.split(' ').at(0);
      setformula(`${firstFormulapart} ${lastOperation.current} ${number}`);
    } else {
      setformula(number);
    }
  }, [number]);

  const clean = () => {
    setNumber('0');
    setprevNumber('0');
    lastOperation.current = undefined;
    setformula('');
  };

  const deleteOperation = () => {
    let currentSign = '';
    let temporalNumber = number;

    if (number.includes('-')) {
      currentSign = '-';
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }

    setNumber('0');
  };

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      if (numberString === '0' && !number.includes('.')) {
        return;
      }

      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
  };

  const setLastnumber = () => {
    if (number.endsWith('.')) {
      setprevNumber(number.slice(0, -1));
    } else {
      setprevNumber(number);
    }
    setNumber('0');
  };

  const divideOperation = () => {
    setLastnumber();
    lastOperation.current = Operator.divide;
  };

  const muliplyOperation = () => {
    setLastnumber();
    lastOperation.current = Operator.multiply;
  };

  const addperation = () => {
    setLastnumber();
    lastOperation.current = Operator.add;
  };

  const substracOperation = () => {
    setLastnumber();
    lastOperation.current = Operator.subtract;
  };


  const calculaterResult = () => {
    const result = CalculatoSubResult();
    setformula(`${result}`);
    lastOperation.current = undefined;
    setprevNumber('0');
  };

  const CalculatoSubResult = (): number => {
    const [firstValue, operation, secondValue] = formula.split('');

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) {
      return num1;
    }

    switch (operation) {
      case Operator.add:
        return num1 + num2;

      case Operator.subtract:
        return num1 - num2;

      case Operator.multiply:
        return num1 * num2;

      case Operator.divide:
        return num1 / num2;

      default:
        throw new Error('operacion no permitida');
    }


  };

  return {
    //properties
    number,
    prevnumber,
    formula,

    // Methods
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    divideOperation,
    muliplyOperation,
    addperation,
    substracOperation,
    calculaterResult,
  };
};
