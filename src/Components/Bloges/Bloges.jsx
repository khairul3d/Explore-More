import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Bloges = ({handleAddToBookmakrs,handleReadingTime}) => {
    const [bloges, setBloges] = useState([]);

    useEffect( ()=> {
        fetch('Bloge.json')
        .then(res=> res.json())
        .then(data=> setBloges(data))
    }, []);
    return (
        <div className="text-4xl md:w-2/3">
            <h2>Bloges:{bloges.length}</h2>
            
            {
            bloges.map(blog => <Blog
                key={blog.id}
                 blog={blog}
                 handleAddToBookmakrs={handleAddToBookmakrs}
                 handleReadingTime={handleReadingTime}
            
                 ></Blog>)
        }
        </div>
       
    );
   
};
Bloges.propTypes ={
    handleAddToBookmakrs:PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Bloges;