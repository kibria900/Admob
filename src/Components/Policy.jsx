import React from 'react'
import NavBar from './NavBar'

const Policy = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6 text-center">
            Privacy Policy & Terms of Use
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
            We value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data when using our applications and services.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
            By using our platform, you agree to comply with our terms and conditions. We ensure that your information is stored securely and never shared with third parties without your consent, except as required by law.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
            We may collect data such as your usage patterns, device information, and preferences to improve your experience. This helps us enhance our features, deliver personalized content, and ensure system reliability.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
            If you have any questions regarding our policy, feel free to contact our support team. We are here to assist you and ensure complete transparency about how your data is handled.
          </p>

          <p className="text-sm text-gray-500 text-center mt-8">
            Last updated: June 16, 2025
          </p>
        </div>
      </div>
    </>
  )
}

export default Policy
