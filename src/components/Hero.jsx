// import React from 'react';

// const Hero = ({ user }) => {
//   const link = user?.about.avatar.url
//     return (
//         <section className="hero-section">
//             <div className="container">
//               <h1><strong>USER:</strong></h1>
//                 <h1>{user?.about?.name}</h1>
//                 <h2>{user?.about?.title}</h2>
//                 {/* <img src={`${link}`} alt="" /> */}
//                 {/* Add any additional content */}
//             </div>
//         </section>
//     );
// };

// export default Hero;

import React from 'react';

const Hero = ({ user }) => {
    const link = user?.about.avatar.url;
    return (
        <section className="bg-blue-900 text-white py-16 px-4 sm:px-8">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl sm:text-6xl font-bold">{user?.about?.name}</h1>
                <p className="text-lg sm:text-xl mt-4">{user?.about?.title}</p>
                <img src={user?.about.avatar.url} alt="" className="mt-8 mx-auto rounded-full h-32 w-32 sm:h-48 sm:w-48 object-cover" />
            </div>
        </section>
    );
};

export default Hero;

