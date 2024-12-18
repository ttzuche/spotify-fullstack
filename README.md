# Spotify Clone

A full-stack Spotify clone project showcasing modern web development practices. This project includes a user-facing frontend, a robust backend with API integrations, and an admin panel for content management.

## Features

- RESTful APIs for songs and albums.
- Responsive design for seamless user experience.
- Admin panel for managing playlists, songs, and albums.
- Cloud-based storage integration for media files.

## Tech Stack

### Backend:
- **Node.js**
- **Express.js**
- **MongoDB** (Database)
- **Cloudinary** (Media Storage)

### Frontend:
- **React.js** (Frontend Framework)
- **Vite** (Build Tool)
- **Tailwind CSS** (Styling)

### Tools:
- **Dotenv** (Environment Variables)
- **Mongoose** (Database ORM)
- **Nodemon** (Development Server)

## Setup Instructions

### Prerequisites
- Node.js and npm installed.
- MongoDB Atlas cluster or local MongoDB instance.
- Cloudinary account for media storage.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/spotify-clone.git
   cd spotify-clone
   ```

2. Install dependencies for the backend:
   ```bash
   cd spotify-backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```bash
   cd ../spotify-clone
   npm install
   ```

4. Install dependencies for the admin panel:
   ```bash
   cd ../spotify-admin
   npm install
   ```

### Environment Configuration

1. Create a `.env` file in the `spotify-backend` directory:
   ```plaintext
   PORT=4000
   MONGODB_URI=your_mongodb_connection_string
   CLOUDINARY_URL=your_cloudinary_connection_url
   ```

2. Replace `your_mongodb_connection_string` and `your_cloudinary_connection_url` with actual credentials.

### Running the Project

#### Start the Backend
```bash
cd spotify-backend
npm run server
```

#### Start the Frontend
```bash
cd ../spotify-clone
npm run dev
```

#### Start the Admin Panel
```bash
cd ../spotify-admin
npm run dev
```

## Folder Structure

```
spotify-clone/
├── spotify-backend/    # Backend API and server logic
├── spotify-clone/      # User-facing frontend
├── spotify-admin/      # Admin panel
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for discussion.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
