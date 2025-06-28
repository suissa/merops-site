import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const PeptidaseNameIndex = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("A");

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
  const mockPeptidases = [
    { name: "Angiotensin-converting enzyme", id: "M02.001", family: "M2", organism: "Homo sapiens" },
    { name: "Aminopeptidase N", id: "M01.001", family: "M1", organism: "Homo sapiens" },
    { name: "Acetyl-Lys endopeptidase", id: "S28.001", family: "S28", organism: "Staphylococcus epidermidis" },
    { name: "Alpha-lytic endopeptidase", id: "S01.302", family: "S1", organism: "Lysobacter enzymogenes" },
    { name: "Alanyl aminopeptidase", id: "M01.002", family: "M1", organism: "Pseudomonas putida" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">Peptidase Name Index</h1>
          <p className="text-merops-gray-light">
            Browse peptidases alphabetically by name. Select a letter or use the search function to find specific peptidases.
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-8 bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">Search Peptidases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Enter peptidase name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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

        {/* Alphabet Navigation */}
        <Card className="mb-8 bg-transparent  border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">Browse by Letter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {alphabet.map((letter) => (
                <Button
                  key={letter}
                  variant={selectedLetter === letter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLetter(letter)}
                  className={selectedLetter === letter ? "border border-merops-green bg-merops-green hover:bg-merops-green-dark text-white" : "border-merops-green text-merops-green hover:text-white hover:bg-merops-green"}
                >
                  {letter}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">Peptidases - Letter {selectedLetter}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">ID</th>
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">Family</th>
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">Organism</th>
                  </tr>
                </thead>
                <tbody>
                  {mockPeptidases.map((peptidase, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-merops-green-50 transition-colors">
                      <td className="py-3 px-4">
                        <a href="#" className="text-merops-green hover:text-merops-green-dark font-medium">
                          {peptidase.name}
                        </a>
                      </td>
                      <td className="py-3 px-4 text-merops-gray">{peptidase.id}</td>
                      <td className="py-3 px-4">
                        <a href="#" className="text-merops-green hover:text-merops-green-dark">
                          {peptidase.family}
                        </a>
                      </td>
                      <td className="py-3 px-4 text-merops-gray-light">{peptidase.organism}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Search Options */}
        <Card className="mt-8 bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">Advanced Search Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-merops-gray mb-2">
                  Family
                </label>
                <Select defaultValue="">
                  <SelectTrigger className="border-merops-green">
                    <SelectValue placeholder="Select family" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="M1">M1 - Aminopeptidase N family</SelectItem>
                    <SelectItem value="M2">M2 - Angiotensin-converting enzyme family</SelectItem>
                    <SelectItem value="S1">S1 - Chymotrypsin family</SelectItem>
                    <SelectItem value="S28">S28 - Endopeptidase family</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-merops-gray mb-2">
                  Organism Type
                </label>
                <Select defaultValue="">
                  <SelectTrigger className="border-merops-green">
                    <SelectValue placeholder="Select organism type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="human">Human</SelectItem>
                    <SelectItem value="bacteria">Bacteria</SelectItem>
                    <SelectItem value="virus">Virus</SelectItem>
                    <SelectItem value="plant">Plant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-merops-gray mb-2">
                  Peptidase Type
                </label>
                <Select defaultValue="">
                  <SelectTrigger className="border-merops-green">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="endopeptidase">Endopeptidase</SelectItem>
                    <SelectItem value="exopeptidase">Exopeptidase</SelectItem>
                    <SelectItem value="aminopeptidase">Aminopeptidase</SelectItem>
                    <SelectItem value="carboxypeptidase">Carboxypeptidase</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="mt-4 bg-merops-green hover:bg-merops-green-dark">
              Apply Filters
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PeptidaseNameIndex;
