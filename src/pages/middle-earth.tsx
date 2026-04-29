// import {useParams} from 'react-router-dom';
// import dorms from '../components/dorms.tsx';

// const DormPage = () => {
//     const { id } = useParams();
//     const dorm = dorms.find((dorm) => dorm.id === id);
//     if (!dorm) {
//         return <div>Dorm not found</div>;
//     }
//     return (
//         <div className="dorm-page">
//             <h1>{dorm.name}</h1>
//             <img src={dorm.image} alt={dorm.name} />
//             <p>{dorm.description}</p>
//             <p>Price: {dorm.price}</p>
//         </div>
//     );
// }

// export default DormPage;