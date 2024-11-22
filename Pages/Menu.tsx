import { useState } from "react";
import { View, SafeAreaView, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import FadeInView from "../Animations/Fade In View";
import styles from "../CSS/Styles";

function MenuPage({ navigation }) {

    const [appetizer, setAppetizer] = useState(6)

    const [main, setMain] = useState(8)

    const [dessert, setDessert] = useState(8)

    const [beverages, setBeverages] = useState(10)

    return (
        <View>
            <SafeAreaView>
                <ScrollView>
                    <FadeInView>
                        <View>
                            <Text style={styles.menuTitle}>Menu</Text>
                        </View>

                        {/* Appetizers - start */}

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View>
                            <Text style={styles.appetizersText}>Appetizers [{appetizer}]</Text>
                        </View>


                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*A1*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/LoadedDevliledEggs.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Devilied Eggs {'\n'}{'\n'}
                                    Description: These are devilied eggs that taste good, with any {'\n'}
                                    toppings you like.{'\n'}{'\n'}
                                    Price: R 15.00
                                </Text>
                            </View>
                        </View>


                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*A2*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Bacon-pimientoGuacamole.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Bacon-pimientoGuacamole{'\n'}{'\n'}
                                    Description: Guacamole mixed with different and can be spicy {'\n'}{'\n'}
                                    Price: R 30.00
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*A3*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/BuffaloChickenDip.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Buffalo Chicken Dip {'\n'}{'\n'}
                                    Description: A tasty meal filled with chicken and dip that you {'\n'}
                                    can enjoy.{'\n'}{'\n'}
                                    Price: R 35.00
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*A4*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/HotBrownPartyRolls.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Hot Brown Party Rolls {'\n'}{'\n'}
                                    Description: Hots rolls with ham, meat, polony ready to be{'\n'}
                                    served.{'\n'}{'\n'}
                                    Price: R 26.40
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*A5*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/HotCheesyCrabDip.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Hot Cheesy Crab Dip {'\n'}{'\n'}
                                    Description: Basically a chesse-like and maybe some crab food {'\n'}
                                    that can as well tasty for consumers.{'\n'}{'\n'}
                                    Price: R 22.50
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*A6*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/TinyTacos.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Tiny Tacos {'\n'}{'\n'}
                                    Description: Food from mexico, that you can enjoy spicy, mild{'\n'}
                                    toppings you like.{'\n'}{'\n'}
                                    Price: R 21.00
                                </Text>
                            </View>
                        </View>

                        {/*Appetizers - End*/}

                        {/*Main Course - Start*/}

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View>
                            <Text style={styles.appetizersText}>Main Course [{main}]</Text>
                        </View>


                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*M1*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Beefy Lasagna.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Beefy Lasagna {'\n'}{'\n'}
                                    Description: Tasty lasagna, an italian course can be a delicacy {'\n'}
                                    to most countries in the world.{'\n'}{'\n'}
                                    Price: R 40.00
                                </Text>
                            </View>
                        </View>


                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*M2*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Brisket w Carrots.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Brisket w/ Carrots{'\n'}{'\n'}
                                    Description: A main course meal that has carrots along with{'\n'}
                                    soups.{'\n'}{'\n'}
                                    Price: R 46.00
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*M3*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Broccolini Chic n Rice.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Broccolini Chicken and Rice {'\n'}{'\n'}
                                    Description: Lasagna or mac n cheese like dish that is tasty with{'\n'}
                                    chicken and rice combinations.{'\n'}{'\n'}
                                    Price: R 50.00
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*M4*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/mac n cheese.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Macaroni and Cheese {'\n'}{'\n'}
                                    Description: Originated in italy, it is a dish of pasta and cheese {'\n'}
                                    sauce, traditionally using macaroni and cheddar, {'\n'}
                                    baked in a casserole or sometimes cooked on a stovetop.{'\n'}{'\n'}
                                    Price: R 55.00
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*M5*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Roast Chicken w Veggies.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Roast Chicken w/ Veggies {'\n'}{'\n'}
                                    Description: Roasted mouth-watering chicken dipped in any {'\n'}
                                    or assorted kind of vegetables for you to enjoy.{'\n'}{'\n'}
                                    Price: R 35.00
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*M6*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Roasted Lamb.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Roasted Lamb {'\n'}{'\n'}
                                    Description: Fried lamb with herbs and vegetables for customers {'\n'}
                                    to enjoy along with avocado dipping sauce.{'\n'}{'\n'}
                                    Price: R 42.00
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*M7*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Shrimp.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Prawn Shrimps {'\n'}{'\n'}
                                    Description: A dish with prawns and shrimps for sea-food to{'\n'}
                                    taste and eat.{'\n'}{'\n'}
                                    Price: R 20.00
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*M8*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Tenderloin w cream.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Tenderloin w/ Cream {'\n'}{'\n'}
                                    Description: Well-Cooked tenderlion meat and cream to be {'\n'}
                                    served.{'\n'}{'\n'}
                                    Price: R 22.50
                                </Text>
                            </View>
                        </View>

                        {/* Main Course - End*/}

                        {/*Desserts - start */}

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View>
                            <Text style={styles.appetizersText}>Desserts [{dessert}]</Text>
                        </View>


                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*D1*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Ambrosia Trifle.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Ambrosia Trifle {'\n'}{'\n'}
                                    Description: Tasty cake, whipped cream, strawberry in a cup {'\n'}
                                    with jelly as well.{'\n'}{'\n'}
                                    Price: R 10.20
                                </Text>
                            </View>
                        </View>


                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*D2*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Cheesecake fruit salad.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Cheese Fruit Salad{'\n'}{'\n'}
                                    Description: A fruit salad consisting of a mixture of  different{'\n'}
                                    fruit mixed and stirred in cream{'\n'}{'\n'}
                                    Price: R 15.40
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*D3*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Chocolate poke cake.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Chocolate Poke Cake {'\n'}{'\n'}
                                    Description: A well-baked chocolate cake cut into pieces {'\n'}
                                    that may resemble brownies.{'\n'}{'\n'}
                                    Price: R 16.30
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*D4*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Coconut Cupcakes.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Coconut Cupcakes {'\n'}{'\n'}
                                    Description: Coconut flavoured cupcakes with some bird-egg {'\n'}
                                    sweets and some icing on them.{'\n'}{'\n'}
                                    Price: R 9.70
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*D5*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Hot cross buns.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Hot Cross Buns {'\n'}{'\n'}
                                    Description: Type of dessert enjoyed by people as a delicacy {'\n'}
                                    typically on easter every year.{'\n'}{'\n'}
                                    Price: R 17.10
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*D6*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Patch Cake.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Patch Cake {'\n'}{'\n'}
                                    Description: A brownie-like cake with strawberry and icing{'\n'}
                                    for customers to enjoy.{'\n'}{'\n'}
                                    Price: R 19.80
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*D7*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Strawberry Jelly cake.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Strawberry Jelly Cake {'\n'}{'\n'}
                                    Description: A normal cake with strawberry and jelly added on{'\n'}
                                    to it.{'\n'}{'\n'}
                                    Price: R 13.90
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*D8*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Strawberry pound cake.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Strawberry Pound Cake {'\n'}{'\n'}
                                    Description: Another strawberry kind of dessert for customers {'\n'}
                                    to enjoy.{'\n'}{'\n'}
                                    Price: R 21.20
                                </Text>
                            </View>
                        </View>

                        {/* Dessert - end */}

                        {/* Beverages - start */}

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View>
                            <Text style={styles.appetizersText}>Beverages [{beverages}]</Text>
                        </View>


                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*B1*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Chocolate-Milkshake.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Chocolate Milkshake {'\n'}{'\n'}
                                    Description: Chocolate-flavoured milkshake enjoyed by many  {'\n'}
                                    (kids included).{'\n'}{'\n'}
                                    Price: R 10.10
                                </Text>
                            </View>
                        </View>


                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*B2*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Coca-Cola.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Coca-Cola (Coke){'\n'}{'\n'}
                                    Description: A normal flavoured cola for customers to drink {'\n'}
                                    could also come in as (coke-zero, sugar-free){'\n'}{'\n'}
                                    Price: R 11.00
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*B3*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Coffee.png')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Black Coffee {'\n'}{'\n'}
                                    Description: A normal coffee for my morning lovers or{'\n'}
                                    morning people (can add milk and sugar).{'\n'}{'\n'}
                                    Price: R 8.50
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*B4*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/CoffeeLatte.png')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Coffee (Latte) {'\n'}{'\n'}
                                    Description: A brewed coffee that morning people can enjoy as {'\n'}
                                    well.{'\n'}{'\n'}
                                    Price: R 10.60
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*B5*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Fanta.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Orange Cooldrink (Fanta) {'\n'}{'\n'}
                                    Description: Fanta-flavoured drink to cool yourselves down in{'\n'}
                                    the hot-summer times.{'\n'}{'\n'}
                                    Price: R 9.10
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*B6*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Iced-Tea.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Iced Tea {'\n'}{'\n'}
                                    Description: Frozen-flavoured tea people enjoy if they do not{'\n'}
                                    enjoy hot beverages very much.{'\n'}{'\n'}
                                    Price: R 8.20
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*B7*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Rooibos-Tea.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Rooibos Tea {'\n'}{'\n'}
                                    Description: First Kind of tea invented as people do always {'\n'}
                                    enjoy (can add sugar, even milk).{'\n'}{'\n'}
                                    Price: R 6.40
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*B8*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Strawberry-Milkshake.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Strawberry Milkshake {'\n'}{'\n'}
                                    Description: Starwberry-flavoured milkshake enjoyed by many  {'\n'}
                                    (kids included).{'\n'}{'\n'}
                                    Price: R 10.10
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>


                        <View style={styles.itemBackground}>{/*B9*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Vanilla-Milkshake.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Vanilla Milkshake {'\n'}{'\n'}
                                    Description: Vanilla-flavoured milkshake enjoyed by many  {'\n'}
                                    (kids included).{'\n'}{'\n'}
                                    Price: R 10.10
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.itemBackground}>{/*B10*/}

                            <View style={styles.itemImage}>
                                <Image source={require('../assets/Water.jpg')} />
                            </View>

                            <View>
                                <Text style={styles.itemText}>
                                    Name: Water {'\n'}{'\n'}
                                    Description: Just a glass of water can be also (spring or mineral){'\n'}
                                    , anyway you like it.{'\n'}{'\n'}
                                    Price: R 12.00
                                </Text>
                            </View>
                        </View>

                        {/* Beverages - end */}

                        <View>
                            <TouchableOpacity style={styles.nextPageButton} onPress={() => { navigation.navigate('Home') }}>
                                <Text style={styles.nextPageText}>Start Ordering</Text>
                            </TouchableOpacity>
                        </View>
                    </FadeInView>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

export default MenuPage;