/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const MembershipForm = () => {
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactPhone, setEmergencyContactPhone] = useState("");
  const [membershipType, setMembershipType] = useState("");
  const [membershipStartDate, setMembershipStartDate] = useState("");
  const [membershipDuration, setMembershipDuration] = useState("");
  const [healthInfo, setHealthInfo] = useState("");
  const [fitnessGoals, setFitnessGoals] = useState("");
  const [workoutTimes, setWorkoutTimes] = useState("");
  //   const [paymentMethod, setPaymentMethod] = useState("");
  const [additionalServices, setAdditionalServices] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data and handle submission here
  };

  return (
    <div className="container mx-auto  py-16 lg:px-64 px-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Gym Membership Form
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 lg:py-16 py-8 border-2 border-green-400 px-4"
      >
        {/* Full Name */}
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="text-black border rounded p-2 w-full"
            required
          />
        </div>
        {/* Gender */}
        <div>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="text-black border rounded p-2 w-full"
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/* Date of Birth */}
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="text-black border rounded p-2 w-full"
            required
          />
        </div>
        {/* Address */}
        <div>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="text-black border rounded p-2 w-full"
            required
          />
        </div>
        {/* Email */}
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-black border rounded p-2 w-full"
            required
          />
        </div>
        {/* Phone Number */}
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="text-black border rounded p-2 w-full"
            required
          />
        </div>
        {/* Emergency Contact */}
        <div>
          <label htmlFor="emergencyContactName">Emergency Contact Name</label>
          <input
            type="text"
            id="emergencyContactName"
            value={emergencyContactName}
            onChange={(e) => setEmergencyContactName(e.target.value)}
            className="text-black border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="emergencyContactPhone">
            Emergency Contact Phone Number
          </label>
          <input
            type="tel"
            id="emergencyContactPhone"
            value={emergencyContactPhone}
            onChange={(e) => setEmergencyContactPhone(e.target.value)}
            className="text-black border rounded p-2 w-full"
            required
          />
        </div>
        {/* Membership Details */}
        <div>
          <label htmlFor="membershipType">Membership Type</label>
          <select
            id="membershipType"
            value={membershipType}
            onChange={(e) => setMembershipType(e.target.value)}
            className="text-black border rounded p-2 w-full"
            required
          >
            <option value="">Select</option>
            <option value="basic">Bronze</option>
            <option value="premium">Silver</option>
            <option value="vip">Gold</option>
          </select>
        </div>
        <div>
          <label htmlFor="membershipStartDate">Membership Start Date</label>
          <input
            type="date"
            id="membershipStartDate"
            value={membershipStartDate}
            onChange={(e) => setMembershipStartDate(e.target.value)}
            className="text-black border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="membershipDuration">Membership Duration</label>
          <select
            id="membershipDuration"
            value={membershipDuration}
            onChange={(e) => setMembershipDuration(e.target.value)}
            className="text-black border rounded p-2 w-full"
            required
          >
            <option value="">Select</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="annual">Annual</option>
          </select>
        </div>
        {/* Health and Fitness */}
        <div>
          <label htmlFor="healthInfo">Health and Medical Information</label>
          <textarea
            id="healthInfo"
            value={healthInfo}
            onChange={(e) => setHealthInfo(e.target.value)}
            className="text-black border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="fitnessGoals">Fitness Goals</label>
          <textarea
            id="fitnessGoals"
            value={fitnessGoals}
            onChange={(e) => setFitnessGoals(e.target.value)}
            className="text-black border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="workoutTimes">Preferred Workout Times</label>
          <textarea
            id="workoutTimes"
            value={workoutTimes}
            onChange={(e) => setWorkoutTimes(e.target.value)}
            className="text-black border rounded p-2 w-full"
          />
        </div>
        {/* Payment and Additional Services */}
        {/* <div>
          <label htmlFor="paymentMethod">Preferred Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="text-black border rounded p-2 w-full"
            required
          >
            <option value="">Select</option>
            <option value="creditCard">Credit Card</option>
            <option value="cash">Cash</option>
          </select>
        </div> */}
        <div>
          <label htmlFor="additionalServices">Additional Services</label>
          <textarea
            id="additionalServices"
            value={additionalServices}
            onChange={(e) => setAdditionalServices(e.target.value)}
            className="text-black border rounded p-2 w-full"
          />
        </div>
        {/* Terms and Conditions */}
        <div>
          <label>
            <input
              type="checkbox"
              checked={termsAgreed}
              onChange={() => setTermsAgreed(!termsAgreed)}
            />
            I agree to the terms and conditions
          </label>
        </div>
        {/* Submit Button */}
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-green-400 hover:bg-green-600 w-full cursor-pointer lg:w-64 text-white py-3 px-6 rounded-full"
            disabled={!termsAgreed}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MembershipForm;
