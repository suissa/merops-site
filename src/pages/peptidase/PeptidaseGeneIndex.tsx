import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Listbox } from '@headlessui/react';
import { Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PeptidaseGeneIndex = () => {
  const [searchGene, setSearchGene] = useState("");
  const [selectedOrganism, setSelectedOrganism] = useState("");

  const mockGenes = [
    { 
      gene: "ACE", 
      peptidase: "Angiotensin-converting enzyme", 
      id: "M02.001", 
      family: "M2", 
      organism: "Homo sapiens",
      chromosome: "17q23.3",
      synonyms: "DCP, DCP1"
    },
    { 
      gene: "ANPEP", 
      peptidase: "Aminopeptidase N", 
      id: "M01.001", 
      family: "M1", 
      organism: "Homo sapiens",
      chromosome: "15q26.1",
      synonyms: "APN, CD13"
    },
    { 
      gene: "CTSA", 
      peptidase: "Cathepsin A", 
      id: "S10.001", 
      family: "S10", 
      organism: "Homo sapiens",
      chromosome: "20q13.12",
      synonyms: "PPCA, GSL"
    },
    { 
      gene: "PRSS1", 
      peptidase: "Trypsin-1", 
      id: "S01.151", 
      family: "S1", 
      organism: "Homo sapiens",
      chromosome: "7q34",
      synonyms: "TRP1, TRY1"
    },
    { 
      gene: "CTSL1", 
      peptidase: "Cathepsin L1", 
      id: "C01.001", 
      family: "C1", 
      organism: "Homo sapiens",
      chromosome: "9q21.33",
      synonyms: "CTSL, MEP"
    },
  ];

  const organisms = ["Homo sapiens", "Mus musculus", "Rattus norvegicus", "Drosophila melanogaster", "Caenorhabditis elegans"];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">Peptidase Gene Index</h1>
          <p className="text-merops-gray-light">
            Browse peptidases by their gene names. This index provides information about the genes encoding peptidases, including chromosomal locations and gene synonyms.
          </p>
        </div>

        {/* Search Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">Search by Gene Name</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  placeholder="Enter gene name (e.g., ACE, ANPEP)..."
                  value={searchGene}
                  onChange={(e) => setSearchGene(e.target.value)}
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
              <CardTitle className="text-merops-gray">Filter by Organism</CardTitle>
            </CardHeader>
            <CardContent>
              <Select defaultValue="" onValueChange={setSelectedOrganism}>
                <SelectTrigger className="border border-gray-300 p-2 rounded">
                  {selectedOrganism || "Select organism"}
                </SelectTrigger>
                <SelectContent className="bg-white border rounded shadow">
                  {organisms.map((org) => (
                    <SelectItem key={org} value={org} className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                      {org || "All organisms"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        {/* Gene Information */}
        <Card className="mb-8 bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">Gene Nomenclature</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-merops-gray mb-3">Gene Name Standards</h3>
                <div className="space-y-2 text-sm text-merops-gray-light">
                  <p>Gene names follow HUGO Gene Nomenclature Committee (HGNC) standards for human genes.</p>
                  <p>Mouse and rat gene names follow Mouse Genome Informatics (MGI) standards.</p>
                  <p>Gene symbols are typically italicized in publications.</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-merops-gray mb-3">Information Included</h3>
                <div className="space-y-1 text-sm text-merops-gray-light">
                  <p>• Official gene symbol</p>
                  <p>• Chromosomal location</p>
                  <p>• Gene synonyms and aliases</p>
                  <p>• Associated peptidase information</p>
                  <p>• Cross-references to other databases</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Table */}
        <Card className="bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">
              Gene Entries {selectedOrganism && `- ${selectedOrganism}`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">Gene</th>
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">Peptidase</th>
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">ID</th>
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">Family</th>
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">Chromosome</th>
                    <th className="text-left py-3 px-4 font-semibold text-merops-gray">Synonyms</th>
                  </tr>
                </thead>
                <tbody>
                  {mockGenes
                    .filter(gene => !selectedOrganism || gene.organism === selectedOrganism)
                    .map((gene, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-merops-green-50 transition-colors">
                      <td className="py-3 px-4">
                        <a href="#" className="text-merops-green hover:text-merops-green-dark font-semibold">
                          {gene.gene}
                        </a>
                      </td>
                      <td className="py-3 px-4">
                        <a href="#" className="text-merops-gray hover:text-merops-green">
                          {gene.peptidase}
                        </a>
                      </td>
                      <td className="py-3 px-4">
                        <a href="#" className="text-merops-green hover:text-merops-green-dark font-mono">
                          {gene.id}
                        </a>
                      </td>
                      <td className="py-3 px-4">
                        <a href="#" className="text-merops-green hover:text-merops-green-dark">
                          {gene.family}
                        </a>
                      </td>
                      <td className="py-3 px-4 text-merops-gray-light font-mono">{gene.chromosome}</td>
                      <td className="py-3 px-4 text-merops-gray-light text-sm">{gene.synonyms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Search */}
        <Card className="mt-8 bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">Advanced Gene Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-merops-gray mb-2">
                  Chromosome
                </label>
                <Input
                  placeholder="e.g., 17q23.3"
                  className="border-merops-green focus:ring-merops-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-merops-gray mb-2">
                  Gene Synonym
                </label>
                <Input
                  placeholder="e.g., DCP, APN"
                  className="border-merops-green focus:ring-merops-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-merops-gray mb-2">
                  Peptidase Family
                </label>
                {/* <Select value={selectedOrganism} onValueChange={setSelectedOrganism}>
                  <SelectTrigger className="border-merops-green">
                    <SelectValue placeholder="Select family" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value={M1}>M1 - Aminopeptidase N family</SelectItem>
                    <SelectItem value={M2}>M2 - Angiotensin-converting enzyme family</SelectItem>
                    <SelectItem value={S1}>S1 - Chymotrypsin family</SelectItem>
                    <SelectItem value={C1}>C1 - Papain family</SelectItem>
                  </SelectContent>
                </Select> */}
              </div>
            </div>
            <div className="mt-4">
              <Button className="bg-merops-green hover:bg-merops-green-dark">
                Advanced Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* External Links */}
        <Card className="mt-8 bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">External Gene Databases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-merops-gray mb-2">Human Genes</h4>
                <ul className="space-y-1 text-merops-gray-light">
                  <li><a href="#" className="text-merops-green hover:text-merops-green-dark">HGNC (Gene Nomenclature)</a></li>
                  <li><a href="#" className="text-merops-green hover:text-merops-green-dark">NCBI Gene</a></li>
                  <li><a href="#" className="text-merops-green hover:text-merops-green-dark">Ensembl Human</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-merops-gray mb-2">Model Organisms</h4>
                <ul className="space-y-1 text-merops-gray-light">
                  <li><a href="#" className="text-merops-green hover:text-merops-green-dark">MGI (Mouse)</a></li>
                  <li><a href="#" className="text-merops-green hover:text-merops-green-dark">RGD (Rat)</a></li>
                  <li><a href="#" className="text-merops-green hover:text-merops-green-dark">FlyBase (Drosophila)</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-merops-gray mb-2">Other Resources</h4>
                <ul className="space-y-1 text-merops-gray-light">
                  <li><a href="#" className="text-merops-green hover:text-merops-green-dark">UniProt</a></li>
                  <li><a href="#" className="text-merops-green hover:text-merops-green-dark">GeneCards</a></li>
                  <li><a href="#" className="text-merops-green hover:text-merops-green-dark">OMIM</a></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PeptidaseGeneIndex;
