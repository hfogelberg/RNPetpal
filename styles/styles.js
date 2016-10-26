import {StyleSheet} from 'react-native';
import * as colors from '../constants/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: colors.COLOR_BACKGROUND,
    flex: 1
  },
  formContainer: {
    flexDirection: 'column',
    backgroundColor: colors.COLOR_BACKGROUND,
    flex: 1
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.COLOR_HEADER,
    flex: .3
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.COLOR_HEADER_TEXT,
  },
  listContainer: {
    paddingLeft: 20,
    paddingTop: 20,
    flex: .7,
    backgroundColor: colors.COLOR_BACKGROUND
  },
  listItem: {
    backgroundColor: colors.COLOR_LIST_ITEM,
    padding: 5,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 10,
    height: 40
  },
  petName: {
    color: colors.COLOR_HEADER_TEXT,
    fontSize: 24,
    fontWeight: 'bold'
  },
  inputs: {
    paddingTop: 20,
    flex: .7,
    backgroundColor: colors.COLOR_BACKGROUND
},
  inputContainer: {
    padding: 10,
    height: 60,
  },
  textInput: {
    position: 'absolute',
    left: 61,
    top: 5,
    right: 10,
    fontSize: 24,
    height: 30,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: colors.COLOR_LATTE
  },
  centerButtonContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    borderWidth: 1,
    borderColor: colors.COLOR_LATTE,
    height: 80,
    width: 120,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.COLOR_SAVE_BUTTON
  },
  buttonText: {
    color: colors.COLOR_LATTE,
    fontSize: 20
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  icon: {
    height: 40,
    width: 40,
    marginTop: -5
  },
  footer: {
    alignSelf: 'stretch',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10
  },
  footerLeftItem: {
    alignItems: 'flex-start'
  },
  discreetButton: {
    color: colors.COLOR_LATTE,
    fontSize: 22
  },
  navBarLeftButton: {
    marginLeft: 10
  }
});
