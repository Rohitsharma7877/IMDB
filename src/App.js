
import './App.css';
// import { Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import MainRout from './pages/MainRout';
// import Home from './pages/home/Home';
import Banner from './components/header/card/Banner';


function App() {

  const banners = [
    {
      image:
        "https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      caption: "Tyson Moultire"
    },
    {
      image:
        "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
      caption: "MAD MAX"
    },
    {
      image:
        "https://images.unsplash.com/photo-1590179068383-b9c69aacebd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      caption: "JUDY"
    },
    {
      image:
        "https://images.unsplash.com/photo-1511875762315-c773eb98eec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      caption: "Suicide Squard"
    },
    {
      image:
        "https://images.unsplash.com/photo-1559108318-39ed452bb6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      caption: "Jonathan Borba"
    },
    {
      image:
        "https://images.unsplash.com/photo-1562448079-b5631888445f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      caption: "Charlota Blunarova"
    },
    {
      image:
        "https://images.unsplash.com/photo-1606489129187-1eee19a0a103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      caption: "Tim Oun"
    },
  ];

  return (
    <div className="App">
    <Header/>
    <Banner banners={banners}/>
    <MainRout/>
    
    {/* <Card/> */}
     
    </div>
  );
}

export default App;
