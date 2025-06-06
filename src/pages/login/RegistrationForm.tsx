import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    institute: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validatePassword = (password: string) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.institute) newErrors.institute = "Institute is required";
    if (!formData.address) newErrors.address = "Address is required";

    if (!validatePassword(formData.password)) {
      newErrors.password =
        "Password must be 6+ characters, include upper & lower case, number & special character";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Registration Data:", formData);

      // Reset form state
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        institute: "",
        address: "",
        password: "",
        confirmPassword: "",
      });

      setErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Doe"
          className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EE4B84]"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="01XXXXXXXXX"
          className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EE4B84]"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EE4B84]"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Institute
        </label>
        <input
          type="text"
          name="institute"
          value={formData.institute}
          onChange={handleChange}
          placeholder="Your Institute"
          className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EE4B84]"
        />
        {errors.institute && (
          <p className="text-red-500 text-sm mt-1">{errors.institute}</p>
        )}
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Your Address"
          className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EE4B84]"
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          className="mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EE4B84]"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="••••••••"
          className={`mt-1 w-full border rounded-lg px-4 py-2 focus:outline-none 
      focus:ring-2 ${
        formData.confirmPassword
          ? formData.confirmPassword === formData.password
            ? "focus:ring-green-500 border-green-500"
            : "focus:ring-[#EE4B84]"
          : "focus:ring-[#EE4B84]"
      }`}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full md:col-span-2 bg-[#EE4B84] hover:bg-[#EE4B84] text-white font-semibold py-2 rounded-lg transition duration-200 cursor-pointer mt-2"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
