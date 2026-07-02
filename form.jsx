function Contact() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "35px",
          borderRadius: "20px",
          width: "350px",
          textAlign: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile"
          width="120"
        />

        <h1 style={{ color: "#2575fc" }}>📞 Contact Me</h1>

        <p><strong>👤 Name:</strong> Parth Gawande</p>

        <p>
          <strong>📧 Email:</strong><br />
          parth@example.com
        </p>

        <p>
          <strong>📱 Phone:</strong><br />
          +91 9876543210
        </p>

        <p>
          <strong>📍 Location:</strong><br />
          Nagpur, Maharashtra
        </p>

        <a
          href="mailto:parth@example.com"
          style={{
            display: "inline-block",
            marginTop: "15px",
            background: "#2575fc",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          ✉️ Send Email
        </a>
      </div>
    </div>
  );
}

export default Contact;