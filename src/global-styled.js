import { createGlobalStyle } from "styled-components";

// Não é necessário exportar createGlobalStyle aqui
// export { createGlobalStyle } from "styled-components"; 

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root{
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
