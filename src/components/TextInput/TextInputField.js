import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const TextInputField = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text style={{fontSize: 30}}>TextInputField</Text>
      <TextInput
        value={name}
        style={{fontSize: 30, borderBlockColor: 'black', borderWidth: 2}}
        onChangeText={e => setName(e)}
      />
      <Text>{name}</Text>
      <Button title="clear" onPress={() => setName('')} />
    </View>
  );
};

export default TextInputField;
