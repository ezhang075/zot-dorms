import middleEarth from '../assets/middle-earth.jpg';
import mesaCourt from '../assets/mesa-court.jpg';
import paloVerde from '../assets/palo-verde-2.jpg';

const dorms = [
    {
        id: "middle-earth",
        name: "Middle Earth",
        rating: 4.7, 
        review_count: 120,
        description: "Middle Earth is a popular dorm at UCI known for its vibrant community and convenient location. It offers a variety of amenities including study lounges, a fitness center, and a dining hall. Residents often praise the friendly atmosphere and the numerous social events hosted throughout the year.",
        price: "$800/month",
        image: middleEarth,
        img2: "https://live.staticflickr.com/4792/25824367687_a6583ef5b8_z.jpg",
        img3: "https://live.staticflickr.com/4785/38906255630_ffbef8d645_b.jpg",
        img4: "https://live.staticflickr.com/928/43920376202_1ace461894.jpg",
        img5: "https://live.staticflickr.com/1799/43250505744_b7c23f3e15.jpg"
    },

    {
        id: "mesa-court",
        name: "Mesa Court",
        rating: 4.1, 
        review_count: 120,
        description: "Mesa Court is a well-maintained dorm at UCI, offering a comfortable living environment. It features modern facilities and a supportive community atmosphere. Students appreciate the balance between academic focus and social engagement.",
        price: "$750/month",
        image: mesaCourt
    },

    {
        id: "palo-verde",
        name: "Palo Verde",
        rating: 3.5,
        review_count: 120,
        description: "Palo Verde is a modern dorm at UCI, providing a contemporary living experience. It offers state-of-the-art facilities and a dynamic community atmosphere. Students value the blend of comfort and convenience.",
        price: "$900/month",
        image: paloVerde
    }
]

export default dorms;