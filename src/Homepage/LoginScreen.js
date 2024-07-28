import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      //                                          ip address ຂອງຄອມເຮົາ
      const response = await axios.post("http://192.168.178.160:3000/login", {
        name,
        password,
      });
      if (response.data.success) {
        navigation.navigate("NoteList");
      } else {
        Alert.alert("ຂໍ້ມູນບໍ່ຖືກ", "ຊື່ຜູ້ຫຼືລະຫັດຜ່ານບໍ່ຖືກ.");
      }
    } catch (error) {
      console.error("ກວດເບີ່ງຜູ້ໃຊ້ງານບໍ່ຖືກຕ້ອງ", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate("NoteList")}
      >
        <Text style={styles.skipText}>ຂ້າມ</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Shouu</Text>
      <Text style={styles.subtitle}>Note</Text>
      <TextInput
        style={styles.input}
        placeholder="ຊື່ຜູ້ໃຊ້"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="ລະຫັດຜ່ານ"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>ເຂົ້າສູ່ລະບົບ</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signButton}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.signButtonText}>ສະໝັກ</Text>
      </TouchableOpacity>
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
  loginButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#ff6600",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  signButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  signButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  skipButton: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  skipText: {
    fontSize: 16,
    color: "grey",
  },
});

export default LoginScreen;
