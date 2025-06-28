import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("all");

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">Search MEROPS</h1>
          <p className="text-merops-gray-light">
            Search the MEROPS database for peptidases, families, clans, substrates, and inhibitors using various search criteria.
          </p>
        </div>

        <Tabs defaultValue="simple" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="simple" className="data-[state=active]:bg-merops-green data-[state=active]:text-white">
              Simple Search
            </TabsTrigger>
            <TabsTrigger value="advanced" className="data-[state=active]:bg-merops-green data-[state=active]:text-white">
              Advanced Search
            </TabsTrigger>
            <TabsTrigger value="sequence" className="data-[state=active]:bg-merops-green data-[state=active]:text-white">
              Sequence Search
            </TabsTrigger>
          </TabsList>

          <TabsContent value="simple">
            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Simple Search</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Enter search term (peptidase name, ID, gene, organism...)..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="border-merops-green focus:ring-merops-green text-lg h-12"
                    />
                  </div>
                  <Button size="lg" className="bg-merops-green hover:bg-merops-green-dark">
                    <SearchIcon className="mr-2 h-5 w-5" />
                    Search
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-merops-gray mb-2">
                      Search in
                    </label>
                    <Select value={searchType} onValueChange={setSearchType}>
                      <SelectTrigger className="border-merops-green">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="all">All fields</SelectItem>
                        <SelectItem value="name">Peptidase names</SelectItem>
                        <SelectItem value="id">MEROPS IDs</SelectItem>
                        <SelectItem value="gene">Gene names</SelectItem>
                        <SelectItem value="organism">Organisms</SelectItem>
                        <SelectItem value="family">Families</SelectItem>
                        <SelectItem value="clan">Clans</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-merops-gray mb-2">
                      Results per page
                    </label>
                    <Select defaultValue="">
                      <SelectTrigger className="border-merops-green">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="20">20</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                        <SelectItem value="100">100</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-merops-gray mb-4">Quick Search Examples</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-merops-gray-light">Search by name:</p>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm" className="border-merops-green text-merops-green hover:bg-merops-green hover:text-white" 
                               onClick={() => setSearchQuery("trypsin")}>
                          trypsin
                        </Button>
                        <Button variant="outline" size="sm" className="border-merops-green text-merops-green hover:bg-merops-green hover:text-white"
                               onClick={() => setSearchQuery("pepsin")}>
                          pepsin
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-merops-gray-light">Search by organism:</p>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm" className="border-merops-green text-merops-green hover:bg-merops-green hover:text-white"
                               onClick={() => setSearchQuery("human")}>
                          human
                        </Button>
                        <Button variant="outline" size="sm" className="border-merops-green text-merops-green hover:bg-merops-green hover:text-white"
                               onClick={() => setSearchQuery("E. coli")}>
                          E. coli
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced">
            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Advanced Search</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-merops-gray mb-2">
                        Peptidase Name
                      </label>
                      <Input
                        placeholder="Enter peptidase name"
                        className="border-merops-green focus:ring-merops-green"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-merops-gray mb-2">
                        MEROPS ID
                      </label>
                      <Input
                        placeholder="e.g., M01.001"
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

                    <div>
                      <label className="block text-sm font-medium text-merops-gray mb-2">
                        Family
                      </label>
                      <Select>
                        <SelectTrigger className="border-merops-green">
                          <SelectValue placeholder="Select family" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="M1">M1 - Aminopeptidase N family</SelectItem>
                          <SelectItem value="M2">M2 - Angiotensin-converting enzyme family</SelectItem>
                          <SelectItem value="S1">S1 - Chymotrypsin family</SelectItem>
                          <SelectItem value="C1">C1 - Papain family</SelectItem>
                          <SelectItem value="A1">A1 - Pepsin family</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
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
                        Clan
                      </label>
                      <Select>
                        <SelectTrigger className="border-merops-green">
                          <SelectValue placeholder="Select clan" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="MA">MA - Metallo clan</SelectItem>
                          <SelectItem value="PA">PA - Serine clan</SelectItem>
                          <SelectItem value="CA">CA - Cysteine clan</SelectItem>
                          <SelectItem value="AA">AA - Aspartic clan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-merops-gray mb-2">
                        Catalytic Type
                      </label>
                      <Select>
                        <SelectTrigger className="border-merops-green">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="metallo">Metallopeptidase</SelectItem>
                          <SelectItem value="serine">Serine peptidase</SelectItem>
                          <SelectItem value="cysteine">Cysteine peptidase</SelectItem>
                          <SelectItem value="aspartic">Aspartic peptidase</SelectItem>
                          <SelectItem value="threonine">Threonine peptidase</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-merops-gray mb-2">
                        Peptidase Type
                      </label>
                      <Select>
                        <SelectTrigger className="border-merops-green">
                          <SelectValue placeholder="Select peptidase type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="endopeptidase">Endopeptidase</SelectItem>
                          <SelectItem value="aminopeptidase">Aminopeptidase</SelectItem>
                          <SelectItem value="carboxypeptidase">Carboxypeptidase</SelectItem>
                          <SelectItem value="dipeptidase">Dipeptidase</SelectItem>
                          <SelectItem value="tripeptidase">Tripeptidase</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-merops-gray mb-4">Search Options</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="case-sensitive" />
                        <label htmlFor="case-sensitive" className="text-sm text-merops-gray">
                          Case sensitive search
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="exact-match" />
                        <label htmlFor="exact-match" className="text-sm text-merops-gray">
                          Exact match only
                        </label>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="include-synonyms" defaultChecked />
                        <label htmlFor="include-synonyms" className="text-sm text-merops-gray">
                          Include synonyms
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="include-obsolete" />
                        <label htmlFor="include-obsolete" className="text-sm text-merops-gray">
                          Include obsolete entries
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button size="lg" className="bg-merops-green hover:bg-merops-green-dark">
                    <SearchIcon className="mr-2 h-5 w-5" />
                    Advanced Search
                  </Button>
                  <Button variant="outline" size="lg" className="border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
                    Clear Form
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sequence">
            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Sequence Search</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-merops-gray mb-2">
                    Enter Protein Sequence (FASTA format accepted)
                  </label>
                  <textarea
                    className="w-full h-40 p-3 border border-merops-green rounded-md focus:ring-merops-green focus:border-merops-green font-mono text-sm"
                    placeholder=">Your_sequence_name&#10;MKALLFLAVLFLTGSQARHFWQQDEPPQSPWDRVKDLATLKLYQGKTIIEDLKKLLTQHFVQENYQK"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-merops-gray mb-2">
                      Search Database
                    </label>
                    <Select>
                      <SelectTrigger className="border-merops-green">
                        <SelectValue placeholder="Select database" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="peptidases">Peptidase sequences</SelectItem>
                        <SelectItem value="inhibitors">Inhibitor sequences</SelectItem>
                        <SelectItem value="all">All sequences</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-merops-gray mb-2">
                      E-value threshold
                    </label>
                    <Select defaultValue="">
                      <SelectTrigger className="border-merops-green">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
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
                      Max hits
                    </label>
                    <Select defaultValue="">
                      <SelectTrigger className="border-merops-green">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="50">50</SelectItem>
                        <SelectItem value="100">100</SelectItem>
                        <SelectItem value="250">250</SelectItem>
                        <SelectItem value="500">500</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="filter-low-complexity" defaultChecked />
                    <label htmlFor="filter-low-complexity" className="text-sm text-merops-gray">
                      Filter low complexity regions
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="gapped-alignment" defaultChecked />
                    <label htmlFor="gapped-alignment" className="text-sm text-merops-gray">
                      Perform gapped alignment
                    </label>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button size="lg" className="bg-merops-green hover:bg-merops-green-dark">
                    <SearchIcon className="mr-2 h-5 w-5" />
                    BLAST Search
                  </Button>
                  <Button variant="outline" size="lg" className="border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
                    Load Example
                  </Button>
                </div>

                <div className="bg-merops-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-merops-gray mb-2">Sequence Search Tips</h4>
                  <ul className="text-sm text-merops-gray-light space-y-1">
                    <li>• Paste your protein sequence in FASTA format or plain text</li>
                    <li>• Use standard single-letter amino acid codes</li>
                    <li>• Remove any non-amino acid characters except standard FASTA headers</li>
                    <li>• For best results, use sequences longer than 50 amino acids</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Search;
