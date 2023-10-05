/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from "react";

import ModalPortal from './ModalPortal';
import Button from "../UI/Button";
import RemoveAll from './Modals/RemoveAll';

const styles = css`
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 30px 0;

	.example {

	 }
`

export default function Controls() {
	const [isRemoveAll, setIsRemoveAll] = useState(false);

	//Opening modal window to confirm removing all tasks
	const handleRemoveAllTasks = () => {
		setIsRemoveAll(true);
	}

	return (
		<>
			<div css={styles}> 
				<Button 
					label="Remove All"
					onHandle={handleRemoveAllTasks}
				/>
			</div>
				{isRemoveAll && 
					<ModalPortal>
						<RemoveAll setIsRemoveAll={setIsRemoveAll} />
					</ModalPortal>
				}
		</>
	)
}

