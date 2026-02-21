// pages/FAQ.jsx
import React, { useState } from 'react';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  MessageCircle, 
  Mail,
  Phone,
  BookOpen,
  Users,
  Heart,
  DollarSign,
  FileText,
  Shield,
  Globe,
  Award
} from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const faqData = [
    {
      id: 1,
      category: 'general',
      categoryLabel: 'General',
      icon: HelpCircle,
      questions: [
        {
          id: 101,
          question: 'What is DIGIN?',
          answer: 'DIGIN (Dynamic Initiative for Grassroot Impact Network) is a public charitable trust established in 2026 that works towards creating sustainable social impact through digital media, education, and community engagement. We focus on empowering marginalized communities, preserving cultural heritage, and promoting digital literacy across India.'
        },
        {
          id: 102,
          question: 'Where is DIGIN located?',
          answer: 'Our head office is located at 57, Kotla Village, Shamas Pur, East Delhi, Delhi - 110091. We also have field offices and project locations across multiple states including Uttar Pradesh, West Bengal, and expanding to more regions.'
        },
        {
          id: 103,
          question: 'Is DIGIN a registered NGO?',
          answer: 'Yes, DIGIN is a registered public charitable trust under the Indian Trust Act, 1990. We are also registered under 12A and 80G of the Income Tax Act, making all donations eligible for tax exemption.'
        },
        {
          id: 104,
          question: 'How can I verify your credentials?',
          answer: 'You can verify our registration through the official charity commissioner portal. Our registration number is DEL/1234/2026. We also publish our annual reports and financial statements transparently on our website.'
        }
      ]
    },
    {
      id: 2,
      category: 'donations',
      categoryLabel: 'Donations',
      icon: DollarSign,
      questions: [
        {
          id: 201,
          question: 'How can I donate to DIGIN?',
          answer: 'You can donate through multiple channels: (1) Online via our secure payment gateway using credit/debit cards, UPI, or net banking, (2) Bank transfer to our account, (3) Cheque or demand draft, or (4) In-kind donations of equipment, supplies, or services. Visit our Get Involved page for detailed information.'
        },
        {
          id: 202,
          question: 'Are donations tax-exempt?',
          answer: 'Yes, all donations to DIGIN are eligible for tax exemption under Section 80G of the Income Tax Act, 1961. You will receive a 80G certificate for your donation, which can be used for tax benefits.'
        },
        {
          id: 203,
          question: 'What is your refund policy?',
          answer: 'As per standard NGO practices and legal requirements, donations are non-refundable. However, if there is an error in the transaction amount or if the donation was made unintentionally, please contact us within 7 days, and we will address the issue on a case-by-case basis.'
        },
        {
          id: 204,
          question: 'How are my donations utilized?',
          answer: '90% of your donation goes directly to program implementation, including educational materials, digital infrastructure, community workshops, and direct beneficiary support. The remaining 10% covers administrative costs, including staff salaries, office expenses, and fundraising activities.'
        }
      ]
    },
    {
      id: 3,
      category: 'volunteer',
      categoryLabel: 'Volunteering',
      icon: Users,
      questions: [
        {
          id: 301,
          question: 'How can I become a volunteer?',
          answer: 'You can register as a volunteer through our Get Involved page. Fill out the volunteer registration form with your details, skills, and availability. Our volunteer coordinator will contact you within 48 hours to discuss opportunities that match your interests and schedule.'
        },
        {
          id: 302,
          question: 'What skills are needed to volunteer?',
          answer: 'We welcome volunteers with diverse skills including: content creation, teaching/tutoring, photography/videography, event management, social media management, graphic design, research, fundraising, and administrative support. Even if you don\'t have specific skills, your enthusiasm and willingness to help are valuable!'
        },
        {
          id: 303,
          question: 'What is the time commitment required?',
          answer: 'We offer flexible volunteering options: (1) Online volunteers can contribute 2-10 hours per week remotely, (2) On-site volunteers can join us for specific events or regular weekly shifts, (3) Project-based volunteers can commit for the duration of specific initiatives (usually 1-3 months).'
        },
        {
          id: 304,
          question: 'Do you provide certificates to volunteers?',
          answer: 'Yes, we provide certificates of appreciation to all volunteers who complete their commitment. For long-term volunteers or those who make significant contributions, we provide detailed recommendation letters and skill development certificates.'
        }
      ]
    },
    {
      id: 4,
      category: 'programs',
      categoryLabel: 'Programs & Impact',
      icon: Heart,
      questions: [
        {
          id: 401,
          question: 'What programs does DIGIN run?',
          answer: 'We run several programs including: (1) Digital Literacy & Media Education, (2) Cultural Heritage Preservation, (3) Youth Leadership Development, (4) Women Empowerment & Skill Training, (5) Community Health Awareness, (6) Environmental Conservation, and (7) Disaster Relief & Rehabilitation.'
        },
        {
          id: 402,
          question: 'How can I apply for your programs?',
          answer: 'Program applications vary by initiative. For community programs, we work through local partners and community leaders. For training programs, we announce applications through our website, social media, and local networks. You can also contact us directly to express interest in specific programs.'
        },
        {
          id: 403,
          question: 'Where do you operate?',
          answer: 'We currently operate in Delhi NCR, Uttar Pradesh (Lucknow, Mau), and West Bengal (Baruipur). We are expanding to other states based on needs and resources. Check our website regularly for updates on new locations.'
        },
        {
          id: 404,
          question: 'How do you measure impact?',
          answer: 'We use a comprehensive monitoring and evaluation framework including: pre/post program assessments, beneficiary feedback surveys, focus group discussions, case studies, and third-party evaluations. Our annual reports detail our impact metrics and outcomes.'
        }
      ]
    },
    {
      id: 5,
      category: 'partnerships',
      categoryLabel: 'Partnerships',
      icon: Globe,
      questions: [
        {
          id: 501,
          question: 'How can my organization partner with DIGIN?',
          answer: 'We welcome partnerships with corporates (CSR), foundations, government agencies, educational institutions, and other NGOs. Please email us at partnerships@digin.org.in with details about your organization and potential collaboration areas. Our team will schedule a meeting to explore synergies.'
        },
        {
          id: 502,
          question: 'Do you accept international partnerships?',
          answer: 'Yes, we are open to international partnerships that align with our mission and values. International partners can support us through funding, technical expertise, knowledge exchange, or volunteer programs. We comply with all applicable FCRA regulations for foreign contributions.'
        },
        {
          id: 503,
          question: 'What are the benefits of partnering with DIGIN?',
          answer: 'Partners benefit from: (1) Association with a credible, grassroots organization, (2) Transparent reporting and impact measurement, (3) Employee engagement opportunities, (4) Brand visibility in communities, (5) Tax benefits under CSR/80G, and (6) Recognition in our communications.'
        }
      ]
    },
    {
      id: 6,
      category: 'legal',
      categoryLabel: 'Legal & Compliance',
      icon: Shield,
      questions: [
        {
          id: 601,
          question: 'Is DIGIN compliant with FCRA?',
          answer: 'Yes, we are registered under FCRA (Foreign Contribution Regulation Act) and comply with all reporting requirements for foreign contributions. Our FCRA number is 123456789.'
        },
        {
          id: 602,
          question: 'How can I access your financial reports?',
          answer: 'Our annual reports, audited financial statements, and impact reports are available in the Annual Reports section of our website. You can also request physical copies by contacting us.'
        },
        {
          id: 603,
          question: 'What is your grievance redressal mechanism?',
          answer: 'If you have any concerns or complaints, please email us at grievances@digin.org.in. We acknowledge all complaints within 48 hours and resolve them within 15 working days. Serious matters are escalated to our Managing Trustee.'
        }
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'general', label: 'General', icon: BookOpen },
    { id: 'donations', label: 'Donations', icon: DollarSign },
    { id: 'volunteer', label: 'Volunteering', icon: Users },
    { id: 'programs', label: 'Programs', icon: Heart },
    { id: 'partnerships', label: 'Partnerships', icon: Globe },
    { id: 'legal', label: 'Legal', icon: Shield }
  ];

  // Filter FAQs based on search and category
  const filteredFaqs = faqData
    .filter(category => activeCategory === 'all' || category.category === activeCategory)
    .map(category => ({
      ...category,
      questions: category.questions.filter(q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }))
    .filter(category => category.questions.length > 0);

  const totalQuestions = faqData.reduce((acc, category) => acc + category.questions.length, 0);
  const visibleQuestions = filteredFaqs.reduce((acc, category) => acc + category.questions.length, 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="FAQ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-400 text-sm font-semibold mb-6 border border-amber-500/30">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              How Can We
              <span className="block text-amber-400">Help You?</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Find answers to common questions about our organization, donations, volunteering, and programs.
            </p>

            {/* Stats */}
            <div className="flex items-center space-x-6 mt-8">
              <div className="flex items-center text-white/60">
                <HelpCircle className="w-4 h-4 mr-2" />
                <span className="text-sm">{totalQuestions} Questions</span>
              </div>
              <div className="flex items-center text-white/60">
                <MessageCircle className="w-4 h-4 mr-2" />
                <span className="text-sm">{faqData.length} Categories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="sticky top-24 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white"
              />
              {searchTerm && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-slate-500">
                  {visibleQuestions} results
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar space-x-2 pb-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              const count = category.id === 'all' 
                ? totalQuestions 
                : faqData.find(c => c.category === category.id)?.questions.length || 0;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.label}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    isActive 
                      ? 'bg-white/20 text-white' 
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-8">
                {filteredFaqs.map((category) => {
                  const CategoryIcon = category.icon;
                  return (
                    <div key={category.id} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                      <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                        {/* Category Header */}
                        <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 dark:from-slate-700 dark:to-slate-800 px-8 py-6 border-b border-slate-200 dark:border-slate-700">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                              <CategoryIcon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                                {category.categoryLabel}
                              </h2>
                              <p className="text-sm text-slate-600 dark:text-slate-400">
                                {category.questions.length} questions
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Questions */}
                        <div className="divide-y divide-slate-200 dark:divide-slate-700">
                          {category.questions.map((faq) => (
                            <div key={faq.id} className="p-6">
                              <button
                                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                                className="flex justify-between items-center w-full text-left"
                              >
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white pr-8">
                                  {faq.question}
                                </h3>
                                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform flex-shrink-0 ${
                                  expandedFaq === faq.id ? 'rotate-180' : ''
                                }`} />
                              </button>
                              {expandedFaq === faq.id && (
                                <div className="mt-4 pr-8">
                                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {faq.answer}
                                  </p>
                                  
                                  {/* Action Buttons */}
                                  <div className="flex items-center space-x-4 mt-4">
                                    <button className="text-sm text-amber-600 dark:text-amber-400 hover:underline">
                                      Was this helpful?
                                    </button>
                                    <button className="text-sm text-amber-600 dark:text-amber-400 hover:underline">
                                      Share
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">No questions found</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  We couldn't find any questions matching "{searchTerm}"
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all"
                >
                  Clear Search
                </button>
              </div>
            )}

            {/* Still Have Questions */}
            <div className="mt-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
              <p className="text-white/90 mb-6">
                Can't find the answer you're looking for? Please reach out to our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@digin.org.in"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white text-amber-600 rounded-xl font-semibold hover:bg-slate-100 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
                <a
                  href="tel:+91 99999 99999"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-all border border-white/30"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;