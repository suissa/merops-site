
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Book, ArrowRight, FileStack, GripVertical, Wrench, Eye, Rss, Rocket, MessageSquareCode, CirclePlus } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-merops-gray max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="px-4 py-4 md:py-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="min-h-screen md:min-h-0 text-center">
            <div className="mb-0 md:mb-4">
              <img src="logo-04.png" alt="MEROPS Logo" className="w-full md:w-[30vw] mx-auto" />
            </div>
            <p className="text-lg text-merops-gray-light max-w-3xl mx-auto mb-8">
              MEROPS is a comprehensive database of information about peptidases (also known as proteases, proteinases and proteolytic enzymes) and the proteins that inhibit them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-merops-green hover:bg-merops-green-dark">
                <Link to="/search">
                  <Search className="mr-2 h-5 w-5" />
                  Search Database
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-[#fffbea] border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
                <Link to="/info/about">
                  <CirclePlus className="mr-2 h-5 w-5" />
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 pt-4 sm:px-6 lg:px-8 bg-white flex flex-col md:flex-row w-full" id="release">
        <div className="w-full md:w-[40%] p-4 max-w-7xl mx-auto text-merops-gray text-md">
        <p className="mb-8">
        The MEROPS database is an information resource for peptidases (also termed proteases, proteinases and proteolytic enzymes) and the proteins that inhibit them. The Summary page describing a given peptidase can be reached by use of an index under its Name, MEROPS Identifier or source Organism. The Summary describes the classification and nomenclature of the peptidase and offers links to supplementary pages showing sequence identifiers, the structure if known, literature references and more.

        </p>
<p className="mb-8">
The MEROPS database uses an hierarchical, structure-based classification of the peptidases. In this, each peptidase is assigned to a Family on the basis of statistically significant similarities in amino acid sequence, and families that are thought to be homologous are grouped together in a Clan. There is a Summary page for each family and clan, and these again have indexes. Each of the Summary pages offers links to supplementary pages.  
  </p>        
<p className="mb-8">
The MEROPS website and database are run by Neil D. Rawlings, alumnus at the EMBL-European Bioinformatics Institute, Cambridge CB10 1SD, UK (merops@ebi.ac.uk).
</p>
        </div>
        <div className="w-full md:w-[60%] p-4 max-w-7xl mx-auto text-merops-gray flex justify-center items-center">
          <img src="release-sem-bg.png" alt="Release" className="w-full h-auto" />
        </div>
      </section>

    <section className="sm:px-6 lg:px-8 bg-white flex flex-col md:flex-row w-full" id="release">
      <div className="w-full p-8 border-l-4 rounded-lg border-merops-green md:w-[60%] p-4 max-w-7xl mx-auto text-merops-gray text-md bg-merops-green-50">
        <p className="mb-2">
          <h1 className="flex text-2xl font-bold pb-4 items-center justify-center text-merops-green">
              <MessageSquareCode className="h-8 w-8 text-merops-green mr-2" />
              Use us and cite us!</h1>
        
Many authors find it useful to include data from MEROPS in their publications, and that is very much what we are here for, but please cite the appropriate publication as well as the URL when you do so. This is: Rawlings, N.D., Barrett, A.J., Thomas, P.D., Huang, X., Bateman, A. & Finn, R.D. (2018) The MEROPS database of proteolytic enzymes, their substrates and inhibitors in 2017 and a comparison with peptidases in the PANTHER database. Nucleic Acids Res 46, D624-D632.  Thank you!
        </p>
      </div>
    </section>
      {/* Main Features */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-merops-gray text-center mb-12">
            <div className="flex items-center justify-center text-merops-green">
              <Rocket className="h-8 w-8 text-merops-green mr-2" />
              Explore MEROPS</div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Peptidases */}
            <Card className="bg-[#fffbea] hover:shadow-lg transition-shadow border-l-4 border-l-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">
                  
                <div className="flex items-center">
                  <GripVertical className="h-6 w-6 text-merops-green mr-2" />
                  Peptidases</div>
                  </CardTitle>
                <CardDescription>
                  Browse and search peptidase information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/peptidase/name-index" className="flex items-center justify-between p-2 rounded hover:bg-merops-green-50 transition-colors">
                  <span className="text-merops-gray">Name Index</span>
                  <ArrowRight className="h-4 w-4 text-merops-green" />
                </Link>
                <Link to="/peptidase/id-index" className="flex items-center justify-between p-2 rounded hover:bg-merops-green-50 transition-colors">
                  <span className="text-merops-gray">ID Index</span>
                  <ArrowRight className="h-4 w-4 text-merops-green" />
                </Link>
                <Link to="/peptidase/gene-index" className="flex items-center justify-between p-2 rounded hover:bg-merops-green-50 transition-colors">
                  <span className="text-merops-gray">Gene Index</span>
                  <ArrowRight className="h-4 w-4 text-merops-green" />
                </Link>
                <Link to="/peptidase/organism-index" className="flex items-center justify-between p-2 rounded hover:bg-merops-green-50 transition-colors">
                  <span className="text-merops-gray">Organism Index</span>
                  <ArrowRight className="h-4 w-4 text-merops-green" />
                </Link>
                <Link to="/peptidase/substrate-menu" className="flex items-center justify-between p-2 rounded hover:bg-merops-green-50 transition-colors">
                  <span className="text-merops-gray">Substrate Menu</span>
                  <ArrowRight className="h-4 w-4 text-merops-green" />
                </Link>
              </CardContent>
            </Card>

            {/* Classification */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">
                  <div className="flex items-center">
                  <FileStack className="h-6 w-6 text-merops-green mr-2" />
                  Classification</div>
                  </CardTitle>
                <CardDescription>
                  Explore peptidase families and clans
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/family-index" className="flex items-center justify-between p-2 rounded hover:bg-merops-green-50 transition-colors">
                  <span className="text-merops-gray">Family Index</span>
                  <ArrowRight className="h-4 w-4 text-merops-green" />
                </Link>
                <Link to="/clan-index" className="flex items-center justify-between p-2 rounded hover:bg-merops-green-50 transition-colors">
                  <span className="text-merops-gray">Clan Index</span>
                  <ArrowRight className="h-4 w-4 text-merops-green" />
                </Link>
              </CardContent>
            </Card>

            {/* Tools */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-merops-green">
              <CardHeader>
                <CardTitle className="text-merops-gray">
                  
                <div className="flex items-center">
                  <Wrench className="h-6 w-6 text-merops-green mr-2" />
                  Tools</div>
                  </CardTitle>
                <CardDescription>
                  Search and analysis tools
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/search" className="flex items-center justify-between p-2 rounded hover:bg-merops-green-50 transition-colors">
                  <span className="text-merops-gray">Search</span>
                  <ArrowRight className="h-4 w-4 text-merops-green" />
                </Link>
                <Link to="/blast-merops" className="flex items-center justify-between p-2 rounded hover:bg-merops-green-50 transition-colors">
                  <span className="text-merops-gray">BLAST MEROPS</span>
                  <ArrowRight className="h-4 w-4 text-merops-green" />
                </Link>
                <Link to="/submissions" className="flex items-center justify-between p-2 rounded hover:bg-merops-green-50 transition-colors">
                  <span className="text-merops-gray">Submissions</span>
                  <ArrowRight className="h-4 w-4 text-merops-green" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-merops-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-merops-green">5,000+</div>
              <div className="text-merops-gray">Peptidases</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-merops-green">300+</div>
              <div className="text-merops-gray">Families</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-merops-green">80+</div>
              <div className="text-merops-gray">Clans</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-merops-green">2,000+</div>
              <div className="text-merops-gray">Species</div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-merops-gray mb-4">
            <div className="flex items-center justify-center text-merops-green">
              <Rss className="h-8 w-8 text-merops-green mr-2" />
              Latest Updates</div>
              </h2>
            <p className="text-merops-gray-light">Stay updated with the latest additions and improvements to MEROPS</p>
          </div>
          <div className="space-y-6">
            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-lg text-merops-gray">Database Release 12.5</CardTitle>
                <CardDescription>December 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-merops-gray-light">
                  New peptidase entries added, family classifications updated, and improved search functionality.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-merops-green">
              <CardHeader>
                <CardTitle className="text-lg text-merops-gray">BLAST Interface Updated</CardTitle>
                <CardDescription>November 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-merops-gray-light">
                  Enhanced BLAST interface with better result visualization and export options.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
              <Link to="/info/whats-new">
              <div className="flex items-center justify-center">
                <Eye className="h-4 w-4 text-merops-green mr-2" />
                <span className="text-merops-green">View All Updates</span>
                <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="text-sm px-4 py-16 sm:px-6 lg:px-8 bg-white grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-left">
          <img src="EMBL_EBI_logo.png" alt="EMBL-EBI Logo" className="mx-auto w-[100px] md:w-[150px] object-cover" />
        </div>
        <div className="text-center md:text-center text-sm">
        © 2025 EBI<br />
        Terms of use
           </div>
        <div className="text-center md:text-right text-sm">
        feedback<br />
        Page created 28-June-2025
          </div>
      
      </section>
    </div>
  );
};

export default Index;
