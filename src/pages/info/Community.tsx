
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Community = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">Community</h1>
          <p className="text-merops-gray-light">
            Join the MEROPS community and connect with peptidase researchers worldwide
          </p>
        </div>

        <div className="space-y-8">
          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-merops-green">2,500+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-merops-gray">Registered Users</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-merops-green">150+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-merops-gray">Countries</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-merops-green">500+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-merops-gray">Contributors</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-merops-green">1,200+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-merops-gray">Citations</p>
              </CardContent>
            </Card>
          </div>

          {/* Get Involved */}
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">Get Involved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-merops-gray mb-3">Contribute Data</h3>
                  <p className="text-merops-gray-light mb-4">
                    Help expand MEROPS by submitting new peptidase data, corrections, or literature references.
                  </p>
                  <Button className="bg-merops-green hover:bg-merops-green-dark">
                    Submit Data
                  </Button>
                </div>
                <div>
                  <h3 className="font-semibold text-merops-gray mb-3">Join Discussions</h3>
                  <p className="text-merops-gray-light mb-4">
                    Participate in scientific discussions about peptidase classification and nomenclature.
                  </p>
                  <Button variant="outline" className="border-merops-green text-merops-green hover:bg-merops-green hover:text-white">
                    Join Forum
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Community Guidelines */}
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">Community Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-merops max-w-none">
                <ul className="space-y-2 text-merops-gray-light">
                  <li>• Maintain scientific accuracy in all contributions</li>
                  <li>• Provide proper citations for published data</li>
                  <li>• Respect intellectual property rights</li>
                  <li>• Be constructive in discussions and feedback</li>
                  <li>• Follow standard nomenclature guidelines</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Newsletter */}
          <Card className="bg-transparent border-merops-green">
            <CardHeader>
              <CardTitle className="text-merops-gray">Stay Connected</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-merops-gray-light mb-4">
                Subscribe to our newsletter for updates on new releases, features, and community events.
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 p-3 border border-merops-green rounded-md focus:ring-merops-green focus:border-merops-green"
                />
                <Button className="bg-merops-green hover:bg-merops-green-dark">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;
