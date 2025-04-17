# Text to Emoji Service

A simple Express.js API that allows users to convert text to emoji and emoji to text using the node-emoji package.

## Features

- Converts a keyword (e.g. "smile") to its emoji equivalent 😄
- Converts an emoji (e.g. "😄") to its keyword "smile"

## Tech Stack

- **Backend**: Express.js (Node.js/Typescript)
- **Validation**: Joi
- **node-emoji**

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/bosukeme/text-emoji.git
    cd url-shortener
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Environment Variables
    Create a .env file in the root directory and configure the following:

        ```bash
        PORT=3000
        ```

4.  Run the server:
    ```bash
    npm run dev
    ```
    The API will be running at http://localhost:3000

## Emoji List

Here is a list of emojis and their corresponding text:<a href="https://github.com/bosukeme/text-emoji/blob/main/emoji.json" target="_blank"> Emoji List</a>

## Testing

- You can use Postman to test the API.
- Import the provided Postman collection to quickly get started with testing the API endpoints.
- <a href="https://documenter.getpostman.com/view/8343801/2sB2cd3HdU" target="_blank"> Postman Collection URL </a>

## Contributing

If you would like to contribute, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bugfix.
- Submit a pull request.

## Authors

Ukeme Wilson

- <a href="https://www.linkedin.com/in/ukeme-wilson-4825a383/">Linkedin</a>.
- <a href="https://medium.com/@ukemeboswilson">Medium</a>.
- <a href="https://www.ukemewilson.sbs/">Website</a>.
