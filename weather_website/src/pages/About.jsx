import './About.css'

export function About () {
	return (
		<div className='background'>
			<div className='aboutContainer'>
				<h1 className='title'>React Practice Project</h1>
				<h2 className='title'>By Raymond Pham</h2>
				<div id='txt'>
					<p>Weather app based on Code Commerce tutorial: <a href='https://www.youtube.com/watch?v=UjeXpct3p7M'>here</a></p>
					<p>To do list based on Web Dev Simplified tutorial: <a href='https://www.youtube.com/watch?v=Rh3tobg7hEo'>here</a> </p>
				</div>
			</div>
		</div>
	);
}

