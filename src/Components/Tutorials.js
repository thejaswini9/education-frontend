import React from 'react'

const Tutorials = () => {
  return (
    <div>
         Tutorials will display here
    </div>
  )
}

export default Tutorials















// // this is from chatgpt 




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function VideoTutorials() {
//     const [tutorials, setTutorials] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {

//         const apiUrl = 'backend_url';

//         axios.get(apiUrl)
//             .then(response => {
//                 setTutorials(response.data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setError(error.message);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;

//     return (
//         <div>
//             {tutorials.map(tutorial => (
//                 <div key={tutorial.id}>
//                     <h2>{tutorial.title}</h2>
//                     <video width="320" height="240" controls>
//                         <source src={tutorial.videoUrl} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default VideoTutorials;
