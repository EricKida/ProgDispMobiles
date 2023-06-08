import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  input: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
  },
  areaInput: {
    marginTop: 10,
    alignItems: 'center',
  },
  divInputPerfil: {
    backgroundColor: '#e6e6e6',
    flexDirection: 'row',
    width: '100%',
    borderColor: '#388bfd',
    borderRadius: 10,
  },
  inputPerfil: {
    marginStart: 20,
    flex: 1,
  },
  btnInputTarefa: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: 100,
    marginLeft: 'auto',
    padding: 15,
    backgroundColor: '#388bfd',
    alignItems: 'center',
  },
  perfil: {
    padding: 20,
  },
  areaPessoa: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  areaTextPessoa: {
    width: '50%',
    justifyContent: 'center',
  },
  areaFotoPessoa: {
    width: '50%',
    alignItems: 'center',
  },
  infoFoto:{
    width: 125,
    height: 125,
    borderRadius: 100,
  },
  infoNome:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    marginRight: 3,
  },
  infoId:{
    color: '#b5b5b5',
    fontWeight: '100',
    marginTop: -5,
  },
  areaInfoPerfil: {
    flexDirection: 'row',
    marginTop: 10,
  },
  areaInfoFollowersPerfil: {
    padding: 10,
    width: '50%',
    alignItems: 'center',
    backgroundColor: '#1e2633',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  areaInfoFollowingPerfil: {
    padding: 10,
    width: '50%',
    alignItems: 'center',
    backgroundColor: '#1a222e',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  infoFlNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: -4,
  },
  infoFl: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '100',
  },
  areaInfoReposPerfil: {
    padding: 10,
    width: '50%',
    alignItems: 'center',
    backgroundColor: '#1e2633',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  areaInfoCreatePerfil: {
    padding: 10,
    width: '50%',
    alignItems: 'center',
    backgroundColor: '#1a222e',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
  },
  infoRpNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: -4,
  },
  btnLink: {
    flexDirection: 'row',
  },
});

export {styles};