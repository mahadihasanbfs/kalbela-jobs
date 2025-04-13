"use client"

import { useState } from "react"
import { Search, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "../../search-details/components/DatePiker"
import { clsx } from 'clsx';

export default function SemiUnskilledSearchAction({ title = 'Filter Jobs' }: { title: string }) {

    return (
        <div className="relative w-full">
            {/* Content */}
            <div className="relative py-4 flex flex-col items-center justify-center">
                <h1 className="text-center text-white text-xl md:text-2xl font-bold ">{title}</h1>

                <div className="bg-[#000000a1] w-full mt-3 p-2 md:p-3 shadow-lg ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Select >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Category/Subject" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="it">IT & Software</SelectItem>
                                <SelectItem value="marketing">Marketing</SelectItem>
                                <SelectItem value="finance">Finance</SelectItem>
                                <SelectItem value="healthcare">Healthcare</SelectItem>
                                <SelectItem value="education">Education</SelectItem>
                            </SelectContent>
                        </Select>

                        <input
                            className="flex h-10 w-full placeholder:text-gray-800  items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 "
                            placeholder="Label of education/Company"
                            type="text" />

                        <input
                            className="flex h-10 w-full placeholder:text-gray-800  items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 "
                            placeholder="Town/City"
                            type="text" />


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

