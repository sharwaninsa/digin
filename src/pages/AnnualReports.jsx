
import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Calendar, 
  TrendingUp,
  Award,
  Users,
  Heart,
  Search,
  ChevronLeft,
  ChevronRight,
  Filter,
  BarChart,
  PieChart,
  BookOpen
} from 'lucide-react';

const AnnualReports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterYear, setFilterYear] = useState('all');
  const [sortOrder, setSortOrder] = useState('desc');
  const reportsPerPage = 10;


  const reportsData = [
    {
      id: 1,
      serialNo: 'AR-2025-001',
      financialYear: '2025-2026',
      title: 'Annual Impact Report 2025-26',
      period: 'April 2025 - March 2026',
      publishedDate: '2026-04-15',
      pages: 124,
      fileSize: '4.2 MB',
      format: 'PDF',
      downloads: 1250,
      views: 3450,
      highlights: {
        beneficiaries: 25000,
        projects: 45,
        volunteers: 350,
        states: 5
      },
      description: 'Comprehensive report covering our digital literacy programs, cultural preservation initiatives, and community development projects.',
      reportUrl: '/reports/ar-2025-26.pdf',
      previewUrl: '/reports/ar-2025-26-preview.pdf'
    },
    {
      id: 2,
      serialNo: 'AR-2024-002',
      financialYear: '2024-2025',
      title: 'Annual Impact Report 2024-25',
      period: 'April 2024 - March 2025',
      publishedDate: '2025-04-10',
      pages: 98,
      fileSize: '3.8 MB',
      format: 'PDF',
      downloads: 980,
      views: 2870,
      highlights: {
        beneficiaries: 18000,
        projects: 32,
        volunteers: 280,
        states: 4
      },
      description: 'Detailed analysis of our expansion into new geographies and launch of youth leadership programs.',
      reportUrl: '/reports/ar-2024-25.pdf',
      previewUrl: '/reports/ar-2024-25-preview.pdf'
    },
    {
      id: 3,
      serialNo: 'AR-2023-003',
      financialYear: '2023-2024',
      title: 'Annual Impact Report 2023-24',
      period: 'April 2023 - March 2024',
      publishedDate: '2024-04-05',
      pages: 86,
      fileSize: '3.2 MB',
      format: 'PDF',
      downloads: 750,
      views: 2150,
      highlights: {
        beneficiaries: 12000,
        projects: 25,
        volunteers: 200,
        states: 3
      },
      description: 'Showcasing our COVID-19 relief efforts and digital education initiatives in rural areas.',
      reportUrl: '/reports/ar-2023-24.pdf',
      previewUrl: '/reports/ar-2023-24-preview.pdf'
    },
    {
      id: 4,
      serialNo: 'AR-2022-004',
      financialYear: '2022-2023',
      title: 'Annual Impact Report 2022-23',
      period: 'April 2022 - March 2023',
      publishedDate: '2023-04-12',
      pages: 72,
      fileSize: '2.9 MB',
      format: 'PDF',
      downloads: 620,
      views: 1850,
      highlights: {
        beneficiaries: 8500,
        projects: 18,
        volunteers: 150,
        states: 2
      },
      description: 'Highlights of our foundational years and pilot projects in Delhi NCR.',
      reportUrl: '/reports/ar-2022-23.pdf',
      previewUrl: '/reports/ar-2022-23-preview.pdf'
    },
    {
      id: 5,
      serialNo: 'AR-2021-005',
      financialYear: '2021-2022',
      title: 'Annual Impact Report 2021-22',
      period: 'April 2021 - March 2022',
      publishedDate: '2022-04-08',
      pages: 64,
      fileSize: '2.5 MB',
      format: 'PDF',
      downloads: 480,
      views: 1250,
      highlights: {
        beneficiaries: 5000,
        projects: 12,
        volunteers: 100,
        states: 2
      },
      description: 'Our first annual report detailing the establishment and initial programs.',
      reportUrl: '/reports/ar-2021-22.pdf',
      previewUrl: '/reports/ar-2021-22-preview.pdf'
    },
    {
      id: 6,
      serialNo: 'AR-2026-006',
      financialYear: '2026-2027',
      title: 'Half-Yearly Impact Report 2026',
      period: 'April 2026 - September 2026',
      publishedDate: '2026-10-20',
      pages: 56,
      fileSize: '2.1 MB',
      format: 'PDF',
      downloads: 320,
      views: 890,
      highlights: {
        beneficiaries: 15000,
        projects: 28,
        volunteers: 220,
        states: 5
      },
      description: 'Interim report showing progress on current year initiatives and mid-term goals.',
      reportUrl: '/reports/hy-2026.pdf',
      previewUrl: '/reports/hy-2026-preview.pdf'
    },
    {
      id: 7,
      serialNo: 'FS-2025-007',
      financialYear: '2025-2026',
      title: 'Audited Financial Statements 2025-26',
      period: 'April 2025 - March 2026',
      publishedDate: '2026-07-30',
      pages: 42,
      fileSize: '1.8 MB',
      format: 'PDF',
      downloads: 560,
      views: 1340,
      highlights: {
        beneficiaries: 25000,
        projects: 45,
        volunteers: 350,
        states: 5
      },
      description: 'Detailed financial statements with auditor\'s report and balance sheet.',
      reportUrl: '/reports/fs-2025-26.pdf',
      previewUrl: '/reports/fs-2025-26-preview.pdf'
    },
    {
      id: 8,
      serialNo: 'FS-2024-008',
      financialYear: '2024-2025',
      title: 'Audited Financial Statements 2024-25',
      period: 'April 2024 - March 2025',
      publishedDate: '2025-07-25',
      pages: 38,
      fileSize: '1.6 MB',
      format: 'PDF',
      downloads: 430,
      views: 1120,
      highlights: {
        beneficiaries: 18000,
        projects: 32,
        volunteers: 280,
        states: 4
      },
      description: 'Comprehensive financial report with income-expenditure analysis.',
      reportUrl: '/reports/fs-2024-25.pdf',
      previewUrl: '/reports/fs-2024-25-preview.pdf'
    },
    {
      id: 9,
      serialNo: 'SR-2025-009',
      financialYear: '2025-2026',
      title: 'Social Audit Report 2025-26',
      period: 'April 2025 - March 2026',
      publishedDate: '2026-08-15',
      pages: 88,
      fileSize: '3.5 MB',
      format: 'PDF',
      downloads: 390,
      views: 980,
      highlights: {
        beneficiaries: 25000,
        projects: 45,
        volunteers: 350,
        states: 5
      },
      description: 'Third-party social audit assessing our impact and community feedback.',
      reportUrl: '/reports/sr-2025-26.pdf',
      previewUrl: '/reports/sr-2025-26-preview.pdf'
    },
    {
      id: 10,
      serialNo: 'SR-2024-010',
      financialYear: '2024-2025',
      title: 'Social Audit Report 2024-25',
      period: 'April 2024 - March 2025',
      publishedDate: '2025-08-10',
      pages: 76,
      fileSize: '3.1 MB',
      format: 'PDF',
      downloads: 280,
      views: 760,
      highlights: {
        beneficiaries: 18000,
        projects: 32,
        volunteers: 280,
        states: 4
      },
      description: 'Evaluation of program effectiveness and beneficiary satisfaction.',
      reportUrl: '/reports/sr-2024-25.pdf',
      previewUrl: '/reports/sr-2024-25-preview.pdf'
    }
  ];


  const years = ['all', ...new Set(reportsData.map(report => report.financialYear.split('-')[0]))];


  const filteredReports = reportsData
    .filter(report => 
      (filterYear === 'all' || report.financialYear.startsWith(filterYear)) &&
      (searchTerm === '' || 
        report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.financialYear.includes(searchTerm) ||
        report.serialNo.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (sortOrder === 'desc') {
        return b.financialYear.localeCompare(a.financialYear);
      } else {
        return a.financialYear.localeCompare(b.financialYear);
      }
    });


  const totalPages = Math.ceil(filteredReports.length / reportsPerPage);
  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = filteredReports.slice(indexOfFirstReport, indexOfLastReport);


  const totalDownloads = reportsData.reduce((acc, report) => acc + report.downloads, 0);
  const totalViews = reportsData.reduce((acc, report) => acc + report.views, 0);
  const totalBeneficiaries = reportsData[0]?.highlights.beneficiaries || 0;

  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Annual Reports"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-400 text-sm font-semibold mb-6 border border-amber-500/30">
              ANNUAL REPORTS
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transparency &
              <span className="block text-amber-400">Accountability</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Access our detailed annual reports, financial statements, and impact assessments. We believe in complete transparency.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div>
                <div className="text-2xl font-bold text-amber-400">{reportsData.length}</div>
                <div className="text-sm text-white/60">Total Reports</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400">{totalDownloads.toLocaleString()}+</div>
                <div className="text-sm text-white/60">Downloads</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400">{totalViews.toLocaleString()}+</div>
                <div className="text-sm text-white/60">Views</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400">{totalBeneficiaries.toLocaleString()}+</div>
                <div className="text-sm text-white/60">Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="sticky top-24 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
         
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search reports..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

      
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-slate-500" />
                <select
                  value={filterYear}
                  onChange={(e) => {
                    setFilterYear(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                >
                  <option value="all">All Years</option>
                  {years.filter(y => y !== 'all').map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center space-x-2 border-l border-slate-200 dark:border-slate-700 pl-3">
                <button
                  onClick={() => setSortOrder('desc')}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    sortOrder === 'desc'
                      ? 'bg-amber-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  Newest First
                </button>
                <button
                  onClick={() => setSortOrder('asc')}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    sortOrder === 'asc'
                      ? 'bg-amber-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  Oldest First
                </button>
              </div>
            </div>
          </div>

    
          <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Showing {indexOfFirstReport + 1}-{Math.min(indexOfLastReport, filteredReports.length)} of {filteredReports.length} reports
          </div>
        </div>
      </section>

  
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">S.No.</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">Financial Year</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">Report Title</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">Published</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">Pages</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">Size</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">Downloads</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {currentReports.map((report, index) => (
                    <tr key={report.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                        {indexOfFirstReport + index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-sm font-semibold">
                          {report.financialYear}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-slate-900 dark:text-white">{report.title}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">{report.serialNo}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                        {new Date(report.publishedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">{report.pages}</td>
                      <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">{report.fileSize}</td>
                      <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">{report.downloads.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <a
                            href={report.reportUrl}
                            download
                            className="p-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg hover:bg-amber-200 dark:hover:bg-amber-900/50 transition-colors"
                            title="Download"
                          >
                            <Download className="w-4 h-4" />
                          </a>
                          <a
                            href={report.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                            title="Preview"
                          >
                            <Eye className="w-4 h-4" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

     
            {filteredReports.length === 0 && (
              <div className="text-center py-16">
                <FileText className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No reports found</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>

     
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg transition-colors ${
                  currentPage === 1
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Page {currentPage} of {totalPages}
              </span>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg transition-colors ${
                  currentPage === totalPages
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

 
      <section className="py-12 bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white">
            Report <span className="text-amber-600 dark:text-amber-400">Highlights</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">Financial Transparency</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">100% of donations tracked and reported with audited statements</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                <PieChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">Impact Metrics</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Detailed breakdown of program outcomes and beneficiary reach</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">Stakeholder Feedback</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Community voices and beneficiary testimonials included</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">Third-Party Audits</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Independent verification of our financial and social impact</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnnualReports;