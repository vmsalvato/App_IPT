import { ScrollView, FlatList, Alert } from 'react-native';
import { Card, Paragraph, Button, List } from 'react-native-paper';
import { useEffect, useState } from 'react';
import firebase from '../Firebase';

const ListaScreen = ({ navigation }) => {

useEffect( () => {selecionarTodos()} , []);
  let [lista, setLista] = useState([]);
  const selecionarTodos = () => {
    let itens = [];
    firebase.database().ref('lista').orderByChild("estabelecimento").
      on('value', (snapshot) => {
        snapshot.forEach((linha) => {
          itens.push({
            key: linha.key,
            estabelecimento: linha.val().estabelecimento,
            categoria: linha.val().categoria,
            produto: linha.val().produto,
            marca: linha.val().marca,
            medida: linha.val().medida,
            valor: linha.val().valor,
            data: linha.val().data,
          });
        });
        setLista(itens);
      }); 
  }

  const excluirCadastro = (key) => {
    try{
      firebase.database().ref('lista').child(key).remove();
      alert("Cadastro excluído!");
      selecionarTodos();
    } catch(e){
      alert("Erro ao excluir!"+e);
    }
  }

  return (
  <ScrollView>
    <Card>
      <Card.Title  title="Cadastros Realizados" />
      <Card.Content >
        <FlatList
          data={lista}
          renderItem={({item}) => {
            return (
              <List.Accordion title={item.estabelecimento}>
                <List.Item title={'Estabelecimento: ' + item.estabelecimento} />
                <List.Item title={'Categoria: ' + item.categoria} />
                <List.Item title={'Produto: ' + item.produto} />
                <List.Item title={'Marca: ' + item.marca} />
                <List.Item title={'Medida: ' + item.medida} />
                <List.Item title={'Valor: ' + item.valor} />
                <List.Item title={'Data: ' + item.data} />
                <Button color='#003761' mode="contained" onPress={() => excluirCadastro(item.key)}> Excluir </Button>
              </List.Accordion>
            );
          }}
        />
      </Card.Content>
    </Card>
  </ScrollView>
  );
};

export default ListaScreen;
