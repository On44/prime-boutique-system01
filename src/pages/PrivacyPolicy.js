import React from "react";
import "./PrivacyPolicy.css"; // Import the CSS for styling

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>
        Welcome to <strong>Prime Boutique</strong>. We are committed to
        respecting your privacy and protecting your personal information. This
        privacy policy explains how we collect, use, and protect your data when
        you use our website or services.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect the following types of information:</p>
      <ul>
        <li>
          <strong>Personal Information:</strong> This includes your name, email
          address, phone number, billing and shipping addresses, and payment
          details when you register or make a purchase.
        </li>
        <li>
          <strong>Usage Data:</strong> We collect information about your device,
          browsing activity, IP address, and interactions with our website.
        </li>
        <li>
          <strong>Cookies:</strong> We use cookies and similar tracking
          technologies to enhance your browsing experience.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>
          <strong>Process Transactions:</strong> Your personal information is
          used to fulfill your orders, process payments, and provide customer
          support.
        </li>
        <li>
          <strong>Improve Our Services:</strong> We analyze your usage data to
          enhance the quality of our products and services.
        </li>
        <li>
          <strong>Marketing Communications:</strong> With your consent, we may
          send you promotional offers and updates.
        </li>
      </ul>

      <h2>3. Sharing Your Information</h2>
      <p>
        We do not sell or rent your personal information. We may share your data
        with third-party service providers for the following reasons:
      </p>
      <ul>
        <li>
          <strong>Payment Processing:</strong> To process your payments
          securely.
        </li>
        <li>
          <strong>Shipping and Delivery:</strong> To fulfill your orders and
          arrange delivery.
        </li>
        <li>
          <strong>Compliance with Law:</strong> If required by law or in
          response to legal processes, we may disclose your information.
        </li>
      </ul>

      <h2>4. Cookies and Tracking Technologies</h2>
      <p>
        We use cookies to understand how you interact with our website and to
        improve your experience. You can control the use of cookies through your
        browser settings.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We use appropriate security measures to protect your personal data from
        unauthorized access, disclosure, or misuse. However, no method of
        transmission over the internet is completely secure.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        You have the right to access, update, or delete your personal
        information. You may also opt out of receiving promotional
        communications from us at any time.
      </p>

      <h2>7. Changes to This Privacy Policy</h2>
      <p>
        We may update this privacy policy from time to time. Any changes will be
        posted on this page with an updated revision date. We encourage you to
        review our privacy policy periodically.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about our privacy practices, please contact
        us:
      </p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:privacy@primeboutique.com">
            privacy@primeboutique.com
          </a>
        </li>
        <li>Phone: +1 123 456 7890</li>
        <li>Address: ABC Place, ABC 211302, Westland</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
