import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity,} from 'react-native'
import {Container} from "../assets/styles";
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';

export default function relatorio({navigation}){
  const [isChecked, setChecked] = useState(false);
  return(

      
    <Container colors={[]}>
      <View style={estilos.fundo}>
        <Image source={require('../Imagens/estacioAzul.png' )} style={estilos.logo}></Image>
  
  
          <View style={estilos.janela}>

            <View style={estilos.i}>
              <Text style={estilos.titulo3}>De:</Text >
              <TextInput style={estilos.textCampo} 
              placeholder={'01/04/2023'} ></TextInput>
            </View>
            
            <View style={estilos.i}>
              <Text style={estilos.titulo2}>Até:</Text>
              <TextInput style={estilos.textCampo1} 
              placeholder={'30/04/2023'} ></TextInput>

            </View>

            <Text style={estilos.titulo4}>Filtros:</Text >


      <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Realizadas</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.paragraph}> Não Realizadas </Text>
      </View>
      
    </View>
  
              <TouchableOpacity 
                onPress = {() => navigation.navigate('')}
                style={estilos.bottonrelatorio}
                activeOpacity={0.5}>
                <View style={estilos.relatorio}> Relatório de Atividades</View>
            
              </TouchableOpacity>


              <TouchableOpacity 
                onPress = {() => navigation.navigate('')}
                style={estilos.bottongerar}
                activeOpacity={0.5}>
                <View style={estilos.gerar}> Gerar</View>
            
              </TouchableOpacity>


          </View>
      </View>
    
    </Container>
  );
}



const estilos = StyleSheet.create({

  fundo: {
    flex: 1
  },
  
  
  relatorio:{

    marginHorizontal: '10%',
    marginTop: '-170%',
    width: '80%',
    fontFamily: 'Poppins',
    fontSize: '15px',
    fontWeight: 'bold',
    lineHeight: '190%',
    alignItems: 'right',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#9FB9FC',
    color: 'black',
    border:'solid',
    borderRadius:12
   
   },

    gerar:{

    marginHorizontal: '32%',
    marginTop: '-100px',
    width: '40%',
    fontFamily: 'Poppins',
    fontSize: '15px',
    fontWeight: 'bold',
    lineHeight: '190%',
    alignItems: 'right',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#9FB9FC',
    color: 'black',
    border:'solid',
    borderRadius:12
    },

   textCampo: {
    
    flexDirection: 'row',
    marginTop: '-24%',
    backgroundColor: '#ffffff',
    width: '40%',
    color: '#000000',
    margin: '30%',
    height: '30%',
    padding: '8px',
    borderRadius: '12px'
  },
    textCampo1: {

    flexDirection: 'row',
    marginTop: '-21%',
    backgroundColor: '#ffffff',
    width: '40%',
    color: '#000000',
    margin: '30%',
    height: '45%',
    padding: '8px',
    borderRadius: '12px'

  },

  janela:{
  
    textAlign: 'center',
    backgroundColor: '#9FB9FC',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
    width:'316px',
    height:'438px',
    top:'150px',
    border:'solid',
    color: 'white',
    borderRadius:12
  },
   
  titulo2:{
    marginTop: '-18%',
    margin: '15%',
    width: '70%',
    height: '17%',
    fontFamily: 'Poppins',
    textAlign: 'justify',
    fontStyle: 'normal',
    alignItems: 'center',
    fontSize: '125%',
    color: 'black'
  },
  titulo3:{
    margin: '15%',
    width: '70%',
    height: '17%',
    fontFamily: 'Poppins',
    textAlign: 'justify',
    fontStyle: 'normal',
    alignItems: 'center',
    fontSize: '125%',
    color: 'black'
  },

  titulo4:{
    marginTop: '-22%',
    margin: '35%',
    width: '70%',
    height: '17%',
    fontFamily: 'Poppins',
    textAlign: 'justify',
    fontStyle: 'normal',
    alignItems: 'center',
    fontSize: '125%',
    color: 'black'
  },
  
  logo:{
    width: '100%',
    resizeMode: 'contain',
    height: '80px',
    alignSelf: 'center',
    marginTop: '20px'
  },
  
    

    
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 60,
    marginVertical: -150,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
    
  },
  checkbox: {
    margin: 12,
  },
});





