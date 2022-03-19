import styled from '@emotion/styled';
import { NextPage } from 'next';

import Editor from '../components/Editor';
import database from '../database.json';

const index: NextPage = () => {
  return (
    <>
      <Main>
        <section>
          {database.map(({ language, value }) => (
            <Wrapper key={language}>
              <Language>{language}</Language>
              <Editor value={value} language={language} readOnly padding={15} />
            </Wrapper>
          ))}
        </section>
      </Main>
    </>
  );
};

export default index;

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
  width: 300px;
  height: 200px;
  margin: 50px;
`;

const Language = styled.p`
  font-size: 20px;
  text-align: center;
`;
