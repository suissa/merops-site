
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Search } from "lucide-react";

const BlastMerops = () => {
  const [sequence, setSequence] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">BLAST MEROPS</h1>
          <p className="text-merops-gray-light">
            Search for similar sequences in the MEROPS database using BLAST. Compare your protein sequence against peptidase and inhibitor sequences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main BLAST Form */}
          <div className="lg:col-span-2">
            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">BLAST Search</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-merops-gray mb-2">
                    Enter your protein sequence (FASTA format or plain text)
                  </label>
                  <textarea
                    value={sequence}
                    onChange={(e) => setSequence(e.target.value)}
                    className="w-full h-64 p-3 border border-merops-green rounded-md focus:ring-merops-green focus:border-merops-green font-mono text-sm"
                    placeholder=">Your_sequence_name&#10;MKALLFLAVLFLTGSQARHFWQQDEPPQSPWDRVKDLATLKLYQGKTIIEDLKKLLTQHFVQENYQK&#10;QFQKDTLYSSLMSSTSSLYLPSGGQIRRTLKSPQKSTGKRKGRLPGIPKGKGLPRKLPRGKKGEKQ"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-merops-gray mb-2">
                      Database
                    </label>
                    <Select defaultValue="all">
                      <SelectTrigger className="border-merops-green text-merops-green">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-merops-green">
                        <SelectItem value="all" className="text-merops-green">All MEROPS sequences</SelectItem>
                        <SelectItem value="peptidases" className="text-merops-green">Peptidase sequences only</SelectItem>
                        <SelectItem value="inhibitors" className="text-merops-green">Inhibitor sequences only</SelectItem>
                        <SelectItem value="holotypes" className="text-merops-green">Holotype sequences</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-merops-gray mb-2">
                      BLAST Program
                    </label>
                    <Select defaultValue="blastp">
                      <SelectTrigger className="border-merops-green text-merops-green">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-merops-green">
                        <SelectItem value="blastp">BLASTP (protein-protein)</SelectItem>
                        <SelectItem value="psi-blast">PSI-BLAST</SelectItem>
                        <SelectItem value="delta-blast">DELTA-BLAST</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-merops-gray mb-2">
                      E-value threshold
                    </label>
                    <Select defaultValue="10">
                      <SelectTrigger className="border-merops-green text-merops-green">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-merops-green">
                        <SelectItem value="1000">1000</SelectItem>
                        <SelectItem value="100">100</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="0.1">0.1</SelectItem>
                        <SelectItem value="0.01">0.01</SelectItem>
                        <SelectItem value="0.001">0.001</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-merops-gray mb-2">
                      Word size
                    </label>
                    <Select defaultValue="3">
                      <SelectTrigger className="border-merops-green text-merops-green">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-merops-green">
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="6">6</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-merops-gray mb-2">
                      Max hits
                    </label>
                    <Select defaultValue="100">
                      <SelectTrigger className="border-merops-green text-merops-green">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-merops-green">
                        <SelectItem value="50">50</SelectItem>
                        <SelectItem value="100">100</SelectItem>
                        <SelectItem value="250">250</SelectItem>
                        <SelectItem value="500">500</SelectItem>
                        <SelectItem value="1000">1000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-merops-gray">Advanced Options</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="low-complexity" defaultChecked />
                        <label htmlFor="low-complexity" className="text-sm text-merops-gray">
                          Filter low complexity regions
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="gapped" defaultChecked />
                        <label htmlFor="gapped" className="text-sm text-merops-gray">
                          Perform gapped alignment
                        </label>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="mask-lookup" />
                        <label htmlFor="mask-lookup" className="text-sm text-merops-gray">
                          Mask for lookup table only
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="composition" defaultChecked />
                        <label htmlFor="composition" className="text-sm text-merops-gray">
                          Composition-based statistics
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button size="lg" className="bg-merops-green hover:bg-merops-green-dark">
                    <Search className="mr-2 h-5 w-5" />
                    Run BLAST
                  </Button>
                  <Button variant="outline" size="lg" className="border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
                    Clear Form
                  </Button>
                  <Button variant="outline" size="lg" className="border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
                    Load Example
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
                  Load Trypsin Example
                </Button>
                <Button variant="outline" className="w-full justify-start border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
                  Load Pepsin Example
                </Button>
                <Button variant="outline" className="w-full justify-start border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
                  View Previous Results
                </Button>
              </CardContent>
            </Card>

            {/* Database Info */}
            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Database Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-merops-gray-light">Total sequences:</span>
                    <span className="font-semibold text-merops-gray">12,847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-merops-gray-light">Peptidases:</span>
                    <span className="font-semibold text-merops-gray">8,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-merops-gray-light">Inhibitors:</span>
                    <span className="font-semibold text-merops-gray">4,613</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-merops-gray-light">Last updated:</span>
                    <span className="font-semibold text-merops-gray">Dec 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Help */}
            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-merops-gray-light">
                    New to BLAST? Check out our tutorials and guides.
                  </p>
                  <div className="space-y-2">
                    <a href="#" className="block text-sm text-merops-green hover:text-merops-green-dark">
                      BLAST Tutorial
                    </a>
                    <a href="#" className="block text-sm text-merops-green hover:text-merops-green-dark">
                      Parameter Guide
                    </a>
                    <a href="#" className="block text-sm text-merops-green hover:text-merops-green-dark">
                      Result Interpretation
                    </a>
                    <a href="#" className="block text-sm text-merops-green hover:text-merops-green-dark">
                      FAQ
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tips */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-merops-gray">BLAST Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-merops-gray mb-3">Sequence Input</h3>
                <ul className="text-sm text-merops-gray-light space-y-1">
                  <li>• Paste sequence in FASTA format or plain text</li>
                  <li>• Remove any non-amino acid characters</li>
                  <li>• Use standard single-letter amino acid codes</li>
                  <li>• Sequences should be at least 20 amino acids long</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-merops-gray mb-3">Parameter Selection</h3>
                <ul className="text-sm text-merops-gray-light space-y-1">
                  <li>• Lower E-value = more stringent search</li>
                  <li>• Higher word size = faster but less sensitive</li>
                  <li>• Use PSI-BLAST for distant homologs</li>
                  <li>• Filter low complexity for cleaner results</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlastMerops;
