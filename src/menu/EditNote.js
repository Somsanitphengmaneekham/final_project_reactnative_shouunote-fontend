import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const EditNote = () => {
  const route = useRoute();
  const { note } = route.params;
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const navigation = useNavigation();

  const handleSave = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ຫົວຂໍ້"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="ລາຍລະອຽດ"
        value={content}
        onChangeText={setContent}
      />
      <Button style={styles.Textsave} title="ບັນທືກ ກາຍແກ້ໄຂ" onPress={handleSave} />
      <Button style={styles.Textsave} title="ລົບ" onPress={handleSave} />      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  Textsave: {
    backgroundColor: '#ff6600',
  },
});

export default EditNote;