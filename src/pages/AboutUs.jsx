// pages/AboutUs.jsx - Redesigned with Team Member Modal
import React, { useState } from 'react';
import { aboutContent } from '../data/siteData';
import { 
  Users, 
  Calendar, 
  Target, 
  Eye, 
  Award, 
  Clock, 
  MapPin, 
  Mail, 
  Phone, 
  ChevronRight, 
  Star, 
  Heart, 
  TrendingUp,
  X,
  Briefcase,
  GraduationCap,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Download,
  Share2
} from 'lucide-react';


const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Enhanced team data with more details
  const enhancedTeam = aboutContent.team.map((member, index) => ({
    ...member,
    email: member.name.toLowerCase().replace(/\s+/g, '.') + '@digin.org.in',
    phone: '+91 98765 4321' + index,
    location: ['Delhi, India', 'Kolkata, India', 'Delhi, India', 'Lucknow, India', 'Mau, India', 'Delhi, India', 'Delhi, India'][index % 7],
    expertise: ['Digital Strategy', 'Community Development', 'Program Management', 'Research & Analysis', 'Media Relations', 'Fundraising', 'Guiding Youth'][index % 7],
    experience: [
      'Na',
      'Na',
      'Na',
      'Na',
      'Na',
      'Na',
      'Na'
    ][index % 7],
    achievements: [
      'Na',
      'Na',
      'Na',
      'Na',
      'Na',
      'Na',
      'Na'
    ][index % 7],
    social: {
      linkedin: '#',
      twitter: '#',
      facebook: '#'
    }
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section -保持不变 */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-400 text-sm font-semibold mb-6 border border-amber-500/30">
            WHO WE ARE
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            {aboutContent.title}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {aboutContent.description}
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">15+</div>
              <div className="text-sm text-white/60">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">100K+</div>
              <div className="text-sm text-white/60">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">250+</div>
              <div className="text-sm text-white/60">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">500+</div>
              <div className="text-sm text-white/60">Volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section - 保持不变 */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Our Vision</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {aboutContent.vision}
                </p>
                <div className="mt-8 flex items-center text-amber-600 dark:text-amber-400">
                  <span className="font-semibold">Making it a reality</span>
                  <ChevronRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Our Mission</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {aboutContent.mission}
                </p>
                <div className="mt-8 flex items-center text-amber-600 dark:text-amber-400">
                  <span className="font-semibold">How we achieve it</span>
                  <ChevronRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - 保持不变 */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-amber-200 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400 rounded-full text-sm font-semibold mb-4">
              OUR CORE VALUES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Principles That Guide Us
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              The foundational beliefs that shape every decision and action we take.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Compassion</h3>
              <p className="text-slate-600 dark:text-slate-400">Putting humanity first in everything we do</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Innovation</h3>
              <p className="text-slate-600 dark:text-slate-400">Embracing new ideas and technologies</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Excellence</h3>
              <p className="text-slate-600 dark:text-slate-400">Striving for the highest quality in all we do</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Inclusivity</h3>
              <p className="text-slate-600 dark:text-slate-400">Embracing diversity and equal opportunity</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline Section - 保持不变 */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full text-sm font-semibold mb-4">
              OUR JOURNEY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              The Road So Far
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Key milestones that have shaped our organization.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 via-amber-400 to-amber-500"></div>
            
            {aboutContent.history.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 pr-12 text-right">
                  {index % 2 === 0 && (
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                      <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
                        <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-2">{item.year}</h3>
                        <h4 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{item.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-xl">
                  <Calendar className="w-8 h-8" />
                </div>
                
                <div className="w-1/2 pl-12">
                  {index % 2 !== 0 && (
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                      <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
                        <h3 className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-2">{item.year}</h3>
                        <h4 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{item.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Redesigned with clickable cards and truncation */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full text-sm font-semibold mb-4">
              MEET THE TEAM
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Leadership & Board of Trustees
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Dedicated individuals working tirelessly to create positive change. Click on any card to view full profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enhancedTeam.map((member, index) => (
              <div
                key={index}
                onClick={() => setSelectedMember(member)}
                className="group relative cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Quick View Indicator */}
                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to view profile
                    </div>
                    
                    {/* Name Overlay on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
                      <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-amber-400 font-semibold">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {/* Bio with truncation - shows max 3 lines */}
                    <p className="text-slate-600 dark:text-slate-400 line-clamp-3 mb-4">
                      {member.bio}
                    </p>
                    
                    {/* Location and Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs">
                        <MapPin className="w-3 h-3 mr-1 text-amber-500" />
                        {member.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs">
                        <Briefcase className="w-3 h-3 mr-1 text-amber-500" />
                        {member.expertise}
                      </span>
                    </div>
                    
                    {/* Experience Indicators */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-amber-500 mr-1" />
                        <span className="text-xs text-slate-600 dark:text-slate-400">15+ years</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 text-amber-500 mr-1" />
                        <span className="text-xs text-slate-600 dark:text-slate-400">Expert</span>
                      </div>
                      <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
                        View Full Profile →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal - CV Style Popup */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content - CV Style */}
            <div className="p-8 md:p-12">
              {/* Header Section with Photo and Basic Info */}
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                {/* Profile Photo */}
                <div className="md:w-1/3">
                  <div className="relative">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full p-3 shadow-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="md:w-2/3">
                  <h2 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">
                    {selectedMember.name}
                  </h2>
                  <p className="text-xl text-amber-600 dark:text-amber-400 mb-4">
                    {selectedMember.role}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                        <Mail className="w-10 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-500">Email</p>
                        <a href={`mailto:${selectedMember.email}`} className="text-sm font-medium hover:text-amber-600">
                          {selectedMember.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-500">Phone</p>
                        <a href={`tel:${selectedMember.phone}`} className="text-sm font-medium hover:text-amber-600">
                          {selectedMember.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-500">Location</p>
                        <p className="text-sm font-medium">{selectedMember.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-500">Expertise</p>
                        <p className="text-sm font-medium">{selectedMember.expertise}</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    <a href={selectedMember.social.linkedin} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-amber-500 hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={selectedMember.social.twitter} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-amber-500 hover:text-white transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={selectedMember.social.facebook} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-amber-500 hover:text-white transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bio Section */}
              <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-amber-500" />
                  Biography
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>

              {/* Detailed Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                

                {/* Experience */}
                <div className="p-6 bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-slate-800 dark:to-slate-700 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-amber-500" />
                    Experience
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    {selectedMember.experience}
                  </p>
                </div>

                {/* Achievements */}
                <div className="p-6 bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-slate-800 dark:to-slate-700 rounded-2xl md:col-span-2">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-amber-500" />
                    Key Achievements
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    {selectedMember.achievements}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-end pt-6 border-t border-slate-200 dark:border-slate-700">
                <button  className="px-6 py-3 border-2 border-amber-500 text-amber-600 dark:text-amber-400 rounded-xl font-semibold hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-all flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 mix-blend-multiply"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Be part of our journey to create lasting impact in communities across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-amber-600 rounded-full font-semibold hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl">
              Become a Volunteer
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all transform hover:scale-105">
              Support Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;