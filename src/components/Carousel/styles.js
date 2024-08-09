import styled from 'styled-components';

export const Title = styled.h3`
font-style: normal;
    font-weight: normal;
    font-size: 35px;
    margin-bottom: 32px;
    display: inline-block;
    line-height: 1;
    padding: 20px;
    transition: all 400ms ease 0s;
    border-radius: 4px;
    border-width: 0.1px;
    border-style: solid;
    border-color: initial;
    border-image: initial;
    

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;


export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  opacity: .5;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: 1;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0px;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: visible !important;
  flex-direction: row;

  
  li {
    margin-right: 2px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
  overflow-x: visible !important;
`;
