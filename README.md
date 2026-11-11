# React Native Login & User Type App 📱

A foundational React Native mobile application demonstrating state management, component composition, custom components, form inputs, dropdown pickers, conditional logic, and native feedback mechanisms (`Alert` and `ToastAndroid`).

---

## Features

* **Custom Component (`InputBox`):** Reusable component that pairs a label (`Text`) with a text input field (`TextInput`).
* **User Type Selection (`Picker`):** A dropdown selector allowing users to choose between **Admin** and **Guest** roles.
* **Secure-style Authentication Check:** Validates input passwords against a predefined correct passcode (`'123'`) and dynamically displays customized toast notifications based on user roles and inputs.
* **Native Feedback Integration:** Leverages both `Alert.alert` and `ToastAndroid.show` for handling user interactions and feedback.

---

## Tech Stack

* **Framework:** React Native / Expo
* **UI Components:** View, Text, TextInput, Button, TouchableOpacity
* **Third-Party Package:** `@react-native-picker/picker`

---

## Project Structure

```text
├── App.js
├── app.json
├── package.json
└── README.md

Link: https://drive.google.com/file/d/192DFoLDnSiWVJWfIew3CdQhvGhkUiYLo/view?usp=sharing