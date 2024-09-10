import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingmd}>
        <p>Fresh graduate with Bachelor of Informatics Engineering from STIKI Malang. Possess strong analytical and problem-solving skills honed through on-campus learning, certified independent studies at Dicoding and Bangkit Academy. Eager to utilize skills in website development, mobile development and collaboration to contribute to a team environment and learn from experienced professionals.</p>
        <p>Thank you for visiting my profile.</p>
      </section>
      <section className={utilStyles.headingmd}>
        <h2 className={utilStyles.headinglg}>My Experience</h2>
        <div>
          <h3 className={utilStyles.headingmd}>Website Programming</h3>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title, type }) => (
              type == "web" ? (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  {title}
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>) : ("")
            )
            )
            }
          </ul>
        </div>
        <div>
          <h3 className={utilStyles.headingmd}>Android Programming</h3>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title, type }) => (
              type == "android" ? (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  {title}
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>) : ("")
            )
            )
            }
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}
