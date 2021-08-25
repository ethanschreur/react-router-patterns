function DogList({ dogs }) {
	return (
		<div className="DogList">
			{dogs.map((dog) => {
				return (
					<div>
						Name: {dog.name}
						<br />
						Age: {dog.age}
						<br />
						Facts: {dog.facts.join(' ')}
						<br />
						Image: <img src={dog.src} />
					</div>
				);
			})}
		</div>
	);
}

export default DogList;
