
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StatisticsIndex = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">Database Statistics</h1>
          <p className="text-merops-gray-light">
            Comprehensive statistics about the content and growth of the MEROPS database
          </p>
        </div>

        <div className="space-y-8">
          {/* Overview Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-merops-green">5,234</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-merops-gray">Total Peptidases</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-merops-green">312</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-merops-gray">Families</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-merops-green">84</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-merops-gray">Clans</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-merops-green">2,567</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-merops-gray">Species</p>
              </CardContent>
            </Card>
          </div>

          {/* Catalytic Type Distribution */}
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">Distribution by Catalytic Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-merops-gray">Metallopeptidases</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <span className="text-merops-gray font-semibold">2,355 (45%)</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-merops-gray">Serine peptidases</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full" style={{width: '35%'}}></div>
                      </div>
                      <span className="text-merops-gray font-semibold">1,832 (35%)</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-merops-gray">Cysteine peptidases</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-600 h-2 rounded-full" style={{width: '12%'}}></div>
                      </div>
                      <span className="text-merops-gray font-semibold">628 (12%)</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-merops-gray">Aspartic peptidases</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{width: '5%'}}></div>
                      </div>
                      <span className="text-merops-gray font-semibold">262 (5%)</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-merops-gray">Threonine peptidases</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '2%'}}></div>
                      </div>
                      <span className="text-merops-gray font-semibold">105 (2%)</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-merops-gray">Glutamic peptidases</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-indigo-600 h-2 rounded-full" style={{width: '1%'}}></div>
                      </div>
                      <span className="text-merops-gray font-semibold">52 (1%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Family Distribution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Largest Families</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-merops-gray">S1 (Chymotrypsin)</span>
                    <span className="font-semibold text-merops-green">234 peptidases</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-merops-gray">M1 (Aminopeptidase N)</span>
                    <span className="font-semibold text-merops-green">187 peptidases</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-merops-gray">C1 (Papain)</span>
                    <span className="font-semibold text-merops-green">156 peptidases</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-merops-gray">M12 (Astacin)</span>
                    <span className="font-semibold text-merops-green">145 peptidases</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-merops-gray">S8 (Subtilisin)</span>
                    <span className="font-semibold text-merops-green">132 peptidases</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Organism Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-merops-gray">Bacteria</span>
                    <span className="font-semibold text-merops-green">1,245 species</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-merops-gray">Eukaryota</span>
                    <span className="font-semibold text-merops-green">987 species</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-merops-gray">Archaea</span>
                    <span className="font-semibold text-merops-green">234 species</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-merops-gray">Viruses</span>
                    <span className="font-semibold text-merops-green">101 species</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Growth Statistics */}
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">Database Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-merops-gray mb-3">Annual Growth</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-merops-gray-light">2024</span>
                      <span className="font-semibold text-merops-green">+287 entries</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-merops-gray-light">2023</span>
                      <span className="font-semibold text-merops-green">+312 entries</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-merops-gray-light">2022</span>
                      <span className="font-semibold text-merops-green">+298 entries</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-merops-gray-light">2021</span>
                      <span className="font-semibold text-merops-green">+245 entries</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-merops-gray mb-3">Recent Updates</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-merops-gray-light">New families</span>
                      <span className="font-semibold text-merops-green">8 this year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-merops-gray-light">New clans</span>
                      <span className="font-semibold text-merops-green">2 this year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-merops-gray-light">Corrections</span>
                      <span className="font-semibold text-merops-green">156 this year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-merops-gray-light">New substrates</span>
                      <span className="font-semibold text-merops-green">89 this year</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-merops-gray mb-3">Data Quality</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-merops-gray-light">With sequences</span>
                      <span className="font-semibold text-merops-green">98.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-merops-gray-light">With structures</span>
                      <span className="font-semibold text-merops-green">23.4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-merops-gray-light">With substrates</span>
                      <span className="font-semibold text-merops-green">67.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-merops-gray-light">With inhibitors</span>
                      <span className="font-semibold text-merops-green">45.2%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Website Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-merops-green">2.5M+</div>
                    <div className="text-merops-gray-light">Page views per year</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-merops-green">85K</div>
                      <div className="text-sm text-merops-gray-light">Monthly users</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-merops-green">150+</div>
                      <div className="text-sm text-merops-gray-light">Countries</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Popular Searches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-merops-gray">Trypsin</span>
                    <span className="text-merops-gray-light text-sm">12,450 searches</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-merops-gray">Pepsin</span>
                    <span className="text-merops-gray-light text-sm">8,234 searches</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-merops-gray">Cathepsin</span>
                    <span className="text-merops-gray-light text-sm">6,789 searches</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-merops-gray">ACE</span>
                    <span className="text-merops-gray-light text-sm">5,432 searches</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-merops-gray">Chymotrypsin</span>
                    <span className="text-merops-gray-light text-sm">4,567 searches</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsIndex;
