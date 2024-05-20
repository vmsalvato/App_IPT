import { Card, Button, TextInput, Title, Snackbar } from 'react-native-paper';
import { useState, useContext } from 'react';
import { View } from 'react-native';
import firebase from '../Firebase';
import {AuthContext} from '../Context';

const Login = ({ navigation }) => {
  let [visivel, setVisivel] = useState(false);
  let [email, setEmail] = useState('');
  let [senha, setSenha] = useState('');
  let {setNomeUsuario} = useContext(AuthContext);

  const mostrarSnack = () => setVisivel(true);

  const fecharSnack = () => setVisivel(false);

  const acessar = () => {
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(() => {
        setNomeUsuario(email);
        navigation.navigate("Navegacao");
      })
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Card >
        <Card.Content>
          <Title>Acessar o Aplicativo</Title>
          <TextInput mode="outlined"
            label="E-mail"
            placeholder="Digite seu email"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput mode="outlined"
            label="Senha"
            placeholder="Digite sua senha"
            onChangeText={setSenha}
            secureTextEntry={true}
            value={senha}
          />
          <Button color='#003761' mode="contained" onPress={acessar}>
            Acessar
          </Button>
          <Button
            mode="outlined"
            color='#003761'
            onPress={() => navigation.navigate('NovaConta')}>
            Nova conta
          </Button>
        </Card.Content>
      </Card>
      <Snackbar
        visible={visivel}
        onDismiss={fecharSnack}
        action={{ label: 'Fechar' }}>
        Nome de usuário e/ou senha incorretos!
      </Snackbar>
    </View>
  );
};

export default Login;