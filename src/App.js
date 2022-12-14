
import Input from './components/Input';
import {Button, ButtonDelete} from './components/Button';

import { Container, Content, Row, Text, Link } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const limit = 40;

  if(currentNumber.length >= limit) {
    setCurrentNumber('0');  
    alert('Valor Máximo Atigindo :(')    
  }

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    if(currentNumber.length >= limit) {
      setCurrentNumber('0');      
    } else {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
    }
  
  }


  const handleRemoveNumber = (num) => {
      if(num.length > 1){
        setCurrentNumber(num.slice(0,-1));
      }
      if(num.length <= 1){
        handleOnClear();
      }
  }

  const sum = () => {
    const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
  }

  const handleSumNumbers = () => {
    if(currentNumber.length >= limit) {
      setCurrentNumber('0');      
    } else {
     
      if(operation === '') {
        setFirstNumber(String(currentNumber));
          setCurrentNumber('0');
          setOperation('+');
        }
    }

  }

 
  const Division = () => {
    const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
  }

  const handleDivisionNumbers = () => {
    if(currentNumber.length >= limit) {
      setCurrentNumber('0');      
    } else {
    if(operation === '') {
      setFirstNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('/');
      }
    }
    }


  const Multiplier = () => {
    const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
  }


  const handleMultiplierNumbers = () => {
    if(currentNumber.length >= limit) {
      setCurrentNumber('0');      
    } else {
    if(operation === '') {
      setFirstNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('x');
      }
    }
  }

  const Minus = () => {
    const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
  }


  const handleMinusNumbers = () => {
    if(currentNumber.length >= limit) {
      setCurrentNumber('0');      
    } else {
    if(operation === '') {
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('-');
      }
    }
  }



  const handleEquals = () => {
    if(currentNumber.length >= limit) {
      setCurrentNumber('0');      
    } else {

   if(currentNumber === '0') {
      setCurrentNumber(String(firstNumber));
      setOperation('');
    }

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            sum();
            setOperation('');
            break;
          case '-':
            handleMinusNumbers();
            Minus();
            setOperation('');
            break;
            case 'x':
              handleMultiplierNumbers();
              Multiplier();
              setOperation('');
              break;
              case '/':
                handleDivisionNumbers();
                Division();
                setOperation('');
                break;
          default: 
        }
    }
  }
  }

  return (
    <Container>
          <Text>Calculator Created By Kauan Vidigal  GITHUB: <Link href="https://github.com/Vidigal-code"  target="_blank">Vidigal-code</Link> </Text>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={handleMultiplierNumbers}/>
          <Button label="/" onClick={handleDivisionNumbers}/>
          <Button label="+" onClick={handleSumNumbers}/>
          <Button label="-" onClick={handleMinusNumbers}/>
          <ButtonDelete label="<-"onClick={() => handleRemoveNumber(currentNumber)}/>
          <ButtonDelete label="c" onClick={handleOnClear}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
