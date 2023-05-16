import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native'
import {Container} from "../assets/styles"

export default function home({navigation}){
  return(

      
    <Container colors={[]}>
      <View style={estilos.fundo}>
        <Image source={require('../Imagens/MR2.png' )} style={estilos.image}></Image>
  
  
          
            <View style={estilos.titulo1}>Melissa Rodrigues </View>
            

          <View style={estilos.janela}>

            
            <Text style={estilos.titulo3}></Text >
            <View style={estilos.item_login}>
      
            </View>
            <View style={estilos.item_senha}>
          
            </View>
            <TouchableOpacity 
                onPress = {() => navigation.navigate('')}
                style={estilos.bottonrelatorio}
                activeOpacity={0.5}>
                <View style={estilos.relatorio}> Relatório </View>
            
              </TouchableOpacity>
            
            <TouchableOpacity 
                onPress = {() => navigation.navigate('')}
                style={estilos.bottonevento}
                activeOpacity={0.5}>
                <View style={estilos.evento}> Evento </View>
                
            </TouchableOpacity>


            <TouchableOpacity 
                onPress = {() => navigation.navigate('home')}
                style={estilos.bottonLogoStyle}
                activeOpacity={0.5}>
            <Image source={require('../Imagens/logoReturn2.png' ) } 
            style={estilos.logoReturn}></Image>

            </TouchableOpacity>

            <View style={estilos.logout}>
            <Button title="LOG OUT" color= '#B0C4DE'onPress={()=>navigation.navigate('Login')} />
            </View>

          <Image source={require('../Imagens/cumbuca.png' ) } 
            style={estilos.logoReturnevento}></Image>
            
          <Image source={require('../Imagens/papelrelat.png' ) } 
            style={estilos.logoReturnrelat}></Image>  

       
          </View>
      </View>
    
    </Container>
  );
}

const estilos = StyleSheet.create({

  fundo: {
    flex: 1
  },

  evento:{

    marginHorizontal: '16%',
    marginTop: '25%',
    width: '20%',
    fontFamily: 'Poppins',
    fontSize: '15px',
    fontWeight: 'bold',
    lineHeight: '170%',
    alignItems: 'right',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    color: 'black'

  },
  
    relatorio:{

    marginHorizontal: '16%',
    marginTop: '15%',
    width: '20%',
    fontFamily: 'Poppins',
    fontSize: '15px',
    fontWeight: 'bold',
    lineHeight: '170%',
    alignItems: 'right',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    color: 'black',
   },
  logout:{
    position: 'absolute',
    justifyContent: 'center',
    height: '130%',
    borderRadius: '100px',
    right: '63%',
    bottom: '-100%',
    
  },

  janela:{
    textAlign: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
  },
   
    titulo1:{
    marginTop: '-13%',  
    margin: '5%',
    width: '90%',
    height: '17%',
    fontFamily: 'Poppins',
    textAlign: 'justify',
    fontStyle: 'normal',
    alignItems: 'center',
    fontSize: '170%',
    color: 'black'
  },
  
  
  image:{
    height: 100,
    marginTop: 30,
    width: 100,
    borderRadius: 100,
    alignSelf: 'center',
    padding: 30,
    marginBottom: 50,
    borderColor: 'white',
    backgroundColor: 'gray',
    },


  logoReturn:{
    width: '30%',
    resizeMode: 'contain',
    alignSelf: 'center',
    height: '25px',
    right: '29%',
    bottom:'-200%'
    },

    logoReturnevento:{
    width: '30%',
    resizeMode: 'contain',
    alignSelf: 'center',
    height: '25px',
    right: '39%',
    bottom:'23%'
    },
    
    logoReturnrelat:{
    width: '30%',
    resizeMode: 'contain',
    alignSelf: 'center',
    height: '25px',
    right: '39%',
    bottom:'73%'
    },
})




