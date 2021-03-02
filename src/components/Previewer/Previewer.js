import React from 'react';
import marked from 'marked';
import './Previewer.css';

const Previewer = (props) => {
	return (
		<div id='preview'>
			<h2>#Preview</h2>
			<div
				dangerouslySetInnerHTML={{
					__html: marked(props.value, { breaks: true }),
				}}></div>
		</div>
	);
};

export default Previewer;
