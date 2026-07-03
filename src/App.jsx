
import Demo from './Demo';
import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
// functional components
const App = () => { ////arrow funtion
  return (
    <div>
      
      {/* it returns view */}
      <h1>i am learning react js</h1>
      <Demo />
      <input placeholder="My Name" />
      <button>Submit</button>
      <Header />
      <Hero />
      

      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;