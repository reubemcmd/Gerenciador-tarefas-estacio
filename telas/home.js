import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native'
import {Container} from "../assets/styles"

export default function home({navigation}){
  return(

      
    <Container colors={[]}>
      <View style={estilos.fundo}>
        <Image source={require('../Imagens/estacioAzul.png' )} style={estilos.logo}></Image>
  
  
            
            <Text style={estilos.titulo1}>Veja</Text>
            <View style={estilos.titulo2}>aqui suas Atividades!</View>
            

          <View style={estilos.janela}>

            
            <Text style={estilos.titulo3}></Text >
            <View style={estilos.item_login}>
              <Text style={estilos.textMatricula}></Text>
      
            </View>
            <View style={estilos.item_senha}>
              <Text style={estilos.textSenha}></Text>
          
            </View>

            <TouchableOpacity 
                onPress = {() => navigation.navigate('')}
                style={estilos.bottonSemanais}
                activeOpacity={0.5}>
                <View style={estilos.semanais}>Semanais</View>
            
              </TouchableOpacity>

            <TouchableOpacity 
                onPress = {() => navigation.navigate('')}
                style={estilos.bottonDiarias}
                activeOpacity={0.5}>
                <View style={estilos.diarias}>Diarias</View>
            
              </TouchableOpacity>

              <TouchableOpacity 
                onPress = {() => navigation.navigate('')}
                style={estilos.bottonMensais}
                activeOpacity={0.5}>
                <View style={estilos.mensais}>Mensais</View>
            
              </TouchableOpacity>

            <View style={estilos.botao}>
            <Button title="< 2023 >" color= '#B0C4DE'onPress={()=>navigation.navigate('')} />
            </View>


            <View style={estilos.botao1}>
            <Button title="< Abril >" color= '#B0C4DE'onPress={()=>navigation.navigate('')} />
            </View>

            <Image source={require('../Imagens/diarias.png' ) } 
            style={estilos.logoReturndiaria}></Image> 

            <Image source={require('../Imagens/semanais.png' ) } 
            style={estilos.logoReturnsemanais}></Image> 

            <Image source={require('../Imagens/mensais.png' ) } 
            style={estilos.logoReturnmensais}></Image> 

       
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

  

  mensais:{

    marginHorizontal: '10%',
    marginTop: '2%',
    width: '80%',
    fontFamily: 'Poppins',
    fontSize: '15px',
    fontWeight: 'bold',
    lineHeight: '190%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    color: 'black',
    border:'solid',
    borderRadius:12
  },

  diarias:{

    marginHorizontal: '10%',
    marginTop: '-30%',
    width: '80%',
    fontFamily: 'Poppins',
    fontSize: '15px',
    fontWeight: 'bold',
    lineHeight: '190%',
    alignItems: 'right',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    color: 'black',
    border:'solid',
    borderRadius:12
   
   },

  
  semanais:{

    marginHorizontal: '10%',
    marginTop: '-14%',
    width: '80%',
    fontFamily: 'Poppins',
    fontSize: '15px',
    fontWeight: 'bold',
    lineHeight: '190%',
    alignItems: 'right',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    color: 'black',
    border:'solid',
    borderRadius:12

  },

  
  botao:{
    position: 'absolute',
    justifyContent: 'center',
    height: '205%',
    borderRadius: '20px',
    right: '20%',
    bottom: '-8%',
    
  },

  botao1:{
    position: 'absolute',
    justifyContent: 'center',
    height: '205%',
    borderRadius: '20px',
    right: '55%',
    bottom: '-8%'

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
    marginTop: 19,
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
  },
  logoReturndiaria:{
    width: '30%',
    resizeMode: 'contain',
    alignSelf: 'center',
    height: '25px',
    right: '22%',
    bottom:'55%'
    },

    logoReturnsemanais:{
    width: '30%',
    resizeMode: 'contain',
    alignSelf: 'center',
    height: '25px',
    right: '22%',
    bottom:'44%'
    },

    logoReturnmensais:{
    width: '30%',
    resizeMode: 'contain',
    alignSelf: 'center',
    height: '23px',
    right: '22%',
    bottom:'31%'
    },
})




