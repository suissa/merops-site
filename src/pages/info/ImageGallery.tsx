
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ImageGallery = () => {
  const mockImages = [
    { title: "Trypsin Structure", category: "Serine Peptidases", description: "3D structure of bovine trypsin showing the catalytic triad" },
    { title: "Pepsin Active Site", category: "Aspartic Peptidases", description: "Close-up view of pepsin active site with substrate" },
    { title: "Cathepsin B", category: "Cysteine Peptidases", description: "Human cathepsin B crystal structure" },
    { title: "Thermolysin", category: "Metallopeptidases", description: "Thermolysin from Bacillus thermoproteolyticus" },
    { title: "Chymotrypsin", category: "Serine Peptidases", description: "Chymotrypsin structure with inhibitor bound" },
    { title: "Papain", category: "Cysteine Peptidases", description: "Papain from Carica papaya" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-merops-gray mb-4">Image Gallery</h1>
          <p className="text-merops-gray-light">
            Structural images and visualizations of peptidases and their complexes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockImages.map((image, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-merops-green-100 to-merops-green-200 rounded-t-lg flex items-center justify-center">
                <div className="text-center text-merops-green">
                  <div className="text-4xl mb-2">🧬</div>
                  <div className="text-sm font-medium">{image.title}</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-merops-gray text-lg">{image.title}</CardTitle>
                <p className="text-sm text-merops-green font-medium">{image.category}</p>
              </CardHeader>
              <CardContent>
                <p className="text-merops-gray-light text-sm">{image.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
