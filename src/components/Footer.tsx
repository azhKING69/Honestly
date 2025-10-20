'use client';

const Footer = () => {
    return (
        <footer className="text-center p-4 md:p-6 bg-gray-900 text-white">
            <p className="text-sm md:text-base lg:text-lg">
                Honestly &copy; 2025. All rights reserved.
            </p>
            <p className="text-sm md:text-base lg:text-lg">
                Made by{' '}
                <a
                    href="https://linkedin.com/in/azizulhoque99/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    Azizul Hoque
                </a>
            </p>
        </footer>
    );
}

export default Footer;