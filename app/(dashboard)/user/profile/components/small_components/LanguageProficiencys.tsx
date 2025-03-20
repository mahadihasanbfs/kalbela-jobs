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
  LocateIcon,
  LucideCookie,
  Pencil,
  Save,
  Star,
  Type,
  X,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const LanguageProficiencys = ({
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

  const [activeLevel, setActiveLevel] = useState<string | null>(null)
  const [writingLevel, setWritingLevel] = useState<string | null>(null)
  const [speakingLevel, setSpeakingLevel] = useState<string | null>(null)
  const [languageStore, setLanguageStore] = useState<string | null>(null)

  const readings = ["High", "Medium", "Low"]
  const writings = ["High", "Medium", "Low"]
  const speakings = ["High", "Medium", "Low"]

  const handleSaved = () => {
    console.log("checked", {
      languageStore,
      activeLevel,
      writingLevel,
      speakingLevel,
    })
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
          <h1 className="ml-4 text-xl font-medium">Language Proficiency</h1>
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
          {/* Certification Title */}
          <div className="flex w-full items-center gap-3">
            <Input
              id="functionalCate"
              placeholder="Language *"
              className={`mt-1 w-full border border-gray-300`}
              onChange={(e) => setLanguageStore(e.target.value)}
            />
          </div>

          <div className="">
            <p className="text-sm font-medium">Reading *</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {readings?.map((level) => (
                <Button
                  key={level}
                  variant={activeLevel === level ? "default" : "outline"}
                  onClick={() => {
                    setActiveLevel(level)
                  }}
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>

          <div className="pb-5 pt-2">
            <p className="text-sm font-medium">Writing *</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {writings?.map((level) => (
                <Button
                  key={level}
                  variant={writingLevel === level ? "default" : "outline"}
                  onClick={() => {
                    setWritingLevel(level)
                  }}
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>

          <div className="pb-5 pt-2">
            <p className="text-sm font-medium">Speakings *</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {speakings?.map((level) => (
                <Button
                  key={level}
                  variant={speakingLevel === level ? "default" : "outline"}
                  onClick={() => {
                    setSpeakingLevel(level)
                  }}
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <Button onClick={handleSaved} className="mb-11 mt-4 w-full">
              Save
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-4 h-screen px-2">
          <Card className="gap-4 p-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
              <Globe className="h-6 w-6 text-gray-500" />
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
                + Add Language
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

export default LanguageProficiencys
