
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WhatsNew = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">What's New</h1>
          <p className="text-merops-gray-light">
            Latest updates, new features, and announcements for the MEROPS database
          </p>
        </div>

        <div className="space-y-8">
          {/* Latest Release */}
          <Card className="border-l-4 border-l-merops-green bg-transparent border-merops-green">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-merops-gray">Release 12.5</CardTitle>
                  <p className="text-merops-gray-light">December 15, 2024</p>
                </div>
                <span className="bg-merops-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Latest
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="font-semibold text-merops-gray">Major Updates</h3>
                <ul className="space-y-2 text-merops-gray-light">
                  <li>• Added 87 new peptidase entries from recent literature</li>
                  <li>• Updated family classifications for 23 peptidases based on new structural data</li>
                  <li>• Enhanced BLAST interface with improved result visualization</li>
                  <li>• New substrate specificity data for 156 peptidases</li>
                  <li>• Improved mobile responsiveness across all pages</li>
                </ul>
                
                <h3 className="font-semibold text-merops-gray">Database Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="text-center p-3 bg-merops-green-50 rounded">
                    <div className="text-xl font-bold text-merops-green">5,234</div>
                    <div className="text-sm text-merops-gray-light">Total Peptidases</div>
                  </div>
                  <div className="text-center p-3 bg-merops-green-50 rounded">
                    <div className="text-xl font-bold text-merops-green">312</div>
                    <div className="text-sm text-merops-gray-light">Families</div>
                  </div>
                  <div className="text-center p-3 bg-merops-green-50 rounded">
                    <div className="text-xl font-bold text-merops-green">84</div>
                    <div className="text-sm text-merops-gray-light">Clans</div>
                  </div>
                  <div className="text-center p-3 bg-merops-green-50 rounded">
                    <div className="text-xl font-bold text-merops-green">2,567</div>
                    <div className="text-sm text-merops-gray-light">Species</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Previous Releases */}
          <div className="space-y-6">
            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Release 12.4</CardTitle>
                <p className="text-merops-gray-light">September 2024</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-merops-gray-light">
                  <li>• New BLAST algorithm implementation for faster searches</li>
                  <li>• Integration with UniProt KB for enhanced protein annotations</li>
                  <li>• Updated organism taxonomy following NCBI changes</li>
                  <li>• Added 45 new inhibitor entries</li>
                  <li>• Performance improvements for large queries</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Release 12.3</CardTitle>
                <p className="text-merops-gray-light">June 2024</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-merops-gray-light">
                  <li>• Major update to family M1 with new structural insights</li>
                  <li>• Added COVID-19 related peptidase research findings</li>
                  <li>• Enhanced search functionality with boolean operators</li>
                  <li>• New download formats for bulk data access</li>
                  <li>• Updated API documentation and examples</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Release 12.2</CardTitle>
                <p className="text-merops-gray-light">March 2024</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-merops-gray-light">
                  <li>• Comprehensive review and update of clan assignments</li>
                  <li>• New substrate cleavage site database</li>
                  <li>• Improved cross-references to PDB structures</li>
                  <li>• Enhanced mobile interface design</li>
                  <li>• Bug fixes and performance optimizations</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Features */}
          <Card className="border-l-4 border-l-blue-500 bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">Upcoming Features</CardTitle>
              <p className="text-merops-gray-light">Planned for 2025</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="font-semibold text-merops-gray">Q1 2025</h3>
                <ul className="space-y-2 text-merops-gray-light">
                  <li>• AI-powered peptidase function prediction</li>
                  <li>• Interactive 3D structure viewer</li>
                  <li>• Advanced phylogenetic analysis tools</li>
                </ul>
                
                <h3 className="font-semibold text-merops-gray">Q2 2025</h3>
                <ul className="space-y-2 text-merops-gray-light">
                  <li>• Integration with AlphaFold structure predictions</li>
                  <li>• Enhanced substrate prediction algorithms</li>
                  <li>• Community annotation system</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* News and Announcements */}
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">Recent News</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-merops-gray mb-2">MEROPS Workshop 2024</h3>
                  <p className="text-sm text-merops-gray-light mb-2">November 15, 2024</p>
                  <p className="text-merops-gray-light">
                    Registration is now open for the annual MEROPS workshop focusing on peptidase bioinformatics and drug discovery applications. The workshop will be held virtually on December 10-11, 2024.
                  </p>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-merops-gray mb-2">New Collaboration with PDB</h3>
                  <p className="text-sm text-merops-gray-light mb-2">October 20, 2024</p>
                  <p className="text-merops-gray-light">
                    MEROPS has established a new collaboration with the Protein Data Bank to provide enhanced structural annotations for peptidase entries.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-merops-gray mb-2">Server Migration Complete</h3>
                  <p className="text-sm text-merops-gray-light mb-2">September 5, 2024</p>
                  <p className="text-merops-gray-light">
                    The MEROPS database has been successfully migrated to new servers, resulting in improved performance and reliability.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">Usage Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-merops-green mb-2">2.5M+</div>
                  <div className="text-merops-gray-light">Annual page views</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-merops-green mb-2">85,000+</div>
                  <div className="text-merops-gray-light">Unique users per month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-merops-green mb-2">150+</div>
                  <div className="text-merops-gray-light">Countries represented</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Newsletter Signup */}
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">Stay Updated</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-merops-gray-light mb-4">
                Subscribe to our newsletter to receive notifications about new releases, features, and announcements.
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 p-3 border border-merops-green rounded-md focus:ring-merops-green focus:border-merops-green"
                />
                <button className="px-6 py-3 bg-merops-green text-white rounded-md hover:bg-merops-green-dark transition-colors">
                  Subscribe
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
