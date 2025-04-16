import React from 'react';
import { Link } from 'react-router-dom'; // Link tag does not do a full page refresh like <a> tag
import { MouseEvent } from 'react'; // Import MouseEvent

const NotFoundPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f0f0', // Light gray background
      color: '#333',             // Dark gray text
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', // Modern font stack
    }}>
      <div style={{
        maxWidth: '80%',
        textAlign: 'center',
        padding: '20px',
      }}>
        <h1 style={{
          fontSize: '8rem',        // Large font size
          fontWeight: 'bold',
          backgroundImage: 'linear-gradient(to right, #dc143c, #ff8c00)', // Gradient: Crimson to OrangeRed
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block', // Important for gradient to apply correctly
          lineHeight: 1,
        }}>
          404
        </h1>
        <p style={{
          fontSize: '1.5rem',
          color: '#555',       // Medium gray text
          marginTop: '20px',
        }}>
          Sorry, we couldn't find that page.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '10px 20px',
            backgroundColor: '#007bff', // Blue button
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            marginTop: '30px',
            fontSize: '1rem',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e: MouseEvent<HTMLAnchorElement>) => { // Add type annotation
            e.currentTarget.style.backgroundColor = '#0056b3'; // Darker blue on hover
          }}
          onMouseOut={(e: MouseEvent<HTMLAnchorElement>) => {  // Add type annotation
            e.currentTarget.style.backgroundColor = '#007bff'; // Original blue
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: '8px' }}
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
