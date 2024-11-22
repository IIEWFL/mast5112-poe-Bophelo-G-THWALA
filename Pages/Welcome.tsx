import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";
import styles from "../CSS/Styles";


function WelcomePage({ navigation }) {

    /*<View style={styles.container}>
                 <Image source={require('./assets/NewsletterWelcomeLogo.jpeg')} />
      </View>*/

    return (
        <View>
            <SafeAreaView>
                <ScrollView>

                    {/*--Logo Reference --
  
              Obtained From: Istock
  
              Link: https://www.istockphoto.com/vector/table-knife-and-fork-utensils-indicating-a-diner-or-food-vector-gm1220651340-357513069
  
              Author: Grace Maina
  
              Author Profile: 
              
            */}

                    <View style={styles.container}>
                        <Image source={require('../assets/RestaurantLogo.jpg')} />
                    </View>

                    <View>
                        <Text style={styles.title}>Welcome to the Restaurant App</Text>
                    </View>



                    <View>
                        <Text>{'\n'}</Text>
                        <Text style={styles.titleText}>Press the "Next Page" Button to access our menu</Text>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.nextPageButton} onPress={() => { navigation.navigate('Home') }}>
                            <Text style={styles.nextPageText}>Next Page</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>

    );
}

export default WelcomePage;