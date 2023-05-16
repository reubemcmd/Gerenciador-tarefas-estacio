import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native'
import {Container} from "../assets/styles"

export default function Login({navigation}){
  return(

      
    <Container colors={[]}>
      <View style={estilos.fundo}>
        <Image source={require('../Imagens/estacioAzul.png' )} style={estilos.logo}></Image>
  
  
            
            <Text style={estilos.titulo1}>Olá.</Text>
            <View style={estilos.titulo2}>Seja bem vindo(a)!</View>

          <View style={estilos.janela}>


            <Text style={estilos.titulo3}>FAÇA SEU LOGIN</Text >
            <View style={estilos.item_login}>
              <Text style={estilos.textMatricula}>MATRÍCULA:</Text>
              <TextInput style={estilos.textCampo} 
              placeholder={'Digite sua matrícula'} ></TextInput>
            </View>
            <View style={estilos.item_senha}>
              <Text style={estilos.textSenha}>SENHA:</Text>
              <TextInput style={estilos.textCampo} 
              placeholder={'Digite sua senha'} ></TextInput>
            </View>
            <View style={estilos.esqueci_senha}>Esqueceu a senha?</View>
            <View style={estilos.naoTemConta}>Não tem conta? </View>

              <TouchableOpacity 
                onPress = {() => navigation.navigate('criarConta')}
                style={estilos.bottonCadastre}
                activeOpacity={0.5}>
                <View style={estilos.cadastre}>CADASTRE-SE!</View>
            
              </TouchableOpacity>
            <View style={estilos.botao}>
            <Button title=" LOGIN" color= '#B0C4DE'onPress={()=>navigation.navigate('Inicio')} />
            </View>

       
          </View>
      </View>
    
    </Container>
  );
}

const estilos = StyleSheet.create({

  fundo: {
    flex: 1
  },
  textMatricula:{
    
    marginLeft: '-220px',
    fontWeight: 'bold'
  },
  
  textSenha:{
    
    marginTop: 2,
    marginLeft: '-250px',
    fontWeight: 'bold'
  },

  textCampo: {
    
    flexDirection: 'row',
    marginTop: '2%',
    backgroundColor: '#F4F3F3',
    width: '90%',
    color: '#a1a1a1',
    margin: '4%',
    height: '30%',
    padding: '8px',
    borderRadius: '10px'
  },

  item_login:{
    
    marginTop: '10%',
    height:'40%'
  },

  item_senha:{
    marginTop: '-15%',
    height:'40%'
  },

  esqueci_senha:{

    marginHorizontal: '10%',
    marginTop: '-13%',
    height: '2%',
    fontFamily: 'Poppins',
    fontSize: '12px',
    lineHeight: '20px',
    alignItems: 'right',
    justifyContent: 'center',
    textAlign: 'right',
    color: 'black'

  },
  
  naoTemConta:{

    width: '96%',
    marginTop: '5%',
    height: '3%',
    fontFamily: 'Poppins',
    fontSize: '12px',
    color: 'black'

  },
  
  cadastre:{

    marginHorizontal: '62%',
    marginTop: '-3%',
    width: '30%',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: '140%',
    alignItems: 'right',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#B0C4DE',
    color: 'black'

  },
  
  botao:{
    position: 'absolute',
    justifyContent: 'center',
    height: '8%',
    borderRadius: '20px',
    right: '40%',
    bottom: '-20%'
    
  },

  bottonCadastre: {

  },
  
  janela:{
    textAlign: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
  },
   
  titulo1:{
    margin: '4%',
    width: '20%',
    height: '3%',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '',
    fontSize: '170%',
    lineHeight: '40px',
    color: 'black'
  },
  titulo2:{
    margin: '3%',
    width: '70%',
    height: '17%',
    fontFamily: 'Poppins',
    textAlign: 'justify',
    fontStyle: 'normal',
    alignItems: 'center',
    fontSize: '170%',
    color: 'black'
  },
  titulo3:{
    height: '80px',
    marginTop: 30,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  logo:{
    width: '100%',
    resizeMode: 'contain',
    height: '80px',
    alignSelf: 'center',
    marginTop: '20px'
  }
})




