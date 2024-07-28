import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import axios from "axios";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://192.168.178.160:3000/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  const handleAddUser = async () => {
    try {
      await axios.post("http://192.168.178.160:3000/users", { name, password });
      setName("");
      setPassword("");
      fetchUsers();
    } catch (error) {
      console.error("Error adding user", error);
    }
  };

  const handleSelectUser = (user) => {
    setName(user.name);
    setPassword(user.password);
    setSelectedUser(user);
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://192.168.178.160:3000/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shouu</Text>
      <Text style={styles.subtitle}>Note</Text>
      <TextInput
        style={styles.input}
        placeholder="ຊື່"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="ລະຫັດ"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.createButton} onPress={handleAddUser}>
        <Text style={styles.createButtonText}>ສ້າງບັນຊີໃໝ່</Text>
      </TouchableOpacity>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text>{item.name}</Text>
            <TouchableOpacity onPress={() => handleSelectUser(item)}>
              <Text style={styles.updateButton}>ແກ້ໄຂ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteUser(item.id)}>
              <Text style={styles.deleteButton}>ລົບ</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ff6600",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  createButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#ff6600",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  createButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default RegisterScreen;
