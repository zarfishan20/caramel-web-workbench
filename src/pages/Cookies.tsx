import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-4 border-b pb-2">
          Cookie Policy
        </h1>
        <p className="text-gray-600 mb-6">
          <strong>Last updated:</strong> April 18, 2025
        </p>

        <p className="mb-4">
          This Cookie Policy explains how <strong>Caramel Web Studios</strong> 
          uses cookies and similar technologies on our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. What Are Cookies?</h2>
        <p className="mb-4">
          Cookies are small text files that are placed on your device when you visit a website. 
          They help us provide you with a better browsing experience and allow us to analyze how 
          our site is used.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Cookies</h2>
        <p className="mb-4">We use cookies for the following purposes:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Essential cookies:</strong> Required for the site to function properly.</li>
          <li><strong>Analytics cookies:</strong> To understand how visitors interact with our website and improve performance.</li>
          <li><strong>Functional cookies:</strong> To remember your preferences and enhance your experience.</li>
          <li><strong>Marketing cookies:</strong> To deliver relevant content and track the effectiveness of campaigns.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Managing Cookies</h2>
        <p className="mb-4">
          You can control or delete cookies through your browser settings. However, 
          disabling certain cookies may affect the functionality of our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Cookies</h2>
        <p className="mb-4">
          Some cookies may be set by third-party services such as Google Analytics 
          to help us analyze traffic and improve our services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Updates to This Policy</h2>
        <p className="mb-4">
          We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated date.
        </p>

        <p className="mb-8">
          If you have questions about our use of cookies, please contact us at{" "}
          <strong>info@caramelwebstudios.com</strong>.
        </p>

        <div className="text-center">
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-700 underline font-medium"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
