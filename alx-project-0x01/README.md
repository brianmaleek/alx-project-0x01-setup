# React Architect: Mastering Advanced Structures in Next.js

## Project Description

This project is a comprehensive Next.js web application that demonstrates fundamental concepts of modern web development. The application features multiple pages for displaying posts and users, with interactive components for adding new content. Built with TypeScript, Tailwind CSS, and Next.js, the project showcases best practices in component-based architecture, state management, and API integration.

## Learning Objectives

By completing this project, you will:

- Set up a Next.js application with TypeScript and Tailwind CSS
- Implement dynamic page routing and navigation
- Create reusable React components with proper TypeScript typing
- Work with external APIs to fetch and display data
- Implement modal dialogs for user interaction
- Understand static site generation with `getStaticProps`
- Manage component state with React hooks
- Structure a project with proper directory organization
- Apply responsive design principles with Tailwind CSS

## Requirements

### Technical Requirements

- Node.js (v16 or later)
- npm or yarn
- Next.js (latest version)
- TypeScript
- Tailwind CSS
- ESLint (for code quality)

## Functional Requirements

1. **Base Application Setup**

    - Create Next.js app with TypeScript, Tailwind CSS, and ESLint
    - Configure proper folder structure
    - Set up global CSS with Tailwind directives

2. **Navigation System**

    - Implement header with navigation links
    - Set up routing between home, posts, and users pages
    - Ensure navigation works without page reloads

3. **Posts Functionality**

    - Display posts from JSONPlaceholder API
    - Create PostCard component for displaying individual posts
    - Implement PostModal for adding new posts
    - Handle form submission and state management

4. **Users Functionality**

    - Display users from JSONPlaceholder API
    - Create UserCard component for displaying user information
    - Implement UserModal for adding new users
    - Handle complex nested data structures

## Best Practices

1. **Component Architecture**

    - Follow [`atomic design principles`](https://medium.com/galaxy-ux-studio/principles-of-atomic-design-7b03a30c3cb6)
    - Separate presentational and container components
    - Create reusable UI components (Button, Card, Modal)

2. **Type Safety**

    - Define proper TypeScript interfaces
    - Type all component props and state
    - Handle event types correctly

3. **Styling**

    - Use Tailwind CSS utility classes
    - Maintain consistent spacing and typography
    - Implement responsive design

4. **State Management**

    - Use React hooks for local state
    - Lift state up when necessary
    - Keep state minimal and focused

5. **Project Structure**

- Organize components by feature/domain
- Keep interfaces in a central location
- Follow Next.js conventions for pages

## Implementation Notes

- The project uses JSONPlaceholder as a mock API
- Static generation (`getStaticProps`) is used for initial data fetching
- Modals demonstrate interactive UI patterns
- TypeScript interfaces ensure type safety throughout the application
- Tailwind CSS provides utility-first styling

## Project Structure

```md
alx-project-0x01/
├── components/
│   ├── common/         # Reusable components
│   └── layout/         # Layout components
├── interfaces/         # TypeScript interfaces
├── pages/
│   ├── posts/          # Posts related pages
│   ├── users/          # Users related pages
│   └── index.tsx       # Home page
├── public/             # Static assets
├── styles/             # Global styles
└── ...                 # Other Next.js files
```

### ⚠️ Note:

While copying and pasting code may seem quick and convenient, it often hinders true understanding. To get the most out of this learning experience, we strongly recommend that you:

- Carefully read and understand the instructions for each task.
- Type the code yourself to internalize the logic and structure.
- Experiment and test your code to see how it works in practice.
- Hands-on practice leads to deeper learning and long-term retention. Keep coding!

## Tasks

### 0. Setting up Project-1

**mandatory**

**Objective**: Set up a base application using create-next-app@latest with the name alx-project-0x01 in a Github repository alx-project-0x01-setup . Remember to choose yes to the options [Eslint, Tailwind CSS, import alias].

**Instructions**:

- Empty file styles/global.css
- Replace the content of the file with the following content

```typescript
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Empty the content of the file pages/index.tsx
- Replace the content with the following content

```typescript
const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-7xl font-thin">Welcome Page</h1>
    </div>
  )
}

 export default Home;
```

- Create the following directory structure under the root directory.
- Set up the basic functional components for the following files

```typescript
components/common/Button.tsx
components/common/PostCard.tsx
components/layout/Header.tsx
components/layout/Footer.tsx
pages/posts/index.tsx
pages/users/index.tsx
```

- Save and close your files

- Run `npm run dev -- -p 3000` from the terminal

- From a tab in your browser type `http://localhost:3000` to see the changes made.

**Repo**:

- **GitHub repository**: **alx-project-0x01-setup**
- **Directory**: **alx-project-0x01**
- **File**: [public/assets/images](alx-project-0x01/public/assets/images), [components/common/Button.tsx](alx-project-0x01/components/common/Button.tsx), [components/common/PostCard.tsx](alx-project-0x01/components/common/PostCard.tsx), [components/layout/Header.tsx](alx-project-0x01/components/layout/Header.tsx), [components/layout/Footer.tsx](alx-project-0x01/components/layout/Footer.tsx), [pages/posts/index.tsx](alx-project-0x01/pages/posts/index.tsx), [pages/users/index.tsx](alx-project-0x01/pages/users/index.tsx)

### 1. Set up navigation between pages

**mandatory**

**Objectives**: In most projects you will be required to create multiple related and unrelated pages. For this task you will set up navigation between multiple pages.

**Instructions**:

- Replace the content of components/layout/Header.tsx with the following content
import Link from 'next/link'; 

```typescript
const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h3 className="font-bold text-2xl">
     <Link href="/">Daily Contents</Link>
  </h3>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:underline">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="hover:underline">
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
```

- Replace the content of pages/index.tsx with the following content

```typescript
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Welcome to our Application!
          </h1>
          <p className="mt-4 text-xl text-white">
            We're glad you're here. Explore and enjoy your experience.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
            </div>
      </main>
    </div>
  )
}

export default Home;
```

- Import the Header component on these pages “/posts” and “/users”
- Save and close your files
- Run `npm run dev -- -p 3000` from the terminal
- From a tab in your browser type `http://localhost:3000` to see the changes made.
- Take note of how you are able to navigate between pages without manually manipulating the url in the address bard of the browser

**Repo**:

- **GitHub repository**: **alx-project-0x01-setup**
- **Directory**: **alx-project-0x01**
- **File**: [components/layout/Header.tsx](alx-project-0x01/components/layout/Header.tsx), [pages/posts/index.tsx](alx-project-0x01/pages/posts/index.tsx), [pages/users/index.tsx](alx-project-0x01/pages/users/index.tsx), [pages/index.tsx](alx-project-0x01/pages/index.tsx)

### 2. Implement Posts Card Components

**mandatory**

**Objectives**: We are going to implement the post card and use it on our posts page

**Instructions**:

- Under the root directory create the following interfaces/index.ts
- Replace the content with the following:

```typescript
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
```

Open the following file components/common/PostCard.tsx Replace the content with the following:

```typescript
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600">{body}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>User ID: {userId}</span>
        <span>Post ID: {id}</span>
      </div>
    </div>
  );
};

export default PostCard;
```

- Open the following file pages/posts/index.tsx
- Replace the content with the following:

```typescript
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

const Posts: React.FC<PostProps[]> = ({ posts }) => {
  console.log(posts)
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
        <h1 className=" text-2xl font-semibold">Post Content</h1>
        <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {
            posts?.map(({ title, body, userId, id }: PostProps, key: number) => (
              <PostCard title={title} body={body} userId={userId} id={id} key={key} />
            ))
          }
        </div>
      </main>
    </div>
  )
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Posts;
```

- Save and close your files
- Run npm `run dev -- -p 3000` from the terminal
- From a tab in your browser type `http://localhost:3000` to see the changes made.

**Repo**:

- **GitHub repository**: **alx-project-0x01-setup**
- **Directory**: **alx-project-0x01**
- **File**: [pages/posts/index.tsx](alx-project-0x01/pages/posts/index.tsx), [components/common/PostCard.tsx](alx-project-0x01/components/common/PostCard.tsx), [interfaces/index.ts](alx-project-0x01/interfaces/index.ts)

### 3. Implement Users Card Components

**mandatory**

**Objectives**: We are going to implement the user card and use it on our users page

**Instructions:**

- From the `interfaces/index.ts` file create a an UserProps Interface
- Create your UserProps interface based on the following sample data
- Use this [Resource](https://app.quicktype.io/) to make Generating TypeScript Interfaces easier

```typescript
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
```

- Under the directory `components/common/`, Create a new functional component for UserCard
- Be creative with your UserCard component.
- Style the component like we did for PostCard.
- Make the component dynamic by passing the right props
- Include the following lines of code to the users page under `pages/users/index.tsx` before the `export default Users`

```typescript
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}
```

- Be sure to pass the props to your Users Component, to allow you to have access to your generated data.
- Save and close your files
- Run `npm run dev -- -p 3000` from the terminal
- From a tab in your browser type `http://localhost:3000` to see the changes made.

**Repo:**

- **GitHub repository**: **alx-project-0x01-setup**
- **Directory**: **alx-project-0x01**
- **File**: [pages/users/index.tsx](alx-project-0x01/pages/users/index.tsx), [components/common/UserCard.tsx](alx-project-0x01/components/common/UserCard.tsx), [interfaces/index.ts](alx-project-0x01/interfaces/index.ts)

### 4. More Components (Extending Post Page)

**mandatory**

**Objectives**: Task 3 allows our application to display a set of predefined posts. This makes it really convenient for users to browse possible contents in your application. We have also included a button, which by its title can allow a user of the application to add some posts.

- We can create a simple form to allow users to interact with our application, by supplying user defined inputs. Let’s take a look at how we can build such components to be used in our application.

- Note: You don’t need to understand every single line of code in this task. We will dive deeper into such concepts in the coming weeks. But following how it is done, you will appreciate and be able to replicate the same.

**Instructions:**

- We are going to create 2 additional interfaces in our interfaces/index.ts file.

```typescript
export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}
```

- Take note of the structural specification for PostModalProps. In specifying types in typescript, you can specify a function as a type. This is allowed in typescript and adds a level of robustness to your application.
- Next, we create a new empty file `components/common/PostModal.tsx` and replace the content with the code below.

- **Advise: Do not copy and paste the code. Type it out**

```typescript
import { PostData, PostModalProps } from "@/interfaces";
import React, { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [post, setPost] = useState<PostData>({
    userId: 1,
    title: "",
    body: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="userId" className="block text-gray-700 font-medium mb-2">User ID</label>
            <input
              type="number"
              id="userId"
              name="userId"
              value={post.userId}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block text-gray-700 font-medium mb-2">Body</label>
            <textarea
              id="body"
              name="body"
              value={post.body}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post content"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
```

- To see the PostModal we just created in action, let’s make modifications to pages/posts/index.tsx
  - Modify the existing code to look like this .

```typescript
import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostData, PostProps } from "@/interfaces";
import { useState } from "react";

const Posts: React.FC<PostProps[]> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<PostData | null>(null);


  const handleAddPost = (newPost: PostData) => {
    setPost({ ...newPost, id: posts.length + 1 });
  };


  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">Post Content</h1>
          <button onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {
            posts?.map(({ title, body, userId, id }: PostProps, key: number) => (
              <PostCard title={title} body={body} userId={userId} id={id} key={key} />
            ))
          }
        </div>
      </main>

      {isModalOpen && (
        <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
  )
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Posts;
```

- Take Note of this line. This allows the user application to toggle the state of your modal.

```typescript
{isModalOpen && (
        <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
```

- Save and close your files
- Run `npm run dev -- -p 3000` from the terminal
- From a tab in your browser type `http://localhost:3000` to see the changes made.

**Repo**:

- **GitHub repository**: **alx-project-0x01-setup**
- **Directory**: **alx-project-0x01**
- **File**: [pages/posts/index.tsx](alx-project-0x01/pages/posts/index.tsx), [components/common/PostModal.tsx](alx-project-0x01/components/common/PostModal.tsx), [interfaces/index.ts](alx-project-0x01/interfaces/index.ts)

### 5. Implement the User Modal

**mandatory**

**Objectives**: Using a similar approach as task 4, implement a modal to allow users of your application add new users.

**Instructions**:

- From the `interfaces/index.ts` file create two Interfaces `UserData`, `UserModalProps`
- Create your UserData interface based on the following sample data

```typescript
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
```

- Under the directory `components/common/`, Create a new functional component for UserModal
  - Be creative with your UserModal component.
  - Style the component like we did for PostModal.
  - Make the component dynamic by passing the right props
  - Include the UserModal you just created to the users page. Such that when a user clicks on the Add User Button, the modal pops up.
  - Save and close your files
  - Run `npm run dev -- -p 3000` from the terminal
  - From a tab in your browser type `http://localhost:3000` to see the changes made.

**Repo:**

- **GitHub repository**: **alx-project-0x01-setup**
- **Directory**: **alx-project-0x01**
- **File**: [pages/users/index.tsx](alx-project-0x01/pages/users/index.tsx), [components/common/UserModal.tsx](alx-project-0x01/components/common/UserModal.tsx), [interfaces/index.ts](alx-project-0x01/interfaces/index.ts)
