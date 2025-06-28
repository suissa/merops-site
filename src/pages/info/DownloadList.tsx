
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const DownloadList = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">Downloads</h1>
          <p className="text-merops-gray-light">
            Download MEROPS data files for offline analysis and bulk processing
          </p>
        </div>

        <div className="space-y-8">
          {/* Complete Database */}
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">Complete Database Downloads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-merops-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-merops-gray mb-3">MEROPS Complete Release</h3>
                  <p className="text-merops-gray-light text-sm mb-4">
                    Complete database dump including all peptidase entries, families, clans, and annotations.
                  </p>
                  <div className="space-y-2 text-sm text-merops-gray-light mb-4">
                    <p><strong>Format:</strong> SQL dump</p>
                    <p><strong>Size:</strong> 245 MB</p>
                    <p><strong>Updated:</strong> December 2024</p>
                  </div>
                  <Button className="w-full bg-merops-green hover:bg-merops-green-dark">
                    <ArrowDown className="mr-2 h-4 w-4" />
                    Download SQL Dump
                  </Button>
                </div>

                <div className="border border-merops-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-merops-gray mb-3">MEROPS Flat Files</h3>
                  <p className="text-merops-gray-light text-sm mb-4">
                    Tab-delimited text files for easy parsing and analysis.
                  </p>
                  <div className="space-y-2 text-sm text-merops-gray-light mb-4">
                    <p><strong>Format:</strong> TSV files</p>
                    <p><strong>Size:</strong> 89 MB</p>
                    <p><strong>Updated:</strong> December 2024</p>
                  </div>
                  <Button className="w-full bg-merops-green hover:bg-merops-green-dark">
                    <ArrowDown className="mr-2 h-4 w-4" />
                    Download TSV Files
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sequence Data */}
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">Sequence Downloads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-merops-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-merops-gray mb-2">All Peptidase Sequences</h3>
                  <p className="text-sm text-merops-gray-light mb-3">FASTA format sequences for all peptidases</p>
                  <div className="text-xs text-merops-gray-light mb-3">
                    <p>5,234 sequences • 56 MB</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
                    <ArrowDown className="mr-2 h-3 w-3" />
                    Download FASTA
                  </Button>
                </div>

                <div className="border border-merops-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-merops-gray mb-2">Holotype Sequences</h3>
                  <p className="text-sm text-merops-gray-light mb-3">Representative sequences for each family</p>
                  <div className="text-xs text-merops-gray-light mb-3">
                    <p>312 sequences • 2.1 MB</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
                    <ArrowDown className="mr-2 h-3 w-3" />
                    Download FASTA
                  </Button>
                </div>

                <div className="border border-merops-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-merops-gray mb-2">Inhibitor Sequences</h3>
                  <p className="text-sm text-merops-gray-light mb-3">All peptidase inhibitor sequences</p>
                  <div className="text-xs text-merops-gray-light mb-3">
                    <p>1,245 sequences • 8.7 MB</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
                    <ArrowDown className="mr-2 h-3 w-3" />
                    Download FASTA
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Specialized Downloads */}
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">Specialized Downloads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-merops-gray">Family Classification</h3>
                      <p className="text-sm text-merops-gray-light">Family and clan assignments</p>
                      <p className="text-xs text-merops-gray-light">JSON format • 1.2 MB</p>
                    </div>
                    <Button variant="outline" size="sm" className="border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
                      <ArrowDown className="mr-2 h-3 w-3" />
                      Download
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-merops-gray">Substrate Data</h3>
                      <p className="text-sm text-merops-gray-light">Known substrates and cleavage sites</p>
                      <p className="text-xs text-merops-gray-light">CSV format • 3.4 MB</p>
                    </div>
                    <Button variant="outline" size="sm" className="border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
                      <ArrowDown className="mr-2 h-3 w-3" />
                      Download
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-merops-gray">Inhibitor Data</h3>
                      <p className="text-sm text-merops-gray-light">Inhibitor information and Ki values</p>
                      <p className="text-xs text-merops-gray-light">CSV format • 2.1 MB</p>
                    </div>
                    <Button variant="outline" size="sm" className="border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
                      <ArrowDown className="mr-2 h-3 w-3" />
                      Download
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-merops-gray">Structure Mappings</h3>
                      <p className="text-sm text-merops-gray-light">PDB structure cross-references</p>
                      <p className="text-xs text-merops-gray-light">TSV format • 567 KB</p>
                    </div>
                    <Button variant="outline" size="sm" className="border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
                      <ArrowDown className="mr-2 h-3 w-3" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* API and Tools */}
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">API and Programmatic Access</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-merops-gray mb-3">REST API</h3>
                  <p className="text-merops-gray-light text-sm mb-4">
                    Access MEROPS data programmatically through our REST API. Perfect for automated data retrieval and integration.
                  </p>
                  <div className="space-y-2 text-sm text-merops-gray-light mb-4">
                    <p><strong>Base URL:</strong> https://api.merops.org/v1/</p>
                    <p><strong>Format:</strong> JSON</p>
                    <p><strong>Rate limit:</strong> 1000 requests/hour</p>
                  </div>
                  <Button variant="outline" className="border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
                    API Documentation
                  </Button>
                </div>

                <div>
                  <h3 className="font-semibold text-merops-gray mb-3">Python Package</h3>
                  <p className="text-merops-gray-light text-sm mb-4">
                    Official Python package for easy access to MEROPS data from Python scripts and Jupyter notebooks.
                  </p>
                  <div className="space-y-2 text-sm text-merops-gray-light mb-4">
                    <p><strong>Installation:</strong> pip install merops-db</p>
                    <p><strong>Version:</strong> 1.2.3</p>
                    <p><strong>Python:</strong> 3.7+</p>
                  </div>
                  <Button variant="outline" className="border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
                    View on PyPI
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage Terms */}
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">Usage Terms and Attribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-merops max-w-none">
                <h3 className="font-semibold text-merops-gray mb-3">License</h3>
                <p className="text-merops-gray-light mb-4">
                  MEROPS data is freely available under the Creative Commons Attribution 4.0 International License (CC BY 4.0). 
                  You are free to use, share, and adapt the material for any purpose, even commercially.
                </p>
                
                <h3 className="font-semibold text-merops-gray mb-3">Citation</h3>
                <p className="text-merops-gray-light mb-2">
                  When using MEROPS data in publications, please cite:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm text-merops-gray">
                  Rawlings, N.D., Barrett, A.J., Thomas, P.D., Huang, X., Bateman, A. and Finn, R.D. (2024)
                  The MEROPS database of proteolytic enzymes, their substrates and inhibitors in 2024 and a comparison with peptidases in the PANTHER database.
                  Nucleic Acids Res. 52, D384-D392.
                </div>
                
                <h3 className="font-semibold text-merops-gray mb-3 mt-6">Contact</h3>
                <p className="text-merops-gray-light">
                  For questions about data usage or bulk downloads, contact: merops@ebi.ac.uk
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DownloadList;
