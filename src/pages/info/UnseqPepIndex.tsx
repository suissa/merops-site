
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UnseqPepIndex = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">Unsequenced Peptidases</h1>
          <p className="text-merops-gray-light">
            Peptidases known from biochemical studies but lacking sequence information
          </p>
        </div>

        <Card className="bg-transparent border-merops-green">
          <CardHeader>
            <CardTitle className="text-merops-gray">About Unsequenced Peptidases</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-merops-gray-light">
              This index contains information about peptidases that have been characterized biochemically 
              but for which no sequence information is available. These entries are maintained for 
              historical completeness and may be updated when sequence data becomes available.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UnseqPepIndex;
