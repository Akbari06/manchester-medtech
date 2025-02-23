function NavBar() {
    const styles = {
        navbar: {
            padding: "15px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            width: "100%",
            height: "60px",
            position: "relative",  // ✅ Makes sure it's part of the normal flow
            zIndex: 1000,  // ✅ Ensures it's above other elements
        },
        button: {
            backgroundColor: "#404444",
            color: "white",
            padding: "10px 300px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "25px",
            font: "Arial",
        },
    };

    return (
        <div style={styles.navbar}>
            <button style={styles.button}>Events</button>
            <button style={styles.button}>Newsletters</button>
        </div>
    );
}

export default NavBar;