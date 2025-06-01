import Link from 'next/link';
import { DidYouKnow } from 'src/interfaces/shared/name';
import styles from 'src/styles/modules/components/name/did-you-know.module.scss';

type Props = {
  data: DidYouKnow;
};

const DidYouKnow = ({ data }: Props) => (
  <section className={styles.container}>
    <h2 className='heading heading__secondary'>Did you know</h2>
    {isEmpty(data) ? (
      <p>Nothing interesting to show.</p>
    ) : (
      <>
        {!!data.trivia?.total && (
          <section>
            <h3 className='heading heading__tertiary'>Trivia</h3>
            <div dangerouslySetInnerHTML={{ __html: data.trivia.html }}></div>
          </section>
        )}
        {!!data.quotes?.total && (
          <section>
            <h3 className='heading heading__tertiary'>Quotes</h3>
            <div dangerouslySetInnerHTML={{ __html: data.quotes.html }}></div>
          </section>
        )}
        {!!data.trademark?.total && (
          <section>
            <h3 className='heading heading__tertiary'>Trademark</h3>
            <div dangerouslySetInnerHTML={{ __html: data.trademark.html }}></div>
          </section>
        )}
        {!!data.nicknames.length && (
          <section>
            <h3 className='heading heading__tertiary'>Nicknames</h3>
            <p>{data.nicknames.join(', ')}</p>
          </section>
        )}
        {!!data.salary?.total && (
          <section>
            <h3 className='heading heading__tertiary'>Salary</h3>
            <p>
              <span>{data.salary.value} in </span>
              <Link href={`/title/${data.salary.title.id}`}>
                <a className={'link'}>{data.salary.title.text}</a>
              </Link>
              <span> ({data.salary.title.year})</span>
            </p>
          </section>
        )}
      </>
    )}
  </section>
);

export default DidYouKnow;

const isEmpty = (data: Props['data']) =>
  Boolean(
    !data.nicknames.length && !data.quotes && !data.salary && !data.trademark && !data.trivia
  );