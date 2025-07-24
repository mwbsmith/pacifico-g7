"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, User, Users, GraduationCap, Heart, Phone, Mail, MapPin } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function ApplicationPage() {
  const [formData, setFormData] = useState({
    // Student Information
    studentFirstName: "",
    studentLastName: "",
    studentDateOfBirth: "",
    studentGender: "",
    gradeApplyingFor: "",
    currentSchool: "",
    
    // Parent/Guardian Information
    parent1FirstName: "",
    parent1LastName: "",
    parent1Email: "",
    parent1Phone: "",
    parent1Occupation: "",
    parent1Relationship: "",
    
    parent2FirstName: "",
    parent2LastName: "",
    parent2Email: "",
    parent2Phone: "",
    parent2Occupation: "",
    parent2Relationship: "",
    
    // Address Information
    streetAddress: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
    
    // Educational Background
    previousWaldorfExperience: "",
    reasonsForWaldorf: "",
    educationalConcerns: "",
    specialNeeds: "",
    
    // Additional Information
    languages: "",
    extracurriculars: "",
    medicalConditions: "",
    emergencyContact: "",
    emergencyPhone: "",
    
    // Preferences
    startDate: "",
    tourRequested: false,
    newsletterSignup: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Application submitted successfully! We will contact you within 2-3 business days.")
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Watercolor Background Layers */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/70 via-sky-50/50 to-blue-200/60"></div>
        <div className="absolute inset-0 bg-gradient-radial from-blue-300/40 via-transparent to-sky-400/30"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-blue-300/50 via-sky-200/40 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-blue-400/40 via-sky-300/30 to-transparent blur-2xl"></div>
        <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-gradient-radial from-sky-300/35 to-transparent blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1/3 h-1/3 bg-gradient-radial from-blue-300/40 to-transparent blur-2xl"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-blue-800 border-b border-blue-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-white">logo here</h1>
              <p className="text-sm text-blue-200">Waldorf Inspired Education</p>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/#about" className="text-blue-200 hover:text-white transition-colors font-medium">
                About
              </Link>
              <Link href="/calendar" className="text-blue-200 hover:text-white transition-colors font-medium">
                Calendar
              </Link>
              <Link href="/#contact" className="text-blue-200 hover:text-white transition-colors font-medium">
                Contact
              </Link>
            </nav>
            <Button className="md:hidden bg-blue-600 hover:bg-blue-700 text-white">Menu</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Back to Home */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">School Application</h1>
          <p className="text-xl text-blue-600 max-w-3xl mx-auto">
            We're excited about your interest in our Waldorf-inspired education. Please complete this application form to begin the enrollment process.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
          {/* Student Information */}
          <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-sky-100/30"></div>
            <CardHeader className="relative">
              <CardTitle className="flex items-center space-x-2 text-blue-800">
                <User className="w-5 h-5" />
                <span>Student Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 relative">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="studentFirstName" className="text-blue-700 font-medium">First Name *</Label>
                  <Input
                    id="studentFirstName"
                    value={formData.studentFirstName}
                    onChange={(e) => handleInputChange("studentFirstName", e.target.value)}
                    className="border-blue-200 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="studentLastName" className="text-blue-700 font-medium">Last Name *</Label>
                  <Input
                    id="studentLastName"
                    value={formData.studentLastName}
                    onChange={(e) => handleInputChange("studentLastName", e.target.value)}
                    className="border-blue-200 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="studentDateOfBirth" className="text-blue-700 font-medium">Date of Birth *</Label>
                  <Input
                    id="studentDateOfBirth"
                    type="date"
                    value={formData.studentDateOfBirth}
                    onChange={(e) => handleInputChange("studentDateOfBirth", e.target.value)}
                    className="border-blue-200 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <Label className="text-blue-700 font-medium">Gender</Label>
                  <Select onValueChange={(value) => handleInputChange("studentGender", value)}>
                    <SelectTrigger className="border-blue-200 focus:border-blue-500">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-blue-700 font-medium">Grade Applying For *</Label>
                  <Select onValueChange={(value) => handleInputChange("gradeApplyingFor", value)}>
                    <SelectTrigger className="border-blue-200 focus:border-blue-500">
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pre-k">Pre-Kindergarten</SelectItem>
                      <SelectItem value="kindergarten">Kindergarten</SelectItem>
                      <SelectItem value="grade-1">Grade 1</SelectItem>
                      <SelectItem value="grade-2">Grade 2</SelectItem>
                      <SelectItem value="grade-3">Grade 3</SelectItem>
                      <SelectItem value="grade-4">Grade 4</SelectItem>
                      <SelectItem value="grade-5">Grade 5</SelectItem>
                      <SelectItem value="grade-6">Grade 6</SelectItem>
                      <SelectItem value="grade-7">Grade 7</SelectItem>
                      <SelectItem value="grade-8">Grade 8</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="currentSchool" className="text-blue-700 font-medium">Current School (if applicable)</Label>
                <Input
                  id="currentSchool"
                  value={formData.currentSchool}
                  onChange={(e) => handleInputChange("currentSchool", e.target.value)}
                  className="border-blue-200 focus:border-blue-500"
                  placeholder="Name of current school"
                />
              </div>
            </CardContent>
          </Card>

          {/* Parent/Guardian Information */}
          <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-100/40 to-blue-100/30"></div>
            <CardHeader className="relative">
              <CardTitle className="flex items-center space-x-2 text-blue-800">
                <Users className="w-5 h-5" />
                <span>Parent/Guardian Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 relative">
              {/* Parent 1 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-800">Primary Parent/Guardian</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="parent1FirstName" className="text-blue-700 font-medium">First Name *</Label>
                    <Input
                      id="parent1FirstName"
                      value={formData.parent1FirstName}
                      onChange={(e) => handleInputChange("parent1FirstName", e.target.value)}
                      className="border-blue-200 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="parent1LastName" className="text-blue-700 font-medium">Last Name *</Label>
                    <Input
                      id="parent1LastName"
                      value={formData.parent1LastName}
                      onChange={(e) => handleInputChange("parent1LastName", e.target.value)}
                      className="border-blue-200 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="parent1Email" className="text-blue-700 font-medium">Email *</Label>
                    <Input
                      id="parent1Email"
                      type="email"
                      value={formData.parent1Email}
                      onChange={(e) => handleInputChange("parent1Email", e.target.value)}
                      className="border-blue-200 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="parent1Phone" className="text-blue-700 font-medium">Phone *</Label>
                    <Input
                      id="parent1Phone"
                      type="tel"
                      value={formData.parent1Phone}
                      onChange={(e) => handleInputChange("parent1Phone", e.target.value)}
                      className="border-blue-200 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="parent1Occupation" className="text-blue-700 font-medium">Occupation</Label>
                    <Input
                      id="parent1Occupation"
                      value={formData.parent1Occupation}
                      onChange={(e) => handleInputChange("parent1Occupation", e.target.value)}
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <Label className="text-blue-700 font-medium">Relationship to Student</Label>
                    <Select onValueChange={(value) => handleInputChange("parent1Relationship", value)}>
                      <SelectTrigger className="border-blue-200 focus:border-blue-500">
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mother">Mother</SelectItem>
                        <SelectItem value="father">Father</SelectItem>
                        <SelectItem value="guardian">Guardian</SelectItem>
                        <SelectItem value="stepmother">Stepmother</SelectItem>
                        <SelectItem value="stepfather">Stepfather</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Parent 2 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-800">Secondary Parent/Guardian (Optional)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="parent2FirstName" className="text-blue-700 font-medium">First Name</Label>
                    <Input
                      id="parent2FirstName"
                      value={formData.parent2FirstName}
                      onChange={(e) => handleInputChange("parent2FirstName", e.target.value)}
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="parent2LastName" className="text-blue-700 font-medium">Last Name</Label>
                    <Input
                      id="parent2LastName"
                      value={formData.parent2LastName}
                      onChange={(e) => handleInputChange("parent2LastName", e.target.value)}
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="parent2Email" className="text-blue-700 font-medium">Email</Label>
                    <Input
                      id="parent2Email"
                      type="email"
                      value={formData.parent2Email}
                      onChange={(e) => handleInputChange("parent2Email", e.target.value)}
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="parent2Phone" className="text-blue-700 font-medium">Phone</Label>
                    <Input
                      id="parent2Phone"
                      type="tel"
                      value={formData.parent2Phone}
                      onChange={(e) => handleInputChange("parent2Phone", e.target.value)}
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Address Information */}
          <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-sky-100/30"></div>
            <CardHeader className="relative">
              <CardTitle className="flex items-center space-x-2 text-blue-800">
                <MapPin className="w-5 h-5" />
                <span>Address Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 relative">
              <div>
                <Label htmlFor="streetAddress" className="text-blue-700 font-medium">Street Address *</Label>
                <Input
                  id="streetAddress"
                  value={formData.streetAddress}
                  onChange={(e) => handleInputChange("streetAddress", e.target.value)}
                  className="border-blue-200 focus:border-blue-500"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city" className="text-blue-700 font-medium">City *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="border-blue-200 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="province" className="text-blue-700 font-medium">Province *</Label>
                  <Input
                    id="province"
                    value={formData.province}
                    onChange={(e) => handleInputChange("province", e.target.value)}
                    className="border-blue-200 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="postalCode" className="text-blue-700 font-medium">Postal Code</Label>
                  <Input
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange("postalCode", e.target.value)}
                    className="border-blue-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="country" className="text-blue-700 font-medium">Country *</Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                    className="border-blue-200 focus:border-blue-500"
                    placeholder="Costa Rica"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Educational Background */}
          <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-100/40 to-blue-100/30"></div>
            <CardHeader className="relative">
              <CardTitle className="flex items-center space-x-2 text-blue-800">
                <GraduationCap className="w-5 h-5" />
                <span>Educational Background & Interests</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 relative">
              <div>
                <Label className="text-blue-700 font-medium">Previous Waldorf Experience</Label>
                <RadioGroup
                  value={formData.previousWaldorfExperience}
                  onValueChange={(value) => handleInputChange("previousWaldorfExperience", value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="waldorf-none" />
                    <Label htmlFor="waldorf-none">No previous Waldorf experience</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="some" id="waldorf-some" />
                    <Label htmlFor="waldorf-some">Some Waldorf experience</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="extensive" id="waldorf-extensive" />
                    <Label htmlFor="waldorf-extensive">Extensive Waldorf experience</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="reasonsForWaldorf" className="text-blue-700 font-medium">Why are you interested in Waldorf education? *</Label>
                <Textarea
                  id="reasonsForWaldorf"
                  value={formData.reasonsForWaldorf}
                  onChange={(e) => handleInputChange("reasonsForWaldorf", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 min-h-[100px]"
                  placeholder="Please share what draws you to the Waldorf approach..."
                  required
                />
              </div>

              <div>
                <Label htmlFor="educationalConcerns" className="text-blue-700 font-medium">Educational concerns or goals for your child</Label>
                <Textarea
                  id="educationalConcerns"
                  value={formData.educationalConcerns}
                  onChange={(e) => handleInputChange("educationalConcerns", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 min-h-[80px]"
                  placeholder="Any specific learning needs, goals, or concerns..."
                />
              </div>

              <div>
                <Label htmlFor="specialNeeds" className="text-blue-700 font-medium">Special needs or accommodations</Label>
                <Textarea
                  id="specialNeeds"
                  value={formData.specialNeeds}
                  onChange={(e) => handleInputChange("specialNeeds", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 min-h-[80px]"
                  placeholder="Please describe any special needs, learning differences, or accommodations..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-sky-100/30"></div>
            <CardHeader className="relative">
              <CardTitle className="flex items-center space-x-2 text-blue-800">
                <Heart className="w-5 h-5" />
                <span>Additional Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 relative">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="languages" className="text-blue-700 font-medium">Languages spoken at home</Label>
                  <Input
                    id="languages"
                    value={formData.languages}
                    onChange={(e) => handleInputChange("languages", e.target.value)}
                    className="border-blue-200 focus:border-blue-500"
                    placeholder="e.g., Spanish, English"
                  />
                </div>
                <div>
                  <Label htmlFor="startDate" className="text-blue-700 font-medium">Preferred start date</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange("startDate", e.target.value)}
                    className="border-blue-200 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="extracurriculars" className="text-blue-700 font-medium">Current extracurricular activities or interests</Label>
                <Textarea
                  id="extracurriculars"
                  value={formData.extracurriculars}
                  onChange={(e) => handleInputChange("extracurriculars", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 min-h-[80px]"
                  placeholder="Sports, music, arts, hobbies..."
                />
              </div>

              <div>
                <Label htmlFor="medicalConditions" className="text-blue-700 font-medium">Medical conditions or allergies</Label>
                <Textarea
                  id="medicalConditions"
                  value={formData.medicalConditions}
                  onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 min-h-[80px]"
                  placeholder="Please list any medical conditions, allergies, or medications..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="emergencyContact" className="text-blue-700 font-medium">Emergency contact name</Label>
                  <Input
                    id="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                    className="border-blue-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="emergencyPhone" className="text-blue-700 font-medium">Emergency contact phone</Label>
                  <Input
                    id="emergencyPhone"
                    type="tel"
                    value={formData.emergencyPhone}
                    onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                    className="border-blue-200 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="tourRequested"
                    checked={formData.tourRequested}
                    onCheckedChange={(checked) => handleInputChange("tourRequested", checked as boolean)}
                  />
                  <Label htmlFor="tourRequested" className="text-blue-700">
                    I would like to schedule a school tour
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletterSignup"
                    checked={formData.newsletterSignup}
                    onCheckedChange={(checked) => handleInputChange("newsletterSignup", checked as boolean)}
                  />
                  <Label htmlFor="newsletterSignup" className="text-blue-700">
                    I would like to receive the school newsletter and updates
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              Submit Application
            </Button>
            <p className="text-sm text-blue-600 mt-4">
              * Required fields. We will review your application and contact you within 2-3 business days.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
