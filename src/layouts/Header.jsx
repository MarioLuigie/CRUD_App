/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

import { header } from "../styles/dimensions";

const styles = css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d4d4d4;
    width: ${header.width}%;
    height: ${header.height}px;

    .label {
        font-size: 40px;
        color: #8d8d8d;
     }
`

export default function Header({
    title
}) {

    return (
        <div css={styles}>
            <p className='label'>{title}</p>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}