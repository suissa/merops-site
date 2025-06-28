import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const Submissions = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">Submissions</h1>
          <p className="text-merops-gray-light">
            Submit new peptidase data, corrections, or suggestions to the MEROPS database. Your contributions help keep MEROPS comprehensive and up-to-date.
          </p>
        </div>

        {/* Submission Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Submit Data to MEROPS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Submission Type */}
                <div>
                  <label className="block text-sm font-medium text-merops-gray mb-2">
                    Submission Type *
                  </label>
                  <Select defaultValue="">
                    <SelectTrigger className="border-merops-green">
                      <SelectValue placeholder="Select submission type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="new-peptidase">New peptidase</SelectItem>
                      <SelectItem value="correction">Data correction</SelectItem>
                      <SelectItem value="substrate">Substrate/inhibitor data</SelectItem>
                      <SelectItem value="structure">Structure information</SelectItem>
                      <SelectItem value="literature">Literature reference</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-merops-gray mb-2">
                      Your Name *
                    </label>
                    <Input
                      placeholder="Enter your full name"
                      className="border-merops-green focus:ring-merops-green"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-merops-gray mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@institution.edu"
                      className="border-merops-green focus:ring-merops-green"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-merops-gray mb-2">
                      Institution
                    </label>
                    <Input
                      placeholder="Your institution or organization"
                      className="border-merops-green focus:ring-merops-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-merops-gray mb-2">
                      Country
                    </label>
                    <Select defaultValue="">
                      <SelectTrigger className="border-merops-green">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="jp">Japan</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Peptidase Information */}
                <div>
                  <h3 className="font-semibold text-merops-gray mb-4">Peptidase Information</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-merops-gray mb-2">
                          Peptidase Name
                        </label>
                        <Input
                          placeholder="Common or systematic name"
                          className="border-merops-green focus:ring-merops-green"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-merops-gray mb-2">
                          MEROPS ID (if known)
                        </label>
                        <Input
                          placeholder="e.g., M01.001"
                          className="border-merops-green focus:ring-merops-green"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-merops-gray mb-2">
                          Organism
                        </label>
                        <Input
                          placeholder="e.g., Homo sapiens"
                          className="border-merops-green focus:ring-merops-green"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-merops-gray mb-2">
                          Gene Name
                        </label>
                        <Input
                          placeholder="e.g., ACE, ANPEP"
                          className="border-merops-green focus:ring-merops-green"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-merops-gray mb-2">
                        Protein Sequence (FASTA format)
                      </label>
                      <textarea
                        className="w-full h-32 p-3 border border-merops-green rounded-md focus:ring-merops-green focus:border-merops-green font-mono text-sm"
                        placeholder=">Peptidase_name&#10;MKALLFLAVLFLTGSQARHFWQQDEPPQSPWDRVKDLATLKLYQGKTIIEDLKKLLTQHF"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-medium text-merops-gray mb-2">
                    Description and Comments
                  </label>
                  <textarea
                    className="w-full h-32 p-3 border border-merops-green rounded-md focus:ring-merops-green focus:border-merops-green"
                    placeholder="Provide detailed information about the peptidase, experimental data, substrate specificity, biological function, etc."
                  />
                </div>

                {/* Literature Reference */}
                <div>
                  <label className="block text-sm font-medium text-merops-gray mb-2">
                    Literature Reference
                  </label>
                  <textarea
                    className="w-full h-24 p-3 border border-merops-green rounded-md focus:ring-merops-green focus:border-merops-green"
                    placeholder="Please provide the full citation for relevant publications (PubMed ID if available)"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-merops-gray mb-2">
                    Attach Files (optional)
                  </label>
                  <div className="border-2 border-dashed border-merops-green-200 rounded-lg p-6 text-center">
                    <p className="text-merops-gray-light mb-2">
                      Drag and drop files here, or click to select files
                    </p>
                    <Button variant="outline" className="border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
                      Choose Files
                    </Button>
                    <p className="text-xs text-merops-gray-light mt-2">
                      Accepted formats: PDF, DOC, TXT, FASTA (max 10MB each)
                    </p>
                  </div>
                </div>

                {/* Consent */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="consent-data" required />
                    <label htmlFor="consent-data" className="text-sm text-merops-gray">
                      I consent to the inclusion of this data in the MEROPS database *
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="consent-contact" />
                    <label htmlFor="consent-contact" className="text-sm text-merops-gray">
                      I agree to be contacted for clarification if needed
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="attribution" />
                    <label htmlFor="attribution" className="text-sm text-merops-gray">
                      I would like to be acknowledged as a contributor
                    </label>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button size="lg" className="bg-merops-green hover:bg-merops-green-dark">
                    Submit Data
                  </Button>
                  <Button variant="outline" size="lg" className="border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
                    Save Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Submission Guidelines */}
            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Submission Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-merops-gray mb-2">Before Submitting</h4>
                    <ul className="text-merops-gray-light space-y-1">
                      <li>• Check if the peptidase already exists in MEROPS</li>
                      <li>• Ensure you have experimental evidence</li>
                      <li>• Include relevant literature references</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-merops-gray mb-2">Required Information</h4>
                    <ul className="text-merops-gray-light space-y-1">
                      <li>• Protein sequence (if available)</li>
                      <li>• Organism source</li>
                      <li>• Evidence for peptidase activity</li>
                      <li>• Your contact information</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p className="text-merops-gray-light">
                    Questions about submissions? Contact the MEROPS team:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> merops@ebi.ac.uk</p>
                    <p><strong>Response time:</strong> 2-5 business days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Community Contributions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-center">
                  <div>
                    <div className="text-2xl font-bold text-merops-green">500+</div>
                    <div className="text-sm text-merops-gray-light">Submissions this year</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-merops-green">150+</div>
                    <div className="text-sm text-merops-gray-light">Contributors worldwide</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-merops-green">95%</div>
                    <div className="text-sm text-merops-gray-light">Acceptance rate</div>
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

export default Submissions;
