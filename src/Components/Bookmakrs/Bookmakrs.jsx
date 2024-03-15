import Bookmark from '../Bookmark/Bookmark';
import PropTypes from 'prop-types';
const Bookmakrs = ({bookmakrs, readingTime}) => {
    return (
        
        <div className="md:w-1/3 bg-gray-300 text-center rounded-2xl ml-5">
            <div>
                <h2 className='text-3xl'>Reading Time:{readingTime}</h2>
            </div>
           
            <h4 className="text-2xl">Bookmakrs Bloiges: {bookmakrs.length}</h4>

            {
                bookmakrs.map( bookmark => <Bookmark key={bookmark.id}  bookmark={bookmark}></Bookmark>)
            }
             
        </div>
    );
};
Bookmakrs.propTypes ={
    
    bookmakrs: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmakrs;