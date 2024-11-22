import { useState, useEffect } from "react";
import { View, SafeAreaView, ScrollView, TouchableOpacity, Text } from "react-native";
import FadeInView from "../Animations/Fade In View";
import styles from "../CSS/Styles";

function HomePage({ navigation, route }) {
    const dishName = route.params?.nameKey || "";
    const dishDescription = route.params?.descriptionKey || "";
    const dishCourse = route.params?.courseKey || "";
    const dishPrice = parseFloat(route.params?.priceKey) || 0; // Ensure price is a number

    const [orderItems, setOrderItems] = useState([]);

    let appetizerAvg = [];

    // Function to calculate the average price
    const calculateAverage = (items) => {
        if (items.length === 0) return "0.00";
        const total = items.reduce((sum, item) => sum + parseFloat(item.price), 0);
        return (total / items.length).toFixed(2); // Two decimal places
    };

    const calculateAverageByCourse = (course) => {
        const filteredItems = orderItems.filter(
            (item) => item.course.toLowerCase() === course.toLowerCase()
        );

        console.log(`Filtered Items for ${course}:`, filteredItems); // Debugging
        if (filteredItems.length === 0) return "0.00"; // No items for this course
        const total = filteredItems.reduce((sum, item) => sum + parseFloat(item.price), 0);
        return (total / filteredItems.length).toFixed(2);
    };    


    useEffect(() => {
        if (dishName && dishDescription && dishCourse && dishPrice) {
            setOrderItems((prevItems) => [
                ...prevItems,
                {
                    name: dishName,
                    description: dishDescription,
                    course: dishCourse,
                    price: dishPrice,
                },
            ]);
        }
    }, [dishName, dishDescription, dishCourse, dishPrice]);

    const removeItem = (index) => {
        setOrderItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    return (
        <View>
            <SafeAreaView>
                <ScrollView>
                    <FadeInView>
                        <View>
                            <Text style={styles.orderTitle}>Place Order</Text>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View>
                            <Text style={styles.itemsOrdered}>
                                Items Ordered: [{orderItems.length}]
                            </Text>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View>
                            <Text style={styles.averageItemsText}>
                                Average Price of Menu Items: R {calculateAverage(orderItems)}
                            </Text>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View>
                            <Text style={styles.averageItemsText}>
                                Average Price of Appetizers Items: R {calculateAverageByCourse("appetizer")}
                            </Text>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View>
                            <Text style={styles.averageItemsText}>
                                Average Price of Main Course Items: R {calculateAverageByCourse("main course")}
                            </Text>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View>
                            <Text style={styles.averageItemsText}>
                                Average Price of Dessert Items: R {calculateAverageByCourse("dessert")}
                            </Text>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View>
                            <Text style={styles.averageItemsText}>
                                Average Price of Beverages Items: R {calculateAverageByCourse("beverages")}
                            </Text>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        {orderItems.length > 0 ? (
                            orderItems.map((item, index) => (
                                <View style={styles.arrayBackground} key={index}>
                                    <View>
                                        <Text>{'\n'}</Text>
                                    </View>

                                    <View>
                                        <Text style={styles.itemsArray}>
                                            Name: {item.name} {'\n'} {'\n'}
                                            Description: {item.description} {'\n'} {'\n'}
                                            Course: {item.course} {'\n'} {'\n'}
                                            Price: R {item.price} {'\n'} {'\n'}
                                        </Text>
                                    </View>

                                    <View>
                                        <TouchableOpacity
                                            style={styles.removeItemButton}
                                            onPress={() => removeItem(index)}
                                        >
                                            <Text style={styles.removeItemText}>Remove</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View>
                                        <Text>{'\n'}</Text>
                                    </View>
                                </View>
                            ))
                        ) : (
                            <Text style={styles.itemsArray}>No Item was added</Text>
                        )}

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View>
                            <TouchableOpacity
                                style={styles.addItemButton}
                                onPress={() => {
                                    navigation.navigate('AddItems');
                                }}
                            >
                                <Text style={styles.addItemsText}>Add Items</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity
                                style={styles.filterButton}
                                onPress={() => {
                                    navigation.navigate('Filter');
                                }}
                            >
                                <Text style={styles.filterText}>Filter By Course</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity
                                style={styles.viewMenuButton}
                                onPress={() => {
                                    navigation.navigate('Menu');
                                }}
                            >
                                <Text style={styles.viewMenuText}>View Menu</Text>
                            </TouchableOpacity>
                        </View>
                    </FadeInView>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

export default HomePage;

