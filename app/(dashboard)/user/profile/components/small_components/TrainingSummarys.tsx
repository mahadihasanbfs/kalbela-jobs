import React, { useState } from "react"
import {
  AlertCircle,
  BaggageClaimIcon,
  Briefcase,
  ChevronLeft,
  Eye,
  FileBadge2,
  GraduationCap,
  Grid,
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

const TrainingSummarys = ({
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
          {/* Training Title */}
          <Input
            id="functionalCate"
            placeholder="Training Title *"
            className={`mt-1 border border-gray-300`}
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            onBlur={handleBlur}
          />

          {/* Topic Covered */}
          <Input
            id="functionalCate"
            placeholder="Topic Covered *"
            className={`mt-1 border border-gray-300`}
            onBlur={handleBlur}
          />

          {/* Institute */}
          <Input
            id="functionalCate"
            placeholder="Institute *"
            className={`mt-1 border border-gray-300`}
            onBlur={handleBlur}
          />

          {/* Institute */}
          <Input
            id="functionalCate"
            placeholder="Country Region *"
            className={`mt-1 border border-gray-300`}
            onBlur={handleBlur}
          />

          {/* Location */}
          <Input
            id="functionalCate"
            placeholder="Location *"
            className={`mt-1 border border-gray-300`}
            onBlur={handleBlur}
          />

          {/* Training Year */}
          <div className="">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Training Year *" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel> Select Training Year *</SelectLabel>
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

          <div className="py-20">
            <Button className="w-full">Save</Button>
          </div>
        </div>
      ) : (
        <div className="mt-4 h-screen px-2">
          <Card className="gap-4 p-4">
            <div className="mx-auto flex h-12 w-12 justify-center rounded-full bg-gray-200 p-2">
              <Grid className="h-8 w-8 text-gray-600" />
            </div>
            <div>
              <p className="text-center text-sm text-gray-500">
                There is currently no data! To add your training Details, kindly
                click the following button.
              </p>

              <Button
                onClick={toggleEditMode}
                className="mt-3 w-full !bg-blue-500"
              >
                + Add Training
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

export default TrainingSummarys
