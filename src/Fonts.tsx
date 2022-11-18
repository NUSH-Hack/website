import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'AvenirHeading';
        font-style: normal;
        font-weight: bold;
        font-display: swap;
        src: url('./fonts/avenirBold.otf') format('opentype');
      }
      /* latin */
      @font-face {
        font-family: 'AvenirBody';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/avenir.otf') format('opentype');
      }
      `}
  />
)

export default Fonts