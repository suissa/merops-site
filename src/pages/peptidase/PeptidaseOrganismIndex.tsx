import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Listbox } from '@headlessui/react';
import { Search } from "lucide-react";

const PeptidaseOrganismIndex = () => {
  const [searchOrganism, setSearchOrganism] = useState("");
  const [selectedTaxon, setSelectedTaxon] = useState("");

  const mockOrganisms = [
    { 
      organism: "Homo sapiens", 
      commonName: "Human", 
      taxonId: "9606",
      peptidaseCount: 542,
      kingdom: "Eukaryota",
      phylum: "Chordata",
      class: "Mammalia"
    },
    { 
      organism: "Mus musculus", 
      commonName: "House mouse", 
      taxonId: "10090",
      peptidaseCount: 487,
      kingdom: "Eukaryota",
      phylum: "Chordata",
      class: "Mammalia"
    },
    { 
      organism: "Escherichia coli", 
      commonName: "E. coli", 
      taxonId: "562",
      peptidaseCount: 156,
      kingdom: "Bacteria",
      phylum: "Proteobacteria",
      class: "Gammaproteobacteria"
    },
    { 
      organism: "Saccharomyces cerevisiae", 
      commonName: "Baker's yeast", 
      taxonId: "4932",
      peptidaseCount: 98,
      kingdom: "Eukaryota",
      phylum: "Ascomycota",
      class: "Saccharomycetes"
    },
    { 
      organism: "Drosophila melanogaster", 
      commonName: "Fruit fly", 
      taxonId: "7227",
      peptidaseCount: 234,
      kingdom: "Eukaryota",
      phylum: "Arthropoda",
      class: "Insecta"
    },
  ];

  const taxa = ["Eukaryota", "Bacteria", "Archaea", "Viruses"];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">Peptidase Organism Index</h1>
          <p className="text-merops-gray-light">
            Browse peptidases by the organisms in which they are found. This index provides taxonomic information and peptidase counts for each organism in MEROPS.
          </p>
        </div>

        {/* Search Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">Search Organisms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  placeholder="Enter organism name..."
                  value={searchOrganism}
                  onChange={(e) => setSearchOrganism(e.target.value)}
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
              <CardTitle className="text-merops-gray">Filter by Taxon</CardTitle>
            </CardHeader>
            <CardContent>
              {/* <Select defaultValue="" value={selectedTaxon} onValueChange={setSelectedTaxon}>
                <SelectTrigger className="border-merops-green">
                  <SelectValue placeholder="Select taxonomic group" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="">All taxa</SelectItem>
                  {taxa.map((taxon) => (
                    <SelectItem key={taxon} value={taxon}>{taxon}</SelectItem>
                  ))}
                </SelectContent>
              </Select> */}
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <Card className="mb-8 bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">Organism Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-merops-green">2,500+</div>
                <div className="text-merops-gray-light">Total Species</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-merops-green">1,200+</div>
                <div className="text-merops-gray-light">Eukaryotes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-merops-green">1,000+</div>
                <div className="text-merops-gray-light">Bacteria</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-merops-green">300+</div>
                <div className="text-merops-gray-light">Archaea</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Table */}
        <Card className="bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">
              Organism Entries {selectedTaxon && `- ${selectedTaxon}`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">Organism</th>
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">Common Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">Taxon ID</th>
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">Peptidases</th>
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">Kingdom</th>
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">Class</th>
                  </tr>
                </thead>
                <tbody>
                  {mockOrganisms
                    .filter(org => !selectedTaxon || org.kingdom === selectedTaxon)
                    .map((organism, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-merops-green-50 transition-colors">
                      <td className="py-3 px-4">
                        <a href="#" className="text-merops-green hover:text-merops-green-dark font-semibold italic">
                          {organism.organism}
                        </a>
                      </td>
                      <td className="py-3 px-4 text-merops-gray">{organism.commonName}</td>
                      <td className="py-3 px-4">
                        <a href="#" className="text-merops-green hover:text-merops-green-dark font-mono">
                          {organism.taxonId}
                        </a>
                      </td>
                      <td className="py-3 px-4">
                        <span className="bg-merops-green-100 text-merops-green px-2 py-1 rounded-full text-sm font-semibold">
                          {organism.peptidaseCount}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-merops-gray-light">{organism.kingdom}</td>
                      <td className="py-3 px-4 text-merops-gray-light">{organism.class}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Taxonomic Search */}
        <Card className="bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">Taxonomic Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-merops-gray mb-2">
                  Kingdom
                </label>
                <Listbox value={selectedTaxon} onChange={setSelectedTaxon}>
                  <div className="relative mt-1">
                    <Listbox.Button className="border border-gray-300 p-2 rounded text-merops-green">
                      {selectedTaxon || "Select kingdom"}
                    </Listbox.Button>
                    <Listbox.Options className="absolute mt-1 w-full bg-white border border-merops-green text-merops-green rounded shadow">
                      {taxa.map((t) => (
                        <Listbox.Option key={t} value={t} className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                          {t || "All kingdoms"}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
              </div>
              <div>
                <label className="block text-sm font-medium text-merops-gray mb-2">
                  Phylum
                </label>
                <Input
                  placeholder="e.g., Chordata"
                  className="border-merops-green focus:ring-merops-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-merops-gray mb-2">
                  Class
                </label>
                <Input
                  placeholder="e.g., Mammalia"
                  className="border-merops-green focus:ring-merops-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-merops-gray mb-2">
                  NCBI Taxon ID
                </label>
                <Input
                  placeholder="e.g., 9606"
                  className="border-merops-green focus:ring-merops-green"
                />
              </div>
            </div>
            <div className="mt-4">
              <Button className="bg-merops-green hover:bg-merops-green-dark">
                Search by Taxonomy
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Popular Organisms */}
        <Card className="mt-8 bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">Most Studied Organisms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border border-merops-green-100 rounded-lg hover:bg-merops-green-50 transition-colors">
                <h3 className="font-semibold text-merops-gray italic">Homo sapiens</h3>
                <p className="text-sm text-merops-gray-light">Human - 542 peptidases</p>
                <a href="#" className="text-merops-green hover:text-merops-green-dark text-sm">View peptidases →</a>
              </div>
              <div className="p-4 border border-merops-green-100 rounded-lg hover:bg-merops-green-50 transition-colors">
                <h3 className="font-semibold text-merops-gray italic">Mus musculus</h3>
                <p className="text-sm text-merops-gray-light">Mouse - 487 peptidases</p>
                <a href="#" className="text-merops-green hover:text-merops-green-dark text-sm">View peptidases →</a>
              </div>
              <div className="p-4 border border-merops-green-100 rounded-lg hover:bg-merops-green-50 transition-colors">
                <h3 className="font-semibold text-merops-gray italic">Escherichia coli</h3>
                <p className="text-sm text-merops-gray-light">E. coli - 156 peptidases</p>
                <a href="#" className="text-merops-green hover:text-merops-green-dark text-sm">View peptidases →</a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PeptidaseOrganismIndex;
