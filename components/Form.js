import React, {useState} from "react";
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';

export default function Form({ addHandler }) {
    const [text, setValue] = useState('');
    const onChange = (text) => {
      setValue(text);
    }

    return (
       <View>
           <Text style={styles.head}>Добавьте новую задачу</Text>
           <TextInput style={styles.input} onChangeText={onChange} placeholder='Впишите задачу...'/>
           <Button style={styles.btn} onPress={() => addHandler(text)} title='Добавить' />
       </View>
    );
}

const styles = StyleSheet.create({
   input: {
       borderWidth: 2,
       borderRadius: 8,
       borderColor: '#000',
       padding: 10,
       marginTop: 20,
       marginBottom: 20,
       marginLeft: 10,
       marginRight: 10,
       height: 60
   },
   head: {
       fontSize: 16,
       fontWeight: "200",
       fontStyle: 'italic',
       fontFamily: 'Optima',
       color: '#121214',
       textAlign: 'center',
       paddingTop: 15,
   },
    btn: {
       color: '#fafafa'
    }
});
