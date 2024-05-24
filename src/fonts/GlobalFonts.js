import { createGlobalStyle } from "styled-components";

import TTFirsNeueBoldEot from "./TTFirsNeue-Bold.eot";
import TTFirsNeueBoldWoff2 from "./TTFirsNeue-Bold.woff2";
import TTFirsNeueBoldWoff from "./TTFirsNeue-Bold.woff";
import TTFirsNeueBoldTTF from "./TTFirsNeue-Bold.ttf";

import TTFirsNeueRegularEot from "./TTFirsNeue-Regular.eot";
import TTFirsNeueRegularWoff2 from "./TTFirsNeue-Regular.woff2";
import TTFirsNeueRegularWoff from "./TTFirsNeue-Regular.woff";
import TTFirsNeueRegularTTF from "./TTFirsNeue-Regular.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'TT Firs Neue';
        src: url('TTFirsNeue-Bold.eot');
        src: local('TT Firs Neue Bold'), local('TTFirsNeue-Bold'),
            url(${TTFirsNeueBoldEot}?#iefix') format('embedded-opentype'),
            url(${TTFirsNeueBoldWoff2}) format('woff2'),
            url(${TTFirsNeueBoldWoff}) format('woff'),
            url(${TTFirsNeueBoldTTF}) format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'TT Firs Neue';
        src: url('TTFirsNeue-Regular.eot');
        src: local('TT Firs Neue Regular'), local('TTFirsNeue-Regular'),
        url(${TTFirsNeueRegularEot}?#iefix') format('embedded-opentype'),
        url(${TTFirsNeueRegularWoff2}) format('woff2'),
        url(${TTFirsNeueRegularWoff}) format('woff'),
        url(${TTFirsNeueRegularTTF}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    
`;
