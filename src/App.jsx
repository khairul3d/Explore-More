
import { useState } from 'react'
import './App.css'
import Bloges from './Components/Bloges/Bloges'
import Bookmakrs from './Components/Bookmakrs/Bookmakrs'
import Header from './Components/Header/Header'
import Bookmark from './Components/Bookmark/Bookmark'

function App() {
  const [bookmakrs, setBookmakrs] = useState([]);
  const [readingTime, setReadingTime] = useState(0);


  const handleAddToBookmakrs = blog => {
    const newBookmakrs  = [...bookmakrs, blog];
    setBookmakrs(newBookmakrs)
  };

  const handleReadingTime = (time, id) => {
    const newReadingTime =readingTime+time
    setReadingTime(newReadingTime)
    // remove item 
    const remainingItem = bookmakrs.filter(bookmark => bookmark.id !== id);
    setBookmakrs(remainingItem)
  }

  return (
    <div>
     
     <Header></Header> 
     <div className="md:flex max-w-7xl mx-auto">
     <Bloges handleAddToBookmakrs={handleAddToBookmakrs} handleReadingTime={handleReadingTime}></Bloges>
     <Bookmakrs bookmakrs={bookmakrs} readingTime = {readingTime}></Bookmakrs>
     </div>
      
    </div>
  )
}

export default App
