
import PropTypes from 'prop-types';
import { IoBookmarkOutline,} from "react-icons/io5";

const Blog = ({ id, blog, handleAddToBookmakrs,handleReadingTime}) => {
    console.log(blog)
    const { title, cover,author,author_img,reading_time,posted_date,hashtags } = blog;

    return (
    
        <div className='mb-10'>
                        <h4>{title}</h4>
            <p>
                {
                    hashtags.map((hash,indx) => <span key={indx} className='text-xl text-red-400'><a href="">#{hash}</a> </span>)  
                }
            </p>        
            <button onClick={() =>handleReadingTime(reading_time, id)} className='text-xl mb-20 underline text-green-500'>Mark As Read</button>
            <img className='rounded-3xl' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex space-x-4 -mb-10'>
                   <img className='w-10 rounded-full mb-5' src={author_img} alt="" />
                   <div className=' mb-5'>
                    <h3 className='text-3xl mb-2'>{author}</h3>
                    <p className='text-sm'>{posted_date}</p>
                </div>
                </div>
               
                <div className='-mb-5 text-xl'>
                   <span>{reading_time} Read Time:</span>
                   <button
                   onClick={ ()=> handleAddToBookmakrs(blog)}
                    className='ml-2 mb-5 hover:text-red-500'>
                        { <IoBookmarkOutline></IoBookmarkOutline>}
                        </button>
                </div>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmakrs: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blog;