# Enhanced Word Counter

## Overview

Enhanced Word Counter is a React-based web application that provides detailed text analysis. It counts words and characters, and displays the top 5 most common words and stop words in the input text. The app features a modern, responsive design using Tailwind CSS.

## Features

- Real-time word and character counting
- Display of top 5 most common words (excluding stop words)
- Display of top 5 most common stop words
- Responsive design that works on both mobile and desktop
- Modern UI with gradient background and card-like main container

## Technologies Used

- React.js
- Tailwind CSS
- JavaScript (ES6+)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/enhanced-word-counter.git
   cd enhanced-word-counter
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

1. Enter or paste your text into the textarea.
2. The word count and character count will update in real-time as you type or paste text.
3. The top 5 most common words (excluding stop words) and top 5 most common stop words will be displayed in tables below the textarea.

## Customization

### Modifying the Stop Words List

To modify the list of stop words, edit the `stopWords` set in the `App.js` file.
### Styling

The app uses Tailwind CSS for styling. To customize the appearance, you can modify the Tailwind classes in the `App.js` file or add custom styles to the `src/index.css` file.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

If you have any questions or feedback, please open an issue on the GitHub repository.