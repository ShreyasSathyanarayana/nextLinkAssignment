
MainScreen Component Documentation
Overview
The MainScreen component is a functional React Native component that displays a user interface for sharing a digital card through various methods. The component uses several vector icons and images to enhance the UI, and provides touchable buttons for user interactions.

Dependencies
react-native
react-native-vector-icons/AntDesign
react-native-vector-icons/SimpleLineIcons
react-native-vector-icons/MaterialCommunityIcons
Dimensions
The component utilizes the Dimensions API from react-native to get the screen's width and height, which are used to dynamically style the component.

javascript
Copy code
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
Component Structure
The MainScreen component returns a View that contains:

Two TouchableOpacity buttons for sharing the card.
An Image displaying a QR code.
A View styled as a card containing several rows, each with an icon and text.
UI Elements
Share Button
Two buttons with similar styles for sharing actions.
Uses VectorIcon for an icon and Text for the button label.
QR Code Image
An Image component to display a QR code.
Card
A View styled to look like a card.
Contains multiple rows (View components) each with an icon and a text label, indicating different actions related to the card.
Card Rows
Each row contains:
An icon from react-native-vector-icons
A text label describing the action.
Styles
Defined using StyleSheet.create for consistency and reusability:

shareButton: Styles for the share buttons.
buttonText: Text style for the share buttons.
card: Style for the card container.
iconstyle: Style for the icons within the card.
cardText: Style for the text labels within the card.
cardRow: Style for the rows within the card.
