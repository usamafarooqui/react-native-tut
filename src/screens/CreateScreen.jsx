import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

const CreateScreen = ({data, setData}) => {
  const [itemName, setItemName] = useState('');
  const [stockAmount, setStockAmount] = useState('');

  const addItemHandler = () => {
    console.log('button pressed');
    const newItem = {
      id: Date.now(),
      name: itemName,
      stock: stockAmount,
    };
    setData(prevData => [...prevData, newItem]); // Use functional update form
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter an item name...."
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChange={item => setItemName(item)}
      />

      <TextInput
        placeholder="Enter an stock Amount.... usam"
        placeholderTextColor="#999"
        style={styles.input}
        value={stockAmount}
        onChange={item => setStockAmount(item)}
      />

      <Pressable style={styles.button} onPress={() => addItemHandler}>
        <Text style={styles.btnText}>Add Item </Text>
      </Pressable>

      <View>
        <View>
          <Text style={styles.headingText}>All Items In The Stock check</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={[
                styles.itemContainer,
                {backgroundColor: item.stock < 5 ? '#FFCCCC' : '#D7F6BFFF'},
              ]}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>{item.stock}</Text>
              <View style={{flexDirection: 'row', gap: 10}}>
                <Text style={styles.itemText}>Edit</Text>
                <Text style={styles.itemText}>Delete</Text>
              </View>
            </View>
          )}
          contentContainerStyle={{gap: 10}}
        />
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    gap: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#D7F6BFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#CABFEEFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 500,
    fontSize: 16,
  },
  headingText: {
    fontWeight: 500,
    fontSize: 16,
    marginVertical: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  itemText: {
    fontWeight: 400,
    fontSize: 14,
    borderRadius: 7,
  },
});
