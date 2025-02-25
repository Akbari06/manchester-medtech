// import committeeData from "./committee.json";
// import PropTypes from "prop-types";

// const CommitteeCard = ({ role, name, about }) => {
//     const styles = {
//         backgroundColor: "#404444",  
//         padding: "15px",
//         textAlign: "center",
//         border: "2px solid white",  
//         borderRadius: "15px",
//         width: "70vw", // ✅ Takes 70% of the viewport width
//         maxWidth: "70vw", // ✅ Ensures it doesn't shrink below this
//         color: "white",
//         margin: "10px auto", // ✅ Centers the card
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         fontSize: "1.5rem",
//         font: "Arial",
//         fontWeight: "bold",
//     };

//     return (
//         <div style={styles}>
//             <p>{role}</p>
//             <p>{name}</p>
//             <p>{about}</p>
//         </div>
//     );
// };



// // Prop Validation
// CommitteeCard.propTypes = {
//     role: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     about: PropTypes.string.isRequired
// };

// const CommitteeList = () => {
//     // const containerStyles = {
//     //     display: "flex",
//     //     flexDirection: "column", 
//     //     alignItems: "center", 
//     //     justifyContent: "flex-start", // Ensures items start from the top
//     //     minHeight: "100vh",
//     //     width: "100vw",
//     //     margin: 0, 
//     //     paddingTop: "50px", // Adds space at the top so the first card isn't cut off
//     //     overflowY: "auto", // Enables scrolling if needed
//     //     paddingBottom: "100px"
//     // };

//     // const stylesSign = {
//     //     fontSize: "70px",
//     //     textAlign: "center",
//     //     fontWeight: "bold",
//     //     fontFamily: "Arial", // Corrected from "font"
//     //     paddingTop: "10px",
//     //     color: "white",
//     //     marginBottom: "20px",
//     //     paddingBottom: "1px",
//     // }

//     // const stylesText = {
//     //     fontSize: "25px",
//     //     textAlign: "center",
//     //     fontWeight: "bold",
//     //     fontFamily: "Arial", 
//     //     color: "white",
//     //     marginBottom: "20px",
//     //     paddingBottom: "10px",
//     // }

//     // const stylesFirstP = {
//     //     marginBottom: "100px", 
//     // };

//     return (
//         <div>
//             <div className="text-white font-bold text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl pt-2 pb-1 mb-5">
//                 Manchester MedTech
//             </div>

//             <div className="text-white font-bold text-center text-xl sm:text-2xl md:text-3xl mb-5 pb-2">
//                 <p className="mb-24">No.1 MedTech Society in the UK</p>
//                 <p>Want to hear about the latest MedTech news?</p>
//                 <p>Want to contribute to MedTech and charity events?</p>
//                 <p>You have come to the right place my friend.</p>
//             </div>

//             <div className="w-full flex flex-col items-center justify-start space-y-4">
//                 {committeeData.map((member) => (
//                     <CommitteeCard
//                         key={member.id}
//                         role={member.role}
//                         name={member.name}
//                         about={member.about}
//                     />
//                 ))}
//             </div>

//         </div>

//     );
// };


// export default CommitteeList;
// import committeeData from "./committee.json";
// import PropTypes from "prop-types";

// const CommitteeCard = ({ role, name, about }) => {
//     return (
//         <div className="bg-[#404444] p-4 text-center border-2 border-white rounded-lg w-full max-w-2xl mx-auto my-4 text-white flex flex-col justify-center items-center text-lg font-bold font-sans">
//             <p>{role}</p>
//             <p>{name}</p>
//             <p>{about}</p>
//         </div>
//     );
// };

// // Prop Validation
// CommitteeCard.propTypes = {
//     role: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     about: PropTypes.string.isRequired,
// };

// const CommitteeList = () => {
//     return (
//         <div className="min-h-screen w-full flex flex-col items-center justify-start py-8 px-4">
//             {/* Header Section */}
//             <div className="text-4xl sm:text-5xl md:text-6xl text-center font-bold font-sans text-white mb-8">
//                 Manchester MedTech
//             </div>

//             {/* Text Section */}
//             <div className="text-lg sm:text-xl md:text-2xl text-center font-bold font-sans text-white mb-8 max-w-2xl mx-auto">
//                 <p className="mb-8">No.1 MedTech Society in the UK</p>
//                 <p>Want to hear about the latest MedTech news?</p>
//                 <p>Want to contribute to MedTech and charity events?</p>
//                 <p>You have come to the right place my friend.</p>
//             </div>

//             {/* Committee Cards Section */}
//             <div className="w-full flex flex-col items-center justify-start space-y-4">
//                 {committeeData.map((member) => (
//                     <CommitteeCard
//                         key={member.id}
//                         role={member.role}
//                         name={member.name}
//                         about={member.about}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CommitteeList;
import committeeData from "./committee.json";
import PropTypes from "prop-types";

const CommitteeCard = ({ role, name, about }) => {
    return (
        <div className="bg-[#404444] p-4 text-center border-2 border-white rounded-lg w-full max-w-2xl mx-auto my-4 text-white flex flex-col justify-center items-center text-lg font-bold font-sans">
            <p>{role}</p>
            <p>{name}</p>
            <p>{about}</p>
        </div>
    );
};

// Prop Validation
CommitteeCard.propTypes = {
    role: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
};

const CommitteeList = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-start py-8 px-4">

            {/* Header Section */}
            <div className="text-4xl sm:text-5xl md:text-6xl text-center font-bold font-sans text-white mb-8 mt-8">
                Manchester MedTech
            </div>

            {/* Text Section */}
            <div className="text-lg sm:text-xl md:text-2xl text-center font-bold font-sans text-white mb-8 max-w-2xl mx-auto">
                <p className="mb-8">No.1 MedTech Society in the UK</p>
                <p>Want to hear about the latest MedTech news?</p>
                <p>Want to contribute to MedTech and charity events?</p>
                <p>You have come to the right place my friend.</p>
            </div>

            {/* Committee Cards Section */}
            <div className="w-full flex flex-col items-center justify-start space-y-4">
                {committeeData.map((member) => (
                    <CommitteeCard
                        key={member.id}
                        role={member.role}
                        name={member.name}
                        about={member.about}
                    />
                ))}
            </div>
        </div>
    );
};

export default CommitteeList;