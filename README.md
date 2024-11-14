
# Blog Platform

Welcome to the **Blog Platform**! This project is a fully functional blog platform built using **React.js**. The platform fetches blog posts from a remote API and displays them dynamically. Users can filter blog posts by category or tag, navigate between pages using pagination, and explore the full content of each blog post.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [How it Works](#how-it-works)
7. [Contributing](#contributing)
8. [License](#license)
9. [Acknowledgements](#acknowledgements)

## Project Overview

This is a single-page application built with **React.js** that allows users to explore blog posts, filter by tags or categories, and navigate through pages with ease. The app interacts with an external API to fetch and display blog data.

### Key Highlights:
- **Dynamic Blog Content**: Fetches posts from a remote API and displays them in a clean, organized manner.
- **Category and Tag Filtering**: Filters blog posts based on selected categories and tags.
- **Pagination**: Supports navigation across multiple pages of blog posts, ensuring the platform can scale efficiently.
- **Responsive Design**: The platform is fully responsive, ensuring it works smoothly on all screen sizes.

## Features

- **Blog Post Display**: Each blog post is fetched and displayed with its title, content, author, date, tags, and category.
- **Category and Tag Filters**: Navigate through different categories and tags to find specific posts of interest.
- **Pagination**: Move between pages of blog posts for easier browsing, particularly helpful when there are a large number of posts.
- **Back Button**: A "Back" button that allows easy navigation to the previous page.
- **Context API**: Uses React's Context API to manage global state for loading, posts, pagination, and more.
- **Responsive Design**: The application adjusts to different screen sizes, ensuring a seamless experience on mobile, tablet, and desktop devices.

## Technologies Used

- **React.js**: Frontend JavaScript library for building user interfaces.
- **React Router**: For routing and navigation between pages in the application.
- **Context API**: To manage global state across the app.
- **CSS**: Styling and responsive design using Flexbox and Grid for layout.

## Installation

Follow these steps to get your local copy of the project up and running:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/VK-Blogs.git
```

### 2. Navigate to the project directory

```bash
cd blog
```

### 3. Install dependencies

```bash
npm install
```

This will install all the necessary packages listed in the `package.json` file.

### 4. Start the development server

```bash
npm start
```


## Usage

### Blog Navigation

- **Home Page**: Displays all the blog posts. You can browse the posts, or use the category or tag filters to narrow down the posts.
- **Category Page**: Displays blog posts related to a specific category.
- **Tag Page**: Displays blog posts with a specific tag.
- **Pagination**: At the bottom of each page, you can navigate between pages of blog posts.
- **Back Button**: Located at the top of each page, the back button will take you to the previous page.

## How it Works
![Screenshot 2024-11-15 003637](https://github.com/user-attachments/assets/39327b3c-ffca-431b-8ee2-ef0d193ae4cc)
![Screenshot 2024-11-15 003650](https://github.com/user-attachments/assets/0e8c4cc3-9850-4827-9198-bdb3defa7b3b)
![Screenshot 2024-11-15 003704](https://github.com/user-attachments/assets/67c8e3a2-18f7-4d54-b273-f343446f1380)
![Screenshot 2024-11-15 003719](https://github.com/user-attachments/assets/d67cfffd-5805-4d07-91a3-82f20a3d678e)
![Screenshot 2024-11-15 003735](https://github.com/user-attachments/assets/f9c7b16e-26ab-4505-8902-f0e24f7163d3)

![Screenshot 2024-11-15 003748](https://github.com/user-attachments/assets/9f9fdceb-5029-4892-ad78-dfe1f224003f)
![Screenshot 2024-11-15 003748](https://github.com/user-attachments/assets/1df687b3-92d1-4c7b-9315-a00e51d189b9)


### API Interaction

The blog posts are fetched from a remote API at `https://codehelp-apis.vercel.app/api/`. The API supports pagination, category filtering, and tag filtering. When a user interacts with the filters or navigates through pages, the app dynamically fetches new data from the API.

- **Fetching Data**: When the app loads, it fetches a set of blog posts based on the current page and any active category or tag filters.
- **Pagination**: Pagination is controlled through the query string in the URL (e.g., `?page=2`). Each page shows a set number of posts, and you can navigate to other pages.
- **Categories and Tags**: You can filter blog posts by categories or tags. When a user selects a category or tag, the app fetches posts that belong to that category or tag.

### State Management with Context API

- **AppContext**: The `AppContext` is used to manage the global state, such as the blog posts, pagination data, loading state, and more.
- **Handling Pagination**: The `handlePageChange` function is responsible for navigating between pages and updating the page number in the app state.
- **Fetching Blogs**: The `fetchBlogPosts` function interacts with the API to fetch data and update the state with the blog posts, page number, and total pages.

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to your branch (`git push origin feature-branch`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **React.js** for making web development faster and easier.
- **React Router** for seamless navigation in single-page applications.
- **Vercel** for hosting the API.

