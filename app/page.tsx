import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Leaf, Palette, Mail, Phone, MapPin, CalendarIcon, Clock, Users, Star } from 'lucide-react'
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
      <header className="sticky top-0 z-50 bg-blue-800 border-b border-blue-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-white">logo here</h1>
              <p className="text-sm text-blue-200">Waldorf Inspired Education</p>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#about" className="text-blue-200 hover:text-white transition-colors font-medium">
                About
              </Link>
              <Link href="#calendar" className="text-blue-200 hover:text-white transition-colors font-medium">
                Calendar
              </Link>
              <Link href="#contact" className="text-blue-200 hover:text-white transition-colors font-medium">
                Contact
              </Link>
            </nav>
            <Button className="md:hidden bg-blue-600 hover:bg-blue-700 text-white">Menu</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden min-h-[80vh] flex items-center">
        {/* Full Width Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/waldorf-classroom.jpeg"
            alt="Waldorf classroom with children learning in a natural, open-air environment with artistic chalkboard"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Watercolor overlay effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-sky-500/20 to-blue-700/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-800/10 to-blue-900/30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                  Education that
                  <span className="text-sky-200 block">Nurtures the Soul</span>
                </h2>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl drop-shadow-lg">
                  At our Waldorf school in Costa Rica, we cultivate imagination, creativity, and love for learning in a
                  natural and nurturing environment.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white/90 hover:bg-white text-blue-800 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  Learn More
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/80 text-white hover:bg-white/10 px-8 py-4 rounded-full bg-transparent backdrop-blur-sm text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  Schedule a Visit
                </Button>
              </div>
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

      {/* Calendar Section */}
      <section id="calendar" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50/70 to-blue-50/50"></div>
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-blue-300/25 via-sky-200/20 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-radial from-blue-400/30 via-sky-300/20 to-transparent blur-2xl"></div>
          <div className="absolute top-1/3 left-1/4 w-1/3 h-1/3 bg-gradient-radial from-sky-300/25 to-transparent blur-xl"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">School Calendar</h2>
            <p className="text-xl text-blue-600 max-w-3xl mx-auto">
              Stay connected with our school community through seasonal festivals, educational events, and important
              dates throughout the year.
            </p>
          </div>

          {/* Current Month Highlight */}
          <div className="mb-12">
            <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-sky-100/30"></div>
              <CardContent className="p-8 relative">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-blue-800">March 2024</h3>
                  <div className="flex items-center space-x-2 text-blue-600">
                    <CalendarIcon className="w-5 h-5" />
                    <span className="font-medium">Current Month</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-blue-50/80 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        15
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-800">Spring Festival</h4>
                        <p className="text-sm text-blue-600 mb-2">9:00 AM - 3:00 PM</p>
                        <p className="text-blue-700 text-sm">
                          Celebrate the renewal of spring with traditional songs, dances, and seasonal crafts.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-sky-50/80 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        22
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-800">Parent Workshop</h4>
                        <p className="text-sm text-blue-600 mb-2">7:00 PM - 9:00 PM</p>
                        <p className="text-blue-700 text-sm">Understanding Child Development in the Waldorf Approach</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50/80 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        29
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-800">Art Exhibition</h4>
                        <p className="text-sm text-blue-600 mb-2">4:00 PM - 7:00 PM</p>
                        <p className="text-blue-700 text-sm">
                          Student artwork display featuring watercolor paintings and handcrafts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                <Card className="border-none shadow-md bg-white/90 backdrop-blur-sm rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-100/30 to-blue-100/25"></div>
                  <CardContent className="p-6 relative">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-800">05</div>
                        <div className="text-sm text-blue-600">APR</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-blue-800">Earth Day Celebration</h4>
                        <div className="flex items-center space-x-4 text-sm text-blue-600 mt-1">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>10:00 AM</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>All Ages</span>
                          </div>
                        </div>
                        <p className="text-blue-700 text-sm mt-2">
                          Garden planting and environmental awareness activities
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-white/90 backdrop-blur-sm rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-sky-100/25"></div>
                  <CardContent className="p-6 relative">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-800">12</div>
                        <div className="text-sm text-blue-600">APR</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-blue-800">Music Concert</h4>
                        <div className="flex items-center space-x-4 text-sm text-blue-600 mt-1">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>6:00 PM</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>Community</span>
                          </div>
                        </div>
                        <p className="text-blue-700 text-sm mt-2">Student choir and instrumental performances</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-white/90 backdrop-blur-sm rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-100/30 to-blue-100/25"></div>
                  <CardContent className="p-6 relative">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-800">26</div>
                        <div className="text-sm text-blue-600">APR</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-blue-800">Open House</h4>
                        <div className="flex items-center space-x-4 text-sm text-blue-600 mt-1">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>9:00 AM - 12:00 PM</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4" />
                            <span>Prospective Families</span>
                          </div>
                        </div>
                        <p className="text-blue-700 text-sm mt-2">Tour our campus and meet our teachers</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Seasonal Rhythms</h3>
              <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-sky-100/30"></div>
                <CardContent className="p-8 relative">
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-blue-800 mb-2">Spring Season</h4>
                      <p className="text-blue-600">March - May 2024</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <Leaf className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-800">Garden Projects</h5>
                          <p className="text-sm text-blue-700">Planting and tending our school garden</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                          <Star className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-800">May Day Festival</h5>
                          <p className="text-sm text-blue-700">Traditional maypole dancing and celebration</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <Palette className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-800">Nature Studies</h5>
                          <p className="text-sm text-blue-700">Outdoor learning and botanical exploration</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <Link href="/calendar">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                View Full Calendar
              </Button>
            </Link>
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
                  <Link href="#calendar" className="hover:text-white transition-colors">
                    Calendar
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="/calendar" className="hover:text-white transition-colors">
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
