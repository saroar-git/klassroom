const RegistrationForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EE4B84]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="01XXXXXXXXX"
          className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EE4B84]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EE4B84]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Institute
        </label>
        <input
          type="text"
          placeholder="Your Institute"
          className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EE4B84]"
        />
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          type="text"
          placeholder="Your Address"
          className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EE4B84]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EE4B84]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EE4B84]"
        />
      </div>
    </div>
  );
};

export default RegistrationForm;
