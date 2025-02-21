import committeeData from "./committee.json";
import PropTypes from "prop-types";

const CommitteeCard = ({ role, name, about }) => {
    const styles = {
        backgroundColor: "#331333",  // Fixed Hex Color
        padding: "20px",
        textAlign: "center",
        border: "5px solid darkgrey",  // Fixed Border
        borderRadius: "15px",
        width: "70%",
        color: "white"  // Ensuring text is visible on dark background
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
    return (
        <div>
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