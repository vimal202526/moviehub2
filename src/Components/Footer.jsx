import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-8 px-4">
      <div className="mb-4 flex justify-center items-center gap-6">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
            alt="Instagram"
            className="w-6 h-6"
          />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_logo_2012.svg"
            alt="Twitter"
            className="w-6 h-6"
          />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/LinkedIn_Logo_2023.png"
            alt="LinkedIn"
            className="w-6 h-6"
          />
        </a>
      </div>
      <p className="text-sm">© 2025 Buddle Code. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
