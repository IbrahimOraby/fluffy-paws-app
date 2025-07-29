import React from "react";

export default function ShelterType() {
  return (
    <>
      <>
        <input
          type="radio"
          name="dashboard_tabs"
          className="tab text-lg"
          aria-label="Dashboard"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome, Shelter Admin!
          </h2>
          <p className="mb-4">
            Quick overview of your facility's occupancy, new inquiries, and
            animal roster.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-red-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">Current Occupancy</h3>
              <p>
                <strong>15/20</strong> kennels occupied.
              </p>
              <button className="btn btn-sm btn-primary mt-3">
                View Details
              </button>
            </div>
            <div className="card bg-orange-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-2">New Inquiries</h3>
              <p>
                You have <strong>4</strong> new boarding inquiries.
              </p>
              <button className="btn btn-sm btn-warning mt-3">
                Review Inquiries
              </button>
            </div>
          </div>
        </div>

        <input
          type="radio"
          name="dashboard_tabs"
          className="tab text-lg"
          aria-label="My Profile"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          <h2 className="text-2xl font-semibold mb-4">Your Shelter Profile</h2>
          <p className="mb-4">
            Manage your shelter's public profile, services, and facility
            details.
          </p>
          {/* Shelter profile details and edit options */}
          <div className="flex items-center mb-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Shelter Logo"
              className="rounded-lg mr-6"
            />
            <div>
              <h3 className="text-xl font-medium">Safe Paws Animal Shelter</h3>
              <p className="text-gray-600">Location: Downtown, City, Country</p>
              <p className="text-gray-600">Capacity: 20 animals</p>
            </div>
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">About Us</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Describe your shelter, mission, and facilities..."
            ></textarea>
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Services Offered</span>
            </label>
            <input
              type="text"
              placeholder="e.g., Dog Boarding, Cat Boarding, Vet Care"
              className="input input-bordered"
            />
          </div>
          <button className="btn btn-primary">Update Profile</button>
        </div>

        <input
          type="radio"
          name="dashboard_tabs"
          className="tab text-lg"
          aria-label="Bookings"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          <h2 className="text-2xl font-semibold mb-4">
            Manage Boarding Bookings
          </h2>
          <p>Oversee all incoming and outgoing boarding reservations.</p>
          {/* Shelter booking management */}
          <ul className="mt-4 space-y-3">
            <li className="p-3 bg-white rounded-lg shadow-sm flex justify-between items-center">
              <div>
                <p className="font-medium">New Request: Daisy (Dog)</p>
                <p className="text-sm text-gray-600">
                  August 1 - August 10, 2025
                </p>
              </div>
              <div>
                <button className="btn btn-sm btn-success mr-2">Approve</button>
                <button className="btn btn-sm btn-error">Reject</button>
              </div>
            </li>
            <li className="p-3 bg-white rounded-lg shadow-sm flex justify-between items-center">
              <div>
                <p className="font-medium">Confirmed: Max (Cat)</p>
                <p className="text-sm text-gray-600">
                  July 28 - August 5, 2025
                </p>
              </div>
              <span className="badge badge-info">In Progress</span>
            </li>
          </ul>
        </div>

        <input
          type="radio"
          name="dashboard_tabs"
          className="tab text-lg"
          aria-label="Animals"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          <h2 className="text-2xl font-semibold mb-4">Animal Roster</h2>
          <p>
            Keep a detailed record of all animals currently housed at your
            shelter, whether boarding or permanent residents.
          </p>
          {/* Animal roster and management */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            <div className="card bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2">Leo</h3>
              <p>Breed: Labrador, 2 years</p>
              <p className="text-sm text-gray-600">
                Status: Boarding (Owner: Alice B.)
              </p>
              <button className="btn btn-sm btn-info mt-3 mr-2">
                View Profile
              </button>
            </div>
            <div className="card bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2">Mittens</h3>
              <p>Breed: Domestic Shorthair, 4 years</p>
              <p className="text-sm text-gray-600">
                Status: Resident (Available for Adoption)
              </p>
              <button className="btn btn-sm btn-info mt-3 mr-2">
                View Profile
              </button>
            </div>
          </div>
          <button className="btn btn-primary mt-6">Add New Animal</button>
        </div>

        <input
          type="radio"
          name="dashboard_tabs"
          className="tab text-lg"
          aria-label="Messages"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          <h2 className="text-2xl font-semibold mb-4">Your Messages</h2>
          <p>
            Communicate with pet owners regarding boarding, inquiries, and
            updates.
          </p>
          {/* Message list for shelters */}
          <ul className="mt-4 space-y-3">
            <li className="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
              <span>
                <strong>Pet Owner Tom:</strong> "Query about cat boarding
                rates."
              </span>
              <span className="text-sm text-gray-500">1 hour ago</span>
            </li>
            <li className="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
              <span>
                <strong>Pet Owner Lisa:</strong> "Is there space for my dog next
                month?"
              </span>
              <span className="text-sm text-gray-500">Today</span>
            </li>
          </ul>
        </div>
      </>
    </>
  );
}
