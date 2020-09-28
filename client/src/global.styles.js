import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  font-family: "Open Sans Condensed"{
    src: url('assets/opensanscondensed-light-webfont.woff2') format('woff2');
    src: url('assets/opensanscondensed-light-webfont.woff') format('woff');
  }
  
	body {
		font-family: 'Open Sans Condensed', 'Roboto', sans-serif;
		padding: 20px 40px;

		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}

	a {
		text-decoration: none;
		color: black;
	}

	* {
		box-sizing: border-box;
	}
`;
