import React from 'react'

import { Helmet } from 'react-helmet'

import EmailForm from '../components/email-form'
import FeatureCard from '../components/feature-card'
import projectStyles from '../style.module.css'
import styles from './home.module.css'


import ReactGA from 'react-ga';

ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);


const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Careermapp</title>
        <meta property="og:title" content="Careermapp" />
      </Helmet>
      <header className={styles['Header']}>
        <span className={styles['text']}>Careermapp</span>
        <div>
          <img
            alt="image"
            src="/playground_assets/instagram-1000h.png"
            className={styles['image']}
          />
        </div>
      </header>
      <div className={styles['Hero']}>
        <div className={styles['container1']}>
          <h1 className={` ${styles['text01']} ${projectStyles['headline1']} `}>
            <span>
              Your career
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text03']}>happens now</span>
            <span></span>
          </h1>
          <h2 className={` ${styles['text05']} ${projectStyles['subtitle2']} `}>
            The world&apos;s first AI-powered career coach powered by millions
            of data points.
          </h2>
          <EmailForm rootClassName="rootClassName6"></EmailForm>
        </div>
        <img
          alt="image"
          src="/playground_assets/business%20man%20chart%20graph%20analytics%20statistics%20arrow%20increase-1000h.png"
          className={styles['Hero-image-1']}
        />
        <p className={styles['text06']}>
          New dynamics are making career planning harder and more important to
          your long term success.
        </p>
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          image_src="/playground_assets/purple-circle.svg"
          className={styles['Background-blur-purple']}
        />
        <img
          alt="image"
          src="/playground_assets/left.svg"
          className={styles['Background-arrows']}
        />
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className={styles['ackground-blur-green']}
        />
      </div>
      <div className={styles['Stats']}>
        <div className={styles['Stat']}>
          <h1 className={styles['text07']}>
            <span>12</span>
          </h1>
          <span className={styles['text09']}>
            Average number of jobs in a persons lifetime
          </span>
        </div>
        <div className={styles['Stat1']}>
          <h1 className={styles['text10']}>
            <span>80%</span>
          </h1>
          <span className={styles['text12']}>
            Of persons under 25 would consider switching careers
          </span>
        </div>
        <div className={styles['Stat2']}>
          <h1 className={styles['text13']}>
            <span>55%</span>
          </h1>
          <span className={styles['text15']}>
            Of employees will require significant upskilling by 2025
          </span>
        </div>
        <div className={styles['Stat3']}>
          <h1 className={styles['text16']}>1 in 4</h1>
          <span className={styles['text17']}>
            Will become an entrepreneur or solotrepreneur
          </span>
        </div>
      </div>
      <div className={styles['container2']}>
        <h1 className={` ${styles['text18']} ${projectStyles['headline3']} `}>
          <span>
            Careermapp helps you
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles['text20']}>plan your caeer</span>
        </h1>
      </div>
      <div>
        <div className={styles['container3']}>
          <img
            alt="image"
            src="/playground_assets/career_mountain-1200w.png"
            className={` ${styles['image1']} ${projectStyles['Image']} `}
          />
          <div
            className={` ${styles['container4']} ${projectStyles['Box-1']} `}
          >
            <FeatureCard
              text="In a world of endless options, find the one path right for you"
              title="Career Clarity"
              image_src="/playground_assets/05.svg"
              rootClassName="rootClassName14"
            ></FeatureCard>
          </div>
          <div
            className={` ${styles['container5']} ${projectStyles['Box-1']} `}
          >
            <FeatureCard
              text="No need to spend hours on research and answering questions."
              title="Save Time"
              image_src="/playground_assets/07.svg"
              rootClassName="rootClassName12"
            ></FeatureCard>
          </div>
          <div
            className={` ${styles['container6']} ${projectStyles['Box-1']} `}
          >
            <FeatureCard
              text="Identify experiences and skills that will set you apart from the the rest"
              title="Personalised Path"
              image_src="/playground_assets/02.svg"
              rootClassName="rootClassName13"
            ></FeatureCard>
          </div>
        </div>
      </div>
      <div className={styles['container7']}>
        <span className={styles['text21']}>
          Join 1400 other career planners and make your own path.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <EmailForm rootClassName="rootClassName7"></EmailForm>
      </div>
      <footer className={styles['Footer']}>
        <span className={styles['text22']}>
          Copyright 2021 CareerMapp, All Rights Reserved.
        </span>
        <div className={styles['IconGroup']}>
          <a
            href="https://www.instagram.com/careermapp/"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link']}
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className={` ${styles['icon']} ${projectStyles['thqLink']} `}
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </a>
        </div>
      </footer>
      <div className={styles['BlurBackground']}></div>
    </div>
  )
}

export default Home
