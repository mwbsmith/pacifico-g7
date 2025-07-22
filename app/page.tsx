import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Leaf, Palette, Users, Mail, Phone, MapPin, BookOpen, Star, Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WaldorfSchoolSite() {
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
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/pacific-logo-new.png"
                alt="Pacific Internacional - Waldorf Inspired Education"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h1 className="text-xl font-bold text-blue-800">Pacific Internacional</h1>
                <p className="text-sm text-blue-600">Waldorf Inspired Education</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#about" className="text-blue-700 hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              <Link href="#admissions" className="text-blue-700 hover:text-blue-600 transition-colors font-medium">
                Admissions
              </Link>
              <Link href="#curriculum" className="text-blue-700 hover:text-blue-600 transition-colors font-medium">
                Curriculum
              </Link>
              <Link href="#community" className="text-blue-700 hover:text-blue-600 transition-colors font-medium">
                Community
              </Link>
              <Link href="#news" className="text-blue-700 hover:text-blue-600 transition-colors font-medium">
                News
              </Link>
              <Link href="#contact" className="text-blue-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>
            </nav>
            <Button className="md:hidden bg-blue-600 hover:bg-blue-700 text-white">Menu</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/25 via-sky-300/20 to-blue-500/30"></div>
          <div className="absolute top-0 left-0 w-3/4 h-full bg-gradient-to-br from-blue-400/25 via-transparent to-sky-300/20 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-3/4 bg-gradient-radial from-blue-400/30 to-transparent blur-xl"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold text-blue-800 leading-tight">
                  Education that
                  <span className="text-blue-600 block">Nurtures the Soul</span>
                </h2>
                <p className="text-xl text-blue-700 leading-relaxed">
                  At our Waldorf school in Costa Rica, we cultivate imagination, creativity, and love for learning in a
                  natural and nurturing environment.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full">
                  Learn More
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full bg-transparent"
                >
                  Schedule a Visit
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-sky-400 rounded-3xl opacity-20 blur-lg"></div>
              <Image
                src="/placeholder.svg?height=500&width=600&text=Children+playing+in+nature"
                alt="Children playing in nature"
                width={600}
                height={500}
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white/80"></div>
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-sky-200/35 via-blue-100/25 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-gradient-radial from-blue-200/30 to-transparent blur-2xl"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">About Our School</h2>
            <p className="text-xl text-blue-600 max-w-3xl mx-auto">
              Based on Rudolf Steiner's Waldorf pedagogy, our school honors the natural development of the child through
              arts, nature, and experiential learning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-sky-100/40"></div>
              <CardContent className="p-8 text-center relative">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Holistic Education</h3>
                <p className="text-blue-700">
                  We develop head, heart, and hands through a holistic approach that respects each child's natural
                  rhythm.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 to-blue-100/40"></div>
              <CardContent className="p-8 text-center relative">
                <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Arts & Creativity</h3>
                <p className="text-blue-700">
                  Arts are integrated throughout the curriculum, fostering creative expression and imaginative thinking.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-sky-100/40"></div>
              <CardContent className="p-8 text-center relative">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Natural Connection</h3>
                <p className="text-blue-700">
                  Our Costa Rican campus offers a unique natural environment where children learn in harmony with
                  nature.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50/70 to-blue-50/50"></div>
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-blue-300/25 via-sky-200/20 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-radial from-blue-400/30 via-sky-300/20 to-transparent blur-2xl"></div>
          <div className="absolute top-1/3 left-1/4 w-1/3 h-1/3 bg-gradient-radial from-sky-300/25 to-transparent blur-xl"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Curriculum</h2>
            <p className="text-xl text-blue-600 max-w-3xl mx-auto">
              A rich and diverse curriculum that adapts to the child's developmental stages, from kindergarten through
              high school.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500&text=Waldorf+classroom+with+children+learning"
                alt="Waldorf classroom with children learning"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Early Childhood (Ages 3-6)</h3>
                  <p className="text-blue-700">
                    Free play, storytelling, circle time, domestic activities, and artistic pursuits that nurture
                    imagination.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Elementary (Ages 6-14)</h3>
                  <p className="text-blue-700">
                    Main lesson blocks, academic subjects integrated with art, music, eurythmy, and handwork.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">High School (Ages 14-18)</h3>
                  <p className="text-blue-700">
                    College preparation with emphasis on critical thinking, independent projects, and community service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white/85"></div>
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-blue-200/30 via-sky-100/25 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-radial from-blue-300/25 via-sky-200/20 to-transparent blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-1/4 h-1/4 bg-gradient-radial from-sky-200/35 to-transparent blur-xl"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Admissions Process</h2>
            <p className="text-xl text-blue-600 max-w-3xl mx-auto">
              We invite you to get to know our educational community and discover if Waldorf pedagogy is right for your
              family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-800">Information Session</h3>
                    <p className="text-blue-700">Attend one of our monthly information talks</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-800">Campus Visit</h3>
                    <p className="text-blue-700">Schedule a personalized visit to see our facilities</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-800">Application</h3>
                    <p className="text-blue-700">
                      Complete the admission application and submit required documentation
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-800">Family Interview</h3>
                    <p className="text-blue-700">Conversation with the family to understand expectations and values</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                Start Admissions Process
              </Button>
            </div>

            <div>
              <Image
                src="/placeholder.svg?height=500&width=500&text=Waldorf+school+campus"
                alt="Waldorf school campus"
                width={500}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 to-sky-50/70"></div>
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-blue-300/30 via-sky-200/25 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-sky-300/35 via-blue-200/20 to-transparent blur-2xl"></div>
          <div className="absolute top-1/4 left-1/2 w-1/3 h-1/3 bg-gradient-radial from-blue-200/30 to-transparent blur-xl"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Community</h2>
            <p className="text-xl text-blue-600 max-w-3xl mx-auto">
              We are a vibrant community of families, teachers, and students united by love for learning and holistic
              growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-sky-100/30"></div>
              <CardContent className="p-6 relative">
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-800 mb-2">150+</h3>
                <p className="text-blue-700">Students</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100/40 to-blue-100/30"></div>
              <CardContent className="p-6 relative">
                <Heart className="w-12 h-12 text-sky-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-800 mb-2">25+</h3>
                <p className="text-blue-700">Teachers</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-sky-100/30"></div>
              <CardContent className="p-6 relative">
                <Leaf className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-800 mb-2">15</h3>
                <p className="text-blue-700">Years of History</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100/40 to-blue-100/30"></div>
              <CardContent className="p-6 relative">
                <Star className="w-12 h-12 text-sky-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-800 mb-2">100%</h3>
                <p className="text-blue-700">Satisfaction</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100/30 to-blue-100/25"></div>
              <CardContent className="p-8 relative">
                <Image
                  src="/placeholder.svg?height=200&width=300&text=School+festival"
                  alt="School festival"
                  width={300}
                  height={200}
                  className="rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold text-blue-800 mb-4">Seasonal Festivals</h3>
                <p className="text-blue-700">
                  We celebrate the natural rhythms of the year with festivals that connect the entire community.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-sky-100/25"></div>
              <CardContent className="p-8 relative">
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Parent+volunteers"
                  alt="Parent volunteers"
                  width={300}
                  height={200}
                  className="rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold text-blue-800 mb-4">Family Participation</h3>
                <p className="text-blue-700">
                  Parents are active participants in education, joining activities and school decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100/30 to-blue-100/25"></div>
              <CardContent className="p-8 relative">
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Teacher+training"
                  alt="Teacher training"
                  width={300}
                  height={200}
                  className="rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold text-blue-800 mb-4">Continuous Training</h3>
                <p className="text-blue-700">
                  Our teachers continuously train in Waldorf pedagogy and innovative methodologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white/85"></div>
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-blue-200/30 via-sky-100/25 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-gradient-radial from-blue-300/25 via-sky-200/20 to-transparent blur-2xl"></div>
          <div className="absolute top-1/3 left-1/4 w-1/3 h-1/3 bg-gradient-radial from-sky-200/30 to-transparent blur-xl"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Latest News</h2>
            <p className="text-xl text-blue-600 max-w-3xl mx-auto">
              Stay updated with the latest happenings, events, and achievements from our Pacific Internacional
              community.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-sky-100/25"></div>
              <CardContent className="p-0 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Spring+Festival+2024"
                  alt="Spring Festival 2024"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 mb-2">March 15, 2024</div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">
                    Spring Festival Celebrates Renewal and Growth
                  </h3>
                  <p className="text-blue-700 mb-4">
                    Our annual Spring Festival brought together families and students to celebrate the season of renewal
                    with traditional songs, dances, and artistic displays.
                  </p>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100/30 to-blue-100/25"></div>
              <CardContent className="p-0 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=New+Art+Studio"
                  alt="New Art Studio Opening"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 mb-2">March 8, 2024</div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">New Art Studio Opens for Creative Expression</h3>
                  <p className="text-blue-700 mb-4">
                    We're excited to unveil our new dedicated art studio space, designed to inspire creativity and
                    artistic exploration for students of all ages.
                  </p>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-sky-100/25"></div>
              <CardContent className="p-0 relative">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Student+Achievement"
                  alt="Student Achievement Awards"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 mb-2">February 28, 2024</div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Students Excel in National Arts Competition</h3>
                  <p className="text-blue-700 mb-4">
                    Congratulations to our talented students who received recognition at the National Youth Arts
                    Competition for their outstanding creative works.
                  </p>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
              View All News
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white/80"></div>
          <div className="absolute top-0 left-0 w-3/4 h-full bg-gradient-to-br from-sky-200/25 via-blue-100/20 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-2/3 bg-gradient-radial from-blue-300/30 via-sky-200/20 to-transparent blur-2xl"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Contact Us</h2>
            <p className="text-xl text-blue-600 max-w-3xl mx-auto">
              We're here to answer your questions and help you learn more about our educational approach.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-800 mb-2">Location</h3>
                    <p className="text-blue-700">
                      Escazú, San José
                      <br />
                      Costa Rica
                      <br />
                      In harmony with nature
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-800 mb-2">Phone</h3>
                    <p className="text-blue-700">
                      +506 2289-5555
                      <br />
                      Monday to Friday: 7:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-800 mb-2">Email</h3>
                    <p className="text-blue-700">
                      info@waldorfcostarica.edu
                      <br />
                      admissions@waldorfcostarica.edu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-sky-100/30"></div>
              <CardContent className="p-8 relative">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-blue-700 mb-2">Name</label>
                      <Input className="border-blue-200 focus:border-blue-500" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-700 mb-2">Email</label>
                      <Input
                        type="email"
                        className="border-blue-200 focus:border-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-700 mb-2">Subject</label>
                    <Input className="border-blue-200 focus:border-blue-500" placeholder="How can we help you?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-700 mb-2">Message</label>
                    <Textarea
                      className="border-blue-200 focus:border-blue-500 min-h-[120px]"
                      placeholder="Tell us more about your interest in our school..."
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Image
                src="/images/pacific-logo.jpeg"
                alt="Pacific Internacional"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">Pacific Internacional</h3>
                <p className="text-sm text-blue-200">Costa Rica</p>
              </div>
              <p className="text-blue-200">
                Education that nurtures the soul and develops whole, creative, and free human beings.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#admissions" className="hover:text-white transition-colors">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="#curriculum" className="hover:text-white transition-colors">
                    Curriculum
                  </Link>
                </li>
                <li>
                  <Link href="#community" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#news" className="hover:text-white transition-colors">
                    News
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    School Calendar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Parent Portal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Library
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Educational Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Escazú, San José</li>
                <li>+506 2289-5555</li>
                <li>info@waldorfcostarica.edu</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} Waldorf School Costa Rica. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
