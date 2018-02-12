import React, {Component} from 'react';
import { AppRegistry, Alert, Button, Image, StyleSheet, Text, View, TextInput, Keyboard, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class passNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Passport Inside',
		};
	}
	render() {
		const { navigate } = this.props.navigation;
	return (
	<View style={styles.book}>
		<ScrollView contentContainerStyle={styles.contentContainer}>
		<Text style={{fontSize: 30, fontWeight: 'bold', color: '#14487a', textAlign: 'center'}}> My Passport </Text>
		<Text style={{fontSize: 16, textAlign: 'center', color: '#4b85bc'}}> Click on winery names below to navigate to corresponding Winery pages </Text>
		<View style={styles.row}>
			<Image
				source={require('./assets/Arrigoni.png')}
				style={styles.navImage}
			/>
			<Button
				title="Arrigoni Winery"
				onPress= {() => navigate('Winery')}
			/>
			<Text style={{flex: 1, fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Arrigoni Winery</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/Bishops.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Bishop's Orchards Winery</Text>
			
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/Brignole.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Brignole Vineyards</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Chamard Vineyards</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Connecticut Valley Winery</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Digrazia Vineyards</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Gouveia Vineyards</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Haight-Brown Vineyards</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Holmberg Orchards & Winery</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Hopkins Vineyard</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Jerram Winery</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Jonathan Edwards Winery</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Jones Winery</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Land of Nod</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Maugle Sierra Vineyards</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Miranda Vineyard</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Paradise Hills Vineyard and Winery</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Preston Ridge Vineyard</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Priam Vineyards</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Saltwater Farm Vineyard</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Savino Vineyards</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Sharpe Hill Vineyard</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Stonington Vineyards</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Sunset Meadow Vineyards</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Taylor Brooke Winery</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>Walker Road Vineyards</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		<View style={styles.row}>
			<Image 
				source={require('./assets/download.jpg')}
				style={styles.navImage}
			/>
			<Text style={{flex: 1, flexWrap: 'wrap', fontSize: 15, fontWeight: 'bold', textAlign: 'center', color: '#4b85bc'}}>White Silo Farm & Winery</Text>
			<Image 
				source={require('./assets/no-stamp.png')}
				style={styles.navImage}
			/>
		</View>
		
		
		<View style={styles.row}>
			<Button
				title="Go to Winery Screen"
				onPress= {() => navigate('Winery')}
			/>
		</View>
		</ScrollView>
	</View>
	);
  }
}
const styles = StyleSheet.create({
  contentContainer: {
	paddingVertical: 20
  },
  book: {
    flex: 1,
    backgroundColor: '#eaefff',
    //color: '#4b85bc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navImage: {
	marginTop: 10,
	resizeMode: 'contain',
	resizeMode: 'cover',
	width: 100,
	height: 100,
  },
  row: {
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
  },
  button: {
	margin: 10,
	backgroundColor: '#4b85bc',
	//color: '#eaefff',
	marginTop: 100,
	position: 'absolute',
	bottom: 0,
  },
});
