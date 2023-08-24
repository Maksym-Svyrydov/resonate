import styled from 'styled-components';
import bgImg from '../../../../img/Cases/Cash.png';
export const Section = styled.section`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  width: 100%;
  height: 1080px;
  background: rgba(245, 242, 240, 1);
  @media screen and (min-width: 1365px) {
    width: 100%;
    height: 768px;
  }

  @media screen and (min-width: 1919px) {
    width: 100%;
    height: 1080px;
  }
`;
export const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  background: linear-gradient(
      90deg,
      rgba(29, 29, 29, 0.6446953781512605) 0%,
      rgba(1, 1, 1, 0.39539565826330536) 16%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${bgImg}), no-repeat;

  background-size: 800px auto;
  background-repeat: no-repeat;
  background-position: top 0px right -52px;
  @media screen and (min-width: 1365px) {
    width: 648px;
    height: 768px;
  }

  @media screen and (min-width: 1919px) {
    width: 748px;
    height: 1080px;
  }
`;
export const TitleWrapp = styled.div`
  ${
    '' /* width: 521px;
  height: 335.343px; */
  }
  margin: auto auto;
`;
export const TextTitle = styled.p`
  color: #f5f2f0;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin: 0px 0px 5px 0px;
  padding: 0px;
  @media screen and (min-width: 1365px) {
    font-size: 32px;
    font-weight: 600;
  }

  @media screen and (min-width: 1919px) {
    font-size: 48px;
    font-weight: 700;
  }
`;
export const TextAccent = styled.span`
  color: #cbbe9c;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-decoration-line: underline;
  margin-left: 20px;
  @media screen and (min-width: 1365px) {
    font-size: 32px;
    font-weight: 600;
  }

  @media screen and (min-width: 1919px) {
    font-size: 48px;
    font-weight: 700;
  }
`;
export const LogoWrapp = styled.div`
  display: flex;
  margin: 22px auto 0px auto;
  justify-content: center;
  align-items: center;
  line-height: 120%;
`;
export const Logo = styled.img`
  @media screen and (min-width: 1365px) {
    width: 178px;
    height: 128px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1919px) {
    width: 226px;
    height: 178px;
    margin-left: 0px;
    margin-right: auto;
  }
`;
export const ArrowWrapper = styled.div`
  height: 100%;
  background: #283340;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1365px) {
    margin-right: 0px;
    margin-left: 0px;
    width: 100px;
  }
  @media screen and (min-width: 1919px) {
    padding: 0px;
    margin: 0;
    width: 150px;
  }
`;
export const ArrowImg = styled.img`
  @media screen and (min-width: 1365px) {
    width: ' 95.315px';
    height: '110px';
  }
  @media screen and (min-width: 1919px) {
    width: ' 114.315px';
    height: '128px';
  }
`;
export const InfoLayout = styled.div`
  background: #283340;
  display: flex;
  flex-direction: row;
  color: #f5f2f0;
`;

export const DecriptionSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  padding-right: 15px;
`;
export const TextWrapper = styled.div`
  margin-right: 25px;
`;
export const CaseTitle = styled.h2`
  color: #f5f2f0;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: 1365px) {
    margin-top: 118px;
    margin-bottom: 22px;
    font-size: 42px;
  }
  @media screen and (min-width: 1919px) {
    margin-top: 118px;
    margin-bottom: 52px;
    font-size: 72px;
  }
`;
export const CaseList = styled.ul`
  @media screen and (min-width: 1365px) {
    margin-bottom: 45px;
  }
  @media screen and (min-width: 1919px) {
    margin-bottom: 73px;
  }
`;
export const CaseListTitle = styled.li`
  color: #f5f2f0;
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  list-style: none;
  margin-bottom: 3px;
  @media screen and (min-width: 1365px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 24px;
  }
`;
export const CaseItem = styled.li`
  color: #f5f2f0;
  font-family: DM Sans;

  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 2px;
  @media screen and (min-width: 1365px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 18px;
  }
`;
export const GoalWrapper = styled.div`
  border: 1px solid #cbbe9c;
  flex-shrink: 0;
  color: #f5f2f0;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (min-width: 1365px) {
    width: 305px;
    height: 262px;
    font-size: 12px;
    padding: 5px 10px;
    margin-bottom: 197px;
  }
  @media screen and (min-width: 1919px) {
    max-width: 565px;
    max-height: 362px;
    font-size: 18px;
    padding: 38px 27px;
    margin-bottom: 197px;
  }
`;
export const GoalTitle = styled.h3`
  color: #f5f2f0;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;

  @media screen and (min-width: 1365px) {
    font-size: 18px;
    margin-bottom: 10px;
    margin-top: 5px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;
export const TimeLineLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;
export const NetedList = styled.ul`
  list-style: circle;
  font-family: 'DM Sans';
`;
export const TimeLayout = styled.div``;
export const ProjectWrap = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;
export const ProjectTitle = styled.h3`
  color: #f5f2f0;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;

  @media screen and (min-width: 1365px) {
    padding: 197px 0px 0px 20px;
    margin: 0px 0px 18px 0px;
    font-size: 18px;
  }
  @media screen and (min-width: 1919px) {
    padding: 264px 0px 0px 20px;
    margin: 0px 0px 18px 0px;
    font-size: 24px;
  }
`;
export const TimeList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding-top: 0px;
  @media screen and (min-width: 1365px) {
    padding: 7px;
    width: 15px;
    padding-top: 0px;
  }
  @media screen and (min-width: 1919px) {
    padding: 10px;
    width: 20px;
    padding-top: 0px;
  }
`;
export const TimeItem = styled.li`
  @media screen and (min-width: 1365px) {
    height: 65px;
    width: 30px;
    padding-top: 0px;
    font-size: 12px;
  }
  @media screen and (min-width: 1919px) {
    height: 92px;
    width: 40px;
    padding-top: 0px;
    font-size: 18px;
  }
`;
export const TimeItemLast = styled.li`
  @media screen and (min-width: 1365px) {
    height: 65px;
    width: 30px;
    padding-top: 0px;
    font-size: 12px;
  }
  @media screen and (min-width: 1919px) {
    height: 92px;
    width: 40px;
    padding-top: 0px;
    font-size: 18px;
  }
`;
export const ListLayout = styled.ul`
  list-style: none;
  padding: 0px 0px 0px 25px;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1365px) {
  }
  @media screen and (min-width: 1919px) {
    height: 350px;
  }
`;
export const ListLayoutItem = styled.li`
  list-style: none;
  padding: 0;
  @media screen and (min-width: 1365px) {
    height: 65px;
    width: 300px;
    font-size: 13px;
  }
  @media screen and (min-width: 1919px) {
    height: 92px;
    width: 350px;
    font-size: 18px;
  }
`;
export const Frame = styled.div`
  position: absolute;
  border-right: 1px solid #f5f2f0;
  width: 1px;
  @media screen and (min-width: 1365px) {
    height: 335px;
    top: 20px;
    left: 62.5px;
  }
  @media screen and (min-width: 1919px) {
    height: 470px;
    top: 0px;
    left: 65px;
  }
`;
export const CircleList = styled.ul`
  list-style: none;
  position: absolute;
  top: 0px;
  left: 16px;
`;
export const Circle = styled.li`
  background-color: #cbbe9c;
  border-radius: 50%;

  @media screen and (min-width: 1365px) {
    margin-bottom: 44px;
    width: 18px;
    height: 18px;
  }
  @media screen and (min-width: 1919px) {
    margin-bottom: 71px;
    width: 21px;
    height: 21px;
  }
`;
export const CircleProcess = styled.li`
  border-radius: 50%;
  background-color: #c1c1c1;
  @media screen and (min-width: 1365px) {
    width: 15px;
    height: 15px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1919px) {
    width: 18px;
    height: 18px;
    margin-bottom: 74px;
  }
`;
export const CircleEl = styled.div`
  background-color: #c1c1c1;
  border-radius: 50%;
  padding: 0;
  @media screen and (min-width: 1365px) {
    width: 15px;
    height: 15px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1919px) {
    width: 18px;
    height: 18px;
    margin-bottom: 74px;
  }
`;
export const CircleElAccent = styled.div`
  background-color: #cbbe9c;
  border-radius: 50%;
  padding: 0;
  @media screen and (min-width: 1365px) {
    margin-bottom: 44px;
    width: 18px;
    height: 18px;
  }
  @media screen and (min-width: 1919px) {
    margin-bottom: 71px;
    width: 21px;
    height: 21px;
  }
`;
