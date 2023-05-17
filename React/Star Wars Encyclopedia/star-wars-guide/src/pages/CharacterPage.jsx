import { useParams } from 'react-router-dom';

function CharacterPage() {
    // The hook obtains id of the route
    const { id } = useParams(); 
    return ( 
        <h1>Character with id: {id}</h1>
     );
}

export default CharacterPage;