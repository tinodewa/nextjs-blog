import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                {postData.type == "web" ?
                    <Image
                            priority
                            src={`/images/${postData.id}.jpg`}
                            className={`${utilStyles.borderHalfCircle} ${utilStyles.selfCenter}`}
                            height={400}
                            width={800}
                            
                            alt=""
                            
                        />
                 :
                    <Image
                            priority
                            src={`/images/${postData.id}.jpg`}
                            className={`${utilStyles.borderHalfCircle} ${utilStyles.selfCenter}`}
                            width={200}
                            height={800}
                            alt=""
                        />
                }
                <h1 className={utilStyles.headingxl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                {postData.link == "-" ? 
                "" : <div>
                Visit the website:  
                <Link href={postData.link}> Here</Link>
            </div>           
                }
            </article>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    // add the "await" keyword like this:
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        }
    };
}