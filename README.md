# 🎓 UM-WOW (Universiti Malaya - Week of Welcome)

Welcome to **UM-WOW**, a web application designed to help new students navigate their journey at Universiti Malaya! This platform provides essential information about admissions, FAQs, and even includes a chatbot powered by OpenAI to answer your questions in real-time.

---

## 🌟 Features

- **Homepage**: A welcoming introduction to UM-WOW.
- **About Section**: Learn more about the initiative and its goals.
- **FAQ Section**: Get answers to common questions about admissions, deadlines, and more.
- **Chatbot**: Ask questions and get instant responses using AI-powered chatbot integration.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

This project uses the following technologies:

- **Frontend**: Next.js (React Framework)
- **Styling**: Tailwind CSS or plain CSS
- **Backend**: Next.js API Routes
- **AI Integration**: OpenAI API
- **Version Control**: Git and GitHub
- **Deployment**: AWS Amplify

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

### 1. Prerequisites

Ensure you have the following installed on your system:

- [Node.js (v16 or higher)](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [An OpenAI API Key](https://platform.openai.com/signup/)

### 2. Clone the Repository

```bash
git clone https://github.com/CoEdd/umwow.git
cd umwow
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Set Up Environment Variables

Create a `.env.local` file in the root directory and add your OpenAI API key:

```env
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key_here
```

### 5. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 📦 Project Structure

Here’s an overview of the project structure:

```plaintext
/umwow
 ├── /pages
 │   ├── index.js          # Homepage
 │   ├── about.js          # About page
 │   ├── faq.js            # FAQ page
 │   └── api
 │       └── chatbot.js    # Chatbot API route
 ├── /components
 │   ├── Navbar.js         # Navigation bar
 │   └── Footer.js         # Footer component
 ├── /styles
 │   └── globals.css       # Global styles
 ├── .env.local            # Environment variables
 ├── next.config.mjs       # Next.js configuration
 └── package.json          # Project dependencies
```

---

## 🤖 Using the Chatbot

The chatbot is powered by OpenAI's GPT-3.5 Turbo model. To use it:

1. Navigate to the **Ask a Question** section on the homepage.
2. Type your question into the input field and click **Send**.
3. The chatbot will respond with an AI-generated answer.

---

## 🤝 Contributing

We welcome contributions! If you'd like to contribute to this project:

1. **Fork** the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a **pull request**.

---

## 📜 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## 🙏 Acknowledgments

- Thanks to **OpenAI** for providing the powerful language models used in the chatbot.
- Inspired by the need to simplify the onboarding process for new students at Universiti Malaya.

---

## 📞 Contact

For questions or feedback, feel free to reach out:

- **GitHub**: [@CoEdd](https://github.com/CoEdd)
- **Email**: muhdzaher22@gmail.com
