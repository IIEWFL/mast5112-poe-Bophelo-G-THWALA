import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Text } from "react-native";
import FadeInView from "../Animations/Fade In View";
import styles from "../CSS/Styles";

function AddItemsPage({ navigation }) {

    const [name, setName] = useState('')

    const [description, setDescription] = useState('')

    const [course, setCourse] = useState('select course')

    const [price, setPrice] = useState('')

    return (
        <View>
            <SafeAreaView>
                <ScrollView>
                    <FadeInView>
                        <View>
                            <Text style={styles.addItemsTitle}>Add Items</Text>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View>
                            <TextInput style={styles.inputs} placeholder='Enter the dish name' onChangeText={setName} value={name} />
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View>
                            <TextInput style={styles.inputs} placeholder='Enter the description' onChangeText={setDescription} value={description} />
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View style={styles.pickerView}>
                            <Text style={styles.pickerText}>Selected Course Type: {course}</Text>
                            <Picker
                                selectedValue={course}
                                style={styles.picker}
                                onValueChange={(course, itemIndex) => setCourse(course)}
                            >
                                <Picker.Item label="Appetizer" value="appetizer" />
                                <Picker.Item label="Main Course" value="main course" />
                                <Picker.Item label="Dessert" value="dessert" />
                                <Picker.Item label="Beverages" value="beverages" />
                            </Picker>
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View>
                            <TextInput style={styles.inputs} keyboardType="numeric" placeholder='Enter the price' onChangeText={setPrice} value={price} />
                        </View>

                        <View>
                            <Text>{'\n'}</Text>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.addButton} onPress={() => {
                                if (name && description && price && course !== 'select course') {
                                    navigation.navigate('Home', {
                                        nameKey: name,
                                        descriptionKey: description,
                                        courseKey: course,
                                        priceKey: price
                                    });
                                } else {
                                    alert('Please fill in all the fields');
                                }
                            }}
                            >

                                <Text style={styles.addButtonText}>Add</Text>
                            </TouchableOpacity>
                        </View>

                    </FadeInView>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

export default AddItemsPage;