import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  navIconContainer: {},
  navIcon: {
    width: 30,
    height: 30,
    marginTop: 30,
    marginRight: 10,
    marginLeft: 10,
  },
  contentContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  horizontalScrollContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    overflow: 'hidden',
  },
  articlesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  articleCard: {
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    justifyContent: 'center', // Align children vertically
    alignItems: 'center', // Align children horizontally
  },
  articleImage: {
    width: 200,
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderRadius: 8, // Make sure the borderRadius matches the articleCard borderRadius
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  bottomTextContainer: {},
  bottomTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomDescription: {
    fontSize: 16,
  },
  bottomLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  categoriesContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  category: {
    marginRight: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#eee',
    borderRadius: 20,
    height: 75,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerList: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  articleList: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  articleListImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  articleContent: {
    flex: 1,
  },
  articleListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  articleListDescription: {
    fontSize: 14,
    color: '#555',
  },

  containerProfile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  profileImage: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 20,
  },
  profileLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
  },
  profileInput: {
      width: '80%',
      height: 40,
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 5,
      marginBottom: 15,
      paddingHorizontal: 10,
  },
  disabledInput: {
      backgroundColor: '#f0f0f0',
  },
  editButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
  },
  editButtonText: {
      color: 'white',
      fontWeight: 'bold',
  },
  saveButton: {
      backgroundColor: 'green',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
  },
  saveButtonText: {
      color: 'white',
      fontWeight: 'bold',
  },
  cancelButton: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 5,
  },
  cancelButtonText: {
      color: 'white',
      fontWeight: 'bold',
  },

  containerSearch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  input: {
    height: 40,
    color: '#000000',
    flex: 1,
  },
  iconContainerSearch: {
    padding: 5,
  },
  iconSearch: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});