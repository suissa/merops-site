import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { Listbox } from "@headlessui/react";
const FamilyIndex = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCatalyticType, setSelectedCatalyticType] = useState("");

  const mockFamilies = [
    { 
      id: "M1", 
      name: "Aminopeptidase N family", 
      clan: "MA", 
      type: "Metallo", 
      peptidases: 45,
      description: "Zinc-dependent aminopeptidases with broad substrate specificity"
    },
    { 
      id: "M2", 
      name: "Angiotensin-converting enzyme family", 
      clan: "MA", 
      type: "Metallo", 
      peptidases: 12,
      description: "Dipeptidyl carboxypeptidases involved in blood pressure regulation"
    },
    { 
      id: "S1", 
      name: "Chymotrypsin family", 
      clan: "PA", 
      type: "Serine", 
      peptidases: 180,
      description: "Serine endopeptidases with diverse physiological roles"
    },
    { 
      id: "C1", 
      name: "Papain family", 
      clan: "CA", 
      type: "Cysteine", 
      peptidases: 78,
      description: "Cysteine endopeptidases including cathepsins"
    },
    { 
      id: "A1", 
      name: "Pepsin family", 
      clan: "AA", 
      type: "Aspartic", 
      peptidases: 34,
      description: "Aspartic endopeptidases active at low pH"
    },
  ];

  const catalyticTypes = ["Metallo", "Serine", "Cysteine", "Aspartic", "Threonine", "Glutamic"];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">Family Index</h1>
          <p className="text-merops-gray-light">
            Browse peptidase families. Families are groups of peptidases that have evolved from a common ancestor and typically share similar tertiary structures around the active site.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">Search Families</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  placeholder="Enter family name or ID..."
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

          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">Filter by Catalytic Type</CardTitle>
            </CardHeader>
            <CardContent>
              <Listbox value={selectedCatalyticType} onChange={setSelectedCatalyticType}>
                <div className="relative mt-1">
                  <Listbox.Button className="border border-gray-300 p-2 rounded text-merops-green">
                    {selectedCatalyticType || "Select catalytic type"}
                  </Listbox.Button>
                  <Listbox.Options className="absolute mt-1 w-full bg-white border rounded shadow">
                    {catalyticTypes.map((type) => (
                      <Listbox.Option key={type} value={type} className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                        {type || "All types"}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <Card className="mb-8 bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">Family Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-merops-green">300+</div>
                <div className="text-sm text-merops-gray-light">Total Families</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">120</div>
                <div className="text-sm text-merops-gray-light">Metallo</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">85</div>
                <div className="text-sm text-merops-gray-light">Serine</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">45</div>
                <div className="text-sm text-merops-gray-light">Cysteine</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">25</div>
                <div className="text-sm text-merops-gray-light">Aspartic</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-600">25</div>
                <div className="text-sm text-merops-gray-light">Others</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Family Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockFamilies
            .filter(family => !selectedCatalyticType || family.type === selectedCatalyticType)
            .map((family) => (
            <Card key={family.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-merops-green border-merops-green bg-white">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-merops-gray">
                      <a href="#" className="text-merops-green hover:text-merops-green-dark">
                        {family.id}
                      </a>
                    </CardTitle>
                    <p className="text-sm text-merops-gray-light mt-1">{family.name}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    family.type === 'Metallo' ? 'bg-blue-100 text-blue-800' :
                    family.type === 'Serine' ? 'bg-red-100 text-red-800' :
                    family.type === 'Cysteine' ? 'text-orange-800' :
                    family.type === 'Aspartic' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`} style={family.type === 'Cysteine' ? { backgroundColor: '#fffbea' } : {}}>
                    {family.type}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-merops-gray-light">Clan:</span>
                    <a href="#" className="text-merops-green hover:text-merops-green-dark font-semibold">
                      {family.clan}
                    </a>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-merops-gray-light">Peptidases:</span>
                    <span className="font-semibold text-merops-green">{family.peptidases}</span>
                  </div>
                  <p className="text-sm text-merops-gray-light mt-3">
                    {family.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Family Information */}
        <Card className="bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">Understanding Peptidase Families</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-merops-gray mb-3">Family Classification</h3>
                <div className="space-y-2 text-sm text-merops-gray-light">
                  <p>Families are designated by a letter indicating the catalytic type followed by a number.</p>
                  <p><strong>M:</strong> Metallopeptidases (zinc, other metals)</p>
                  <p><strong>S:</strong> Serine peptidases</p>
                  <p><strong>C:</strong> Cysteine peptidases</p>
                  <p><strong>A:</strong> Aspartic peptidases</p>
                  <p><strong>T:</strong> Threonine peptidases</p>
                  <p><strong>G:</strong> Glutamic peptidases</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-merops-gray mb-3">Family Relationships</h3>
                <div className="space-y-2 text-sm text-merops-gray-light">
                  <p>Families within the same clan are homologous and share common evolutionary origin.</p>
                  <p>Members of a family typically have similar:</p>
                  <p>• Active site architecture</p>
                  <p>• Catalytic mechanism</p>
                  <p>• Tertiary structure fold</p>
                  <p>• Sequence similarity in key regions</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FamilyIndex;
