"use client"

import { useState } from "react"
import { Search, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "./DatePiker"

export default function SearchAction() {
    const [dateRange, setDateRange] = useState("")

    return (
        <div className="relative w-full">
            {/* Content */}
            <div className="relative py-4 flex flex-col items-center justify-center">
                <h1 className="text-center text-white text-xl md:text-2xl font-bold ">World Wide Jobs</h1>

                <div className="bg-[#000000a1] w-full mt-3 p-2 md:p-2 shadow-lg ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
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

                        <div className="relative">
                            <DatePicker />
                        </div>

                        <Button className="bg-primary_blue w-full hover:bg-primary/90 text-white px-6">
                            <Search className="h-4 w-4 mr-2" />
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

