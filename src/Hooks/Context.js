import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  View,
  Switch,
  TextInput,
} from 'react-native';
import {ThemeContext} from '../screens/ThemeProvider';

const Context = () => {
  const {mode, updateMode} = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () =>
    updateMode(setIsEnabled(previousState => !previousState));
  const text = mode === 'light' ? 'Light Mode' : 'Dark Mode';
  const color = mode === 'light' ? 'black' : 'white';
  return (
    <View
      style={[
        mode === 'light' ? styles.lightMode : styles.darkMode,
        {
          flex: 0.9,
          borderColor: 'cyan',
          borderWidth: 10,
          borderRadius: 30,
          justifyContent: 'center',
        },
      ]}>
      <TextInput
        style={[styles.textinput, {color: color}]}
        placeholder={text}
        placeholderTextColor={color}></TextInput>

      <Switch
        style={styles.switch}
        trackColor={{false: 'white', true: 'white'}}
        thumbColor={isEnabled ? 'black' : 'white'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  lightMode: {
    backgroundColor: 'white',
    margin: '10%',
  },
  darkMode: {
    backgroundColor: 'black',

    margin: '10%',
    borderColor: 'red',
  },
  lightText: {
    color: 'black',
  },
  darkText: {
    color: 'white',
  },
  textinput: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  switch: {
    alignSelf: 'flex-end',
  },
});

export default Context;
