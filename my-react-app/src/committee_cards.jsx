import committeeData from "./committee.json";
import PropTypes from "prop-types";

const CommitteeCard = ({ role, name, about }) => {
    const styles = {
        backgroundColor: "#331333",  
        padding: "20px",
        textAlign: "center",
        border: "5px solid darkgrey",  
        borderRadius: "15px",
        width: "70vw", // Takes 70% of the screen width
        maxWidth: "600px", // Prevents it from being too wide
        color: "white",
        margin: "10px auto", // Centers the card horizontally
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Centers content inside the card
        alignItems: "center",
    };

    return (
        <div style={styles}>
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
    about: PropTypes.string.isRequired
};

const CommitteeList = () => {
    const containerStyles = {
        display: "flex",
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        minHeight: "100vh", 
        width: "100%", 
    };

    return (
        <div style={containerStyles}>
            {committeeData.map(member => (
                <CommitteeCard
                    key={member.id}
                    role={member.role}
                    name={member.name}
                    about={member.about}
                />
            ))}
        </div>
    );
};



export default CommitteeList;