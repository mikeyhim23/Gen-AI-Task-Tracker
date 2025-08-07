# 📝 Task Manager

A simple, clean, and responsive task management app built with **Next.js 14 App Router** and **Tailwind CSS**. This project allows users to add, complete, and delete tasks with data persisted in `localStorage` for a seamless user experience.

![Task Manager Preview](https://via.placeholder.com/800x400/f3f4f6/374151?text=Task+Manager+App)

## ✨ Features

- ✅ **Add Tasks** - Create new tasks with a clean, intuitive interface
- ✅ **Mark Complete** - Toggle task completion with visual feedback
- ✅ **Delete Tasks** - Remove tasks with smooth animations
- ✅ **Data Persistence** - Tasks saved in localStorage, persist between sessions
- ✅ **Responsive Design** - Works seamlessly on desktop and mobile devices
- ✅ **Modern UI** - Clean design with hover effects and smooth transitions
- ✅ **Real-time Statistics** - Track total, completed, and remaining tasks
- ✅ **Keyboard Support** - Add tasks by pressing Enter key

## 🚀 Live Demo

[View Live App](https://your-task-manager.vercel.app) *(Replace with your actual Vercel URL)*

## 🛠️ Technologies Used

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React](https://reactjs.org/)** - JavaScript library for building user interfaces
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **JavaScript ES6+** - Modern JavaScript features
- **localStorage** - Browser storage for data persistence

## 📋 System Requirements

- **Node.js** 18.17 or later
- **npm** or **yarn** package manager
- Modern web browser with localStorage support

## ⚡ Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### 4. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
task-manager/
├── public/                    # Static assets
│   ├── favicon.ico
│   └── next.svg
├── src/
│   └── app/                   # Next.js 14 App Router
│       ├── globals.css        # Global styles (Tailwind)
│       ├── layout.js          # Root layout component
│       └── page.js            # Main task manager component
├── docs/                      # Project documentation
│   ├── AI-Prompt-Journal.md   # AI learning process
│   └── Common-Issues.md       # Troubleshooting guide
├── .eslintrc.json            # ESLint configuration
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
└── README.md                 # This file
```

## 🎯 Usage

### Adding Tasks
1. Type your task in the input field
2. Click "Add" button or press Enter key
3. Task appears at the top of your list

### Managing Tasks
- **Complete Task**: Click the checkbox next to any task
- **Delete Task**: Click the red "Delete" button
- **View Statistics**: See total, completed, and remaining tasks at the top

### Data Persistence
- Tasks are automatically saved to localStorage
- Data persists when you refresh the page or close/reopen the browser
- First-time users see an empty task list

## ⚙️ Configuration

### Customizing Styles
The app uses Tailwind CSS for styling. You can customize the appearance by:

1. **Modifying Tailwind classes** in `src/app/page.js`
2. **Updating global styles** in `src/app/globals.css`
3. **Configuring Tailwind** in `tailwind.config.js`

### Environment Variables
This project doesn't require environment variables for basic functionality.

## 🔧 Troubleshooting

### Common Issues

**Issue: "localStorage is not defined" error**
- **Cause**: localStorage only exists in the browser, not during server-side rendering
- **Solution**: The app uses `useEffect` to access localStorage only on the client side
- **Code**: localStorage access is wrapped in `useEffect` hooks

**Issue: Tasks disappear after refresh**
- **Cause**: localStorage might not be saving properly
- **Solution**: Check browser settings - ensure cookies/local storage is enabled
- **Debug**: Open DevTools → Application → Local Storage → localhost:3000

**Issue: Build fails during deployment**
- **Cause**: Missing 'use client' directive or incorrect imports
- **Solution**: Ensure all interactive components have 'use client' at the top
- **Check**: Verify all imports are correct in `src/app/page.js`

**Issue: Styling not working**
- **Cause**: Tailwind CSS not loading properly
- **Solution**: Ensure `globals.css` is imported in `layout.js`
- **Verify**: Check `tailwind.config.js` configuration

### Getting Help

1. Check the console for error messages
2. Review the [Common Issues Guide](./docs/Common-Issues.md)
3. Ensure you're using Node.js 18.17 or later
4. Try clearing localStorage: `localStorage.clear()` in browser console

## 🤖 AI-Assisted Development

This project was built using AI-assisted learning and development. The complete learning process is documented in [AI-Prompt-Journal.md](./docs/AI-Prompt-Journal.md), including:

- 10 strategic AI prompts used
- Learning reflections and insights
- Problem-solving approaches
- Technical decision rationale

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-detects Next.js configuration
5. Click "Deploy"

Your app will be live at `https://your-app-name.vercel.app`

### Deploy to Netlify

1. Run `npm run build`
2. Upload the `.next` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Add comments for complex logic
- Test your changes locally before submitting
- Update documentation if needed
- Use meaningful commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the excellent React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Vercel** - For seamless deployment platform
- **OpenAI** - For AI assistance in learning and development

## 📞 Contact

**Your Name** - your.email@example.com

**Project Link** - [https://github.com/yourusername/task-manager](https://github.com/yourusername/task-manager)

**Live Demo** - [https://your-task-manager.vercel.app](https://your-task-manager.vercel.app)

---

⭐ **Star this repo** if you found it helpful!

Built with ❤️ using Next.js and AI-assisted learning.
