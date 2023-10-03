/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from "../styles/colors";
import PropTypes from "prop-types";

const styles = css`
    .button {
        background-color: #aee5ff;
        padding: 14px 0;
        width: 120px;
        border-radius: 6px;
        box-shadow: #00000040 0 0 7px;
        font-size: 16px;
        color: ${colors.darkGrey};
        cursor: pointer;

        &:hover {
            background-color: #92dcff;
        }
    }
`

export default function Button({
    label,
    onHandle
}) {

    return (
        <div css={styles}>
            <button className='button' onClick={onHandle}>{label}</button>
        </div>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onHandle: PropTypes.func
}