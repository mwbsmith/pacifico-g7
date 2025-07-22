"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Clock, Star, ArrowLeft, Leaf, Palette } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// Sample events data
const events = {
  "2024-03-15": [
    {
      title: "Spring Festival",
      time: "9:00 AM - 3:00 PM",
      type: "festival",
      description: "Celebrate the renewal of spring with traditional songs, dances, and seasonal crafts.",
    },
  ],
  "2024-03-22": [
    {
      title: "Parent Workshop",
      time: "7:00 PM - 9:00 PM",
      type: "workshop",
      description: "Understanding Child Development in the Waldorf Approach",
    },
  ],
  "2024-03-29": [
    {
      title: "Art Exhibition",
      time: "4:00 PM - 7:00 PM",
      type: "exhibition",
      description: "Student artwork display featuring watercolor paintings and handcrafts.",
    },
  ],
  "2024-04-05": [
    {
      title: "Earth Day Celebration",
      time: "10:00 AM - 3:00 PM",
      type: "celebration",
      description: "Garden planting and environmental awareness activities",
    },
  ],
  "2024-04-12": [
    {
      title: "Music Concert",
      time: "6:00 PM - 8:00 PM",
      type: "concert",
      description: "Student choir and instrumental performances",
    },
  ],
  "2024-04-26": [
    {
      title: "Open House",
      time: "9:00 AM - 12:00 PM",
      type: "openhouse",
      description: "Tour our campus and meet our teachers",
    },
  ],
}

const eventTypeColors = {
  festival: "bg-blue-500",
  workshop: "bg-sky-500",
  exhibition: "bg-blue-600",
  celebration: "bg-green-500",
  concert: "bg-purple-500",
  openhouse: "bg-orange-500",
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2, 1)) // March 2024
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const firstDayWeekday = firstDayOfMonth.getDay()
  const daysInMonth = lastDayOfMonth.getDate()

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
    setSelectedDate(null)
  }

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
    setSelectedDate(null)
  }

  const formatDateKey = (day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
  }

  const getDayEvents = (day: number) => {
    const dateKey = formatDateKey(day)
    return events[dateKey] || []
  }

  const renderCalendarDays = () => {
    const days = []

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayWeekday; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 md:h-32 border border-gray-100"></div>)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = formatDateKey(day)
      const dayEvents = getDayEvents(day)
      const isToday =
        new Date().getDate() === day && new Date().getMonth() === month && new Date().getFullYear() === year
      const hasEvents = dayEvents.length > 0

      days.push(
        <div
          key={day}
          className={`h-24 md:h-32 border border-gray-100 p-1 md:p-2 cursor-pointer transition-colors hover:bg-blue-50 ${
            isToday ? "bg-blue-100 border-blue-300" : ""
          } ${selectedDate === dateKey ? "bg-blue-200 border-blue-400" : ""}`}
          onClick={() => setSelectedDate(selectedDate === dateKey ? null : dateKey)}
        >
          <div className={`text-sm md:text-base font-medium mb-1 ${isToday ? "text-blue-800" : "text-gray-700"}`}>
            {day}
          </div>
          <div className="space-y-1">
            {dayEvents.slice(0, 2).map((event, index) => (
              <div
                key={index}
                className={`text-xs px-1 py-0.5 rounded text-white truncate ${eventTypeColors[event.type]}`}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 2 && <div className="text-xs text-gray-500">+{dayEvents.length - 2} more</div>}
          </div>
        </div>,
      )
    }

    return days
  }

  const selectedDateEvents = selectedDate ? events[selectedDate] || [] : []

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
              <Link href="/#about" className="text-blue-700 hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              <Link
                href="/calendar"
                className="text-blue-700 hover:text-blue-600 transition-colors font-medium border-b-2 border-blue-600"
              >
                Calendar
              </Link>
              <Link href="/#contact" className="text-blue-700 hover:text-blue-600 transition-colors font-medium">
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
          <h1 className="text-4xl font-bold text-blue-800 mb-4">School Calendar</h1>
          <p className="text-xl text-blue-600 max-w-3xl mx-auto">
            Stay connected with our school community through seasonal festivals, educational events, and important
            dates.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar Grid */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-sky-100/30"></div>
              <CardContent className="p-6 relative">
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-blue-800">
                    {monthNames[month]} {year}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={previousMonth}
                      className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextMonth}
                      className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Day Headers */}
                <div className="grid grid-cols-7 gap-0 mb-2">
                  {dayNames.map((day) => (
                    <div
                      key={day}
                      className="p-2 text-center text-sm font-medium text-blue-700 border-b border-blue-200"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-0 border border-gray-200 rounded-lg overflow-hidden">
                  {renderCalendarDays()}
                </div>

                {/* Legend */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span className="text-sm text-blue-700">Festival</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-sky-500 rounded"></div>
                    <span className="text-sm text-blue-700">Workshop</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span className="text-sm text-blue-700">Celebration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span className="text-sm text-blue-700">Concert</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded"></div>
                    <span className="text-sm text-blue-700">Open House</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Event Details Sidebar */}
          <div className="space-y-6">
            {/* Selected Date Events */}
            {selectedDate && selectedDateEvents.length > 0 && (
              <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-sky-100/30"></div>
                <CardContent className="p-6 relative">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">
                    {new Date(selectedDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </h3>
                  <div className="space-y-4">
                    {selectedDateEvents.map((event, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-bold text-blue-800">{event.title}</h4>
                        <div className="flex items-center space-x-2 text-sm text-blue-600 mt-1">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <p className="text-blue-700 text-sm mt-2">{event.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Upcoming Events */}
            <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100/40 to-blue-100/30"></div>
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-800">05</div>
                      <div className="text-xs text-blue-600">APR</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-blue-800 text-sm">Earth Day Celebration</h4>
                      <div className="flex items-center space-x-2 text-xs text-blue-600 mt-1">
                        <Clock className="w-3 h-3" />
                        <span>10:00 AM</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-800">12</div>
                      <div className="text-xs text-blue-600">APR</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-blue-800 text-sm">Music Concert</h4>
                      <div className="flex items-center space-x-2 text-xs text-blue-600 mt-1">
                        <Clock className="w-3 h-3" />
                        <span>6:00 PM</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-800">26</div>
                      <div className="text-xs text-blue-600">APR</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-blue-800 text-sm">Open House</h4>
                      <div className="flex items-center space-x-2 text-xs text-blue-600 mt-1">
                        <Clock className="w-3 h-3" />
                        <span>9:00 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Seasonal Rhythms */}
            <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-sky-100/30"></div>
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Spring Season</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Leaf className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-800 text-sm">Garden Projects</h5>
                      <p className="text-xs text-blue-700">Planting and tending our school garden</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-800 text-sm">May Day Festival</h5>
                      <p className="text-xs text-blue-700">Traditional maypole dancing</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Palette className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-800 text-sm">Nature Studies</h5>
                      <p className="text-xs text-blue-700">Outdoor learning and exploration</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
