import Card from "./card";
import Navbar from "./navbar";
import { flowers } from "./flower.js";
function App() {
  return(
    <div className="min-h-screen bg-contain min-w-screen bg-[url('https://plus.unsplash.com/premium_photo-1675824592773-10ef8da4ade3?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ">
      <Navbar/>
      <Card images={flowers}/>
      
    </div>
  );
};

export default App;
