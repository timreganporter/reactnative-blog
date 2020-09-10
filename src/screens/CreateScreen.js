import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <Text style={sytles.label}>Enter Title:</Text>
      <TextInput style={sytles.input} value={title} onChangeText={text => setTitle(text)} />
      <Text style={sytles.label}>Enter Content:</Text>
      <TextInput style={sytles.input} value={content} onChangeText={text => setContent(text)} />
      <Button
        onPress={() => addBlogPost(title, content, () => {
          navigation.navigate('Index');
        })}
        title="Add Blog Post"
      />
    </View>
  );
}

const sytles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 18,
    margin: 5,
    marginBottom: 15,
    padding: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5
  }
});

export default CreateScreen;