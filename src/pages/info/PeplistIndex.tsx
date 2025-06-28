
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PeplistIndex = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">Peptidase Lists</h1>
          <p className="text-merops-gray-light">
            Curated lists of peptidases for specific research applications
          </p>
        </div>

        <Card className="bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">Specialized Peptidase Lists</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-merops-gray-light">
              This section contains curated lists of peptidases organized by specific criteria 
              such as therapeutic targets, disease associations, or research applications.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PeplistIndex;
