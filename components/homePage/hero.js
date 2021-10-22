import Image from 'next/image';

import classes from '../../styles/hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/gabriel.jpg'
          alt='An image showing Gabriel'
          width={300}
          height={300}
          layout='responsive'
        />
      </div>
      <h1>Hi, I'm Gabriel</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
}

export default Hero;