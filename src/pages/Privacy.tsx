import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-4 border-b pb-2">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">
          <strong>Last updated:</strong> April 14, 2025
        </p>

        <p className="mb-4">
          At <strong>Caramel Web Studios</strong>, we value your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address, and any other details you provide through our contact form or by interacting with us.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Respond to inquiries and provide customer support</li>
          <li>Improve our website and services</li>
          <li>Send occasional updates if you opt in</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
        <p className="mb-4">
          We implement industry-standard security measures to protect your data from unauthorized access, use, or disclosure.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Links</h2>
        <p className="mb-4">
          Our website may contain links to third-party websites. We are not responsible for their content or privacy practices.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Cookies</h2>
        <p className="mb-4">
          We may use cookies to enhance user experience and gather usage data. You can disable cookies in your browser settings.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
        <p className="mb-4">
          You may request to access, update, or delete your personal data by contacting us at{" "}
          <strong>info@caramelwebstudios.com</strong>.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.
        </p>

        <p className="mb-8">
          If you have any questions, feel free to contact us at{" "}
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
}

export default PrivacyPolicy;
