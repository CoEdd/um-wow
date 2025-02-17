import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import Chatbot from '../components/Chatbot';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          {/* Home section content here */}
          <h1>Welcome to UM-WOW!</h1>
          <p>Everything you need to know as a new student at Universiti Malaya.</p>
        </section>
        
        <AboutSection />
        <FAQSection />
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
