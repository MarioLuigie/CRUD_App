/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { footer } from "../styles/dimensions";
import { colors } from "../styles/colors";

const styles = css`
    width: ${footer.width}%;
    height: ${footer.height}px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.grey};

    .label {
        font-size: 13px;
        color: ${colors.accentColor};

    }
`

export default function Footer () {

    return (
        <div css={styles}>
            <p className='label'>ARWcode 2023</p>
        </div>
    )
}