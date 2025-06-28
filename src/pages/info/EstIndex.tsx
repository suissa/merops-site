
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EstIndex = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">EST Index</h1>
          <p className="text-merops-gray-light">
            Expressed Sequence Tag data for peptidases and inhibitors
          </p>
        </div>

        <Card className="bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">EST Database Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-merops-gray-light">
              This section contains information about peptidase sequences found in EST databases.
              EST data provides insights into peptidase expression patterns across different tissues and organisms.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EstIndex;
