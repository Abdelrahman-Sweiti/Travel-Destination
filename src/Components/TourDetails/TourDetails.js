import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function TourDetails(props) {
  const { id } = useParams();
  const selectedTour = props.data.find((tour) => tour.id === parseInt(id));
  
  if (!selectedTour) {
    return <div>No tour found with the provided ID.</div>
  }

  return (
    <div>
      <h2>{selectedTour.name}</h2>
      <img src={selectedTour.image} alt={selectedTour.name} />
      <p>{selectedTour.description}</p>

    </div>
  );
}

export default TourDetails;
