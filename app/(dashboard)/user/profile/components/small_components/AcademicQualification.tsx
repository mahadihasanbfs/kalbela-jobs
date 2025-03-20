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
  const [selectedYear, setSelectedYear] = useState("")

  const [formData, setFormData] = useState({
    education: "",
    exam: "",
    result: "",
    passingYear: "",
  })

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // console.log({ ...formData, [field]: value }) // Logs the updated state
  }

  const [academicQ, setAcademicQ] = useState({
    concentration: "",
    duration: "",
    achievement: "",
    institute: "",
  })

  const handlerSave = () => {
    console.log("chekced", formData, academicQ)
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

      {isEditing ? (
        <div className="mx-auto space-y-4 px-2 py-4">
          {/* Level of Education */}
          <div className="">
            <Select
              onValueChange={(value) => handleSelectChange("education", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Level of Education" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel> Select Level of Education *</SelectLabel>

                  <SelectItem value="PSC">PSC/5 pass</SelectItem>
                  <SelectItem value="JSC">JSC/JDC/8 points</SelectItem>
                  <SelectItem value="Secondary">Secondary</SelectItem>
                  <SelectItem value="Higher Secondary">
                    Higher Secondary
                  </SelectItem>
                  <SelectItem value="Bachelor">Bachelor/Honors</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Exam/ Degree Title  */}
          <div className="">
            <Select
              onValueChange={(value) => handleSelectChange("exam", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Exam/ Degree Title" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel> Select Exam/ Degree Title *</SelectLabel>
                  <SelectItem value="Bachelor of Arts (BA)">
                    Bachelor of Arts (BA)
                  </SelectItem>
                  <SelectItem value="Bachelor of Science (BSc)">
                    Bachelor of Science (BSc)
                  </SelectItem>
                  <SelectItem value="Bachelor of Law (LLB)">
                    Bachelor of Law (LLB)
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Concentration /Major/ Group  */}
          <div className="">
            <Input
              id="functionalCate"
              placeholder="Concentration /Major/ Group "
              className={`mt-1 border border-gray-300`}
              onChange={(e) =>
                setAcademicQ((prev) => ({
                  ...prev,
                  concentration: e.target.value,
                }))
              }
            />
          </div>

          {/* Institute Name */}

          <Input
            id="functionalCate"
            placeholder="institute Name"
            className={`mt-1 border border-gray-300`}
            onChange={(e) =>
              setAcademicQ((prev) => ({
                ...prev,
                institute: e.target.value,
              }))
            }
          />

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
            <Select
              onValueChange={(value) => handleSelectChange("result", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Result *" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel> Select Result *</SelectLabel>
                  <SelectItem value="First Division">First Division</SelectItem>
                  <SelectItem value="Second Division">
                    Second Division
                  </SelectItem>
                  <SelectItem value="Third Division">Third Division</SelectItem>
                  <SelectItem value="Grade">Grade</SelectItem>
                  <SelectItem value="Enrolled">Enrolled</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Pssing Year */}
          <div className="">
            <Select
              onValueChange={(value) =>
                handleSelectChange("passingYear", value)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Passing Year *" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel> Select Passing Year *</SelectLabel>
                  <SelectItem value="2025"> 2025</SelectItem>
                  <SelectItem value="2026">2026</SelectItem>
                  <SelectItem value="2027">2027</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* duration */}
          <Input
            id="functionalCate"
            placeholder="Duration"
            className={`mt-1 border border-gray-300`}
            onChange={(e) =>
              setAcademicQ((prev) => ({
                ...prev,
                duration: e.target.value,
              }))
            }
          />
          {/* Achievement */}
          <Input
            id="functionalCate"
            placeholder="Achievement"
            className={`mt-1 border border-gray-300`}
            onChange={(e) =>
              setAcademicQ((prev) => ({
                ...prev,
                achievement: e.target.value,
              }))
            }
          />
          <div>
            <Button onClick={handlerSave} className="mb-10 mt-4 w-full">
              Save
            </Button>
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
