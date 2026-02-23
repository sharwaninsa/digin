
import React, { useState } from 'react';
import { missionObjectives } from '../data/siteData';
import { 
  Target, 
  BookOpen, 
  Globe, 
  Heart, 
  ChevronRight, 
  ChevronDown,
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Award,
  Clock
} from 'lucide-react';

const OurMission = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const categoryIcons = {
    'Digital Media & Education': BookOpen,
    'Cultural Preservation': Globe,
    'Community Development': Heart,
    'Social Welfare': Target
  };

  const categoryColors = {
    'Digital Media & Education': 'from-blue-500 to-cyan-500',
    'Cultural Preservation': 'from-purple-500 to-pink-500',
    'Community Development': 'from-green-500 to-emerald-500',
    'Social Welfare': 'from-orange-500 to-red-500'
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Background */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6 border border-white/30">
            OUR MISSION & OBJECTIVES
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Driving Change Through
            <span className="block text-amber-200">Strategic Action</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A comprehensive framework of goals and objectives guiding our efforts to create sustainable social impact.
          </p>
          
          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {missionObjectives.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  const element = document.getElementById(category.category);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all border border-white/20"
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-amber-100 dark:bg-amber-900/30 rounded-2xl mb-8">
              <Target className="w-12 h-12 text-amber-600 dark:text-amber-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Our Core Mission
            </h2>
            <p className="text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-light">
              "To leverage cutting-edge digital media technologies and active community participation 
              for comprehensive social development, cultural preservation, and sustainable transformation 
              at the grassroots level."
            </p>
            
            {/* Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">50+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Active Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">100K+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Beneficiaries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">25+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Districts Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">500+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Partner Organizations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full text-sm font-semibold mb-4">
              STRATEGIC OBJECTIVES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Areas of Focus
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Detailed breakdown of our key objectives and how we plan to achieve them.
            </p>
          </div>

          <div className="space-y-8">
            {missionObjectives.map((category, index) => {
              const Icon = categoryIcons[category.category] || Target;
              const isExpanded = expandedCategory === index;
              
              return (
                <div
                  key={index}
                  id={category.category}
                  className="group relative scroll-mt-24"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${categoryColors[category.category]} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                    {/* Header */}
                    <div 
                      className="p-8 cursor-pointer"
                      onClick={() => setExpandedCategory(isExpanded ? null : index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <div className={`w-16 h-16 bg-gradient-to-br ${categoryColors[category.category]} rounded-2xl flex items-center justify-center shadow-lg`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                              {category.category}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                              {category.description}
                            </p>
                          </div>
                        </div>
                        <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="px-8 pb-8 border-t border-slate-200 dark:border-slate-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                          {category.objectives.map((objective, idx) => (
                            <div key={idx} className="flex items-start space-x-4 group/item">
                              <div className="flex-shrink-0 w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                                <span className="text-amber-600 dark:text-amber-400 font-bold">{idx + 1}</span>
                              </div>
                              <div>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                  {objective}
                                </p>
                                
                                {/* Progress indicator (example) */}
                                <div className="mt-3 flex items-center space-x-3">
                                  <div className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
                                      style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-xs font-medium text-amber-600 dark:text-amber-400">
                                    In Progress
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">85%</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Completion Rate</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">25K+</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Beneficiaries</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">15</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">Active Projects</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full text-sm font-semibold mb-4">
              OUR APPROACH
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              How We Create Impact
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              A multi-faceted approach combining technology, community engagement, and sustainable practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Digital First</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Leveraging cutting-edge technology and digital media for maximum reach, engagement, and measurable impact.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Community Led</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Working with communities, not just for them, ensuring sustainable change through local ownership.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Data Driven</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Evidence-based approach with continuous monitoring, evaluation, and adaptive management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
            Support Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Your contribution helps us achieve these objectives and create lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-amber-600 rounded-full font-semibold hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl">
              Donate Now
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all transform hover:scale-105">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;