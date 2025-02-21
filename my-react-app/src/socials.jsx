function Socials() {
    const styles = {
        backgroundColor: "#404444",
        color: "white",
        textAlign: "left",
        padding: "40px", // Increased padding
        fontSize: "20px", // Increased font size
        fontWeight: "bold"
    };

    const linkStyles = {
        marginBottom: "20px"
    }

    return (
        <div style={styles}>
            <p style={linkStyles}>
                Instagram: <a href="https://www.instagram.com/manchestermedtech/">manchestermedtech</a>
            </p>
            <p style={linkStyles}>
                Facebook: <a href="https://www.facebook.com/manchestermedtech">manchestermedtech</a>
            </p>
            <p style={linkStyles}>
                Membership 2024/25: <a href="https://manchesterstudentsunion.com/shop/product/16844-">https://manchesterstudentsunion.com/shop/product/16844-</a>
            </p>
        </div>
    );
}

export default Socials;