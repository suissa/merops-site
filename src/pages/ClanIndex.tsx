
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const ClanIndex = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const mockClans = [
    { 
      id: "MA", 
      name: "Metallo clan MA", 
      type: "Metallopeptidase", 
      families: ["M1", "M2", "M3", "M4", "M5"],
      description: "Zinc-dependent peptidases with thermolysin-like fold"
    },
    { 
      id: "PA", 
      name: "Serine clan PA", 
      type: "Serine peptidase", 
      families: ["S1", "S3", "S6", "S7"],
      description: "Chymotrypsin-like serine peptidases"
    },
    { 
      id: "CA", 
      name: "Cysteine clan CA", 
      type: "Cysteine peptidase", 
      families: ["C1", "C2", "C19"],
      description: "Papain-like cysteine peptidases"
    },
    { 
      id: "AA", 
      name: "Aspartic clan AA", 
      type: "Aspartic peptidase", 
      families: ["A1", "A2", "A3"],
      description: "Pepsin-like aspartic peptidases"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">Clan Index</h1>
          <p className="text-merops-gray-light">
            Browse peptidase clans. Clans are groups of families for which there is evidence of common evolutionary origin, but which may not share sequence similarity.
          </p>
        </div>

        {/* Search */}
        <Card className="mb-8 bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">Search Clans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="Enter clan name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-merops-green focus:ring-merops-green"
              />
              <Button className="bg-merops-green hover:bg-merops-green-dark">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Clan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {mockClans.map((clan) => (
            <Card key={clan.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-merops-green border-merops-green bg-white hover:bg-merops-green-50">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-merops-gray">
                      <a href="#" className="text-merops-green hover:text-merops-green-dark text-2xl">
                        {clan.id}
                      </a>
                    </CardTitle>
                    <p className="text-sm text-merops-gray-light mt-1">{clan.name}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    clan.type.includes('Metallo') ? 'bg-blue-100 text-blue-800' :
                    clan.type.includes('Serine') ? 'bg-red-100 text-red-800' :
                    clan.type.includes('Cysteine') ? 'bg-green-100 text-green-800' :
                    clan.type.includes('Aspartic') ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {clan.type}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-merops-gray-light">
                    {clan.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-merops-gray mb-2">Families ({clan.families.length})</h4>
                    <div className="flex flex-wrap gap-2">
                      {clan.families.map((family) => (
                        <a 
                          key={family}
                          href="#" 
                          className="px-2 py-1 bg-merops-green-100 text-merops-green rounded text-sm font-semibold hover:bg-merops-green hover:text-white transition-colors"
                        >
                          {family}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Clan Information */}
        <Card className="bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">Understanding Peptidase Clans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-merops-gray mb-3">Clan Definition</h3>
                <div className="space-y-2 text-sm text-merops-gray-light">
                  <p>A clan is a group of families for which there is evidence of common evolutionary origin.</p>
                  <p>Evidence includes:</p>
                  <p>• Similar protein folds</p>
                  <p>• Conserved active site residues</p>
                  <p>• Similar catalytic mechanisms</p>
                  <p>• Structural similarities</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-merops-gray mb-3">Clan Nomenclature</h3>
                <div className="space-y-2 text-sm text-merops-gray-light">
                  <p>Clans are designated by two letters:</p>
                  <p><strong>First letter:</strong> Catalytic type (M, S, C, A, T, G)</p>
                  <p><strong>Second letter:</strong> Alphabetical designation</p>
                  <p>Example: MA = First metallopeptidase clan</p>
                  <p>Clans may contain families of different catalytic types if they share evolutionary origin.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClanIndex;
