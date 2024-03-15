import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    const {title} = bookmark;
  
    return (
        <div>
            <h3 className='text-2xl bg-white p-4 m-4 rounded-xl'>{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object
 };

export default Bookmark;
