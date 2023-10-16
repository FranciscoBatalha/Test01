import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Image } from 'react-native';

export function LoginAluno() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={[styles.layer, styles.lightBlueLayer]} />
        <View style={styles.imageContainer}>
        <Image
          source={require('../img/senai.png')}
          style={styles.logo}
          resizeMode="contain"
        />
          <Text style={styles.title}>Acesso Escolar</Text>
          <Text style={styles.description}>Sistema de entrada e saída</Text>
        </View>
      </View>
      <View style={[styles.layer, styles.lightBlueLayer]} />
      <View style={styles.containerMid}>
        <View style={[styles.layer, styles.greyLayer1]}>
          <View style={styles.greyBottom} />
          <View style={[styles.layer, styles.greyLayer]} />
          <View style={styles.inputContainer}>
            <Text style={styles.title2}>Faça seu Login</Text>
          </View>
          <View style={[styles.layer, styles.greyLayer]} />
          <View style={[styles.layer, styles.greyLayer]} />
          <View style={[styles.layer, styles.greyLayer]} />
          <View style={[styles.layer, styles.greyLayer]} />
          <View style={[styles.layer, styles.greyLayer]} />
          <View style={[styles.layer, styles.greyLayer]} />
          <View style={[styles.layer, styles.greyLayer]} />
          <View style={[styles.layer, styles.greyLayer]} />
          <View style={[styles.layer, styles.greyLayer]} />
        </View>
        <View style={[styles.layer, styles.greyLayer]} />
        <View style={styles.whiteBottom}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
          />
        </View>
        <View style={[styles.layer, styles.whiteLayer]} />
        <View style={[styles.layer, styles.whiteLayer]} />
        <View style={[styles.layer, styles.whiteLayer]} />
        <View style={[styles.layer, styles.whiteLayer]} />
        <View style={[styles.layer, styles.whiteLayer]} />
        <View style={[styles.layer, styles.whiteLayer]} />
        <View style={styles.containerLow}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeAluno')} style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.descriptionLow}>Boas vindas !</Text>
        </View>
        <View style={[styles.layer, styles.whiteLayer]} />
        <View style={[styles.layer, styles.whiteLayer]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerLow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTop: {
    backgroundColor: '#7ec9ff',
  },
  containerMid: {
    backgroundColor: '#ececec',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#7ec9ff',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -30,
  },
  title2: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 50,
  },
  layer: {
    flex: 1,
  },
  lightBlueLayer: {
    backgroundColor: '#7ec9ff',
  },
  greyLayer: {
    backgroundColor: '#ececec',
    flex: 1,
    overflow: 'hidden',
    marginBottom: -8,
  },
  greyLayer1: {
    backgroundColor: '#7ec9ff',
    flex: 1,
    overflow: 'hidden',
  },
  whiteLayer: {
    backgroundColor: '#FFFFFF',
  },
  whiteBottom: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -20,
  },
  greyBottom: {
    flex: 1,
    backgroundColor: '#ececec',
    padding: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 53,
  },
  input: {
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    padding: 10,
    borderWidth: 0,
    color: 'gray',
    fontSize: 17,
    backgroundColor: '#f1f1f1',
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  button: {
    backgroundColor: '#3eaaf9',
    paddingHorizontal: 55,
    paddingVertical: 10,
    borderRadius: 20,
    padding: 15,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionLow: {
    marginTop: 0,
    marginBottom: 24,
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    padding: 10,
  },
});


