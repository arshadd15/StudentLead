# Student Lead Manager App

This is a robust React Native application built to manage student leads efficiently. The app allows users to create, read, update, and delete (CRUD) student records with local data persistence.

## Project Overview

The main goal of this project is to provide a seamless way to track potential student leads. It was built to demonstrate full-stack capabilities within a mobile environment, utilizing local storage to ensure data remains available even after the app is closed.

## Key Features

- **Lead Management:** Users can add new students with specific details including Name, Email, and Role.
- **Persistent Storage:** All data is saved locally using AsyncStorage. This ensures that the list of students survives app restarts or phone reboots.
- **Edit Functionality:** Users can tap the pen icon to update existing student details via a pre-filled form.
- **Delete Functionality:** Users can remove students from the list. A confirmation alert prevents accidental deletions.
- **Form Validation:** The app ensures all fields are filled and checks that emails follow a valid format before submission.
- **Navigation:** Smooth transitions are implemented between the List Screen and Form Screen using React Navigation.
- **State Management:** The Context API is used to manage the student data globally, preventing the need to pass props through multiple layers.

## Tech Stack and Dependencies

- **Framework:** React Native (CLI)
- **Language:** TypeScript
- **Navigation:** React Navigation v7 (Native Stack)
- **Storage:** @react-native-async-storage/async-storage
- **Icons:** Lucide React Native
- **UI Components:** React Native Safe Area Context

## Project Structure

src/
    components/
        Card.tsx # Displays individual student info with Edit and Delete icons
        Form.tsx # Reusable form component for Adding and Editing students
    contexts/
        StudentContext.tsx # Handles Global State and AsyncStorage logic
    screens/
        AddNewLead.tsx # The wrapper screen that holds the Form
        ListScreen.tsx # The main screen displaying the FlatList of students
App.tsx # Main entry point and Navigation setup
