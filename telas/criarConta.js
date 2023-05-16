import {
View,
Image,
Text,
StyleSheet,
Button,
TouchableOpacity,
TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Container} from "../assets/styles"

export default function Conta({navigation}){
  return(

    <Container colors={[]}>
    <View style={estilos.fundo}>
      <View style={estilos.item_login}>
       <Image source={require('../Imagens/estacioAzul.png' )} style={estilos.logo}></Image>

      
       <View style={estilos.geral}>
       <Text style={estilos.titulo1}>Crie,</Text>
       <Text style={estilos.titulo2}>Sua conta!</Text>
       </View>
          <View style={estilos.janela}>
            <View style={estilos.item_email}>
              <Text style={estilos.textEmail}>EMAIL:</Text>
              <TextInput style={estilos.textCampo} 
              placeholder={'Digite seu email'} ></TextInput>
            </View>
            <View style={estilos.item_matricula}>
              <Text style={estilos.textMatricula}>MATRÍCULA:</Text>
              <TextInput style={estilos.textCampo} 
              placeholder={'Digite sua matrícula'} ></TextInput>
            </View>
            <View style={estilos.item_senha}>
              <Text style={estilos.textSenha}>SENHA:</Text>
              
              <View style={estilos.inputArea}>
              <TextInput style={estilos.textInput} 
              placeholder={'Digite sua senha'}/>
              <TouchableOpacity style={ estilos.icon}>
              <Ionicons name= "eye" color= "grey" size= "20px" />
              </TouchableOpacity>
            </View>
            </View> 
            </View>
            <View style={estilos.botao}>
            <Button title=" CADASTRE" color= '#B0C4DE' fontColor= '' onPress={()=>navigation.navigate('Login')} />
            </View>
      </View>
    </View>
    </Container>
  );
}

const estilos = StyleSheet.create({


  geral: {
    flex: 1,
    marginTop: '25%'
  },

  fundo: {
    flex: 1
  },
  textEmail:{
    marginTop: '10%',
    marginLeft: '-220px',
    fontWeight: 'bold'
  },
  textMatricula:{
    marginTop: '2%',
    marginLeft: '-190px',
    fontWeight: 'bold'
  },
  
  textSenha:{
    marginTop: '2%',
    marginLeft: '-222px',
    fontWeight: 'bold'
  },

  textCampo: {
    flexDirection: 'row',
    backgroundColor: '#F4F3F3',
    borderRadius: '10px',
    height: '35px',
    color: '#a1a1a1',
    margin: '10px',
    padding: '8px'
  },

  inputArea: {
    flexDirection: 'row',
    backgroundColor: '#F4F3F3',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'right',
    borderRadius: '10px',
    height: '35px',
    color: '#a1a1a1',
    marginLeft: '15%',
    padding: '2px'
  },

  icon: {
    width: '20%',
    height: '35px',
    alignItems: 'right',
    justifyContent: 'center',
    borderRadius: '10px',
    backgroundColor: '#F4F3F3'
  },

  textInput: {
    backgroundColor: '#F4F3F3',
    color: '#a1a1a1',
    margin: '50px',
    height: '',
    borderRadius: '10px',
    padding: '8px'
  },

  item_email:{
    marginHorizontal: '5%'
  },
  item_matricula:{
    marginHorizontal: '5%'
  },
  item_senha:{
    marginHorizontal: '3%',
    borderRadius: '20px',
    background: 'white'
  },

  esqueci_senha:{

    marginHorizontal: '15px',
    height: '80px',
    fontFamily: 'Poppins',
    fontSize: '12px',
    lineHeight: '20px',
    alignItems: 'right',
    justifyContent: 'center',
    textAlign: 'right',
    color: 'black'

  },
  
  botao:{
    position: 'absolute',
    color: 'black',
    width: '120',
    height: '70',
    backgroundColor: '#0094ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20PX',
    right: 105,
    bottom: 105
    
  },
  janela:{
    marginTop: '35%',
    height: '80%',
    textAlign: 'center',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    background: 'white'
  },
   
  titulo1:{

    margin: '5%',
    marginTop: '5%',
    width: '90px',
    height: '80px',
    left: '23px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '30px',
    lineHeight: '40px',
    color: 'black'
  },
  titulo2:{
    marginVertical: 10,
    margin: '5%',
    marginTop: '-6%',
    width: '200px',
    height: '80px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '30px',
    color: 'white'
  },
  logo:{
    width: '100%',
    resizeMode: 'contain',
    height: '80px',
    alignSelf: 'center',
    marginTop: '10px'
  }
})