import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.licenseType) newErrors.licenseType = "Please select a license type";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      alert("Thank you for contacting us!");
      setFormData({ name:"", email:"", company:"", licenseType:"", message:"" });
      setErrors({});
    }
  };

  return (
    <section className="px-6 py-16 bg-blue-50 dark:bg-gray-900 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        <input
          className={`p-3 rounded border ${errors.name ? "border-red-500" : "border-gray-300"}`}
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

        <input
          type="email"
          className={`p-3 rounded border ${errors.email ? "border-red-500" : "border-gray-300"}`}
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

        <input
          className={`p-3 rounded border ${errors.company ? "border-red-500" : "border-gray-300"}`}
          placeholder="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          aria-invalid={errors.company ? "true" : "false"}
        />
        {errors.company && <p className="text-red-600 text-sm">{errors.company}</p>}

        <select
          className={`p-3 rounded border ${errors.licenseType ? "border-red-500" : "border-gray-300"}`}
          name="licenseType"
          value={formData.licenseType}
          onChange={handleChange}
          aria-invalid={errors.licenseType ? "true" : "false"}
        >
          <option value="">License Type</option>
          <option value="Windows">Windows</option>
          <option value="Office">Office</option>
          <option value="Adobe">Adobe</option>
        </select>
        {errors.licenseType && <p className="text-red-600 text-sm">{errors.licenseType}</p>}

        <textarea
          className={`p-3 rounded border ${errors.message ? "border-red-500" : "border-gray-300"}`}
          rows="4"
          placeholder="Your Message..."
          name="message"
          value={formData.message}
          onChange={handleChange}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
