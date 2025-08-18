import { useEffect } from "react";

const TermsConditions = () => {
  useEffect(() => {
    console.log("Terms & Conditions page loaded");
  }, []);

  return (
    <div id="terms" className="py-5">
      <div className="min-h-screen flex flex-col items-center justify-center py-5">
        <div className="mx-auto" style={{ maxWidth: "800px" }}>
          <h1 className="mb-4 border-bottom pb-2">Terms & Conditions</h1>
          <p className="text-muted">
            <strong>Last updated:</strong> April 14, 2025
          </p>

          <p>
            Welcome to <strong>Caramel Web Studios</strong>. By accessing or
            using our website, you agree to the following terms and conditions.
          </p>

          <h4 className="mt-4">1. Use of the Site</h4>
          <p>
            You agree to use this website for lawful purposes only. Any misuse
            of the website or its content is strictly prohibited.
          </p>

          <h4 className="mt-4">2. Intellectual Property</h4>
          <p>
            All content on this website, including text, images, graphics, and
            code, is the property of Caramel Web Studios and may not be copied,
            distributed, or reproduced without our permission.
          </p>

          <h4 className="mt-4">3. Website Content</h4>
          <p>
            While we strive to keep information accurate and up to date, we
            make no warranties about the completeness or reliability of the
            content.
          </p>

          <h4 className="mt-4">4. Limitation of Liability</h4>
          <p>
            Caramel Web Studios shall not be held liable for any damages
            resulting from the use of our website or services.
          </p>

          <h4 className="mt-4">5. Third-Party Links</h4>
          <p>
            We may include links to third-party websites. We are not responsible
            for their content or services.
          </p>

          <h4 className="mt-4">6. Termination</h4>
          <p>
            We reserve the right to restrict access to our website at any time
            without notice.
          </p>

          <h4 className="mt-4">7. Changes to Terms</h4>
          <p>
            We may update these Terms & Conditions at any time. Continued use
            of the website constitutes acceptance of the updated terms.
          </p>

          <p>
            If you have any questions, contact us at{" "}
            <strong>info@caramelwebstudios.com</strong>.
          </p>

          {/* Return to Home Link */}
          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-blue-500 hover:text-blue-700 underline text-lg"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
