import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'yashmogal.me',
    href: 'https://yashmogal.me',
  },
  {
    social: 'email',
    link: 'yashmogal051@gmail.com',
    href: 'mailto:yashmogal051@gmail.com',
  },
  {
    social: 'linkedin',
    link: 'yashmogal',
    href: 'https://www.linkedin.com/in/yashmogal',
  },
  {
    social: 'twitter',
    link: 'yashmogal21',
    href: 'https://www.twitter.com/yashmogal21',
  },
  {
    social: 'instagram',
    link: 'yash_mogal16',
    href: 'https://www.instagram.com/yash_mogal16',
  },

  {
    social: 'telegram',
    link: 'yashmogal21',
    href: 'https://t.me/yashmogal21',
  },

];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
