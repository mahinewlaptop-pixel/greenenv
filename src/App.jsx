import Card from "./card";
import Navbar from "./navbar";
import { flowers } from "./flower.js";
function App() {
  // const imgUrl ="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JlZW4lMjBlbnZpcm9ubWVudHxlbnwwfHwwfHx8MA%3D%3D";
  // const bodyImg ="https://plus.unsplash.com/premium_photo-1675824592773-10ef8da4ade3?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  // const bodyImg2 = "https://plus.unsplash.com/premium_photo-1661962984775-f8086e609650?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return(
    <div className="w-full min-h-screen bg-contain  bg-[url('https://plus.unsplash.com/premium_photo-1675824592773-10ef8da4ade3?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <Navbar/>
      <Card images={flowers}/>
      
    </div>
  );
};

export default App;
