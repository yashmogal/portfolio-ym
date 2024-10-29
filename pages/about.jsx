import styles from '../styles/ResumeDownload.module.css';


const AboutPage = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/yash_resume.pdf'; // Adjust the path as needed
    link.download = 'yash_resume.pdf';
    link.click();
  };
  return (
    <>
      <h3>Hello, I am Yash Mogal, a highly skilled and motivated Web Developer with expertise in both frontend and backend technologies. I excel in building interactive and scalable web applications using React, Redux, React Native, Node.js, and MongoDB. My engineering background and proactive approach to learning enable me to thrive in dynamic environments. I am passionate about Data Structures and Algorithms (DSA), which enhances my problem-solving skills and ensures efficient, scalable solutions. I look forward to contributing to impactful projects in the industry.</h3>
      <div className={styles.resumeContainer}>
      <h3>Download My Resume</h3>
      <button onClick={handleDownload} className={styles.downloadButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          className={styles.icon}
        >
          <path d="M.5 9.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 1 0v4A1.5 1.5 0 0 1 13.5 16h-12A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5z" />
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 1 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
        </svg>
        Download
      </button>
    </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
