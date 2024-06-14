import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import VectorIcon from 'react-native-vector-icons/AntDesign';
import SimpleLaneIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Airdrop from '../images/airdrop.png'
const {width, height} = Dimensions.get('window');
function MainScreen() {
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
        <StatusBar backgroundColor={'white'}/>
      <TouchableOpacity style={styles.shareButton}>
        <VectorIcon
          name="down"
          style={{color: 'white', marginRight: 15}}
          size={22}
        />
        <Text style={styles.buttonText}>Share my card</Text>
      </TouchableOpacity>
      <Image source={require('../images/qrcode.jpg')} />
      <View style={styles.card}>
        <View style={styles.cardRow}>
          <SimpleLaneIcon name="share-alt" size={22} style={styles.iconstyle} />
          <Text style={styles.cardText}>Share my card</Text>
        </View>
        <View style={styles.cardRow}>
          <VectorIcon name="wallet" size={22} style={styles.iconstyle} />
          <Text style={styles.cardText}>Add card to wallet</Text>
        </View>
        <View style={styles.cardRow}>
          <VectorIcon name="mobile1" size={22} style={styles.iconstyle} />
          <Text style={styles.cardText}>Add card to homescreen</Text>
        </View>
        <View style={styles.cardRow}>
          <MaterialIcon
            name="email-multiple"
            size={22}
            style={styles.iconstyle}
          />
          <Text style={styles.cardText}>Create email signature</Text>
        </View>
        <View style={styles.cardRow}>
          <MaterialIcon
            name="image-outline"
            size={22}
            style={styles.iconstyle}
          />
          <Text style={styles.cardText}>Create a virtual background</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.shareButton}>
        <Image
          source={require('../images/airdrop.png')}
          style={{width: 20, height: 20, marginRight: 15}}
        />
        <Text style={styles.buttonText}>Share with AirDrop</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  shareButton: {
    width: width * 0.8,
    backgroundColor: 'rgb(237, 119, 28)',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    fontWeight: '500',
  },
  card: {
    width: width * 0.8,
    height: height * 0.3,
    backgroundColor: 'rgb(245, 244, 242)',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-around',
  },
  iconstyle: {
    color: 'grey',
    marginRight: 15,
  },
  cardText: {
    color: 'grey',
    fontSize: 18,
    fontWeight: '500',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
