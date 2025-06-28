
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">About MEROPS</h1>
          <p className="text-xl text-merops-gray-light">
            The comprehensive database for peptidases and their inhibitors
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">What is MEROPS?</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-merops max-w-none">
              <p className="text-merops-gray-light text-lg leading-relaxed">
                MEROPS is a comprehensive database of information about peptidases (also known as proteases, proteinases and proteolytic enzymes) and the proteins that inhibit them. The database is freely available and is updated regularly.
              </p>
              <p className="text-merops-gray-light">
                The MEROPS database contains information on the sequences, structures, evolution, and classification of peptidases. It includes data on substrates, inhibitors, and the biological roles of peptidases across all kingdoms of life.
              </p>
            </CardContent>
          </Card>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Database Contents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-merops-gray-light">
                  <li>• Over 5,000 characterized peptidases</li>
                  <li>• 300+ peptidase families</li>
                  <li>• 80+ clans based on evolutionary relationships</li>
                  <li>• Sequences from 2,000+ species</li>
                  <li>• Substrate and inhibitor information</li>
                  <li>• 3D structural data</li>
                  <li>• Comprehensive literature references</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Classification System</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-merops-gray-light">
                  <li>• <strong>Families:</strong> Groups with similar sequences and structures</li>
                  <li>• <strong>Clans:</strong> Families with common evolutionary origin</li>
                  <li>• <strong>Catalytic types:</strong> Based on chemical mechanism</li>
                  <li>• <strong>Hierarchical nomenclature:</strong> Systematic naming system</li>
                  <li>• <strong>Evolutionary relationships:</strong> Phylogenetic analysis</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* History */}
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-merops-gray mb-3">Development Timeline</h3>
                  <div className="space-y-3 text-sm">
                    <div className="border-l-2 border-merops-green pl-4">
                      <div className="font-semibold text-merops-gray">1996</div>
                      <div className="text-merops-gray-light">MEROPS database first released</div>
                    </div>
                    <div className="border-l-2 border-merops-green pl-4">
                      <div className="font-semibold text-merops-gray">2000</div>
                      <div className="text-merops-gray-light">Web interface launched</div>
                    </div>
                    <div className="border-l-2 border-merops-green pl-4">
                      <div className="font-semibold text-merops-gray">2010</div>
                      <div className="text-merops-gray-light">Major restructuring and expansion</div>
                    </div>
                    <div className="border-l-2 border-merops-green pl-4">
                      <div className="font-semibold text-merops-gray">2020</div>
                      <div className="text-merops-gray-light">Modern web interface introduced</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-merops-gray mb-3">Key Milestones</h3>
                  <ul className="space-y-2 text-merops-gray-light text-sm">
                    <li>• First systematic classification of peptidases</li>
                    <li>• Introduction of clan concept</li>
                    <li>• Integration with structural databases</li>
                    <li>• Development of sequence analysis tools</li>
                    <li>• Community contribution system</li>
                    <li>• Regular release schedule established</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team */}
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">MEROPS Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-merops-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl font-bold text-merops-green">NR</span>
                  </div>
                  <h3 className="font-semibold text-merops-gray">Neil Rawlings</h3>
                  <p className="text-sm text-merops-gray-light">Database Curator</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-merops-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl font-bold text-merops-green">AB</span>
                  </div>
                  <h3 className="font-semibold text-merops-gray">Alan Barrett</h3>
                  <p className="text-sm text-merops-gray-light">Founder</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-merops-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl font-bold text-merops-green">RB</span>
                  </div>
                  <h3 className="font-semibold text-merops-gray">Richard Baetens</h3>
                  <p className="text-sm text-merops-gray-light">Web Developer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Funding */}
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">Funding and Support</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-merops-gray mb-3">Current Funding</h3>
                  <ul className="space-y-2 text-merops-gray-light">
                    <li>• European Molecular Biology Laboratory (EMBL)</li>
                    <li>• European Bioinformatics Institute (EBI)</li>
                    <li>• Wellcome Trust</li>
                    <li>• Biotechnology and Biological Sciences Research Council (BBSRC)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-merops-gray mb-3">Past Support</h3>
                  <ul className="space-y-2 text-merops-gray-light">
                    <li>• National Institutes of Health (NIH)</li>
                    <li>• Medical Research Council (MRC)</li>
                    <li>• Various pharmaceutical companies</li>
                    <li>• Academic collaborations worldwide</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-merops-gray mb-3">General Inquiries</h3>
                  <div className="space-y-2 text-merops-gray-light">
                    <p><strong>Email:</strong> merops@ebi.ac.uk</p>
                    <p><strong>Website:</strong> https://www.ebi.ac.uk/merops/</p>
                    <p><strong>Address:</strong><br/>
                    European Bioinformatics Institute<br/>
                    Wellcome Genome Campus<br/>
                    Hinxton, Cambridge CB10 1SD<br/>
                    United Kingdom</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-merops-gray mb-3">Data Submissions</h3>
                  <div className="space-y-2 text-merops-gray-light">
                    <p>We welcome submissions of new peptidase data, corrections, and suggestions.</p>
                    <p><strong>Submission portal:</strong> Available through our website</p>
                    <p><strong>Response time:</strong> Typically 2-5 business days</p>
                    <p><strong>Acknowledgment:</strong> Contributors are acknowledged in release notes</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
