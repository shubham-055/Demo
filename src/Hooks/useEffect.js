import React, {useState, useEffect} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

const UseEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      {data.users.map(item => (
        <Text>{item.username}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UseEffect;
