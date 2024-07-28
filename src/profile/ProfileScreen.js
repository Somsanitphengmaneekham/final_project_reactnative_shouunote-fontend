import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePic}></View>
      <Text style={styles.username}>Username</Text>
      <Button title="ອອກຈາກລະບົບ" onPress={() => navigation.navigate('Login')} />
      <Text style={styles.projectBy}>2CW1 Project By</Text>
      <Text style={styles.projectByName}>ທ້າວ ສົມສະນິດ ແພງມະນີຄຳ</Text>
      <Text style={styles.projectByName}>ທ້າວ ໄຊທິເດດ ສີສຸວົງ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ff6600',
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    marginBottom: 20,
  },
  projectBy: {
    fontSize: 16,
    marginTop: 20,
    color: '#ff6600',
  },
  projectByName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
