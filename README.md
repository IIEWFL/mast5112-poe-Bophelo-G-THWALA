[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/2xEWLklS)

Name: Bophelo Thwala

Student No.: ST10446904

Module Code: MAST5112

Lecturer: Mr. Steven Ndaye

Mobile App Scripting POE-part 3








Restaurant App – Changes and fixes 

Keyboard type
     
In the price Input of the Add-Items page, I ensured that keyboard type is inserted that when the user keyboard pops up, the keyboard only shows number buttons.  

Price Input
 
 <View>
    <TextInput style={styles.inputs} keyboardType="numeric" placeholder='Enter the price' onChangeText={setPrice} value={price} />
</View>       

Display Order page on Home Page (button and page to view menu – Menu Page).

The order section has been moved to the homepage and the menu has been moved. The menu is now displayed on the Menu Page and the order section is displayed on the Home Page.


 


INTRODUCTION AND ABOUT

The restaurant app is an app where users can visually see the menu and order items through the app by going to the “Add Items” page to enter the dish name, description, course, and price and add the as they will display on them on the “Order” page.

FEATURES (Explained):



 


1.	Welcome Page

The “Welcome” page has the restaurant logo, text and a button. A welcome text is displayed and an instruction text informing the user to click a button saying “Next Page” for them to access the other parts of the app.



2.	Home Page

The “Home” page consists of a display where the user can see the number of items ordered by “Items Ordered: [0]”, and the name, description, course type, price of the item they ordered. If no item was ordered the message will display: “No Item was added”. 

Three buttons (Add Items: Will take you to the Add Items page where the user can add menu items and Filter by Course: The user can filter menu items according to the type of course and View Menu button for the user to view then menu).

If you added an item to display on the Home Page, the Name, Description, Course and Price. There is a remove button for you to remove items



3.	Menu Page


The “Menu” page displays a menu filtered by four courses (Appetizers, Main Course, Dessert, Beverages). The whole menu consists of six [6] appetizer meals, eight [8] main course meals, eight [8] kinds of desserts, and ten [10] beverages for the user to choose from ranging to the total of 32 food items in the menu. It is just a visual menu for the users to look at.




4.	Add Items Page

The “Add Items” page will allow the user to enter the dish details they want. The user can enter the name of the dish, the description of the dish, the course for the dish and the price of the dish.

After entering the details of the dish, the user can enter the “Add” button to submit the order and it will display on the “Order” page and will take you back to the “Order” page for the user to see the item entered from the “Add items” page.

However, if all or one or more of the fields are empty and course type is not selected (e.g. description of the dish is empty but other fields are entered), the alert message will display: “Please fill in all the fields”. So, ensure you have entered all fields.


 
5.	Filter Page 
The “Filter” page shows the menu items filtered based on the course type.
(e.g. (filter by) -> Beverages:  
Name: Water, Description: Just a glass of water can be also (spring or mineral) anyway you like it, Price: R 12.00).

You can show and hide items according to the course type, if no course type is selected then the message will display (“No items found”).



Git Hub Link:

https://github.com/IIEWFL/mast5112-poe-Bophelo-G-THWALA.git


Demonstration Video:

https://youtu.be/XxMQjPIi9ds






REFERENCES OF ASSETS

  Appetizers, Main Course and Dessert

Obtained from: Southern Living

Link: https://www.southernliving.com/food

Author: Southern Living


Beverages

Tea: 
    
Obtained from: iStock

Link: https://www.istockphoto.com/search/2/image-film?phrase=rooibos+tea


Coffee: 

Obtained from: Bones Coffee Company

 Link: https://www.bonescoffee.com/a/blog/sugar-cookie-coffee-latte-recipe


Milkshakes: 

Obtained from: getty images

Link: https://www.gettyimages.com/detail/photo/strawberry-milkshake-royalty-free-image/157583034?adppopup=true

Author: inhauscreative

Author Profile: https://www.gettyimages.com/search/photographer?photographer=inhauscreative

    
Cooldrinks: 

Obtained from: iStock

Link: https://www.istockphoto.com/photo/cola-glass-with-ice-cubes-gm530428650-93410511?searchscope=image%2Cfilm

 Author: gresei

 Author Profile: https://www.istockphoto.com/portfolio/gresei?mediatype=photography
