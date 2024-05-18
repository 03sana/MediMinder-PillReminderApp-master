![Green Gradient Application Showcase Presentation](https://github.com/03sana/MediMinder-PillReminderApp-master/assets/105085789/e05cd83e-c483-4a53-ba70-744e0f13c807)

## Figma Design File
https://www.figma.com/community/file/1373636997429151322/mediminder-pillreminderapp

# MediMinder App

MediMinder is a React Native application designed to help users manage their medication schedules. It features user authentication, profile management, and medication tracking functionalities. The backend is built using Firebase, and the frontend is developed using React Native, Expo, and Redux for state management.

## Features
- **User Authentication:** Sign in, sign up, and password reset functionalities using Firebase Authentication.
- **Google Sign-In:** Integrated Google Sign-In for easy authentication.
- **Medication Tracking:** Add and track medication schedules, including reminders.
- **Date and Time Pickers:** Select date and time for medication reminders.
- **Bottom Tab Navigation:** Navigate between different screens using a bottom tab navigator.
- **State Management:** Utilized Redux for managing global state across the application.
- **Profile Management:** View and update user profile information.

## Challenges Faced

### 1. User Authentication
- Implementing Firebase Authentication for email and password login was straightforward.
- Google Sign-In integration faced several issues, which were resolved by referring to [this YouTube video](https://youtu.be/3pYxbkhpOBY?si=2uTkKtisRoVQm8dz).

### 2. Profile Management
- Updating the user's email required email verification, leading to errors such as "Firebase: Please verify the new email before changing email."
- The username update under the profile picture was initially challenging but resolved through state management.

### 3. Medication Tracking
- Saving medication data to Firestore and displaying it correctly involved handling asynchronous operations.
- Implementing date and time pickers and ensuring they worked seamlessly with the user interface required precise state management.

### 4. Notifications
- Adding push notifications for medication reminders faced compatibility issues with Expo and Firebase, and deprecated packages posed additional challenges.

### 5. Navigation
- The bottom tab navigator was necessary for screen navigation, despite the initial desire to avoid it.
- Navigating between screens without the bottom tab navigator led to issues that were resolved by including it.

### 6. Gradle Issues
- Faced several Gradle-related issues during the build process, which required adjustments in the configuration files.

### 7. State Management
- Redux was used to manage the global state of the application. This included handling user authentication states, profile updates, and medication data management.
- Ensuring the Redux store was properly updated and persisted across sessions was critical for a seamless user experience.

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

### Known Issues
1. Email Update: Users cannot update their email without verifying the new email first due to Firebase's restrictions.
2. Notifications: Push notifications for medication reminders are not fully implemented due to compatibility issues with Expo and Firebase.
3. Date and Time Pickers: Issues were faced when importing and displaying date and time pickers on the medication screen.
4. Google Sign-In: Integration faced several issues but was resolved with external resources.
5 .Navigation: Screen navigation required the use of a bottom tab navigator to function correctly.
6. Gradle: Various Gradle-related issues occurred during the build process.
7 .Resources
8 .Referred to Stack Overflow for various coding issues and solutions.
9 .Utilized Firebase Documentation for implementing authentication and Firestore features.
10 .Consulted Expo Documentation for handling project configurations and dependencies.


## Screenshots

<p float="left">
  <img src="https://github.com/03sana/MediMinder-PillReminderApp-master/assets/105085789/8e3ca14f-c22f-43a3-b0d2-007dbecd9c64" width="200"/>
  <img src="https://github.com/03sana/MediMinder-PillReminderApp-master/assets/105085789/f4950721-fdf8-44f1-ada1-c53bfbb9074a" width="200"/> 
 <img src="https://github.com/03sana/MediMinder-PillReminderApp-master/assets/105085789/1a7b98f0-b7dc-4918-b14f-66a54ff3c22f" width="200"/> 
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



