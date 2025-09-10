import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Phone, Mail, MapPin } from "lucide-react"

interface Doctor {
  id: string
  name: string
  specialty: string
  image: string
  location: string
  phone: string
  email: string
  bio: string
  experience: string
}

interface DoctorProfileProps {
  doctor: Doctor
}

export function DoctorProfile({ doctor }: DoctorProfileProps) {
  return (
    <div className="bg-background">
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Doctor Image */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-2xl overflow-hidden">
                <img
                  src={doctor.image || "/placeholder.svg"}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Doctor Basic Info */}
            <div className="flex-1">
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-foreground mb-2">{doctor.name}</h1>
                <p className="text-xl text-primary font-semibold mb-4">{doctor.specialty}</p>
                <p className="text-muted-foreground mb-4">{doctor.experience}</p>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>{doctor.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span>{doctor.phone}</span>
                </div>
                <div className="flex items-center gap-3 md:col-span-2">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>{doctor.email}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </Button>
                <Button variant="outline" size="lg">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">About Dr. {doctor.name.split(" ").pop()}</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p className="mb-4">{doctor.bio}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
