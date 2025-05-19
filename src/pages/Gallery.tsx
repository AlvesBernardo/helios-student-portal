import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  // Sample Google Drive folders (in a real app, these would link to actual Google Drive folders)
  const driveFolders = [
    {
      name: "Events 2025",
      description: "Photos from our events and activities in 2025",
      imgUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&q=80",
      driveUrl: "https://drive.google.com/drive/folders/example1",
      count: "42 photos",
      date: "Last updated May 15, 2025"
    },
    {
      name: "Spring Mixer",
      description: "Photos from our annual spring networking event",
      imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80",
      driveUrl: "https://drive.google.com/drive/folders/example2",
      count: "28 photos",
      date: "Last updated April 3, 2025"
    },
    {
      name: "Workshops & Seminars",
      description: "Documentation of our educational sessions",
      imgUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300&q=80",
      driveUrl: "https://drive.google.com/drive/folders/example3",
      count: "36 photos",
      date: "Last updated March 22, 2025"
    },
    {
      name: "Community Outreach",
      description: "Photos from our volunteer activities",
      imgUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&q=80",
      driveUrl: "https://drive.google.com/drive/folders/example4",
      count: "19 photos",
      date: "Last updated February 18, 2025"
    },
    {
      name: "Leadership Retreat",
      description: "Photos from our annual leadership planning session",
      imgUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&q=80",
      driveUrl: "https://drive.google.com/drive/folders/example5",
      count: "54 photos",
      date: "Last updated January 30, 2025"
    },
    {
      name: "Member Spotlights",
      description: "Highlighting our outstanding members",
      imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
      driveUrl: "https://drive.google.com/drive/folders/example6",
      count: "12 photos",
      date: "Last updated May 10, 2025"
    }
  ];

  // Categories for tabs
  const categories = [
    { id: "all", name: "All Photos" },
    { id: "events", name: "Events" },
    { id: "workshops", name: "Workshops" },
    { id: "members", name: "Members" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-serif font-bold mb-4">Photo <span className="gold-gradient">Gallery</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore photos from our events, workshops, and community activities.
              All images are stored in Google Drive for easy access.
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="w-full justify-start overflow-auto py-2">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-helios-gold data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {driveFolders.map((folder, index) => (
                  <Card key={index} className="border-helios-gold/10 hover:shadow-md transition-shadow overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={folder.imgUrl} 
                        alt={folder.name} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{folder.name}</CardTitle>
                      <CardDescription>{folder.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{folder.count}</span>
                        <span>{folder.date}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        asChild
                        variant="outline" 
                        className="w-full border-helios-gold text-helios-gold hover:bg-helios-gold/5"
                      >
                        <a 
                          href={folder.driveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          View in Google Drive
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Other tab content would use filtering logic in a real application */}
            <TabsContent value="events" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {driveFolders.slice(0, 3).map((folder, index) => (
                  <Card key={index} className="border-helios-gold/10 hover:shadow-md transition-shadow overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={folder.imgUrl} 
                        alt={folder.name} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{folder.name}</CardTitle>
                      <CardDescription>{folder.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{folder.count}</span>
                        <span>{folder.date}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        asChild
                        variant="outline" 
                        className="w-full border-helios-gold text-helios-gold hover:bg-helios-gold/5"
                      >
                        <a 
                          href={folder.driveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          View in Google Drive
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="workshops" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {driveFolders.slice(2, 4).map((folder, index) => (
                  <Card key={index} className="border-helios-gold/10 hover:shadow-md transition-shadow overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={folder.imgUrl} 
                        alt={folder.name} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{folder.name}</CardTitle>
                      <CardDescription>{folder.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{folder.count}</span>
                        <span>{folder.date}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        asChild
                        variant="outline" 
                        className="w-full border-helios-gold text-helios-gold hover:bg-helios-gold/5"
                      >
                        <a 
                          href={folder.driveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          View in Google Drive
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="members" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {driveFolders.slice(4, 6).map((folder, index) => (
                  <Card key={index} className="border-helios-gold/10 hover:shadow-md transition-shadow overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={folder.imgUrl} 
                        alt={folder.name} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{folder.name}</CardTitle>
                      <CardDescription>{folder.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{folder.count}</span>
                        <span>{folder.date}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        asChild
                        variant="outline" 
                        className="w-full border-helios-gold text-helios-gold hover:bg-helios-gold/5"
                      >
                        <a 
                          href={folder.driveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          View in Google Drive
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 max-w-2xl mx-auto text-center p-8 border border-dashed border-helios-gold/30 rounded-lg">
            <h3 className="text-2xl font-serif font-bold mb-3">Need Something Specific?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Contact our media team for specific photos or media requests.
            </p>
            <Button asChild className="bg-helios-gold hover:bg-helios-gold-dark">
              <a href="/contact">Contact Media Team</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
