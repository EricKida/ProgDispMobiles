import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#121212',
    padding: 1,
  },
  titlePage: {
    marginTop: 10,
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20,
  },
  img: {
    alignSelf: 'center',
    width: 200,
    height: 220,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: '#1C1C1C',
  },
  divInfs: {
    alignSelf: 'center',
    marginBottom: 6,
    marginTop: 10,
    width: 320,
    backgroundColor: '#1C1C1C',
    borderRadius: 10,
  },
  titleInfs: {
    textAlign: 'left',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  textInfs: {
    color: '#D3D3D3',
    fontSize: 15,
    fontWeight: 'lighter',
    marginLeft: 15,
    marginRight: 15,
  },
  btnGitHub: { 
    flexDirection: 'row',
    width: 76,
    borderRadius: 4,
    marginLeft: 13,
    marginRight: 3,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#0275d8',
  },
  textInfsGithub: {
    color: '#fff',
    fontWeight: 'bold'
  },
  imgGitHub: {
    width: 16,
    height: 16,
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 3,
    marginRight: 3,
  },
  ajust: {
    marginBottom: 10
  },
});

export {styles};
