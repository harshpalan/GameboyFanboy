import { createGlobalStyle } from "styled-components";
import fontLight from "../assets/fonts/FuturaLight.ttf";
import fontRegular from "../assets/fonts/FuturaStd.ttf";
import pixelEmulator from "../assets/fonts/PixelEmulator.ttf";
import snes from "../assets/fonts/SNES.ttf";

export const GlobalStyles = createGlobalStyle`
	*,*::after,*::before {
		margin: 0;
		padding: 0;
	}

	h1,h2,h3,h4,h5,h6 {
		margin: 0;
		padding: 0;
	}

	@font-face {
		font-family: 'Futura Light';
		src: url(${fontLight});
		font-display: swap;
		font-style: normal;
	}

	@font-face {
		font-family: 'Futura Regular';
		src: url(${fontRegular});
		font-display: swap;
		font-style: normal;
	}

	@font-face {
		font-family: 'Pixel Emulator';
		src: url(${pixelEmulator});
		font-display: swap;
		font-style: normal;
	}

	@font-face {
		font-family: 'SNES';
		src: url(${snes});
		font-display: swap;
		font-style: normal;
	}

	body {
		overflow-x: hidden;
	}

	:root{
	--fontBig: 7em; //88 px
	--fontxxxl: 5.5em; //88 px
	--fontxxl: 3.4375em; //55 px
	--fontxl: 2.75em; //44 px
	--fontlg: 1.9375em; //31 px
	--fontmd: 1.375em; //22 px
	--fontsm: 1.125em; //18 px
	--fontxs: 1em; //16 px
	--fontxxs: 0.75em; //12 px


	// Colors
	--dark: #000000;
	--grey: #666666;
	--greyLight: #cecece;
	--offWhite: #eeeeee;
	--white: #ffffff;
	--blue: #0071e3;
	--blueRgba:"0, 113, 227";

	//fonts
	--fontL: "Futura Light";
	--fontR: "Futura Regular";
	--fontP: "Pixel Emulator";
	--fontS: "SNES";
	
	// gradient
	--gradient: #35c3f3 0%, #8b9fe8 20%, #e681d8 39%, #ffa9a4 76%, #fed2ce 100%;
	--gradient2:  rgba(180,58,58,1) 0%, rgba(253,29,29,1) 38%, rgba(253,131,44,1) 67%, rgba(253,178,56,1) 84%, rgba(252,188,69,1) 100%;
}

`;
