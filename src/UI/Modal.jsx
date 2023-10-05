/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

const styles = css`
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #38383875;
    backdrop-filter: blur(1px);

    .dialogWindow {
        min-width: 350px;
        min-height: 200px;
        padding: 20px;
        border-radius: 7px;
        background-color: #e9e9e9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: #00000086 0 0 20px;
    }
`

export default function Modal({ children }) {

    return (
        <div css={styles}>
            <div className='dialogWindow'>
                {children}
            </div>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.node
}