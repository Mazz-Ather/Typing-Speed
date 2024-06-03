# Online Typing Speed Tester (Words Per Minute) System Flow
1. Introduction
This proposal outlines the development of an online speed
typing tester application built with TypeScript for a robust and type-safe codebase.
The application will utilize a user-friendly Command Line Interface (CLI) to guide
users through the testing process and display their typing speed in Words Per
Minute (WPM).

2. Technology Stack
 TypeScript for type safety and code correctness.
 npm as the package manager.
 Inquirer.js for CLI user interaction.

3. System Flow
3.1. Welcome and Introduction
 The program greets the user and provides a brief explanation of the typing
speed test.
 It might ask the user for their name or a chosen alias for personalization.
3.2. Test Configuration (Optional)
 The program might offer options to customize the test:
 Test duration (e.g., 1 minute, 3 minutes)
 Difficulty level (e.g., basic sentences, random words, technical text)
3.3. Pre-Test Instructions
 The program reminds the user to place their fingers in the proper typing
position.
 It might offer a short warm-up exercise with simple key combinations.
(Optional)

3.4. Test Execution
 The program displays the test passage or random words on the screen.
 As the user starts typing, the timer begins.
 The program tracks keystrokes, including any mistakes made.
3.5. Test Conclusion and Results
 Once the timer ends, the program calculates the typing speed in Words Per
Minute (WPM).
 It displays the WPM score along with the number of words typed and any
errors made (if applicable).
3.6. Additional Options (Optional)
 The program might offer to:
 Show a breakdown of accuracy (percentage of correct keystrokes)
 Display the typed text for review
 Save the test results for personal tracking
3.7. Exit and Farewell
 The program allows the user to exit or restart the test with different
configurations.
 It might offer a motivational message or encourage the user to practice
further.

4. System Features

4.1. User Management
4.1.1 Signup
 Collect user details (name, email, password).
 Validate input data.
 Create a new user record.
4.1.2. Login
 Prompt user for login credentials.
 Validate credentials against existing user data.