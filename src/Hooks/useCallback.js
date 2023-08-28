import React, {useCallback, useState} from 'react';
import {Text, View} from 'react-native';

const UseCallback = () => {
  const [Data, setData] = useState(0);
  const [Data1, setData1] = useState("Hello");


  const callback = useCallback(() => {
    console.log(Data);
    console.log(Data1);

  },[Data]);


const call=()=>{
    //setData(Data+1);
    setData1(Data1+Data);
    console.log(Data," not a callback hook", Data1);
    callback();
}

  return (
  <View>
        <Text onPress={call}>Data = {Data}</Text>
  </View>
  );
};

export default UseCallback;
