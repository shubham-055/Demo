import React, {forwardRef, useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const GrandChild = forwardRef((props, ref) => {
  const [text, setText] = useState('Initial Text of Grand Child');

  const changeText = newText => {
    setText(newText + ' for grand child');
  };

  ref.current = {changeText};

  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
});

const ChildComponent = forwardRef((props, ref) => {
  const [text, setText] = useState('Initial Text of Child');

  const changeText = newText => {
    setText(newText + ' for child');
  };

  ref.current = {changeText};

  return (
    <View>
      { props.cnt % 2 == 1 ? <GrandChild ref={ref} /> : <Text>{text}</Text> }
    </View>
  );
});

const ParentComponent = () => {
  const childRef = useRef(null);
  const [count, setCount] = useState(0);
  //var count = 0;
  const handleChangeText = () => {
    if (childRef.current) {
      childRef.current.changeText('New Text from Parent');

      console.log(count);
      setCount(count + 1);
    }
  };

  return (
    <View>
      <ChildComponent ref={childRef} cnt={count} />
      <TouchableOpacity onPress={handleChangeText}>
        <Text>Change Child Text</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ParentComponent;
