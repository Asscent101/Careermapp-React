import React from 'react'

import { Helmet } from 'react-helmet'

import EmailForm from '../components/email-form'
import FeatureCard from '../components/feature-card'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Careermapp</title>
        <meta property="og:title" content="Careermapp" />
      </Helmet>
      <div className={styles['Main']}>
        <div className={styles['BlurBackground']}></div>
        <header className={styles['Header']}>
          <h1>Careermapp</h1>
          <div className={styles['Logo']}></div>
        </header>
        <div className={styles['Hero']}>
          <div className={styles['container01']}>
            <h1
              className={` ${styles['text01']} ${projectStyles['headline1']} `}
            >
              <span>Your career happens now.</span>
            </h1>
            <h1
              className={` ${styles['text03']} ${projectStyles['subtitle2']} `}
            >
              The world's first AI-powered career coach app trained on millions
              of data points.
            </h1>
            <h1
              className={` ${styles['text04']} ${projectStyles['mediumLabel']} `}
            >
              Join our beta
            </h1>
            <EmailForm rootClassName="rootClassName"></EmailForm>
          </div>
          <img
            alt="image"
            src="/playground_assets/group%204-1000h.png"
            className={styles['image']}
          />
        </div>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className={styles['TurquoiseCirble']}
        />
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className={styles['PurpleCircle']}
        />
        <img
          alt="image"
          src="/playground_assets/left.svg"
          className={styles['Left']}
        />
        <img
          alt="image"
          src="/playground_assets/right.svg"
          className={styles['Right']}
        />
      </div>
      <div className={styles['Features']}>
        <h2 className={` ${projectStyles['headline2']} ${styles['text05']} `}>
          Get the career you want with our AI coach.
        </h2>
        <span className={styles['text06']}>
          <span className={styles['text07']}>
            No matter if you are an experienced professional or a recent
            graduate, our AI coach can help you move towards your dream career.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <div className={styles['Features1']}>
          <FeatureCard
            text="What experience do you need to get a product management job at Google? How does an MBA improve your chances of joining McKinsey? "
            title="Answer career questions"
            rootClassName="rootClassName1"
          ></FeatureCard>
          <FeatureCard
            text="We analyse millions of data points to provide you actionable and personalised steps to increase your probabilities of success."
            title="Actionable suggestions"
            image_src="/playground_assets/03.svg"
            rootClassName="rootClassName"
          ></FeatureCard>
          <FeatureCard
            text="Identify experiences and skills that will set you apart from the the rest."
            title="Set yourself apart"
            image_src="/playground_assets/02.svg"
            rootClassName="rootClassName2"
          ></FeatureCard>
        </div>
      </div>
      <div className={styles['CTA']}>
        <div className={styles['container02']}>
          <div className={styles['container03']}>
            <div className={styles['container04']}>
              <h1 className={styles['text08']}>Get started now</h1>
              <div className={styles['container05']}>
                <span
                  className={` ${styles['text09']} ${projectStyles['lead1']} `}
                >
                  Get early access
                </span>
              </div>
            </div>
            <EmailForm rootClassName="rootClassName1"></EmailForm>
          </div>
          <div className={styles['container06']}>
            <img
              alt="image"
              src="/playground_assets/iPhoneX-1000w.png"
              image_src="/playground_assets/iPhoneX-1000w.png"
              className={styles['image1']}
            />
            <img
              alt="image"
              src="/playground_assets/iPhoneX-1000w.png"
              image_src="/playground_assets/iPhoneX-1000w.png"
              className={styles['image2']}
            />
          </div>
        </div>
      </div>
      <div className={styles['Footer']}>
        <footer className={styles['container07']}>
          <div className={styles['container08']}></div>
          <div className={styles['Divider']}></div>
          <div className={styles['container09']}>
            <span className={` ${styles['Text10']} ${projectStyles['body2']} `}>
              Â© 2021 CareerMapp. All rights reserved
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
