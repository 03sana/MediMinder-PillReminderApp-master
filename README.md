![Green Gradient Application Showcase Presentation](https://github.com/03sana/MediMinder-PillReminderApp-master/assets/105085789/e05cd83e-c483-4a53-ba70-744e0f13c807)

## Figma Design File
https://www.figma.com/community/file/1373636997429151322/mediminder-pillreminderapp

# MediMinder App

MediMinder is a React Native application designed to help users manage their medication schedules. It features user authentication, profile management, and medication tracking functionalities. The backend is built using Firebase, and the frontend is developed using React Native, Expo, and Redux for state management.

## Features

- **User Authentication**
  - Sign-in, Sign-up and sign-out
  - Email and Google authentication
  - Password reset via email

- **Profile Management**
  - View and update user profile information

- **Medication Management**
  - Add medication details to Firestore database
  - Display and update medication information on the screen
  - Track medication intake

- **User Interface**
  - Clean and intuitive UI design
  - Integration with various custom components such as inputs, buttons, and date pickers

## Challenges and Solutions

### Notifications
- **Issue:** Unable to fully implement notifications.
- **Reason:** Complications arose when adding notifications at the end of the project. Notifications require a real Android device for testing, which I did not have access to.
- **Solution:** I decided to remove the incomplete notification code to maintain project consistency.

### Password Reset
- **Issue:** Implementing password reset using a code requires a different database than Firebase.
- **Solution:** Implemented password reset functionality via email instead.

### Google Sign-In
- **Issue:** Encountered multiple problems with Google Sign-In.
- **Solution:** Referred to the YouTube video [here](https://youtu.be/3pYxbkhpOBY) and various Stack Overflow posts to resolve issues.

### Date and Time Picker
- **Issue:** Had difficulty importing and displaying date and time pickers.
- **Solution:** Managed to import and use the date picker, although there were issues integrating it with the medicine screen.

### Bottom Tab Navigator
- **Issue:** Did not initially want to use the bottom tab navigator, but navigation issues required its implementation.
- **Solution:** Used the bottom tab navigator to ensure smooth navigation between screens.

### Gradle Issues
- **Issue:** Faced multiple issues related to Gradle configuration.
- **Solution:** Resolved by consulting various online resources and documentation.


## Technologies Used

- **React Native**
- **Expo**
- **Firebase Authentication**
- **Firebase Firestore**
- **Redux for state management**
---Redux was used to manage the global state of the application. This included handling user authentication
states, profile updates, and medication data management.
--- Ensuring the Redux store was properly updated and persisted across sessions was critical for a seamless user
experience.


## Installation

1. Clone the repository:
   git clone https://github.com/03sana/MediMinder-PillReminderApp-master.git
2. Navigate to the project directory:
          cd MediMinder-PillReminderApp-master
3. Install the dependencies:
            npm install
4. Set up Firebase:
    Add your Firebase configuration to firebase.js.
    Ensure you have a valid google-services.json file for Android and GoogleService-Info.plist for iOS in the respective directories.

### Running the App
1. Start the Expo server:
   npx expo start
2. Run the app on your desired platform:
For iOS:npx expo run:ios
For Android:npx expo run:android


## Screenshots

<p float="left">
  <img src="https://github.com/03sana/MediMinder-PillReminderApp-master/assets/105085789/8e3ca14f-c22f-43a3-b0d2-007dbecd9c64" width="200"/>
  <img src="https://github.com/03sana/MediMinder-PillReminderApp-master/assets/105085789/f4950721-fdf8-44f1-ada1-c53bfbb9074a" width="200"/> 
   
 <img src="https://github.com/03sana/MediMinder-PillReminderApp-master/assets/105085789/1a7b98f0-b7dc-4918-b14f-66a54ff3c22f" width="200"/> 
   <img src="https://github.com/03sana/MediMinder-PillReminderApp-master/assets/105085789/60d16e46-41f0-4f68-9730-22751edc6279" width="200"/> 
<img src="https://github.com/03sana/MediMinder-PillReminderApp-master/assets/105085789/fc99d7bb-17b4-4719-b606-6b26041914d6" width="200"/> 
  
  <img src="https://github.com/03sana/MediMinder-PillReminderApp-master/assets/105085789/b2f85b15-1e41-4b13-8ec2-322b11956f81" width="200"/>
  <img src="https://github.com/03sana/MediMinder-PillReminderApp-master/assets/105085789/bf1085c7-d4dd-47a8-9a4a-87dca903dc04" width="200"/> 
  <img src="https://github.com/03sana/MediMinder-PillReminderApp-master/assets/105085789/6a1a02f8-439f-401e-b9f2-d323566e0189" width="200"/>
  <img src="https://github.com/03sana/MediMinder-PillReminderApp-master/assets/105085789/d639f9f7-c4cb-40b6-82ab-3946a6c2614f" width="200"/>

  <img src="https://github.com/03sana/MediMinder-PillReminderApp-master/assets/105085789/00272c07-0d1c-47f8-9e75-34efb2d3fd20" width="200"/>
  
 
  <img src="https://github.com/03sana/MediMinder-PillReminderApp-master/assets/105085789/ab00c21b-c243-4efd-a36b-35fbc3db0765" width="200"/>
  <img src="https://github.com/03sana/MediMinder-PillReminderApp-master/assets/105085789/a8ea29e0-c20b-46dc-be1e-9e3b985bcf87" width="200"/>
  <img src="https://github.com/03sana/MediMinder-PillReminderApp-master/assets/105085789/4d3041e2-4eb4-4d4d-bee2-bd0979dae1ff" width="200"/>
</p>


## Firebase 

<p>   <img src="https://github.com/03sana/MediMinder-PillReminderApp-master/assets/105085789/03280010-9be3-4f36-8efc-36e2596db61f"/> 
<img src="https://github.com/03sana/MediMinder-PillReminderApp-master/assets/105085789/b8776bcf-120f-439f-a4cb-9b54aa7f0612"/> </p>



