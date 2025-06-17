import React from "react";

const apps = [
  {
    id: 1,
    name: "Ad Tracker",
    description:
      "Track your ad revenue, impressions, and click-through rates in real-time.",
    icon: "📊",
  },
  {
    id: 2,
    name: "App Analytics",
    description:
      "Get deep insights into user behavior, retention, and performance metrics.",
    icon: "📈",
  },
  {
    id: 3,
    name: "Mediation Manager",
    description:
      "Easily manage ad networks and maximize your fill rate with mediation tools.",
    icon: "🧩",
  },
  {
    id: 4,
    name: "Mediation Manager",
    description:
      "Easily manage ad networks and maximize your fill rate with mediation tools.",
    icon: "🧩",
  },
];

const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500' , 'bg-green-500']

const Apps = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Your Apps Overview
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Here you can monitor and manage all your integrated apps through AdMob. Use the tools below to optimize performance and maximize revenue.
        </p>

        {/* Apps List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {apps.map((app,index) => (
            <div
              key={app.id}
              className={`${colors[index]}  rounded-lg shadow-md p-6 hover:shadow-lg transition `}
             
            >
              <div className="text-5xl mb-4">{app.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {app.name}
              </h2>
              <p className="text-gray-600">{app.description}</p>
              <button className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700 transition">
                Manage
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
