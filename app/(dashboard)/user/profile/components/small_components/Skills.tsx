import React, { useState } from "react"
import { format } from "date-fns"
import {
  AlertCircle,
  Award,
  BaggageClaimIcon,
  BarChart2,
  Briefcase,
  CalendarIcon,
  ChevronLeft,
  Eye,
  FileBadge2,
  Globe,
  GraduationCap,
  Grid,
  Home,
  Key,
  LifeBuoy,
  Link,
  LocateIcon,
  LucideCookie,
  Pencil,
  Save,
  Star,
  Type,
  User,
  X,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Skills = ({
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

  // only input feild Collection

  const [skills, setSkills] = useState({
    skills: "",
    activities: "",
  })

  // console.log("checked", skills)

  const handleSaved = () => {
    console.log("checked", skills)
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
          <h1 className="ml-4 text-xl font-medium">Add Skill</h1>
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
          {/* Skill Description */}
          <Input
            id="functionalCate"
            placeholder="Skill Description *"
            className={`mt-1 w-full border border-gray-300`}
            onChange={(e) =>
              setSkills((prev) => ({
                ...prev,
                skills: e.target.value,
              }))
            }
          />

          {/* Extra Curricular Activities */}
          <Input
            id="functionalCate"
            placeholder="Extra Curricular Activities *"
            className={`mt-1 w-full border border-gray-300`}
            onChange={(e) =>
              setSkills((prev) => ({
                ...prev,
                activities: e.target.value,
              }))
            }
          />

          <div>
            <Button onClick={handleSaved} className="mb-11 mt-4 w-full">
              Save
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-4 h-screen px-2">
          <Card className="gap-4 !border-none p-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
              <Briefcase className="h-6 w-6 text-gray-500" />
            </div>
            <div className="">
              <p className="text-center text-sm text-gray-500">
                There is currently no data! To add your training Details, kindly
                click the following button.
              </p>

              <div className="w-full rounded-md">
                <Dialog>
                  <DialogTrigger className="w-full">
                    <Button className="mt-3 w-full !bg-blue-500">
                      + Add Skills
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="h-56">
                    <h3 className="text-md font-bold">Skill</h3>
                    <p className="text-sm"> You may add single skill</p>
                    <DialogHeader>
                      <DialogDescription>
                        <Input
                          id="functionalCate"
                          placeholder="Add Skill *"
                          className={`mt-7 w-full border border-gray-300`}
                        />
                      </DialogDescription>
                    </DialogHeader>

                    <div className="mt-7 flex justify-end gap-4">
                      <Button className="!bg-red-600">Cancel</Button>
                      <Button className="!bg-blue-600">Save</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-14">
              <div className="flex items-center gap-2">
                <Briefcase /> <span className="text-sm">Skill Description</span>
              </div>
              <div
                onClick={toggleEditMode}
                className="rounded-md bg-gray-300 p-2"
              >
                <Pencil className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-14">
              <div className="flex items-center gap-2">
                <Briefcase />
                <span className="text-sm">Extra Curricular Activities</span>
              </div>
              <div
                onClick={toggleEditMode}
                className="rounded-md bg-gray-300 p-2"
              >
                <Pencil className="h-5 w-5" />
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

export default Skills
