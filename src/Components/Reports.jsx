import React from 'react'
import NavBar from './NavBar'

const Reports = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            Analytics & Reports Overview
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            Welcome to the Reports section. Here you can find detailed analytics and insights
            about your applications' performance, revenue generation, and user engagement.
            These reports are designed to help you make data-driven decisions, optimize
            monetization strategies, and gain a deeper understanding of user behavior.
          </p>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed text-justify">
            Whether you're monitoring impressions, click-through rates, retention metrics,
            or revenue trends — this dashboard brings all the critical information in one
            place. Stay ahead by leveraging accurate data and drive better results for your
            digital products.
          </p>
        </div>
      </div>
    </>
  )
}

export default Reports
