/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { container } from "../styles/dimensions";
import textContent from "../constans/textContent.json";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const styles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${container.width}%;
    max-width: ${container.maxWidth}px;
    min-width: ${container.minWidth}px;
    min-height: 100vh;
    background-color: #e6e6e6;
    box-shadow: #000000df 0 0 20px;

    .example {

     }
`

export default function Container() {
    const { header } = textContent;

    return (
        <div css={styles}>
            <Header title={header.title} />
            <Main />
            <Footer />
        </div>
    )
}