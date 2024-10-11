import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function NailShop() {
  const customers = {
    janedoe: { name: "Jane Doe", age: 28, service: "Acrylic Nails", price: "$50", contact: "123-456-7890", description: "Loves vibrant colors and trendy designs." },
    marysmith: { name: "Mary Smith", age: 21, service: "Gel Nails", price: "$40", contact: "987-654-3210", description: "Prefers subtle and elegant looks." },
    lisajones: { name: "Lisa Jones", age: 27, service: "French Manicure", price: "$30", contact: "456-789-1234", description: "Classic and minimalist style." },
    susanjackson: { name: "Susan Jackson", age: 25, service: "Polygel Nails", price: "$45", contact: "789-123-4567", description: "Bold and creative designs." },
    sarawilson: { name: "Sara Wilson", age: 27, service: "Dip Powder Nails", price: "$35", contact: "321-654-9870", description: "Simple yet sophisticated." },
  };

  const { username } = useParams(); // Get the username from the URL
  const [profile, setProfile] = useState(null); // To store customer data
  const [loading, setLoading] = useState(false); // To manage loading state
  const navigate = useNavigate();

  useEffect(() => {
    if (username) {
      setLoading(true);

      setTimeout(() => {
        setProfile(customers[username.toLowerCase()] || null);
        setLoading(false);
      }, 1000);
    } else {
      setProfile(null); // Reset profile when no user is selected
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  const handleSelectChange = (event) => {
    const selectedUser = event.target.value;
    navigate(`/nailShop/${selectedUser}`); // Navigate to the selected customer's profile URL
  };

  return (
    <div className="Pro-display">
      <h1>Customer Profiles</h1>

      <label id="label-select" htmlFor="user-select">Select a customer: </label>
      <select
        id="user-select"
        value={username || ""}
        onChange={handleSelectChange}
        style={{ backgroundColor: "transparent", color: "#fff", padding: "10px", borderRadius: "5px" }}>
        <option style={{ color: "black", fontWeight: "bold" }} value="">Select a Customer</option>
        {Object.keys(customers).map((username) => (
          <option style={{ color: "black" }} key={username} value={username}>
            {customers[username].name}
          </option>
        ))}
      </select>

      {/* Display customer information based on the selected user */}
      {loading ? (
        <p className="loader">Loading profile...</p>
      ) : profile ? (
        <div className="info-code">
          <h2>{profile.name}</h2>
          <p><strong>Age:</strong> {profile.age}</p>
          <p><strong>Service Type:</strong> {profile.service}</p>
          <p><strong>Price:</strong> {profile.price}</p>
          <p><strong>Contact:</strong> {profile.contact}</p>
          <p><strong>Description:</strong> {profile.description}</p>
        </div>
      ) : (
        username && <p>Customer not found.</p>
      )}
    </div>
  );
}

export default NailShop;
