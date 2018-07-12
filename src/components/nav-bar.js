import React from 'react';

export default function NavBar(props) {

	return (
		<nav>
			<input type="text" name="text" placeholder="search here" />
			<ul>
				<li>Link</li>
				<li>Link</li>
				<li>Link</li>
			</ul>
			<button>Sign up</button>
			<button>Log in</button>
		</nav>
		);
}