import { StyleSheet, PixelRatio, Platform } from 'react-native'
import { getHeightPercent } from './ratio'

export default StyleSheet.create({
  container: {},
  modalContainer: {
    backgroundColor: 'white',
    flex: 1
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 48,
    width: '70%'
  },
  inputOnly: {
    marginLeft: '15%'
  },
  touchFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 19
  },
  imgStyle: {
    resizeMode: 'contain',
    width: 25,
    height: 19,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#eee',
    opacity: 0.8
  },
  emojiFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    width: 30,
    height: 30,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  },
  itemCountry: {
    flexDirection: 'row',
    height: getHeightPercent(7),
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  itemCountryFlag: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '7%',
    width: '15%'
  },
  itemCountryName: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 2 / PixelRatio.get(),
    borderBottomColor: '#ccc',
    height: 22

  },
  countryName: {
    fontSize: getHeightPercent(2.2)
  },
  countryCode: {
    textAlign: 'right'
  },
  scrollView: {
    flex: 1
  },
  letters: {
    marginRight: 10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  letter: {
    height: 25,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  letterText: {
    textAlign: 'center',
    fontSize: getHeightPercent(2.2)
  },
  closeButton: {
    height: 48,
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeButtonImage: {
    height: 24,
    width: 24,
    resizeMode: 'contain'
  },
  listItemCountry: {
    backgroundColor: 'white',
   },
  searchBarContainerStyle: {
    backgroundColor: 'white',
    height: 48,
    width: '100%'
  },
  searchBarInputStyle: {
    backgroundColor: 'white',
    fontFamily: Platform.OS == 'ios' ? '' : 'notoserif',
  },
  listItemCountryNameStyle:{
    fontFamily: Platform.OS == 'ios' ? '' : 'notoserif',
    fontSize: 18,
    
  },
  callingCodeTextStyle: {
    fontSize: 26,
    borderBottomWidth: 2,
    borderBottomColor: 'gainsboro'
  },
  countryNameTextStyle: {
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: 'gainsboro'
  }
})
