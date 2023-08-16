import styled from 'styled-components';
export const Section = styled.section`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 190px;
  background: #283340;
  color: #f5f2f0;
  ${'' /* align-items: center; */}
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  line-height: normal;
  @media screen and (max-width: 1364px) {
  }
  @media screen and (min-width: 1365px) {
    height: 567px;
  }
  @media screen and (min-width: 1919px) {
    height: 567px;
  }
`;
export const Wrapper = styled.div`
  margin: 0 auto;
`;
export const Title = styled.h1`
  color: #cbbe9c;
  font-size: 72px;
  font-weight: 700;
  padding: 0;
  margin: 0;
`;
export const SubTitile = styled.p`
  color: #f5f2f0;
  font-size: 48px;
  font-weight: 700;
  margin: 0;
`;
export const Author = styled.p`
  margin-bottom: 190px;
`;
