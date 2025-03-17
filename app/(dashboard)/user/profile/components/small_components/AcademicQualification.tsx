import React, { useState } from "react"
import {
  AlertCircle,
  BaggageClaimIcon,
  Briefcase,
  ChevronLeft,
  Eye,
  FileBadge2,
  GraduationCap,
  Home,
  Key,
  LifeBuoy,
  LocateIcon,
  LucideCookie,
  Pencil,
  Save,
  Star,
  Type,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const AcademicQualification = ({
  setActiveSection,
}: {
  setActiveSection: (section: string | null) => void
}) => {
  const [isEditing, setIsEditing] = useState(false)

  const toggleEditMode = () => setIsEditing(!isEditing)
  const handleSave = () => {
    // Handle save logic here
    setIsEditing(false)
  }

  // Career Edite

  const [objective, setObjective] = useState("")
  const [error, setError] = useState(false)

  const handleBlur = () => {
    if (!objective) setError(true)
    else setError(false)
  }

  //   const [isForeign, setIsForeign] = useState(false)
  return (
    <div className="text-3xl text-black">
      <div className="flex items-center justify-between bg-light-theme p-4 text-black dark:bg-dark-theme">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => setActiveSection(null)}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <h1 className="ml-4 text-xl font-medium">Academic Qualification</h1>
        </div>
        {isEditing ? (
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={toggleEditMode}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={toggleEditMode}
          >
            <Pencil className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Career edit System */}

      {isEditing ? (
        <div className="mx-auto space-y-4 px-2 py-4">
          {/* Level of Education */}
          <div className="">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Level of Education" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel> Select Level of Education *</SelectLabel>
                  <SelectItem value="apple"> PSC/5 pass</SelectItem>
                  <SelectItem value="banana">JSC/JDC/8 points</SelectItem>
                  <SelectItem value="blueberry">Secondary</SelectItem>
                  <SelectItem value="grapes">Higher Secondary</SelectItem>
                  <SelectItem value="pineapple">Bachelor/Honors</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Exam/ Degree Title  */}
          <div className="">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Exam/ Degree Title" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel> Select Exam/ Degree Title *</SelectLabel>
                  <SelectItem value="apple"> Bachelor of Arts(BA)</SelectItem>
                  <SelectItem value="banana">
                    Bachelor of Science (BSc)
                  </SelectItem>
                  <SelectItem value="blueberry">
                    Bachelor of Law (LLB)
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Concentration /Major/ Group  */}
          <div className="">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Concentration /Major/ Group" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>
                    {" "}
                    Select Concentration /Major/ Group *
                  </SelectLabel>
                  <SelectItem value="apple"> PSC/5 pass</SelectItem>
                  <SelectItem value="banana">JSC/JDC/8 points</SelectItem>
                  <SelectItem value="blueberry">Secondary</SelectItem>
                  <SelectItem value="grapes">Higher Secondary</SelectItem>
                  <SelectItem value="pineapple">Bachelor/Honors</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Institute Name */}
          <div className="">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Institute Name" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel> Select Institute Name *</SelectLabel>
                  <SelectItem value="apple"> PSC/5 pass</SelectItem>
                  <SelectItem value="banana">JSC/JDC/8 points</SelectItem>
                  <SelectItem value="blueberry">Secondary</SelectItem>
                  <SelectItem value="grapes">Higher Secondary</SelectItem>
                  <SelectItem value="pineapple">Bachelor/Honors</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Check Box Area */}
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Foreign Institute
            </label>
          </div>

          {/* Resul */}
          <div className="">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Result *" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel> Select Result *</SelectLabel>
                  <SelectItem value="apple"> First Devision</SelectItem>
                  <SelectItem value="banana">Second Division </SelectItem>
                  <SelectItem value="blueberry">Third Division</SelectItem>
                  <SelectItem value="grapes">Grade</SelectItem>
                  <SelectItem value="pineapple">Enrolled</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Pssing Year */}
          <div className="">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Passing Year *" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel> Select Passing Year *</SelectLabel>
                  <SelectItem value="apple"> 2025</SelectItem>
                  <SelectItem value="banana">2026</SelectItem>
                  <SelectItem value="blueberry">2027</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* duration */}
          <Input
            id="functionalCate"
            placeholder="Duration"
            className={`mt-1 border border-gray-300`}
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            onBlur={handleBlur}
          />
          {/* Achievement */}
          <Input
            id="functionalCate"
            placeholder="Achievement"
            className={`mt-1 border border-gray-300`}
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            onBlur={handleBlur}
          />
          <div className="py-20">
            <Button className="w-full">Save</Button>
          </div>
        </div>
      ) : (
        <div className="mt-4 h-screen px-2">
          <Card className="flex items-center gap-4 p-4">
            <div className="rounded-full bg-gray-200 p-2">
              <GraduationCap className="h-6 w-6 text-gray-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold">
                Bachelor of Science (BSc)
              </h3>
              <p className="text-sm text-gray-500">
                Dinajpur Government College
              </p>
              <p className="text-xs text-gray-400">Appeared</p>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

export default AcademicQualification
