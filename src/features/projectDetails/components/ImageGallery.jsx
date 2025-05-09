const ImageGallery = ({ images = [], title }) => (
    <div className="project_img_div">
        {images?.map((src, i) => (
            <a href={src} key={i} target="_blank" rel="noopener noreferrer" className='project_img'>

                {/* ${i + 1}: This gives each image a unique index starting from 1. */}
                <img className='project_img' src={src} alt={`${title} screenshot ${i + 1}`} loading="lazy" />
            </a>
        ))}
    </div>
);
export default ImageGallery;
