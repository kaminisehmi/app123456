import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Modal,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import newtab from '@/app/auth/(tabs)/newtab';

const image = { uri: "https://docs.expo.dev/static/images/tutorial/background-image.png" };

const LoginForm = () => {
  const [isModelvalue, setModelvalue] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const toggleModel = () => {
    setModelvalue(!isModelvalue);
  };

  const handleFocus = () => {
    setIsFocused(true);
    console.log('Input field focused');
  };

  const handleBlur = () => {
    setIsFocused(false);
    console.log('Input field lost focus');
  };

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (email === 'test' && password === 'test') {
      navigation.navigate(newtab);
    } else {
      Alert.alert('Error', 'Invalid credentials.');
    }
  };

  return (
    <ImageBackground blurRadius={6} source={image} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={[styles.input, isFocused && styles.focusInput]}
          placeholder="Email"
          placeholderTextColor="blue"
          value={email}
          onChangeText={setEmail}
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType="default"
          autoCapitalize="none"
        />
        <TextInput
          style={[styles.input, isFocused && styles.focusInput]}
          placeholder="Password"
          placeholderTextColor="green"
          value={password}
          onChangeText={setPassword}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
        
        <View>
          <TouchableOpacity style={styles.Touchable1} onPressIn={toggleModel}>
            <Text style={{ textAlign: 'center', color: "black", fontSize: 13 }}>SignUp</Text>
          </TouchableOpacity>
        </View>
        
        <Modal visible={isModelvalue} animationType="fade" onRequestClose={toggleModel}>
          <View style={styles.modelcontent}>
            <Text>SignUp User Registration Form</Text>
            <TextInput placeholder='Enter Name' />
            <Button title="Close" onPress={toggleModel} />
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modelcontent: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  focusInput: {
    borderColor: 'red',
  },
  title: {
    fontSize: 60,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 10,
  },
  Touchable1: {
    backgroundColor: "burlywood",
    fontSize: 55,
    borderColor: "aqua",
    borderWidth: 2,
    borderRadius: 3,
    padding: 10,
    marginTop: 20,
  },
});

export default LoginForm;
