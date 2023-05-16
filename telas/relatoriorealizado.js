import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity,} from 'react-native'
import {Container} from "../assets/styles";
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';

export default function relatoriorealizado({navigation}){
  const [isChecked, setChecked] = useState(false);
  return(

      
    <Container colors={[]}>
      <View style={estilos.fundo}>
        <Image source={require('../Imagens/estacioAzul.png' )} style={estilos.logo}></Image>
  
  
          <View style={estilos.janela}>

            <View style={estilos.i}>
              <TextInput style={estilos.textCampo} 
              placeholder={'Engajamento participação da reunião de rotina'} ></TextInput>
            </View>
            
            <View style={estilos.i}>
              <TextInput style={estilos.textCampo1} 
              placeholder={'Engajamento realizar tratamento do ponto'} ></TextInput>

            </View>

            <Text style={estilos.titulo4}>E-MAIL:</Text >
            <TextInput style={estilos.email} 
            placeholder={''} ></TextInput>

              <TouchableOpacity 
                onPress = {() => navigation.navigate('')}
                style={estilos.bottonrealizadas}
                activeOpacity={0.5}>
                <View style={estilos.realizadas}> REALIZADAS 01/04 a 30/04/2023</View>
            
              </TouchableOpacity>


              <TouchableOpacity 
                onPress = {() => navigation.navigate('')}
                style={estilos.bottonpdf}
                activeOpacity={0.5}>
                <View style={estilos.pdf}> PDF </View>
            
              </TouchableOpacity>


              <TouchableOpacity 
                onPress = {() => navigation.navigate('')}
                style={estilos.bottonenviar}
                activeOpacity={0.5}>
                <View style={estilos.enviar}> ENVIAR </View>
            
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
  
  
  realizadas:{

    marginHorizontal: '5%',
    marginTop: '-194%',
    width: '90%',
    fontFamily: 'Poppins',
    fontSize: '13px',
    fontWeight: 'bold',
    lineHeight: '250%',
    alignItems: 'right',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    color: 'black',
    borderRadius:12
   
   },

    enviar:{

    marginHorizontal: '55%',
    marginTop: '-115px',
    width: '30%',
    fontFamily: 'Poppins',
    fontSize: '12px',
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

    pdf:{

    marginHorizontal: '13%',
    marginTop: '-115px',
    width: '30%',
    fontFamily: 'Poppins',
    fontSize: '12px',
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
    marginHorizontal: '15%',
    flexDirection: 'row',
    fontSize: '12px',
    marginTop: '20%',
    backgroundColor: '#ffffff',
    width: '70%',
    color: '#000000',
    margin: '30%',
    height: '30%',
    padding: '8px',
    borderRadius: '12px'
  },
    textCampo1: {
    marginHorizontal: '15%',
    flexDirection: 'row',
    fontSize: '12px',
    marginTop: '-21%',
    backgroundColor: '#ffffff',
    width: '70%',
    color: '#000000',
    margin: '30%',
    height: '70%',
    padding: '8px',
    borderRadius: '12px'

  },
  email: {
    marginHorizontal: '9%',
    flexDirection: 'row',
    fontSize: '12px',
    marginTop: '-34%',
    backgroundColor: '#ffffff',
    width: '80%',
    color: '#000000',
    margin: '50%',
    height: '70%',
    padding: '8px',
    borderRadius: '12px'

    },

  janela:{
  
    textAlign: 'center',
    backgroundColor: '#9FB9FC',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
    width:'316px',
    height:'581px',
    top:'30px',
    border:'solid',
    color: 'white',
    borderRadius:12
  },
   
  titulo4:{
    marginHorizontal: '12%',
    marginTop: '50%',
    margin: '35%',
    width: '70%',
    height: '17%',
    fontFamily: 'Poppins',
    textAlign: 'justify',
    fontStyle: 'normal',
    alignItems: 'center',
    fontSize: '90%',
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





