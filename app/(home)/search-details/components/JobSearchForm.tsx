"use client"

import { useState } from "react"
import { Search, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function JobSearchForm({ title = "JOBS IN BANGLADESH" }) {
    const [dateRange, setDateRange] = useState("")

    return (
        <div className="relative w-full">


            {/* Content */}
            <div className="relative z-10 px-4 py-8 md:py-12 max-w-7xl mx-auto">
                <h1 className="text-center text-white text-xl md:text-2xl font-bold mb-8">{title}</h1>

                <div className="bg-[#000000a1]  p-4 md:p-6 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Local Jobs" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="local">Local Jobs</SelectItem>
                                <SelectItem value="remote">Remote Jobs</SelectItem>
                                <SelectItem value="international">International Jobs</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="it">IT & Software</SelectItem>
                                <SelectItem value="marketing">Marketing</SelectItem>
                                <SelectItem value="finance">Finance</SelectItem>
                                <SelectItem value="healthcare">Healthcare</SelectItem>
                                <SelectItem value="education">Education</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Industry" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="tech">Technology</SelectItem>
                                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                <SelectItem value="retail">Retail</SelectItem>
                                <SelectItem value="healthcare">Healthcare</SelectItem>
                                <SelectItem value="education">Education</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Job Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="fulltime">Full Time</SelectItem>
                                <SelectItem value="parttime">Part Time</SelectItem>
                                <SelectItem value="contract">Contract</SelectItem>
                                <SelectItem value="freelance">Freelance</SelectItem>
                                <SelectItem value="internship">Internship</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Job Level" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="entry">Entry Level</SelectItem>
                                <SelectItem value="mid">Mid Level</SelectItem>
                                <SelectItem value="senior">Senior Level</SelectItem>
                                <SelectItem value="manager">Manager</SelectItem>
                                <SelectItem value="executive">Executive</SelectItem>
                            </SelectContent>
                        </Select>

                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                            <Input
                                className="!bg-white pl-10"
                                type="text"
                                placeholder="D/M/Y - D/M/Y"
                                value={dateRange}
                                onChange={(e) => setDateRange(e.target.value)}
                            />
                        </div>

                        <Input
                            className="!bg-white" type="text" placeholder="Keywords, Job Title or Company" />

                        <div className=" flex ">
                            <Button className="bg-primary_blue w-full hover:bg-primary/90 text-white px-6">
                                <Search className="h-4 w-4 mr-2" />
                                Search
                            </Button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

