import React, { Component } from 'react';
import Previewer from '../Previewer/Previewer';
import './Marked.css';

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

You can also make text **bold**... whoa!

Or _italic_.

Or... wait for it... **_both!_**

And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://dlkumaar.github.io), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![image](https://shorturl.at/rBJO0)

`;

class Marked extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: placeholder,
		};
	}

	handleChange = (e) => {
		this.setState({
			input: e.target.value,
		});
	};

	render() {
		return (
			<div>
				<textarea value={this.state.input} onChange={this.handleChange} />
				<Previewer value={this.state.input} />
			</div>
		);
	}
}

export default Marked;
