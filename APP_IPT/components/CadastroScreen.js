import React, { useState } from 'react';
import { ScrollView, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { TextInput} from 'react-native-paper';
import firebase from '../Firebase';


const App = () => {
  const [estabelecimento, setEstabelecimento] = React.useState("");
  const [categoria, setCategoria] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [marca, setMarca] = React.useState("");
  const [medida, setMedida] = React.useState("");
  const [valor, setValor] = React.useState("");
  const [data, setData] = React.useState("");

  const cadastrarLista = () => {
    if (estabelecimento === "" || categoria === "" || produto === "" || marca === ""
|| medida === "" || valor === "" || data === ""){
      alert("Preencha todos os campos!");
    return;
}
    try {
      firebase.database().ref('lista').push({estabelecimento: estabelecimento, categoria: categoria, produto: produto, marca: marca,medida: medida,
      valor: valor, data: data});
      limpa();
      alert("Registro inserido com sucesso!");
    } 
    
    catch (e){
      alert("Erro ao inserir!");
    }
};

const limpa = () => {
    setEstabelecimento("");
    setCategoria("");
    setProduto("");
    setMarca("");
    setMedida("");
    setValor("");
    setData("");
}

  return (
    <SafeAreaProvider style={{ backgroundColor: '#d58500' }}>
    <SafeAreaView>
    <ScrollView>
      <TextInput placeholder="Estabelecimento" onChangeText={setEstabelecimento} value={estabelecimento} />
      <TextInput placeholder="Categoria"  onChangeText={setCategoria} value={categoria}/>
      <TextInput placeholder="Produto" onChangeText={setProduto} value={produto}/>
      <TextInput placeholder="Marca"  onChangeText={setMarca} value={marca}/>
      <TextInput placeholder="Medida"  onChangeText={setMedida} value={medida}/>
      <TextInput placeholder="Valor"  onChangeText={setValor} value={valor}/>
      <TextInput placeholder="Data"  onChangeText={setData}  value={data}/>
      <Button color='#003761' title="Cadastrar" mode="contained" onPress={cadastrarLista}/>

    </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;