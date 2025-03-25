# WebSocket Chat Server

## 📌 Overview
This is a **WebSocket-based chat server** built using **Node.js, Express, and Socket.io**. It enables **real-time communication** in chat rooms. Users can:
- **Join chat rooms**
- **Send and receive messages in real time**
- **Handle multiple clients simultaneously**

The server supports **cross-origin requests** for seamless communication between frontend and backend.

---

## 🚀 Features
✅ **Join and Leave Rooms**  
✅ **Real-time Messaging**  
✅ **Handles Multiple Clients**  
✅ **Lightweight and Scalable**  
✅ **Cross-Origin Support (CORS)**  

---

## 🛠 Installation

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-repo/socket-server.git
cd socket-server
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Run the Server**
```bash
node server.js
```

### **4️⃣ Test WebSocket Connection**
You can use [Postman](https://www.postman.com/) or a frontend client to test WebSocket functionality.

---

## 🌐 Deployment on Render

### **1️⃣ Create a New Web Service**
- Go to [Render](https://render.com/)
- Click **New Web Service**
- Select your GitHub repository or upload files manually

### **2️⃣ Set Up Deployment**
- Use **Node.js** as the environment
- Add **PORT=4000** as an environment variable
- Set **Start Command:** `node server.js`

### **3️⃣ Deploy and Monitor**
- Click **Deploy**
- Monitor logs to ensure the server is running correctly

---

## 🔐 Future Improvements
🔹 **Authentication & Authorization** (JWT-based token authentication)  
🔹 **Persistent Chat History** (Store messages in a database like MongoDB)  
🔹 **Typing Indicators** (Show when a user is typing)  
🔹 **User Presence** (Show online/offline status)  
🔹 **Rate Limiting & Spam Prevention** (Avoid message flooding)  
🔹 **Private Messaging** (Allow direct messages between users)  
🔹 **Message Reactions & Emojis** (Enhance user experience)  

---

## 🤝 Contributions
Feel free to fork this repo and submit **pull requests**! 🚀

---

## 📜 License
This project is **open-source** under the **MIT License**.

