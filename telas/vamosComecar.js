import {View, Image, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity} from 'react-native'
import {Container} from "../assets/styles"
export default function Comecar({navigation}){
  return(

    <Container colors={[]}>
      <View style={estilos.item_login}>
       <Image source={require('../Imagens/estacioAzul.png' )} style={estilos.logo}></Image>
       <Text style={estilos.titulo1}>Obrigado(a),</Text>
       <Text style={estilos.titulo2}>Vamos começar!</Text>
       
       <View style={estilos.janela}>
       <View style={estilos.botao}>
          <Text style={estilos.titulo}>NOSSO OBJETIVO É FACILITAR
           SUA VIDA!  {'\n'}
           PLANEJE, AGENDE E ACOMPANHE SUAS ATIVIDADES, TUDO NA PALMA
            DA SUA MÃO. {'\n'}
            DÊ SEUS PRIMEIROS PASSOS, CLIQUE EM VOLTAR E FAÇA SEU LOGIN!</Text>
       </View>
    
        
        <TouchableOpacity 
                onPress = {() => navigation.navigate('home')}
                style={estilos.bottonLogoStyle}
                activeOpacity={0.5}>
            <Image source={require('../Imagens/logoReturn2.png' ) } 
            style={estilos.  logoReturn}></Image>
            </TouchableOpacity>
        
        </View>
    </View>
    </Container>
  );
}

const estilos = StyleSheet.create({

  titulo: {

    marginTop: "15%",
    margin: '3%',
    fontSize: '80%',
    fontWeight: 'bold'
  },
  
  janela:{
    
    height:'40%',
    width: '110%',
    textAlign: 'center',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    background: 'white'
  },
  item_login:{
    flex: 1,
    textAlign: 'left',
    width: '90%',
    height:'80%'
  }, 
  titulo1:{
    margin: '12px',
    marginTop: '85px',
    width: '251px',
    height: '80px',
    left: '23px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '30px',
    lineHeight: '40px',
    color: 'black'
  },
  titulo2:{
    margin: '12px',
    marginTop: '2px',
    width: '251px',
    height: '80px',
    left: '23px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '30px',
    lineHeight: '2px',
    color: 'black'
  },
  logo:{
    width: '100px',
    height: '80px',
    alignSelf: 'center',
    marginTop: '10px'
  },
  logoReturn:{
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
    height: '30px',
    right: '-3%',
    bottom: '-272%'
  }
  
})




