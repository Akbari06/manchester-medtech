function NavBar() {
    const styles = {
        navbar: {
            backgroundColor: "red",  // ✅ Ensures it's highly visible
            border: "3px solid blue",  // ✅ Helps you see the boundaries
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
            backgroundColor: "white",
            color: "black",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
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