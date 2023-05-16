import {View, Image, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import {Container} from "../assets/styles"
export default function Inicio({navigation}){
  return(
    /*Obs: Não consegui deixar a tela gradiente!*/
    <Container colors={[]}>
    <View style={estilos.janela}>
      <View style={estilos.item_login}>
        <Image source={require('../Imagens/estacioAzul.png' )} style={estilos.logo}></Image>
          <Text style={estilos.titulo1}>Deslize</Text>
          <Text style={estilos.titulo2}>e agende seu mundo com a ESTÁCIO!  </Text>
            <SafeAreaView >
              <View style={estilos.botao}>
              <TouchableOpacity 
                onPress = {() => navigation.navigate('vamosComecar')}
                style={estilos.bottonLogoStyle}
                activeOpacity={0.5}>
              <Image source={require('../Imagens/logoUp.png' )}
                style={estilos.bottonLogoStyle}
                style={estilos.botao} />
              </TouchableOpacity>
            </View>
            </SafeAreaView>
      </View>
    </View>
    </Container>
  );
}

const estilos = StyleSheet.create({
  
  botao:{
    
    margin: '20px',
    marginTop: '20px',
    alignItems: 'center',
    padding: -20,
    right: '',
    bottom: '-10%'
  },
  bottonLogoStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: '0.5px',
    borderColor: 'transparent',
    height: '40%',
    borderRadius: '5px',
    margin: '5px'
  },

  
  item_login:{
    textAlign: 'center',
    margin:'15px',
    width: '90%',
    height:'80%',
    borderRadius: '10px'
  }, 
  titulo1:{
    margin: '2%',
    width: '24%',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: '20px',
    marginTop: '20%',
    backgroundColor: ''
  },
  titulo2:{
    marginLeft: '26%',
    marginTop: '-11%',
    width: '65%',
    color: ['black'],
    fontSize: '20px',
    fontBorder: 'bold',
    backgroundColor: ''
  },
  /*textCampo:{
    border: '1px #256af5 solid',
    margin: '10px',
    borderRadius: '5px'
  },*/
  logo:{
    width: '100px',
    height: '80px',
    alignSelf: 'center',
    marginTop: '140px'
  }
})


