
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
      {/* we can use js directly using {}  */}
      <h1>{3+3}</h1>
      <h1>{new Date().getTime()}</h1>
      {/* all tag has self close */}
     <img src="" alt="" />
     {/* to add any css class,we have to use className */}
     <h1 className=''></h1>
     {/* write all attribute on camelCase */}
      <button onClick={()=>alert("Hello")}>Submit</button>
      {/* inline css */}
      <h1 style={
        {color:'red'}
      }>Meaw</h1>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;