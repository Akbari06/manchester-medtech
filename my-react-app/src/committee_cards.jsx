import committeeData from "./committee.json";
import PropTypes from "prop-types";

const CommitteeCard = ({ role, name, about }) => {
    const styles = {
        backgroundColor: "#404444",  
        padding: "15px",
        textAlign: "center",
        border: "5px solid darkgrey",  
        borderRadius: "15px",
        width: "70vw", // ✅ Takes 70% of the viewport width
        maxWidth: "70vw", // ✅ Ensures it doesn't shrink below this
        color: "white",
        margin: "10px auto", // ✅ Centers the card
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",
        font: "Arial",
        fontWeight: "bold",
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
        justifyContent: "flex-start", // Ensures items start from the top
        minHeight: "100vh",
        width: "100vw",
        margin: 0, 
        paddingTop: "50px", // Adds space at the top so the first card isn't cut off
        overflowY: "auto", // Enables scrolling if needed
        paddingBottom: "100px"
    };

    const stylesSign = {
        fontSize: "60px",
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "Arial", // Corrected from "font"
        paddingTop: "3500px",
        color: "white",
        marginBottom: "20px",
        paddingBottom: "100px",
    }

    return (
        <div>
            <div style={stylesSign}>
                Manchester MedTech
            </div>
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

        </div>

    );
};


export default CommitteeList;