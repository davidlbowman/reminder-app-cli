# Teeth Grinding Reminder Script

This script is designed to help you remember to stop grinding your teeth by displaying periodic reminders and playing a sound at configurable intervals.

## Features

-   Displays a reminder message with the current time in the console
-   Generates random color codes for each reminder message
-   Plays a configurable sound file when each reminder is triggered
-   Allows customization of the reminder interval and sound file

## Prerequisites

-   Make sure you have [Bun](https://bun.sh/) installed on your system.
-   The script assumes you have a sound file named `bell.wav` in the same directory as the script. You can replace it with your preferred sound file.

## Configuration

The script includes a configuration object `config` where you can customize the following settings:

-   `reminderIntervalMinutes`: The interval (in minutes) between each reminder. Default is set to 15 minutes.
-   `soundFile`: The name of the sound file to be played when each reminder is triggered. Default is set to `'bell.wav'`.

## Usage

1. Make sure you have Bun installed on your system.
2. Save the script to a file with a `.js` extension (e.g., `teeth-grinding-reminder.js`).
3. Open a terminal or command prompt and navigate to the directory where the script is saved.
4. Run the script using the following command:

    ```
    bun teeth-grinding-reminder.js
    ```

5. The script will start running, and you will see reminder messages displayed in the console at the configured interval.

## Customization

-   To change the reminder interval, modify the `reminderIntervalMinutes` value in the `config` object.
-   To use a different sound file, replace the `soundFile` value in the `config` object with the name of your desired sound file. Make sure the sound file is located in the same directory as the script.

## Contributing

If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/your-username/teeth-grinding-reminder).

## License

This script is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

Feel free to customize the README file based on your specific requirements and add any additional sections or information that you think would be helpful for users of your script.
