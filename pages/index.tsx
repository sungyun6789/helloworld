import styled from '@emotion/styled';
import { NextPage } from 'next';

import Editor from '../components/Editor';
import database from '../database.json';

const index: NextPage = () => {
  const data = [...database].sort((lhs, rhs) => lhs.language.localeCompare(rhs.language));

  return (
    <>
      <Title>Hello world of all languages</Title>
      <Main>
        <section>
          {data.map(({ language, value }) => (
            <Wrapper key={language}>
              <Language>{language.replace(/./, language[0].toUpperCase())}</Language>
              <Editor value={value} language={language} readOnly padding={15} />
            </Wrapper>
          ))}
        </section>
      </Main>
    </>
  );
};

export default index;

const Title = styled.h1`
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  margin: 40px 0;
`;

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  max-width: 1500px;
  margin: 0 auto;

  section {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    flex-wrap: wrap;
  }
`;

const Wrapper = styled.article`
  width: 350px;
  height: 200px;
  margin: 50px;
`;

const Language = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
