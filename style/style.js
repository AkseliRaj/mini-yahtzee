import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginBottom: 15,
    backgroundColor: '#c19bff',
    flexDirection: 'row',
    padding: 10,
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#c19bff',
    flexDirection: 'row',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    marginTop: 30,
    marginBottom: 30,
    flexDirection: "row",
    padding: 13,
    backgroundColor: "#b59ce0",
    color: "#ffffff",
    width: 200,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    color:"white",
    fontSize: 20,
    textAlign: 'center'
  },
  text: {
    color:"white",
    fontSize: 18,
    fontWeight: 'bold',
  },
  homeText: {
    paddingTop: 25,
    paddingBottom: 15,
  },
  rulesText:{
    padding: 10,
  },
  ruleTextContainer: {
    backgroundColor: "#b59ce0",
    margin: 15,
    padding: 20,
    borderRadius: 15,

  }, 
  textInput: {
    width: 200,
    height: 40,
    backgroundColor: 'white',  
    borderRadius: 15,         
    paddingLeft: 20,            
  },
  homeContent:{
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    flex: 1,
  },
  homeContainer:{
    flex: 1
  },


  gameboardText:{
    marginTop: 20,
    marginBottom: 7,
    textAlign: 'center'
  },

  throwStatus: {
    fontSize: 24,
    marginBottom: 0,
  },

  throwDicesButton:{
    margin: 100,
  },

  pointsRowText:{
    margin: 9,
  }  ,

  diceRow: {
    marginTop: 130,
    marginBottom: 20,
  },

  playerName:{
    marginBottom: 130,
  },

  scoreboardEmptyText:{
    margin: 15,
    textAlign: 'center',
    fontSize: 20,
  },
  scoreboardContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }

});