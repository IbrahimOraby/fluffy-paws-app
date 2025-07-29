import React from "react";

export default function SitterType() {
  return (
    <>
      <input
        type="radio"
        name="dashboard_tabs"
        className="tab text-lg"
        aria-label="Dashboard"
        defaultChecked
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        <h2 className="text-2xl font-semibold mb-4">Hello, Sitter!</h2>
        <p className="mb-4">
          Overview of your upcoming bookings, earnings, and profile
          completeness.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-purple-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-2">Upcoming Bookings</h3>
            <p>
              You have <strong>3</strong> new booking requests.
            </p>
            <button className="btn btn-sm btn-primary mt-3">
              Review Requests
            </button>
          </div>
          <div className="card bg-yellow-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-2">Earnings Summary</h3>
            <p>
              Your last payout was <strong>$250</strong>.
            </p>
            <button className="btn btn-sm btn-warning mt-3">
              View Payouts
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
        <h2 className="text-2xl font-semibold mb-4">Your Sitter Profile</h2>
        <p className="mb-4">
          This is how pet parents see you! Make sure your profile is complete
          and appealing.
        </p>
        {/* Sitter profile details and edit options */}
        <div className="flex items-center mb-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Sitter Avatar"
            className="rounded-full mr-6"
          />
          <div>
            <h3 className="text-xl font-medium">Jane Doe</h3>
            <p className="text-gray-600">Location: City, Country</p>
            <p className="text-gray-600">Rating: ★★★★★ (45 reviews)</p>
          </div>
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">About Me</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Describe your experience and passion for pets..."
          ></textarea>
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Services Offered</span>
          </label>
          <input
            type="text"
            placeholder="e.g., Dog Boarding, Cat Sitting, Dog Walking"
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
        <h2 className="text-2xl font-semibold mb-4">Manage Bookings</h2>
        <p>Review and manage all your booking requests and confirmed stays.</p>
        {/* Booking requests/confirmed bookings */}
        <ul className="mt-4 space-y-3">
          <li className="p-3 bg-white rounded-lg shadow-sm flex justify-between items-center">
            <div>
              <p className="font-medium">Request from Sarah M. (Buddy)</p>
              <p className="text-sm text-gray-600">July 20 - July 25, 2025</p>
            </div>
            <div>
              <button className="btn btn-sm btn-success mr-2">Accept</button>
              <button className="btn btn-sm btn-error">Decline</button>
            </div>
          </li>
          <li className="p-3 bg-white rounded-lg shadow-sm flex justify-between items-center">
            <div>
              <p className="font-medium">Confirmed: Pet from David L. (Max)</p>
              <p className="text-sm text-gray-600">August 1 - August 7, 2025</p>
            </div>
            <span className="badge badge-info">Confirmed</span>
          </li>
        </ul>
      </div>

      <input
        type="radio"
        name="dashboard_tabs"
        className="tab text-lg"
        aria-label="Availability"
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        <h2 className="text-2xl font-semibold mb-4">Set Your Availability</h2>
        <p>Update your calendar to show when you're available for bookings.</p>
        {/* Calendar/availability settings */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-4">
          <p>Interactive calendar component would go here.</p>
          <p className="text-sm text-gray-600 mt-2">
            Click on dates to mark them as available or unavailable.
          </p>
          <button className="btn btn-secondary mt-4">Save Availability</button>
        </div>
      </div>

      <input
        type="radio"
        name="dashboard_tabs"
        className="tab text-lg"
        aria-label="Messages"
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        <h2 className="text-2xl font-semibold mb-4">Your Messages</h2>
        <p>Communicate with pet parents regarding bookings and inquiries.</p>
        {/* Message list for sitters */}
        <ul className="mt-4 space-y-3">
          <li className="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
            <span>
              <strong>Pet Parent Sarah:</strong> "Is July 20-25 available?"
            </span>
            <span className="text-sm text-gray-500">30 minutes ago</span>
          </li>
          <li className="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
            <span>
              <strong>Pet Parent David:</strong> "Thanks for taking care of
              Max!"
            </span>
            <span className="text-sm text-gray-500">Yesterday</span>
          </li>
        </ul>
      </div>
    </>
  );
}
