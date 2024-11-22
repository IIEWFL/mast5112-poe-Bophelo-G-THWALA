import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { View, SafeAreaView, ScrollView, Text, TouchableOpacity, TextInput } from "react-native";
import FadeInView from "../Animations/Fade In View";
import styles from "../CSS/Styles";

function FilterPage({ navigation }) {
    // Define menu items for each course
    const [appetizerItems] = useState([
        { name: "Bacon-pimiento Guacamole", description: "Guacamole with different toppings, spicy.", price: "30.00", course: "Appetizer" },
        { name: "Deviled Eggs", description: "Eggs with toppings you like.", price: "15.00", course: "Appetizer" },
        { name: "Buffalo Chicken Dip", description: "A tasty meal filled with chicken and dip that you can enjoy.", price: "35.00", course: "Appetizer" },
        { name: "Hot Brown Party Rolls", description: "Hots rolls with ham, meat, polony ready to be served.", price: "26.40", course: "Appetizer" },
        { name: "Hot Cheesy Crab Dip", description: "Basically a chesse-like and maybe some crab food that can as well tasty for consumers.", price: "22.50" },
        { name: "Tiny Tacos", description: "Food from mexico, that you can enjoy spicy, mild toppings you like.", price: "21.00", course: "Appetizer" }
    ]);

    const [mainCourseItems] = useState([
        { name: "Beefy Lasagna", description: "Tasty lasagna, an italian course can be a delicacy to most countries in the world.", price: "40.00", course: "Main Course" },
        { name: "Brisket w/ Carrots", description: "A main course meal that has carrots along with soups.", price: "46.00", course: "Main Course" },
        {
            name: "Broccolini Chicken and Rice", description: "Lasagna or mac n cheese like dish that is tasty with chicken and rice combinations.",
            price: "50.00", course: "Main Course"
        },
        {
            name: "Macaroni and Cheese", description: "Originated in italy, it is a dish of pasta and cheese sauce, traditionally using macaroni and cheddar," +
                " baked in a casserole or sometimes cooked on a stovetop.", price: "55.00", course: "Main Course"
        },
        {
            name: "Roast Chicken w/ Veggies", description: "Roasted mouth-watering chicken dipped in any or assorted kind of vegetables for you to enjoy.",
            price: "35.00", course: "Main Course"
        },
        { name: "Roasted Lamb", description: "Fried lamb with herbs and vegetables for customers to enjoy along with avocado dipping sauce.", price: "42.00", course: "Main Course" },
        { name: "Prawn Shrimps", description: "A dish with prawns and shrimps for sea-food to taste and eat.", price: "20.00", course: "Main Course" },
        { name: "Tenderloin w/ Cream", description: "Well-Cooked tenderlion meat and cream to be served.", price: "22.50", course: "Main Course" }
    ]);

    const [dessertItems] = useState([
        { name: "Ambrosia Trifle", description: "Tasty cake, whipped cream, strawberry in a cup with jelly as well.", price: "10.20", course: "Dessert" },
        { name: "Cheese Fruit Salad", description: "A fruit salad consisting of a mixture of  different fruit mixed and stirred in cream.", price: "15.40", course: "Dessert" },
        { name: "Chocolate Poke Cake", description: "A well-baked chocolate cake cut into pieces that may resemble brownies.", price: "16.30", course: "Dessert" },
        { name: "Coconut Cupcakes", description: "Coconut flavoured cupcakes with some bird-egg sweets and some icing on them.", price: "9.70", course: "Dessert" },
        { name: "Hot Cross Buns", description: "Type of dessert enjoyed by people as a delicacy typically on easter every year.", price: "17.10", course: "Dessert" },
        { name: "Patch Cake", description: "A brownie-like cake with strawberry and icing for customers to enjoy.", price: "19.80", course: "Dessert" },
        { name: "Strawberry Jelly Cake", description: "A normal cake with strawberry and jelly added on to it.", price: "13.90", course: "Dessert" },
        { name: "Strawberry Pound Cake", description: "Another strawberry kind of dessert for customers to enjoy.", price: "21.20", course: "Dessert" }
    ]);

    const [beveragesItems] = useState([
        { name: "Chocolate Milkshake", description: "Chocolate-flavoured milkshake enjoyed by many (kids included).", price: "10.10", course: "Beverages" },
        { name: "Coca-Cola (Coke)", description: "A normal flavoured cola for customers to drink could also come in as (coke-zero, sugar-free)", price: "11.00", course: "Beverages" },
        { name: "Black Coffee", description: "A normal coffee for my morning lovers or morning people (can add milk and sugar).", price: "8.50", course: "Beverages" },
        { name: "Coffee (Latte)", description: "A brewed coffee that morning people can enjoy as well.", price: "10.60", course: "Beverages" },
        { name: "Orange Cooldrink (Fanta)", description: "Fanta-flavoured drink to cool yourselves down in the hot-summer times.", price: "9.10", course: "Beverages" },
        { name: "Iced Tea", description: "Frozen-flavoured tea people enjoy if they do not enjoy hot beverages very much.", price: "8.20", course: "Beverages" },
        { name: "Rooibos Tea", description: "First Kind of tea invented as people do always enjoy (can add sugar, even milk).", price: "6.40", course: "Beverages" },
        { name: "Strawberry Milkshake", description: "Starwberry-flavoured milkshake enjoyed by many (kids included).", price: "10.10", course: "Beverages" },
        { name: "Vanilla Milkshake", description: "Vanilla-flavoured milkshake enjoyed by many (kids included).", price: "10.10", course: "Beverages" },
        { name: "Water", description: "Just a glass of water can be also (spring or mineral), anyway you like it.", price: "12.00", course: "Beverages" }
    ]);

    const [filterItems, setFilterItems] = useState("Select the course you want");
    const [displayItems, setDisplayItems] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    // Function to filter items based on the selected course
    const toggleVisibility = () => {
        let filteredItems = [];
        if (filterItems === "Appetizer") {
            filteredItems = appetizerItems;
        } else if (filterItems === "Main Course") {
            filteredItems = mainCourseItems;
        } else if (filterItems === "Dessert") {
            filteredItems = dessertItems;
        } else if (filterItems === "Beverages") {
            filteredItems = beveragesItems;
        } else {
            filteredItems = [];
        }

        setDisplayItems(filteredItems);
        setIsVisible(!isVisible);
    };

    return (
        <View>
            <SafeAreaView>
                <ScrollView>
                    <FadeInView>
                        <View>
                            <Text style={styles.filterTitle}>Filter By Course</Text>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.pickerView}>
                            <Text style={styles.pickerText}>
                                Selected Course Type: {filterItems === "Select the course you want" ? "None" : filterItems}
                            </Text>
                            <Picker
                                selectedValue={filterItems}
                                style={styles.picker}
                                onValueChange={(itemValue) => setFilterItems(itemValue)}
                            >
                                <Picker.Item label="Select a Course" value="Select the course you want" />
                                <Picker.Item label="Appetizer" value="Appetizer" />
                                <Picker.Item label="Main Course" value="Main Course" />
                                <Picker.Item label="Dessert" value="Dessert" />
                                <Picker.Item label="Beverages" value="Beverages" />
                            </Picker>
                        </View>

                        <View>
                            <TouchableOpacity
                                style={styles.toggleButton}
                                onPress={toggleVisibility}
                            >
                                <Text style={styles.toggleButtonText}>
                                    {isVisible ? "Hide Items" : "Show Items"}
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {isVisible && (
                            <View>
                                {displayItems.length > 0 ? (
                                    displayItems.map((item, index) => (
                                        <View key={index} style={styles.filteredItem}>
                                            <Text style={styles.itemName}>Name: {item.name}</Text>
                                            <Text style={styles.itemDescription}>
                                                Description: {item.description}
                                            </Text>
                                            <Text style={styles.itemPrice}>Price: R {item.price}</Text>
                                            <Text>{'\n'}</Text>
                                        </View>
                                    ))
                                ) : (
                                    <Text style={styles.noItemsText}>
                                        No items found for the selected course.
                                    </Text>
                                )}
                            </View>
                        )}

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View>
                            <TouchableOpacity
                                style={styles.returnButton}
                                onPress={() => {
                                    navigation.navigate('Home');
                                }}
                            >
                                <Text style={styles.returnText}>Return to Home</Text>
                            </TouchableOpacity>
                        </View>
                    </FadeInView>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

export default FilterPage;
