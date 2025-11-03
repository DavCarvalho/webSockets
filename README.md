# WebSockets Real-Time Chat Application

A real-time chat application built with Socket.IO, demonstrating WebSocket technology for instant bidirectional communication between clients and server.

## 📋 Overview

This project showcases a practical implementation of WebSockets using Socket.IO, enabling real-time messaging capabilities. The application was designed to facilitate instant communication between users, demonstrating the power of WebSocket technology in modern web applications.

## ✨ Features

- **Real-time messaging**: Instant message delivery between connected users
- **Multiple users support**: Connect multiple clients simultaneously
- **Persistent storage**: Messages are stored in MongoDB Atlas
- **Clean UI**: Simple and intuitive user interface
- **WebSocket connection**: Efficient bidirectional communication

## 🖼️ Screenshots

![Application Screenshot 1](https://github.com/DavCarvalho/webSockets/assets/86022099/3611fcf8-db26-43b8-b614-c98bc88fe8aa)
![Application Screenshot 2](https://github.com/DavCarvalho/webSockets/assets/86022099/212842a3-4ba1-49b9-998f-5a7c51776a86)
![Application Screenshot 3](https://github.com/DavCarvalho/webSockets/assets/86022099/4d888f68-899b-4600-8425-16e3783b1ef0)

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime environment
- **Socket.IO**: Real-time bidirectional event-based communication
- **MongoDB Atlas**: Cloud database for message persistence
- **Express**: Web application framework

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/DavCarvalho/webSockets.git
```

2. **Navigate to the project directory**
```bash
cd webSockets
```

3. **Install dependencies**
```bash
npm install
```

4. **Configure MongoDB**
   - Create a MongoDB Atlas account if you don't have one
   - Set up a new cluster
   - Configure your database connection string in `server/db/dbConnect.js`

5. **Run the application**
```bash
npm run dev
```

6. **Access the application**
   - Open your browser and navigate to `http://localhost:3000`

## ⚙️ Configuration

Before running the application, make sure to configure your MongoDB connection:

1. Go to `server/db/dbConnect.js`
2. Replace the connection string with your MongoDB Atlas credentials
3. Ensure your IP address is whitelisted in MongoDB Atlas

## 🚀 Usage

1. Start the server using `npm run dev`
2. Open multiple browser windows/tabs at `http://localhost:3000`
3. Enter your username
4. Start chatting in real-time!

## 📁 Project Structure

```
webSockets/
├── public/          # Frontend files (HTML, CSS, JavaScript)
├── server/          # Backend server files
│   └── db/         # Database configuration
├── package.json     # Project dependencies
└── README.md       # Project documentation
```

