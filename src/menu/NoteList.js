import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NoteList = () => {
  const [notes, setNotes] = useState([
    { id: '1', title: 'ນັດໝາຍ', content: '10/10/2055 ວັນສ້າງຕັ້ງກອນທັບ Super Ler' },
    { id: '2', title: 'Note1', content: 'Nigga' },
    { id: '3', title: 'Game code', content: 'STCV-055,MIUM-983,FSDSS-669,shkd-744,SAIT-026,SNIS-705,TEAM-076EBOD-684,AKB-026OPUD-272,FC2-PPV-3010664,ID-007-13' },
    { id: '4', title: 'Waka Misono', content: 'KTB-062 / AVSA-228' },
    { id: '5', title: 'Anime', content: 'linchou wa Saimin Appli wo Shinjiteru' },
    { id: '6', title: 'IP', content: '18.042028,102.636781' },
    { id: '7', title: 'Name', content: 'Rise of Eros' },
    { id: '8', title: 'Anime Two', content: 'Honoo No Haramase Paidol My Star Gakuen Z. Katainaka ni Totsui de Kita  Ane waa Yanmama Junyuu-chuu' },
  ]);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ລາຍການທີ່ບັນທືກ</Text>
      <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('ProfileScreen')}>
        <Text style={styles.profileText}>ອື່ນໆ</Text>
      </TouchableOpacity>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.noteItem}
            onPress={() => navigation.navigate('EditNote', { note: item })}
          >
            <Text style={styles.noteTitle}>{item.title}</Text>
            <Text style={styles.noteContent}>{item.content}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate('CreateNote')}
      >
        <Text style={styles.createButtonText}>ສ້າງ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff6600',
  },
  noteItem: {
    padding: 15,
    backgroundColor: 'D9D9D9',
    marginBottom: 10,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noteContent: {
    fontSize: 16,
  },
  createButton: {
    padding: 15,
    backgroundColor: '#ff6600',
    alignItems: 'center',
  },
  createButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  profileButton: {
    position: 'absolute',
    top: 27,
    right: 20,
  },
  profileText: {
    fontSize: 16,
    color: 'grey',
  },
});

export default NoteList;