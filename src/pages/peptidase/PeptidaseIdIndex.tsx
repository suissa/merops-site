
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const PeptidaseIdIndex = () => {
  const [searchId, setSearchId] = useState("");
  const [selectedFamily, setSelectedFamily] = useState("");

  const mockPeptidases = [
    { id: "M01.001", name: "Aminopeptidase N", family: "M1", clan: "MA", mechanism: "Metallo", organism: "Homo sapiens" },
    { id: "M01.002", name: "Alanyl aminopeptidase", family: "M1", clan: "MA", mechanism: "Metallo", organism: "Pseudomonas putida" },
    { id: "M02.001", name: "Angiotensin-converting enzyme", family: "M2", clan: "MA", mechanism: "Metallo", organism: "Homo sapiens" },
    { id: "S01.001", name: "Chymotrypsin A", family: "S1", clan: "PA", mechanism: "Serine", organism: "Bos taurus" },
    { id: "S01.302", name: "Alpha-lytic endopeptidase", family: "S1", clan: "PA", mechanism: "Serine", organism: "Lysobacter enzymogenes" },
  ];

  const families = ["M1", "M2", "S1", "S28", "C1", "A1"];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">Peptidase ID Index</h1>
          <p className="text-merops-gray-light">
            Browse peptidases by their MEROPS identifier. Each peptidase has a unique ID consisting of the family identifier followed by a serial number.
          </p>
        </div>

        {/* Search by ID */}
        <Card className="mb-8 bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">Search by ID</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Enter peptidase ID (e.g., M01.001)..."
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="border-merops-green focus:ring-merops-green"
                />
              </div>
              <Button className="bg-merops-green hover:bg-merops-green-dark">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Browse by Family */}
        <Card className="mb-8 bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">Browse by Family</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {families.map((family) => (
                <Button
                  key={family}
                  variant={selectedFamily === family ? "default" : "outline"}
                  onClick={() => setSelectedFamily(family)}
                  className={selectedFamily === family ? "bg-merops-green hover:bg-merops-green-dark" : "border-merops-green text-merops-green hover:bg-merops-green hover:text-white"}
                >
                  {family}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ID Format Information */}
        <Card className="mb-8 bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">MEROPS ID Format</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-merops-gray mb-3">ID Structure</h3>
                <div className="space-y-2 text-sm text-merops-gray-light">
                  <p><strong>Format:</strong> [Family][Serial Number]</p>
                  <p><strong>Example:</strong> M01.001</p>
                  <p><strong>M01:</strong> Family identifier</p>
                  <p><strong>001:</strong> Serial number within family</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-merops-gray mb-3">Family Prefixes</h3>
                <div className="space-y-1 text-sm text-merops-gray-light">
                  <p><strong>M:</strong> Metallopeptidases</p>
                  <p><strong>S:</strong> Serine peptidases</p>
                  <p><strong>C:</strong> Cysteine peptidases</p>
                  <p><strong>A:</strong> Aspartic peptidases</p>
                  <p><strong>G:</strong> Glutamic peptidases</p>
                  <p><strong>T:</strong> Threonine peptidases</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Table */}
        <Card className="bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">
              Peptidase Entries {selectedFamily && `- Family ${selectedFamily}`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">ID</th>
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">Family</th>
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">Clan</th>
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">Mechanism</th>
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">Organism</th>
                  </tr>
                </thead>
                <tbody>
                  {mockPeptidases
                    .filter(p => !selectedFamily || p.family === selectedFamily)
                    .map((peptidase, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-merops-green-50 transition-colors">
                      <td className="py-3 px-4">
                        <a href="#" className="text-merops-green hover:text-merops-green-dark font-mono font-semibold">
                          {peptidase.id}
                        </a>
                      </td>
                      <td className="py-3 px-4">
                        <a href="#" className="text-merops-gray hover:text-merops-green">
                          {peptidase.name}
                        </a>
                      </td>
                      <td className="py-3 px-4">
                        <a href="#" className="text-merops-green hover:text-merops-green-dark">
                          {peptidase.family}
                        </a>
                      </td>
                      <td className="py-3 px-4">
                        <a href="#" className="text-merops-green hover:text-merops-green-dark">
                          {peptidase.clan}
                        </a>
                      </td>
                      <td className="py-3 px-4 text-merops-gray-light">{peptidase.mechanism}</td>
                      <td className="py-3 px-4 text-merops-gray-light">{peptidase.organism}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Batch Search */}
        <Card className="mt-8 bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">Batch ID Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-merops-gray mb-2">
                  Enter multiple IDs (one per line or comma-separated)
                </label>
                <textarea
                  className="w-full h-24 p-3 border border-merops-green rounded-md focus:ring-merops-green focus:border-merops-green"
                  placeholder="M01.001&#10;M02.001&#10;S01.001"
                />
              </div>
              <Button className="bg-merops-green hover:bg-merops-green-dark">
                Search Multiple IDs
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PeptidaseIdIndex;
