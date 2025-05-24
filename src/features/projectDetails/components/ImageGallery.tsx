import { useAppContext } from '../../../shared';

type ImageGalleryProps = {
  images?: string[];
  title: string;
};

const ImageGallery = ({ images, title }: ImageGalleryProps): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section className="project_img_div">
      {images?.map((src, i) => (
        <a
          href={src}
          key={src}
          target="_blank"
          rel="noopener noreferrer"
          className="project_img"
          aria-label={
            language === 'en'
              ? `Open full-size image ${i + 1} of ${title}`
              : `Bild ${i + 1} von ${title} in voller Größe öffnen`
          }
        >
          {/* ${i + 1}: This gives each image a unique index starting from 1. */}
          <img
            className="project_img"
            src={src}
            alt={`${title} screenshot ${i + 1}`}
            loading="lazy"
          />
        </a>
      ))}
    </section>
  );
};
export default ImageGallery;
