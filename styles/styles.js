import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },
  formContainer: {
    flexDirection: 'column',
    flex: 1
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: .3,
    backgroundColor: 'orange'
  },
  inputs: {
    flex: .7,
    backgroundColor: 'yellow'
},
  inputContainer: {
    padding: 10,
    height: 50,
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent'
  },
  textInput: {
    position: 'absolute',
    left: 61,
    top: 12,
    right: 0,
    height: 20,
    fontSize: 14
  },
  button: {
    marginTop: 30,
    marginRight: 20,
    marginRight: 20,
    height: 60,
    fontSize: 20,
    color: 'green'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  icon: {
    height: 40,
    width: 40
  },
});
