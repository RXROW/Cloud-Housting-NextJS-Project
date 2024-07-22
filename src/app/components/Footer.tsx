import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <p>Follow us on:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://twitter.com" className="hover:text-blue-400">Twitter</a>
          <a href="https://facebook.com" className="hover:text-blue-600">Facebook</a>
          <a href="https://instagram.com" className="hover:text-pink-500">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
