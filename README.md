# Restaurant Page — [Live Demo](https://davidagredano.github.io/restaurant-page/)

[![restaurant-page-preview](https://github.com/davidagredano/restaurant-page/assets/118218196/25fdeb47-0e42-4bd6-9e48-aa945e51c599)](https://davidagredano.github.io/restaurant-page/)

This project is part of The Odin Project’s JavaScript Course curriculum. It aims to apply everything learned in the immediate previous lessons, specifically **ES6 Modules** and **Webpack**, while continuing to practice **DOM manipulation**.

In this project, I dynamically render a restaurant homepage using **JavaScript only**, without any front-end frameworks like React, Vue, or Angular. The content pages (Home, Menu, Contact) function as tabs that render in the same URL, simulating a **Single Page Application (SPA)**. Users can navigate through the different sections by using the navigation buttons to select the content to be displayed.

## **Features**

- **Dynamic Content Loading:** The entire website content is dynamically generated using JavaScript, with no hardcoded HTML for the main sections.
- **Modular Architecture:** The project leverages ES6 modules, allowing for a clean and maintainable codebase by separating functionality into distinct modules.
- **Component-Based UI:** The UI is broken up into components, each separated into its own module. Every component is a JavaScript function that returns a DOM element or a Fragment, which is then appended to the corresponding HTML content container on demand.
- **Webpack Configuration:** Utilizes Webpack for bundling JavaScript modules and managing assets. The `webpack.config.js` file includes the specification of an *entry point* file and an o*utput* directory, *CSS loaders* for handling CSS files, *asset loaders* for managing image files, and *HtmlWebpackPlugin* for automatically generating an HTML file that includes the bundled JavaScript.
- **Single Page Application (SPA):** The site behaves like an SPA with different content pages (Home, Menu, Contact) rendered on the same URL. Navigation between these pages is seamless and handled via JavaScript.
- **Event-Driven Interface:** Implements event listeners for navigation buttons to handle tab switching and content rendering dynamically.
- **Custom Design:** The entire website was designed by myself using Figma, following a comprehensive workflow. This included requirements definition, sitemap creation, content modeling, content creation, wireframing, high-fidelity mock-up creation, and interactive prototype development.

## Technologies Used

- JavaScript
- Webpack
- npm
- HTML5
- CSS3
- Figma

## **Installation**

To set up the project locally, follow these steps:

1. Clone the repository:
    
    ```bash
    git clone https://github.com/davidagredano/restaurant-page.git
    ```
    
2. Navigate to the project directory:
    
    ```bash
    cd restaurant-page
    ```
    
3. Install dependencies:
    
    ```bash
    npm install
    ```
    
4. Start the development server:
    
    ```bash 
    npm start
    ```

## **Project Structure**

```
/project-root
├── /node_modules
├── /src
│   ├── /components
│   ├── /home
│   ├── /menu
│   ├── /contact
│   ├── index.html
│   ├── index.css
│   ├── transitions.css
│   ├── index.js
│   └── utils.js
├── .gitignore
├── package.json
├── package-lock.json
└── webpack.config.js
```

## **Contact Me**

Hello! 👋 I'm David, the creator of this project. If you have any questions, suggestions, or just want to chat about web development or anything else related to this project, feel free to reach out to me.

My email is davidagredano@gmail.com.

Looking forward to hearing from you!
