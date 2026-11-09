import styles from './PageHeading.module.css';

/**
 * Single H1 for a page. Every indexable route should render exactly one of
 * these so the page has a clear topical subject.
 */
export default function PageHeading({ title, intro }) {
  return (
    <div className={styles.Wrap}>
      <h1 className={styles.Title}>{title}</h1>
      {intro ? <p className={styles.Intro}>{intro}</p> : null}
    </div>
  );
}
