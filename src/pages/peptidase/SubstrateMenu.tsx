import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { Listbox } from "@headlessui/react";

const SubstrateMenu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const mockSubstrates = [
    { 
      name: "Angiotensin I", 
      sequence: "DRVYIHPFHL", 
      type: "Natural", 
      peptidases: "ACE, Neprilysin",
      function: "Vasoactive peptide precursor"
    },
    { 
      name: "Bradykinin", 
      sequence: "RPPGFSPFR", 
      type: "Natural", 
      peptidases: "ACE, Kallikrein",
      function: "Vasodilator peptide"
    },
    { 
      name: "Z-Phe-Arg-AMC", 
      sequence: "Z-FR-AMC", 
      type: "Synthetic", 
      peptidases: "Cathepsin L, Papain",
      function: "Fluorogenic substrate"
    },
    { 
      name: "Casein", 
      sequence: "Protein", 
      type: "Natural", 
      peptidases: "Trypsin, Chymotrypsin",
      function: "Milk protein substrate"
    }
  ];

  const mockInhibitors = [
    { 
      name: "EDTA", 
      type: "Chelator", 
      targets: "Metallopeptidases",
      mechanism: "Metal chelation",
      ki: "Various"
    },
    { 
      name: "E-64", 
      type: "Irreversible", 
      targets: "Cysteine peptidases",
      mechanism: "Active site alkylation",
      ki: "nM range"
    },
    { 
      name: "Pepstatin A", 
      type: "Competitive", 
      targets: "Aspartic peptidases",
      mechanism: "Transition state analog",
      ki: "nM range"
    },
    { 
      name: "PMSF", 
      type: "Irreversible", 
      targets: "Serine peptidases",
      mechanism: "Active site acylation",
      ki: "μM range"
    }
  ];


const types = ["", "Peptide", "Inhibitor"];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">Substrate Menu</h1>
          <p className="text-merops-gray-light">
            Browse substrates and inhibitors used in peptidase research. This section includes both natural substrates and synthetic compounds used for peptidase characterization.
          </p>
        </div>

        <Tabs defaultValue="substrates" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="substrates" className="bg-transparent border-merops-green data-[state=active]:bg-merops-green data-[state=active]:text-white">
              Substrates
            </TabsTrigger>
            <TabsTrigger value="inhibitors" className="bg-transparent border-merops-green data-[state=active]:bg-merops-green data-[state=active]:text-white">
              Inhibitors
            </TabsTrigger>
          </TabsList>

          <TabsContent value="substrates">
            {/* Substrate Search */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <Card className="bg-transparent border-merops-green">
                <CardHeader>
                  <CardTitle className="text-merops-gray">Search Substrates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Input
                      placeholder="Enter substrate name or sequence..."
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
                  <CardTitle className="text-merops-gray">Filter by Type</CardTitle>
                </CardHeader>
                <CardContent>
                <Listbox value={selectedType} onChange={setSelectedType}>
                  <div className="relative mt-1">
                    <Listbox.Button className="border border-gray-300 p-2 rounded text-merops-green">
                      {selectedType || "Select type"}
                    </Listbox.Button>
                    <Listbox.Options className="absolute mt-1 w-full bg-white border rounded shadow">
                      {types.map((type) => (
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

            {/* Substrate Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-l-4 border-l-merops-green border-merops-green bg-transparent">
                <CardHeader>
                  <CardTitle className="text-merops-gray">Natural Substrates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-merops-gray-light mb-4">
                    Physiologically relevant peptides and proteins that are cleaved by peptidases in vivo.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-merops-green hover:text-merops-green-dark">Angiotensin peptides</a></li>
                    <li><a href="#" className="text-merops-green hover:text-merops-green-dark">Kinins</a></li>
                    <li><a href="#" className="text-merops-green hover:text-merops-green-dark">Neuropeptides</a></li>
                    <li><a href="#" className="text-merops-green hover:text-merops-green-dark">Structural proteins</a></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-merops-green border-merops-green bg-transparent">
                <CardHeader>
                  <CardTitle className="text-merops-gray">Synthetic Substrates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-merops-gray-light mb-4">
                    Artificially designed substrates for peptidase activity assays and characterization.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-merops-green hover:text-merops-green-dark">AMC substrates</a></li>
                    <li><a href="#" className="text-merops-green hover:text-merops-green-dark">pNA substrates</a></li>
                    <li><a href="#" className="text-merops-green hover:text-merops-green-dark">FRET substrates</a></li>
                    <li><a href="#" className="text-merops-green hover:text-merops-green-dark">Quenched substrates</a></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-merops-green border-merops-green bg-transparent">
                <CardHeader>
                  <CardTitle className="text-merops-gray">Substrate Databases</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-merops-gray-light mb-4">
                    External resources for substrate information and peptidase-substrate relationships.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-merops-green hover:text-merops-green-dark">CutDB</a></li>
                    <li><a href="#" className="text-merops-green hover:text-merops-green-dark">TopFIND</a></li>
                    <li><a href="#" className="text-merops-green hover:text-merops-green-dark">DegraBase</a></li>
                    <li><a href="#" className="text-merops-green hover:text-merops-green-dark">PMAP</a></li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Substrate Table */}
            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Substrate Entries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-merops-gray">Name</th>
                        <th className="text-left py-3 px-4 font-semibold text-merops-gray">Sequence</th>
                        <th className="text-left py-3 px-4 font-semibold text-merops-gray">Type</th>
                        <th className="text-left py-3 px-4 font-semibold text-merops-gray">Peptidases</th>
                        <th className="text-left py-3 px-4 font-semibold text-merops-gray">Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockSubstrates.map((substrate, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-merops-green-50 transition-colors">
                          <td className="py-3 px-4">
                            <a href="#" className="text-merops-green hover:text-merops-green-dark font-semibold">
                              {substrate.name}
                            </a>
                          </td>
                          <td className="py-3 px-4 font-mono text-sm bg-gray-50 rounded px-2 py-1">
                            {substrate.sequence}
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              substrate.type === 'Natural' 
                                ? 'bg-blue-100 text-blue-800' 
                                : 'bg-purple-100 text-purple-800'
                            }`}>
                              {substrate.type}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-merops-gray-light">{substrate.peptidases}</td>
                          <td className="py-3 px-4 text-merops-gray-light">{substrate.function}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inhibitors">
            {/* Inhibitor Search */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card className="bg-transparent border-merops-green">
                <CardHeader>
                  <CardTitle className="text-merops-gray">Search Inhibitors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Input
                      placeholder="Enter inhibitor name..."
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
                  <CardTitle className="text-merops-gray">Filter by Mechanism</CardTitle>
                </CardHeader>
                <CardContent>
                  <Listbox value={selectedType} onChange={setSelectedType}>
                    <div className="relative mt-1">
                      <Listbox.Button className="border border-gray-300 p-2 rounded text-merops-green">
                        {selectedType || "Select mechanism"}
                      </Listbox.Button>
                      <Listbox.Options className="absolute mt-1 w-full bg-white border rounded shadow">
                        <Listbox.Option value={"competitive"}>Competitive</Listbox.Option>
                        <Listbox.Option value={"irreversible"}>Irreversible</Listbox.Option>
                        <Listbox.Option value={"chelator"}>Metal chelator</Listbox.Option>
                        <Listbox.Option value={"allosteric"}>Allosteric</Listbox.Option>
                      </Listbox.Options>
                    </div>
                  </Listbox>
                </CardContent>
              </Card>
            </div>

            {/* Inhibitor Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="text-center p-4">
                <h3 className="font-semibold text-merops-gray mb-2">Serine Peptidase Inhibitors</h3>
                <p className="text-sm text-merops-gray-light">PMSF, DFP, Serpins</p>
              </Card>
              <Card className="text-center p-4">
                <h3 className="font-semibold text-merops-gray mb-2">Cysteine Peptidase Inhibitors</h3>
                <p className="text-sm text-merops-gray-light">E-64, Iodoacetate, Cystatins</p>
              </Card>
              <Card className="text-center p-4">
                <h3 className="font-semibold text-merops-gray mb-2">Aspartic Peptidase Inhibitors</h3>
                <p className="text-sm text-merops-gray-light">Pepstatin A, Pepsinogens</p>
              </Card>
              <Card className="text-center p-4">
                <h3 className="font-semibold text-merops-gray mb-2">Metallopeptidase Inhibitors</h3>
                <p className="text-sm text-merops-gray-light">EDTA, 1,10-Phenanthroline</p>
              </Card>
            </div>

            {/* Inhibitor Table */}
            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">Inhibitor Entries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-merops-gray">Name</th>
                        <th className="text-left py-3 px-4 font-semibold text-merops-gray">Type</th>
                        <th className="text-left py-3 px-4 font-semibold text-merops-gray">Targets</th>
                        <th className="text-left py-3 px-4 font-semibold text-merops-gray">Mechanism</th>
                        <th className="text-left py-3 px-4 font-semibold text-merops-gray">Ki Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockInhibitors.map((inhibitor, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-merops-green-50 transition-colors">
                          <td className="py-3 px-4">
                            <a href="#" className="text-merops-green hover:text-merops-green-dark font-semibold">
                              {inhibitor.name}
                            </a>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              inhibitor.type === 'Competitive' 
                                ? 'bg-green-100 text-green-800' 
                                : inhibitor.type === 'Irreversible'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {inhibitor.type}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-merops-gray">{inhibitor.targets}</td>
                          <td className="py-3 px-4 text-merops-gray-light">{inhibitor.mechanism}</td>
                          <td className="py-3 px-4 text-merops-gray-light">{inhibitor.ki}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Submission Information */}
        <Card className="mt-8 bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">Submit New Data</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-merops-gray-light mb-4">
              Have substrate or inhibitor data that's not in MEROPS? We welcome submissions of new experimental data.
            </p>
            <Button className="bg-merops-green hover:bg-merops-green-dark">
              Submit Substrate/Inhibitor Data
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubstrateMenu;
