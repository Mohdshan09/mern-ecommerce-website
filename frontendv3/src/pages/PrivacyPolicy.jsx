import React from "react";
import Title from "../components/Title";

const sections = [
  {
    heading: "1. Information We Collect",
    points: [
      "Account details: your name, email address and password when you create an account. Passwords are stored in encrypted (hashed) form and are never visible to us.",
      "Order and delivery details: your name, phone number, email and shipping address (street, city, state, zip code and country) when you place an order.",
      "Order history: the products, sizes, quantities, amounts and payment method of the orders you place with us.",
      "Cart data: items you add to your cart are saved to your account so they are available when you sign in again.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    points: [
      "To create and manage your account and keep you signed in securely.",
      "To process, pack and deliver your orders and show you their status.",
      "To contact you about your orders, returns, exchanges or support requests.",
      "To send you news and offers, only if you subscribe to our newsletter. You can unsubscribe at any time.",
      "To improve our store, products and customer experience.",
    ],
  },
  {
    heading: "3. Payments",
    points: [
      "You can pay with Cash on Delivery or online via Stripe.",
      "Online card payments are processed directly by Stripe on its secure checkout page. We do not see or store your card number, CVV or other card details.",
      "We only receive confirmation of whether a payment succeeded so we can update your order.",
    ],
  },
  {
    heading: "4. Sharing Your Information",
    points: [
      "We do not sell or rent your personal information to anyone.",
      "We share only what is necessary with trusted service providers who help us run the store, such as payment processing (Stripe), delivery partners and secure hosting and storage providers.",
      "We may disclose information if required by law or to protect the rights and safety of our customers and business.",
    ],
  },
  {
    heading: "5. Cookies and Local Storage",
    points: [
      "We use your browser's local storage to keep you signed in (an authentication token).",
      "We do not use this data to track you across other websites. Signing out removes your login token from your browser.",
    ],
  },
  {
    heading: "6. Data Security",
    points: [
      "We use industry-standard measures such as encrypted passwords, secure token-based authentication and HTTPS connections to protect your data.",
      "No method of transmission over the internet is 100% secure, but we work continuously to keep your information safe.",
    ],
  },
  {
    heading: "7. Your Rights",
    points: [
      "You can view and update your account and order information at any time.",
      "You can ask us to correct or delete your personal data, subject to records we are legally required to keep for completed orders.",
      "You can unsubscribe from marketing emails at any time.",
    ],
  },
  {
    heading: "8. Returns and Exchanges",
    points: [
      "Products can be returned or exchanged within 7 days of delivery, provided they are unused and in their original condition with tags attached.",
      "The details you provided with your order are used to arrange pickups, replacements and refunds.",
    ],
  },
  {
    heading: "9. Children's Privacy",
    points: [
      "Our kids' collection is intended to be purchased by parents or guardians. We do not knowingly collect personal information from children under 13.",
    ],
  },
  {
    heading: "10. Changes to This Policy",
    points: [
      "We may update this policy from time to time. Any changes will be posted on this page with an updated date.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="border-t pt-10">
      <div className="text-2xl text-center">
        <Title text1={"PRIVACY"} text2={"POLICY"} />
      </div>

      <div className="max-w-3xl mx-auto my-10 flex flex-col gap-8 text-gray-600 text-sm sm:text-base">
        <p>
          Last updated: September 2026
        </p>
        <p>
          At Forever, your privacy matters to us. This policy explains what
          information we collect when you shop with us, how we use it and the
          choices you have. By using our website, you agree to the practices
          described below.
        </p>

        {sections.map((section) => (
          <div key={section.heading} className="flex flex-col gap-3">
            <b className="text-gray-800">{section.heading}</b>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-3">
          <b className="text-gray-800">11. Contact Us</b>
          <p>
            If you have any questions about this privacy policy or your
            personal data, please contact us:
          </p>
          <p>
            13, Teacher Colony, Rajim Road, Abhanpur, C.G.
            <br />
            Tel: +91-9109462934
            <br />
            Email: mohdshan1024@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
