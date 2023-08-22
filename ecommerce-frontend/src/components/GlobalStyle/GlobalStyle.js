import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
}
h1{
    color: ${({ theme }) => theme.colors.htag};
    font-size: 3rem;
    font-weight: 900;
}
h3{
    color: ${({ theme }) => theme.colors.black};
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-top: 8rem;
}

span{
    font-size: 1.3rem;
    font-weight: bold;
}
p {
  color: ${({ theme }) => theme.colors.text};
  text-align: justify;
  font-size: 1.4rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight:400;
}
a{
    text-decoration: none;
}

li{
    list-style: none;
}
.grid{
    display: grid;
}
.grid-one-columns{
     grid-template-columns: 1fr;
}
.grid-two-columns{
     grid-template-columns: 1fr 1fr;
}
.grid-three-columns{
     grid-template-columns: 1fr 1fr 1fr;
     gap:2rem;
}
.grid-four-columns{
     grid-template-columns: 0.5fr 1fr 1fr 1fr;
}
select {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

`;
