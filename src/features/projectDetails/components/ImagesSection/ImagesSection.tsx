import { useAppContext } from '../../../../shared';
import styles from './ImagesSection.module.scss';

type ImageGalleryProps = {
  images?: string[];
  title: string;
};

const ImagesSection = ({ images, title }: ImageGalleryProps): JSX.Element => {
  const { language } = useAppContext();

  return (
    <section className={styles.images}>
      {images?.map((src, i) => (
        <a
          href={src}
          key={src}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.images__item}
          aria-label={
            language === 'en'
              ? `Open full-size image ${i + 1} of ${title}`
              : `Bild ${i + 1} von ${title} in voller Größe öffnen`
          }
        >
          {/* ${i + 1}: This gives each image a unique index starting from 1. */}
          <img
            className={styles.images__item}
            src={src}
            alt={`${title} screenshot ${i + 1}`}
            loading="lazy"
          />
        </a>
      ))}
    </section>
  );
};
export default ImagesSection;
