
import React, { useState } from 'react';
import { 
  Banknote, 
  Users, 
  Send, 
  CreditCard, 
  Building2,
  Heart,
  Gift,
  Calendar,
  CheckCircle,
  Award,
  Clock,
  Shield,
  TrendingUp,
  Download,
  Copy,
  Check
} from 'lucide-react';

const GetInvolved = () => {
  const [activeTab, setActiveTab] = useState('donate');
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    message: '',
    volunteerType: 'online',
    availability: 'weekends',
    experience: ''
  });

  const [formStep, setFormStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      skills: '',
      message: '',
      volunteerType: 'online',
      availability: 'weekends',
      experience: ''
    });
    setFormStep(1);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const donationOptions = [
    { amount: 500, label: 'Basic Support' },
    { amount: 1000, label: 'Education Kit' },
    { amount: 5000, label: 'Community Project' },
    { amount: 10000, label: 'Impact Maker' },
    { amount: 25000, label: 'Change Champion' },
    { amount: 'custom', label: 'Custom Amount' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Get involved"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 mix-blend-multiply"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6 border border-white/30">
            JOIN THE MOVEMENT
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Make a Difference,
            <span className="block text-amber-200">Get Involved Today</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Every contribution, whether time, skills, or resources, helps us create lasting impact in communities across India.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-300 mb-2">500+</div>
              <div className="text-sm text-white/80">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-300 mb-2">50+</div>
              <div className="text-sm text-white/80">Corporate Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-300 mb-2">100K+</div>
              <div className="text-sm text-white/80">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-300 mb-2">25+</div>
              <div className="text-sm text-white/80">Active Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Toggle Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl">
              <button
                onClick={() => setActiveTab('donate')}
                className={`flex items-center px-8 py-4 rounded-xl font-semibold transition-all transform ${
                  activeTab === 'donate'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30 scale-105'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700'
                }`}
              >
                <Banknote className="w-5 h-5 mr-2" />
                Make a Donation
              </button>
              <button
                onClick={() => setActiveTab('volunteer')}
                className={`flex items-center px-8 py-4 rounded-xl font-semibold transition-all transform ${
                  activeTab === 'volunteer'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30 scale-105'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700'
                }`}
              >
                <Users className="w-5 h-5 mr-2" />
                Join as Volunteer
              </button>
            </div>
          </div>

          {/* Donation Section */}
          {activeTab === 'donate' && (
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Impact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 text-white">
                  <Heart className="w-10 h-10 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Your ₹500</h3>
                  <p className="text-white/80 text-sm">Provides educational materials to 5 children</p>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 text-white">
                  <Gift className="w-10 h-10 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Your ₹1000</h3>
                  <p className="text-white/80 text-sm">Supports a digital literacy workshop</p>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 text-white">
                  <Award className="w-10 h-10 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Your ₹5000</h3>
                  <p className="text-white/80 text-sm">Funds a community development project</p>
                </div>
              </div>

              {/* Donation Options */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {donationOptions.map((option, index) => (
                  <button
                    key={index}
                    className="group relative p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-amber-500"
                  >
                    <div className="text-center">
                      <div className="text-xl font-bold text-amber-600 dark:text-amber-400 mb-1">
                        {option.amount === 'custom' ? 'Custom' : `₹${option.amount}`}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">{option.label}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Online Payment */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center">
                        <CreditCard className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Online Donation</h2>
                        <p className="text-slate-600 dark:text-slate-400">Secure payment via Razorpay</p>
                      </div>
                    </div>
                    <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold">
                      Secured by SSL
                    </span>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Support our mission through a secure online payment. All major credit/debit cards, UPI, and net banking accepted.
                  </p>
                  
                  <a
                    href="https://donate.digin.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-lg shadow-amber-500/30"
                  >
                    Donate Online Now
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Bank Transfer */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center">
                        <Building2 className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Bank Transfer</h2>
                        <p className="text-slate-600 dark:text-slate-400">Direct transfer to our account</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => copyToClipboard('12345678901')}
                      className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-sm">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="text-sm">Copy Details</span>
                        </>
                      )}
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6">
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-500 mb-1">Account Name</p>
                      <p className="font-semibold text-slate-900 dark:text-white">DIGIN - Dynamic Initiative for Grassroot Impact Network</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-500 mb-1">Bank Name</p>
                      <p className="font-semibold text-slate-900 dark:text-white">State Bank of India</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-500 mb-1">Account Number</p>
                      <p className="font-semibold text-slate-900 dark:text-white font-mono">12345678901</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-500 mb-1">IFSC Code</p>
                      <p className="font-semibold text-slate-900 dark:text-white font-mono">SBIN0001234</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-500 mb-1">Branch</p>
                      <p className="font-semibold text-slate-900 dark:text-white">Kotla Village, Delhi</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-500 mb-1">Account Type</p>
                      <p className="font-semibold text-slate-900 dark:text-white">Current Account</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <Shield className="w-4 h-4 mr-2 text-amber-600" />
                    Please include your name and "Donation" in the transaction remarks
                  </div>
                </div>
              </div>

              {/* Tax Benefits */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-2xl p-6 border border-green-200 dark:border-green-800">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-800 dark:text-green-400 mb-1">Tax Benefits</h3>
                    <p className="text-sm text-green-700 dark:text-green-500">
                      All donations to DIGIN are eligible for tax exemption under Section 80G of the Income Tax Act, 1961.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Volunteer Form */}
          {activeTab === 'volunteer' && (
            <div className="max-w-3xl mx-auto">
              {formSubmitted && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 rounded-xl flex items-center space-x-3 border border-green-200 dark:border-green-800">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-green-700 dark:text-green-400">
                    Thank you for your interest! We'll contact you within 48 hours.
                  </span>
                </div>
              )}

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Volunteer Registration</h2>
                      <p className="text-slate-600 dark:text-slate-400">Join our community of changemakers</p>
                    </div>
                  </div>

                  {/* Progress Steps */}
                  <div className="flex justify-between mb-8">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                          formStep >= step
                            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-400'
                        }`}>
                          {step}
                        </div>
                        {step < 3 && (
                          <div className={`w-20 h-1 mx-2 ${
                            formStep > step ? 'bg-amber-500' : 'bg-slate-200 dark:bg-slate-700'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {formStep === 1 && (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white"
                              placeholder="Enter your full name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white"
                              placeholder="you@example.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </>
                    )}

                    {formStep === 2 && (
                      <>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                            Volunteer Type *
                          </label>
                          <select
                            name="volunteerType"
                            value={formData.volunteerType}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white"
                          >
                            <option value="online">Online Volunteer</option>
                            <option value="onsite">On-site Volunteer</option>
                            <option value="both">Both</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                            Availability *
                          </label>
                          <select
                            name="availability"
                            value={formData.availability}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white"
                          >
                            <option value="weekdays">Weekdays</option>
                            <option value="weekends">Weekends</option>
                            <option value="evenings">Evenings</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                            Skills/Areas of Interest
                          </label>
                          <input
                            type="text"
                            name="skills"
                            value={formData.skills}
                            onChange={handleInputChange}
                            placeholder="e.g., Content creation, Teaching, Event management, Photography"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white"
                          />
                        </div>
                      </>
                    )}

                    {formStep === 3 && (
                      <>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                            Previous Volunteer Experience
                          </label>
                          <textarea
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            rows="3"
                            placeholder="Tell us about any previous volunteer experience (optional)"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white"
                          ></textarea>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                            Why do you want to volunteer with DIGIN? *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows="4"
                            placeholder="Share your motivation and how you'd like to contribute..."
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white"
                          ></textarea>
                        </div>
                      </>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-4">
                      {formStep > 1 && (
                        <button
                          type="button"
                          onClick={() => setFormStep(prev => prev - 1)}
                          className="px-6 py-3 border-2 border-slate-300 dark:border-slate-700 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        >
                          Previous
                        </button>
                      )}
                      {formStep < 3 ? (
                        <button
                          type="button"
                          onClick={() => setFormStep(prev => prev + 1)}
                          className="ml-auto px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all"
                        >
                          Next Step
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="ml-auto px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105"
                        >
                          Submit Application
                        </button>
                      )}
                    </div>
                  </form>

                  {/* Volunteer Benefits */}
                  <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                    <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Why Volunteer With Us?</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Certificate</p>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Skill Development</p>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Users className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Network</p>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Heart className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Impact</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            Other Ways to <span className="text-amber-600 dark:text-amber-400">Support Us</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform border border-slate-200 dark:border-slate-700">
                <Building2 className="w-10 h-10 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Corporate Partnerships</h3>
              <p className="text-slate-600 dark:text-slate-400">Partner with us for CSR initiatives and employee engagement programs.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform border border-slate-200 dark:border-slate-700">
                <Gift className="w-10 h-10 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">In-Kind Donations</h3>
              <p className="text-slate-600 dark:text-slate-400">Donate equipment, supplies, or services to support our programs.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform border border-slate-200 dark:border-slate-700">
                <Calendar className="w-10 h-10 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Fundraise for Us</h3>
              <p className="text-slate-600 dark:text-slate-400">Organize events or campaigns to raise funds and awareness.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;