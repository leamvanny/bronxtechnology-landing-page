import ButtonComponent from "../components/ui/ButtonComponent";

const ContactUsPage = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold text-center text-primary">
          Contact Us
        </h1>
        <p className="text-center text-wrap text-text mt-4 text-[16px] max-w-xl mx-auto">
          Interested in our solutions or need advice? Then please get in touch
          and we’ll be glad to help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="rounded-2xl bg-white/90 p-6 h-full">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-title mb-4">
                Contact Information
              </h2>
              <p className="text-sm text-text mb-4">
                You can reach us through the following contact details or by
                filling out the contact form. We look forward to hearing from
                you!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-title">Call Center</h3>
                <p className="text-sm text-text">+855-96-222-9928</p>
              </div>
              <div>
                <h3 className="text-title">Call Center</h3>
                <p className="text-sm text-text">+855-96-222-9928</p>
              </div>

              <div>
                <h3 className="text-title">Call Center</h3>
                <p className="text-sm text-text">+855-96-222-9928</p>
              </div>

              <div>
                <h3 className="text-title">Call Center</h3>
                <p className="text-sm text-text">+855-96-222-9928</p>
              </div>
            </div>
          </div>
        </div>

        <form className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
          <div className="rounded-2xl bg-white/90 p-6">
            <div>
              <h2 className="text-xl font-semibold text-title mb-4">
                Get in Touch
              </h2>
              <p className="text-sm text-text mb-4">
                Please fill out the form below and we will get back to you as
                soon as possible.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-sm placeholder:text-text text-sm text-title"
                  placeholder="e.g. John Doe"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Organization <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-sm placeholder:text-text text-sm text-title"
                  placeholder="Company Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Work Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-sm placeholder:text-text text-sm text-title"
                  placeholder="e.g. johndoe@company.com"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-sm placeholder:text-text text-sm text-title"
                  placeholder="e.g. +855-96-222-9928"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Size <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary text-sm text-title"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Company Size <span className="text-red-500">*</span>
                  </option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What is your inquiry about?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary text-sm text-title"
                  defaultValue=""
                >
                  <option value="" disabled className="text-sm">
                    Select an option
                  </option>
                  <option value="general" className="text-sm">
                    General Information Request
                  </option>
                  <option value="support" className="text-sm">
                    Partner Relations
                  </option>
                  <option value="careers" className="text-sm">
                    Careers
                  </option>
                  <option value="technology" className="text-sm">
                    Technology Solutions
                  </option>
                  <option value="help" className="text-sm">
                    I need Help
                  </option>
                </select>
              </div>
              <div className="col-span-2 mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  How can we help you? <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-sm placeholder:text-text text-sm text-title"
                  placeholder="Your Message"
                  rows={4}
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end">
              <ButtonComponent onClick={() => alert("Form submitted!")}>
                Send Message
              </ButtonComponent>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-12">
        <div className="w-full h-64 rounded-lg overflow-hidden">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.3242436909509!2d104.91395862187129!3d11.53837499594966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951307e9a7f63%3A0x8e7013d26be89f39!2sQ%20Specialty%20Coffee!5e0!3m2!1skm!2skh!4v1780026504947!5m2!1skm!2skh"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
