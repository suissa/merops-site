
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DistributionIndex = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">Distribution Analysis</h1>
          <p className="text-merops-gray-light">
            Analysis of peptidase distribution across organisms and environments
          </p>
        </div>

        <Card className="bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">Peptidase Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-merops-gray-light">
              This section provides analysis of how peptidases are distributed across 
              different organisms, tissues, and environmental conditions, helping researchers 
              understand peptidase evolution and function.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DistributionIndex;
