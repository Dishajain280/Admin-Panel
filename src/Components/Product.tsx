import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product-container">
      <div className="product-card">
        <div className="product-info">
          <h1 className="product-title">Admin Panel</h1>
          <p className="product-description">
            A powerful dashboard to manage users, roles, and system settings.
            Designed with a clean UI and responsive layout.
          </p>
          <div className="product-details">
            <p id="Features">
              <strong>Features:</strong>
            </p>
            <div className="product-detail">
              <div className="product-detail-1">
                <h4>User Management</h4>
                <span>$29.99</span>
                <div className="">
                  <img
                    className="product-img"
                    src="https://static.wixstatic.com/media/7d0a46_5e0f7a9805a641eba3d55628e4760b64~mv2.png/v1/fill/w_620,h_349,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7d0a46_5e0f7a9805a641eba3d55628e4760b64~mv2.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="product-detail-1">
                <h4>Role-based Access Control</h4>
                <span>$29.99</span>
                <div className="">
                  <img
                    className="product-img"
                    src="https://media.istockphoto.com/id/1431468218/vector/fingerprint-identification-scan-fingerprint-security-or-identification-system-concept.jpg?s=612x612&w=0&k=20&c=UbYGwbEMzqQz5fQcL0jE3qH86G14QDOjZKVg5P6cVHc="
                    alt=""
                  />
                </div>
              </div>
              <div className="product-detail-1">
                <h4>Analytics Services</h4>
                <span>$29.99</span>
                <div className="">
                  <img
                    className="product-img"
                    src="https://th.bing.com/th/id/OIP.qz6Ar7R-QdzGzw1gZtu2PwHaEK?w=294&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                    alt=""
                  />
                </div>
              </div>
              <div className="product-detail-1">
                <h4>Responsive Design</h4>
                <span>$29.99</span>
                <div className="">
                  <img
                    className="product-img"
                    src="https://th.bing.com/th/id/OIP.Ovd8M1F9MIq4YTwTMTy6awHaE8?w=242&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="product-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
