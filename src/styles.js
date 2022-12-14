import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-animation: color-change 10s linear infinite alternate both;
	        animation: color-change 10s linear infinite alternate both;

@-webkit-keyframes color-change {
  0% {
    background: #19dcea;
  }
  50% {
    background: #03a9f4;
  }
  100% {
    background: #01579b;
  }
}
@keyframes color-change {
  0% {
    background: #19dcea;
  }
  50% {
    background: #01579b;
  }
  100% {
    background: #03a9f4;
  }
}
`



export const Text = styled.h1`
    position: absolute;
    text-align: center;
    margin-top: -350px;
    margin-bottom: 30px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
    text-transform: uppercase;
    animation: text-fade 1s ease 0s 1 normal forwards;

    @keyframes text-fade {
  0% {
    transform: scale(0);
    transform-origin: 50% 100%;
  }

  100% {
    transform: scale(1);
    transform-origin: 50% 100%;
  }
}
`;


export const Link = styled.a`
    text-decoration: none;
    font-size: 14px;
    color: #000;

    &:hover{
        font-size: 12px;
        text-decoration: underline;
    }
`



export const Content = styled.div`
    background-color: #F9F9F9;
    width: 45%;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

