
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    yearOfStudy: "",
    program: "",
    membershipType: "standard",
    interests: [] as string[],
    agreeTerms: false,
    agreeUpdates: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, membershipType: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    if (name === "agreeTerms" || name === "agreeUpdates") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      // Handle interests checkboxes
      setFormData((prev) => {
        const currentInterests = [...prev.interests];
        if (checked) {
          return { ...prev, interests: [...currentInterests, name] };
        } else {
          return { ...prev, interests: currentInterests.filter(interest => interest !== name) };
        }
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Registration successful!", {
        description: "Welcome to the Helios Student Society!",
      });
      
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        studentId: "",
        yearOfStudy: "",
        program: "",
        membershipType: "standard",
        interests: [],
        agreeTerms: false,
        agreeUpdates: false
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const interests = [
    "Academic Development",
    "Professional Networking",
    "Social Events",
    "Community Service",
    "Leadership Opportunities",
    "Research Projects"
  ];

  const programs = [
    "Arts & Humanities",
    "Business Administration",
    "Computer Science",
    "Engineering",
    "Environmental Studies",
    "Health Sciences",
    "Law",
    "Mathematics",
    "Natural Sciences",
    "Social Sciences",
    "Other"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-serif font-bold mb-4">Join <span className="gold-gradient">Helios</span></h1>
              <p className="text-muted-foreground">
                Become a member of our vibrant student society and unlock exclusive benefits and opportunities.
              </p>
            </div>

            <Card className="border-helios-gold/10">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Membership Registration</CardTitle>
                <CardDescription>
                  Please fill out the form below to register as a member of Helios Student Society.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleTextChange}
                          placeholder="Your first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleTextChange}
                          placeholder="Your last name"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleTextChange}
                          placeholder="Your email address"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="studentId">Student ID</Label>
                        <Input
                          id="studentId"
                          name="studentId"
                          value={formData.studentId}
                          onChange={handleTextChange}
                          placeholder="Your student ID number"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Academic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="yearOfStudy">Year of Study</Label>
                        <Select
                          value={formData.yearOfStudy}
                          onValueChange={(value) => handleSelectChange("yearOfStudy", value)}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select year of study" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">First Year</SelectItem>
                            <SelectItem value="2">Second Year</SelectItem>
                            <SelectItem value="3">Third Year</SelectItem>
                            <SelectItem value="4">Fourth Year</SelectItem>
                            <SelectItem value="5+">Fifth Year or Above</SelectItem>
                            <SelectItem value="graduate">Graduate Student</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="program">Program/Major</Label>
                        <Select
                          value={formData.program}
                          onValueChange={(value) => handleSelectChange("program", value)}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select program or major" />
                          </SelectTrigger>
                          <SelectContent>
                            {programs.map((program) => (
                              <SelectItem key={program} value={program.toLowerCase().replace(/\s+/g, '-')}>
                                {program}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Membership Type */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Membership Type</h3>
                    <RadioGroup 
                      value={formData.membershipType}
                      onValueChange={handleRadioChange}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard" className="font-medium">Standard Membership</Label>
                        <span className="text-muted-foreground text-sm ml-2">(Free)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="premium" id="premium" />
                        <Label htmlFor="premium" className="font-medium">Premium Membership</Label>
                        <span className="text-muted-foreground text-sm ml-2">($20/year)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="lifetime" id="lifetime" />
                        <Label htmlFor="lifetime" className="font-medium">Lifetime Membership</Label>
                        <span className="text-muted-foreground text-sm ml-2">($50 one-time)</span>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Areas of Interest */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Areas of Interest</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Select all that apply. This helps us tailor your membership experience.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {interests.map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox 
                            id={interest.toLowerCase().replace(/\s+/g, '-')}
                            checked={formData.interests.includes(interest)}
                            onCheckedChange={(checked) => 
                              handleCheckboxChange(interest, checked as boolean)
                            }
                          />
                          <Label 
                            htmlFor={interest.toLowerCase().replace(/\s+/g, '-')}
                            className="text-sm font-normal"
                          >
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="agreeTerms" 
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleCheckboxChange("agreeTerms", checked as boolean)}
                        required
                      />
                      <Label 
                        htmlFor="agreeTerms" 
                        className="text-sm font-normal"
                      >
                        I agree to the terms and conditions of the Helios Student Society membership
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="agreeUpdates" 
                        checked={formData.agreeUpdates}
                        onCheckedChange={(checked) => handleCheckboxChange("agreeUpdates", checked as boolean)}
                      />
                      <Label 
                        htmlFor="agreeUpdates" 
                        className="text-sm font-normal"
                      >
                        I would like to receive updates about events, opportunities, and news from Helios
                      </Label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="bg-helios-gold hover:bg-helios-gold-dark w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Registration"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
