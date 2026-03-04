// DonatePage.jsx - Complete single page for donate.digin.org.in
import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  CreditCard, 
  Building2, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Gift,
  Award,
  Users,
  BookOpen,
  Globe,
  ChevronRight,
  Copy,
  Check,
  Calendar,
  Lock,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react';

const Donate = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('donate-theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });

  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [copied, setCopied] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    pan: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    message: '',
    anonymous: false,
    taxBenefit: true
  });
  const [formStep, setFormStep] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('donate-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('donate-theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const donationAmounts = [
    { value: 500, label: 'Basic Support', icon: Heart, desc: 'Provides educational materials to 5 children' },
    { value: 1000, label: 'Education Kit', icon: BookOpen, desc: 'Supports a digital literacy workshop' },
    { value: 2500, label: 'Community Project', icon: Users, desc: 'Funds a community development project' },
    { value: 5000, label: 'Impact Maker', icon: Award, desc: 'Supports an entire village program' },
    { value: 10000, label: 'Change Champion', icon: Globe, desc: 'Creates sustainable impact at scale' }
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setShowCustom(false);
    setCustomAmount('');
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(parseInt(value));
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
    console.log('Donation submitted:', {
      amount: selectedAmount,
      type: donationType,
      method: paymentMethod,
      ...formData
    });
    alert('Thank you for your generous donation! You will receive a confirmation email shortly.');
  };

  const stats = [
    { value: '100K+', label: 'Lives Impacted', icon: Users },
    { value: '500+', label: 'Projects Completed', icon: Award },
    { value: '95%', label: 'Funds to Programs', icon: Heart },
    { value: '50+', label: 'Active Partners', icon: Globe }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-amber-900/20 transition-all duration-700`}>
      
     

      <main className="pt-20">
        
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Donate"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-amber-700/90"></div>
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Support Our Mission
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Your donation helps us create lasting impact in communities across India.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Main Donation Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Donation Form - Takes 2 columns */}
              <div className="lg:col-span-2">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                    
                    {/* Progress Steps */}
                    <div className="flex justify-between mb-8">
                      {[1, 2, 3].map((step) => (
                        <div key={step} className="flex items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                            formStep >= step
                              ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white'
                              : 'bg-slate-100 dark:bg-slate-700 text-slate-400'
                          }`}>
                            {step}
                          </div>
                          {step < 3 && (
                            <div className={`w-16 h-1 mx-2 ${
                              formStep > step ? 'bg-amber-500' : 'bg-slate-200 dark:bg-slate-700'
                            }`} />
                          )}
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleSubmit}>
                      {/* Step 1: Donation Amount */}
                      {formStep === 1 && (
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Choose Amount</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">Select how much you'd like to donate</p>
                            
                            {/* Donation Type Toggle */}
                            <div className="flex space-x-4 mb-6">
                              <button
                                type="button"
                                onClick={() => setDonationType('one-time')}
                                className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                                  donationType === 'one-time'
                                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30'
                                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                                }`}
                              >
                                One-time
                              </button>
                              <button
                                type="button"
                                onClick={() => setDonationType('monthly')}
                                className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                                  donationType === 'monthly'
                                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30'
                                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                                }`}
                              >
                                Monthly
                              </button>
                            </div>

                            {/* Amount Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                              {donationAmounts.map((amount) => {
                                const Icon = amount.icon;
                                return (
                                  <button
                                    key={amount.value}
                                    type="button"
                                    onClick={() => handleAmountSelect(amount.value)}
                                    className={`p-4 rounded-xl border-2 transition-all ${
                                      selectedAmount === amount.value && !showCustom
                                        ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/30'
                                        : 'border-slate-200 dark:border-slate-700 hover:border-amber-300'
                                    }`}
                                  >
                                    <div className="text-center">
                                      <Icon className={`w-5 h-5 mx-auto mb-2 ${
                                        selectedAmount === amount.value && !showCustom
                                          ? 'text-amber-600'
                                          : 'text-slate-400'
                                      }`} />
                                      <div className="text-xl font-bold text-slate-900 dark:text-white">
                                        ₹{amount.value}
                                      </div>
                                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                                        {amount.label}
                                      </div>
                                    </div>
                                  </button>
                                );
                              })}
                              
                              {/* Custom Amount */}
                              <button
                                type="button"
                                onClick={() => setShowCustom(true)}
                                className={`p-4 rounded-xl border-2 transition-all ${
                                  showCustom
                                    ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/30'
                                    : 'border-slate-200 dark:border-slate-700 hover:border-amber-300'
                                }`}
                              >
                                <div className="text-center">
                                  <div className="text-xl font-bold text-slate-900 dark:text-white">
                                    Custom
                                  </div>
                                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                                    Enter amount
                                  </div>
                                </div>
                              </button>
                            </div>

                            {showCustom && (
                              <div className="mt-4">
                                <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                                  Enter Amount (₹)
                                </label>
                                <input
                                  type="text"
                                  value={customAmount}
                                  onChange={handleCustomAmount}
                                  placeholder="5000"
                                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                              </div>
                            )}
                          </div>

                          {/* Impact Preview */}
                          <div className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30 rounded-xl p-4">
                            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Your Impact</h3>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                              {selectedAmount >= 5000 ? '🌟 You can fund an entire community project!' :
                               selectedAmount >= 2500 ? '📚 You can support a digital literacy workshop!' :
                               selectedAmount >= 1000 ? '✏️ You can provide educational materials to children!' :
                               '💝 Every contribution makes a difference!'}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Personal Information */}
                      {formStep === 2 && (
                        <div className="space-y-6">
                          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Your Information</h2>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                                Full Name *
                              </label>
                              <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                              placeholder="+91 98765 43210"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                              PAN Card (for 80G certificate)
                            </label>
                            <input
                              type="text"
                              name="pan"
                              value={formData.pan}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                              placeholder="ABCDE1234F"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                              Address
                            </label>
                            <textarea
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              rows="3"
                              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                              placeholder="Your complete address"
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                                City
                              </label>
                              <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                                State
                              </label>
                              <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                                Pincode
                              </label>
                              <input
                                type="text"
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                              />
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              name="anonymous"
                              checked={formData.anonymous}
                              onChange={handleInputChange}
                              className="w-4 h-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                            />
                            <label className="text-sm text-slate-700 dark:text-slate-300">
                              Make my donation anonymous
                            </label>
                          </div>

                          <div className="flex items-center space-x-3">
                            <input
                              type="checkbox"
                              name="taxBenefit"
                              checked={formData.taxBenefit}
                              onChange={handleInputChange}
                              className="w-4 h-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                            />
                            <label className="text-sm text-slate-700 dark:text-slate-300">
                              I want to claim 80G tax benefit
                            </label>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Payment */}
                      {formStep === 3 && (
                        <div className="space-y-6">
                          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Payment Method</h2>
                          
                          <div className="space-y-4">
                            <button
                              type="button"
                              onClick={() => setPaymentMethod('card')}
                              className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                                paymentMethod === 'card'
                                  ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/30'
                                  : 'border-slate-200 dark:border-slate-700'
                              }`}
                            >
                              <div className="flex items-center space-x-4">
                                <CreditCard className={`w-6 h-6 ${
                                  paymentMethod === 'card' ? 'text-amber-600' : 'text-slate-400'
                                }`} />
                                <div className="text-left">
                                  <p className="font-semibold text-slate-900 dark:text-white">Credit/Debit Card</p>
                                  <p className="text-sm text-slate-600 dark:text-slate-400">Pay securely with card</p>
                                </div>
                              </div>
                              <CheckCircle className={`w-5 h-5 ${
                                paymentMethod === 'card' ? 'text-amber-600' : 'text-slate-300'
                              }`} />
                            </button>

                            <button
                              type="button"
                              onClick={() => setPaymentMethod('upi')}
                              className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                                paymentMethod === 'upi'
                                  ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/30'
                                  : 'border-slate-200 dark:border-slate-700'
                              }`}
                            >
                              <div className="flex items-center space-x-4">
                                <svg className={`w-6 h-6 ${
                                  paymentMethod === 'upi' ? 'text-amber-600' : 'text-slate-400'
                                }`} viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                </svg>
                                <div className="text-left">
                                  <p className="font-semibold text-slate-900 dark:text-white">UPI</p>
                                  <p className="text-sm text-slate-600 dark:text-slate-400">Google Pay, PhonePe, etc.</p>
                                </div>
                              </div>
                              <CheckCircle className={`w-5 h-5 ${
                                paymentMethod === 'upi' ? 'text-amber-600' : 'text-slate-300'
                              }`} />
                            </button>

                            <button
                              type="button"
                              onClick={() => setPaymentMethod('netbanking')}
                              className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                                paymentMethod === 'netbanking'
                                  ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/30'
                                  : 'border-slate-200 dark:border-slate-700'
                              }`}
                            >
                              <div className="flex items-center space-x-4">
                                <Building2 className={`w-6 h-6 ${
                                  paymentMethod === 'netbanking' ? 'text-amber-600' : 'text-slate-400'
                                }`} />
                                <div className="text-left">
                                  <p className="font-semibold text-slate-900 dark:text-white">Net Banking</p>
                                  <p className="text-sm text-slate-600 dark:text-slate-400">All major banks</p>
                                </div>
                              </div>
                              <CheckCircle className={`w-5 h-5 ${
                                paymentMethod === 'netbanking' ? 'text-amber-600' : 'text-slate-300'
                              }`} />
                            </button>
                          </div>

                          {/* Donation Summary */}
                          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 mt-6">
                            <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Donation Summary</h3>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-slate-600 dark:text-slate-400">Amount</span>
                                <span className="font-semibold text-slate-900 dark:text-white">₹{selectedAmount}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-slate-600 dark:text-slate-400">Type</span>
                                <span className="text-slate-900 dark:text-white capitalize">{donationType}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-slate-600 dark:text-slate-400">Tax Benefit</span>
                                <span className="text-green-600 dark:text-green-400">Available under 80G</span>
                              </div>
                              <div className="border-t border-slate-200 dark:border-slate-700 my-3 pt-3">
                                <div className="flex justify-between">
                                  <span className="font-semibold text-slate-900 dark:text-white">Total</span>
                                  <span className="font-bold text-amber-600 dark:text-amber-400">₹{selectedAmount}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Security Badge */}
                          <div className="flex items-center justify-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                            <Lock className="w-4 h-4" />
                            <span>Secure 256-bit SSL encrypted payment</span>
                          </div>
                        </div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex justify-between mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                        {formStep > 1 && (
                          <button
                            type="button"
                            onClick={() => setFormStep(prev => prev - 1)}
                            className="px-6 py-3 border-2 border-slate-300 dark:border-slate-700 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                          >
                            Back
                          </button>
                        )}
                        {formStep < 3 ? (
                          <button
                            type="button"
                            onClick={() => setFormStep(prev => prev + 1)}
                            className="ml-auto px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all"
                          >
                            Continue
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="ml-auto px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105"
                          >
                            Complete Donation
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Sidebar - Takes 1 column */}
              <div className="lg:col-span-1 space-y-6">
                
                {/* Impact Card */}
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 text-white">
                  <Heart className="w-8 h-8 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Your Impact</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Your donation of <span className="font-bold">₹{selectedAmount}</span> will:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Provide education materials to {Math.floor(selectedAmount/200)} children</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Support {Math.floor(selectedAmount/500)} digital literacy workshops</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Reach {Math.floor(selectedAmount/100)} community members</span>
                    </li>
                  </ul>
                </div>

                {/* Bank Transfer Info */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="font-semibold mb-4 text-slate-900 dark:text-white flex items-center">
                    <Building2 className="w-5 h-5 mr-2 text-amber-500" />
                    Bank Transfer
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-slate-500 dark:text-slate-500">Account Name</p>
                      <p className="font-medium text-slate-900 dark:text-white">DIGIN</p>
                    </div>
                    <div>
                      <p className="text-slate-500 dark:text-slate-500">Account Number</p>
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-slate-900 dark:text-white font-mono">12345678901</p>
                        <button
                          onClick={() => copyToClipboard('12345678901')}
                          className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded"
                        >
                          {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-500 dark:text-slate-500">IFSC Code</p>
                      <p className="font-medium text-slate-900 dark:text-white font-mono">SBIN0001234</p>
                    </div>
                    <div>
                      <p className="text-slate-500 dark:text-slate-500">Bank</p>
                      <p className="font-medium text-slate-900 dark:text-white">State Bank of India</p>
                    </div>
                  </div>
                </div>

                {/* Tax Benefits */}
                <div className="bg-green-50 dark:bg-green-900/30 rounded-2xl p-6 border border-green-200 dark:border-green-800">
                  <Shield className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
                  <h3 className="font-semibold text-green-800 dark:text-green-400 mb-2">Tax Benefits</h3>
                  <p className="text-sm text-green-700 dark:text-green-500">
                    All donations are eligible for tax exemption under Section 80G of the Income Tax Act, 1961.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6">
                  <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Need Help?</h3>
                  <div className="space-y-3">
                    <a href="tel:+911234567890" className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600">
                      <Phone className="w-4 h-4" />
                      <span>+91 12345 67890</span>
                    </a>
                    <a href="mailto:donate@digin.org.in" className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400 hover:text-amber-600">
                      <Mail className="w-4 h-4" />
                      <span>donate@digin.org.in</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-white/50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                <p className="text-sm font-medium text-slate-900 dark:text-white">80G Certified</p>
              </div>
              <div className="text-center">
                <Lock className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                <p className="text-sm font-medium text-slate-900 dark:text-white">Secure Payment</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                <p className="text-sm font-medium text-slate-900 dark:text-white">FCRA Compliant</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                <p className="text-sm font-medium text-slate-900 dark:text-white">100% Transparent</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white">
              Frequently Asked <span className="text-amber-600">Questions</span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is my donation tax-exempt?",
                  a: "Yes, all donations to DIGIN are eligible for tax exemption under Section 80G of the Income Tax Act, 1961. You will receive a 80G certificate via email."
                },
                {
                  q: "How secure is my payment information?",
                  a: "We use 256-bit SSL encryption and are PCI-DSS compliant. Your payment details are never stored on our servers."
                },
                {
                  q: "Can I get a refund?",
                  a: "Donations are generally non-refundable. However, if there's an error, please contact us within 7 days."
                },
                {
                  q: "Will I receive a receipt?",
                  a: "Yes, you will receive an instant email receipt and a physical 80G certificate within 15 working days."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
                  <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">{faq.q}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 dark:bg-slate-950 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Heart className="w-6 h-6 text-amber-500" />
                  <span className="text-xl font-bold">DIGIN</span>
                </div>
                <p className="text-sm text-slate-400">
                  Dynamic Initiative for Grassroot Impact Network
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="https://digin.org.in" className="hover:text-amber-400">Home</a></li>
                  <li><a href="https://digin.org.in/about" className="hover:text-amber-400">About Us</a></li>
                  <li><a href="https://digin.org.in/contact" className="hover:text-amber-400">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> donate@digin.org.in</li>
                  <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +91 12345 67890</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-slate-400 hover:text-amber-400"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="text-slate-400 hover:text-amber-400"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="text-slate-400 hover:text-amber-400"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="text-slate-400 hover:text-amber-400"><Youtube className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
              <p>© {new Date().getFullYear()} DIGIN. All rights reserved. | Designed with <Heart className="w-4 h-4 inline text-red-500 fill-red-500" /> for social impact</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Donate;