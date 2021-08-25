import { useParams } from 'react-router-dom';
function DogDetails({ dogs }) {
	const { name } = useParams();
	const getDog = (name) => {
		const capitalize = (word) => {
			const lower = word.toLowerCase();
			return word.charAt(0).toUpperCase() + lower.slice(1);
		};
		const filteredDogs = dogs.filter((dog) => {
			return dog.name === capitalize(name);
		});
		return filteredDogs[0];
	};
	return (
		<div className="DogDetails">
			Name: {getDog(name).name}
			<br />
			Age: {getDog(name).age}
			<br />
			Facts: {getDog(name).facts.join(' ')}
			<br />
			Image: <img src={getDog(name).src} />
		</div>
	);
}

export default DogDetails;
