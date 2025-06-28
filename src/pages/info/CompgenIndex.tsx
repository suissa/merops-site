
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CompgenIndex = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">Comparative Genomics</h1>
          <p className="text-merops-gray-light">
            Comparative analysis of peptidase complements across genomes
          </p>
        </div>

        <Card className="bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">Genome Comparison Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-merops-gray-light">
              This section provides tools and data for comparing peptidase complements across 
              different genomes, allowing researchers to study the evolution and distribution 
              of peptidases across species.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompgenIndex;
