import { Card, Button, TextInput } from 'react-native-paper';
import { useState, useEffect, useContext } from 'react';
import { ScrollView, Text, Image, Dimensions } from 'react-native';
import firebase from '../Firebase';
import {AuthContext} from '../Context';

const NovoUsuario = ({ navigation }) => {
  let [nome, setNome] = useState('');
  let [email, setEmail] = useState('');
  let [senha, setSenha] = useState('');
  let usuario = null;
  const {setNomeUsuario} = useContext(AuthContext);

  const salvar = async () => {
      await firebase
      .auth().createUserWithEmailAndPassword(email, senha)
      .then(() => { 
        setNomeUsuario(email);
        navigation.navigate('Navegacao'); }
      )
      .catch((error) => {
        if (error.code == 'auth/email-already-in-use')
          alert("O e-mail já foi cadastrado!")
        else if (error.code == 'auth/invalid-email')
          alert("O e-mail informado é inválido!")
        else if (error.code == 'auth/weak-password')
          alert("A senha deve ter ao menos 8 caracteres")
        else 
          alert("Erro ao cadastrar o usuário"+error.code)
      });
  };

  return (
    <ScrollView style={{ flex: 1, justifyContent: 'center' }}>
      <Card>
        <Card.Content>
          <TextInput
            mode="outlined"
            label="E-mail"
            placeholder="Digite seu email"
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            mode="outlined"
            label="Senha"
            placeholder="Digite sua senha"
            onChangeText={setSenha}
            secureTextEntry={true}
          />
          <Button color='#003761' mode="contained" onPress={salvar}>
            Salvar dados
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default NovoUsuario;