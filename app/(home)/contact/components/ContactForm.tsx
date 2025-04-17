"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import PrimaryBtn from "@/components/PrimaryBtn"
import SecondaryBtn from "@/components/SecondaryBtn"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
  }

  const handleReset = () => {
    setFormData({
      name: "",
      organization: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 p-6">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="ml-2">BTMC Building, Level 5, Kawran Bazar, Dhaka-1215</p>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mt-1 flex-shrink-0" />
                <div className="ml-2">
                  <p>+880 1601-016552</p>
                  <p>+880 1719-477961</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="ml-2">info@kalbelajobs.com</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Customer Support</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 mt-1 flex-shrink-0" />
                <div className="ml-2">
                  <p>+880 1601-016552</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="ml-2">support@kalbelajobs.com</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Sales Support</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 mt-1 flex-shrink-0" />
                <div className="ml-2">
                  <p>+880 1719-477961</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="ml-2">sales@kalbelajobs.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input
                type="text"
                name="organization"
                placeholder="Organization"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input type="tel" name="phone" placeholder="Phone No" value={formData.phone} onChange={handleChange} />
            </div>
            <div>
              <Input
                type="text"
                name="subject"
                placeholder="How Can We Assist You?"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Type Your Message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[160px]"
                required
              />
            </div>
            <div className="flex gap-4">
              <PrimaryBtn type="submit">
                SUBMIT
              </PrimaryBtn>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
