import React from 'react'

const clubs = [
  {
    name: "Tech Club",
    description: "Innovation and coding workshops for tech enthusiasts"
  },
  {
    name: "Sports Club", 
    description: "Fitness activities and competitive sports events"
  },
  {
    name: "Arts Club",
    description: "Creative expression through painting and crafts"
  },
  {
    name: "Music Club",
    description: "Band performances and musical collaborations"
  },
  {
    name: "Debate Club",
    description: "Public speaking and critical thinking skills"
  },
  {
    name: "Photography Club",
    description: "Capturing moments and visual storytelling"
  }
];

const events = [
  {
    name: "Annual Tech Fest",
    description: "A three-day celebration of technology and innovation featuring workshops, hackathons, and tech talks."
  },
  {
    name: "Cultural Night",
    description: "An evening of music, dance, and cultural performances showcasing diverse talents from our student body."
  },
  {
    name: "Sports Meet",
    description: "Inter-college sports competition featuring athletics, team sports, and individual championships."
  },
  {
    name: "Science Exhibition",
    description: "Students showcase their innovative projects and research work in various scientific disciplines."
  },
  {
    name: "Literary Festival",
    description: "Poetry recitations, debates, and creative writing competitions celebrating the power of words."
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    year: "3rd Year B.Tech",
    review: "The campus life here is incredible! The clubs and events have helped me discover my passion for photography. The community is so supportive and welcoming.",
    rating: 5
  },
  {
    name: "Rahul Kumar",
    year: "2nd Year M.Tech", 
    review: "Being part of the Tech Club has been amazing. I've learned so much through workshops and hackathons. The opportunities here are endless!",
    rating: 5
  },
  {
    name: "Anjali Patel",
    year: "4th Year B.Tech",
    review: "The cultural events and sports activities make campus life vibrant and engaging. I've made friends for life through these activities.",
    rating: 4
  }
];

const CampusLife = () => {
  return (
    <div className="container w-3/4 p-4 m-4 border-2 rounded-lg bg-white dark:bg-slate-950 dark:text-white space-y-6">
      {/* Title */}
      <div className="w-full border-b border-gray-300 dark:border-slate-700 pb-2">
        <h1 className="text-3xl font-bold text-gray-950 dark:text-white">Life at Campus</h1>
      </div>
      
      {/* About Section */}
      <div className="border border-gray-300 dark:border-slate-700 p-4 rounded-md bg-gray-50 dark:bg-slate-950 shadow-sm">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our campus is a vibrant community where learning extends beyond the classroom. 
          With numerous clubs, exciting events, and a supportive environment, students 
          discover their passions, develop leadership skills, and create lasting friendships. 
          From tech enthusiasts to artists, athletes to musicians, there's a place for everyone 
          to thrive and grow.
        </p>
      </div>

      {/* Clubs Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-950 dark:text-white border-b border-gray-300 dark:border-slate-700 pb-2">
          Student Clubs
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {clubs.map((club, index) => (
            <div 
              key={index}
              className="relative h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-95 hover:-translate-y-1"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-bold text-lg text-center transition-all duration-300 group-hover:opacity-0">
                  {club.name}
                </h3>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm text-center px-4 leading-relaxed">
                  {club.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Events Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-950 dark:text-white border-b border-gray-300 dark:border-slate-700 pb-2">
          Campus Events
        </h2>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div 
              key={index}
              className="border border-gray-300 dark:border-slate-700 rounded-lg p-4 bg-gray-50 dark:bg-slate-900 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-1/3">
                  <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                    {event.name}
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-950 dark:text-white border-b border-gray-300 dark:border-slate-700 pb-2">
          Student Testimonials
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="border border-gray-300 dark:border-slate-700 rounded-lg p-6 bg-gray-50 dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-950 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.year}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                "{testimonial.review}"
              </p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CampusLife