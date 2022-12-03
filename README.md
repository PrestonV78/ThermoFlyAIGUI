# ThermoFlyAIGUI

This project is written in React Native and leverages Expo https://expo.dev/

Expo allows for coding once to be translated to both OS systems and allows for faster and easier demo of the app for debugging and development.

run the app with `npm start`
using the Expo GO app on your device scan the QR code in the terminal

__*Happy Tinkering*__

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

__The GUI__

The GUI is the user’s window into the system. It is from this that the user will be able to interact and communicate with the system. The GUI will be personalized to the user just as the AI model will be after learning preferences. To ensure this personalization the user will need to login to an account they created to allow for their preferences to be saved and reachable by only them. The GUI itself is made up of three pages, a simple login page for the user authentication to allow for the personalization and calling of the user trained model. The second page would be the “Profile” page that should show users deeper, more detailed information on the systems working.
 
This information should include a graph that shows the points of desired temperature of the user and predicted desired temperature by the model. This is easily shown with point graphs and should be expandable. For added detail personalization the graph should use ranges set by the user for their desired data. The final page of the GUI is the Homepage. This is the page that users will open to and will have the most screen time of the screens. Due to this the home page should hold important information, but keeping it clear and concise making sure to not overpopulate the screen while making sure to have ample information.

The GUI home page should have three major components for displaying ample data to the user. The external temperature should be in clear view on the GUI, but take a back seat to the current temperatures. The “Current Component” should show the user the current indoor temperature, the process the HVAC system is employing, and the model’s predicted desired temperature. Lastly there should be a clear section for the user to interact with enabling them to show their input and directly set their desired temperature. This input is what will be sent to the model and used to learn the personal preferences for future predictions. The GUI should be a mobile app that leverages the React Native application building process. The GUI should be pulling information from the Frontend and databases to keep external, internal, and desired temperatures current to their sources. The GUI will also need the ability to send desired temperature to the Frontend for transmission to both the model and to the HVAC system itself.

Another base functionality of the GUI needs to be ease in the transition between these pages. To make this the easiest and most clear, a navigation bar is suggested. This will allow for buttons to navigate between pages and a title to clearly define which page is being shown. For the purposes of our app a logo is used to navigate to the login/authentication page. An icon of a person is used to transition between Homepage and Profile, which becomes a home icon to transition the other way from Profile to Homepage.



-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

__Where We Are__

As of 12/3/2022 the only page that is implemented is the Homepage. The Homepage is fully responsive at this time and is reacy for integration into the back end. The Homepage is also open in design and will have an easy transition to moving into a multipage GUI. 




-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

__The Project__

The Nest thermostat is a smart, learning device that uses machine learning to control the set point for single-zone residential thermostats. Machine Learning takes into account the routines of the users, adapting the schedule of temperature set points to reflect historical, manual entries. Although Wi-Fi enabled, the Nest does not take into account outside weather when adjusting setpoints, and internal algorithms do not make any attempt to change temperature setpoints to maintain user comfort levels.

The objective of this project is to begin the framework for an AI external to the Nest that will not only follow user’s historical preferences, but will also factor insulation heat loss and external weather conditions to maintain constant comfort to users while improving energy efficiency of residential systems.
