# Reminder App

This is a TypeScript application that generates reminders at specified intervals and plays sound notifications. It allows you to define multiple reminders with custom messages, intervals, and sound files.

## Features

-   Define multiple reminders with custom messages, intervals, and sound files
-   Display reminders with colorful output using ANSI escape codes
-   Play sound notifications using the specified sound files
-   Automatically start reminders based on the provided configuration

## File Structure

-   `startReminders.ts`: The main entry point of the application. It defines the `Reminder` interface and the `config` array, which contains the reminder configurations. It also starts the reminders by calling `logReminderAndPlaySound` for each reminder.
-   `utilities/`: A directory containing utility functions used by the application.
    -   `generateRandomColor.ts`: Generates a random color represented as an array of three numbers (red, green, blue).
    -   `getColorCode.ts`: Takes an array of three numbers representing a color and returns the corresponding ANSI escape code for that color.
    -   `getCurrentTime.ts`: Gets the current time as a formatted string (HH:MM:SS).
    -   `logReminderAndPlaySound.ts`: Logs a reminder message with a random color and plays the specified sound file.

## Usage

1. Make sure you have [Node.js](https://nodejs.org/) and [Bun](https://bun.sh/) installed.
2. Clone the repository `https://github.com/yourusername/reminder-app.git`.
3. Navigate to the project directory `cd reminder-app`.
4. Install the dependencies using `bun install` or `npm install` if you don't have bun installed.
5. Update the `config` array in `startReminders.ts` with your desired reminder configurations. Each reminder should have a `message`, `interval` (in milliseconds), and `soundFile` (path to the sound file).
6. Run the application using `bun run start` or `npm run start` if you don't have bun installed.

## Configuration

The `config` array in `startReminders.ts` holds the reminder configurations. Each reminder is an object with the following properties:

-   `message` (string): The message to be displayed for the reminder.
-   `interval` (number): The interval at which the reminder should be triggered, in milliseconds.
-   `soundFile` (string): The path to the sound file to be played when the reminder is triggered.

You can add, remove, or modify the reminder configurations in the `config` array to suit your needs.

## Dependencies

-   TypeScript: Make sure you have TypeScript installed to compile and run the application.
-   Sound playback: The application uses the `paplay` command to play sound files. Make sure you have the necessary audio playback software installed and accessible from the command line.

## License

This project is licensed under the [MIT License](LICENSE).
