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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const EmploymentRetired = ({
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

  const [formData, setFormData] = useState({
    bAType: "",
    ranks: "",
    selectType: "",
    Arms: "",
  })

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // console.log({ ...formData, [field]: value }) // Logs the updated state
  }

  // only input feild Collection

  const [employmentRetired, setEmploymentRetired] = useState({
    num: "",
    trade: "",
    course: "",
    startDate: "",
    endDate: "",
  })

  const handleSaved = () => {
    console.log(employmentRetired, "checked", formData)
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
          <h1 className="ml-4 text-xl font-medium"> Employment Retired</h1>
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
          {/*  BA Type Title */}
          <div className="flex w-full items-center gap-3">
            <Select
              onValueChange={(value) => handleSelectChange(" bAType", value)}
            >
              <SelectTrigger className="w-1/2">
                <SelectValue placeholder="BA *" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select BA Type</SelectLabel>
                  <SelectItem value="BA">BA</SelectItem>
                  <SelectItem value="BSS">BSS</SelectItem>
                  <SelectItem value="JSS">JSS</SelectItem>
                  <SelectItem value="BSP">BSP</SelectItem>
                  <SelectItem value="BJO">BJO</SelectItem>
                  <SelectItem value="NO">NO</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Input
              id="functionalCate"
              placeholder="No *"
              className={`mt-1 w-1/2 border border-gray-300`}
              onChange={(e) =>
                setEmploymentRetired((prev) => ({
                  ...prev,
                  num: e.target.value,
                }))
              }
            />
          </div>

          {/* Ranks  */}
          <Select onValueChange={(value) => handleSelectChange("ranks", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Ranks *" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Ranks</SelectLabel>
                <SelectItem value="2Lt">2Lt</SelectItem>
                <SelectItem value="Lt">Lt</SelectItem>
                <SelectItem value="Capt">Capt</SelectItem>
                <SelectItem value="Maj">Maj</SelectItem>
                <SelectItem value="Col">Col</SelectItem>
                <SelectItem value="Lt Gen">Lt Gen</SelectItem>
                <SelectItem value="Gen">Gen</SelectItem>
                <SelectItem value="Snk">Snk</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Type */}
          <Select
            onValueChange={(value) => handleSelectChange("selectType", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Type *" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Type</SelectLabel>
                <SelectItem value="Officer">Officer</SelectItem>
                <SelectItem value="JCO">JCO</SelectItem>
                <SelectItem value="NCO">NCO</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Arms */}
          <Select onValueChange={(value) => handleSelectChange("Arms", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Arms *" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select ARMS</SelectLabel>
                <SelectItem value="AC">AC</SelectItem>
                <SelectItem value="Arty">Arty</SelectItem>
                <SelectItem value="EB">EB</SelectItem>
                <SelectItem value="BIR">BIR</SelectItem>
                <SelectItem value="Sigs">Sigs</SelectItem>
                <SelectItem value="Ord">Ord</SelectItem>
                <SelectItem value="AMC">AMC</SelectItem>
                <SelectItem value="AEC">AEC</SelectItem>
                <SelectItem value="CMP">CMP</SelectItem>
                <SelectItem value="ADC">ADC</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* trade */}
          <Input
            id="functionalCate"
            placeholder="Trade *"
            className={`mt-1 border border-gray-300`}
            onChange={(e) =>
              setEmploymentRetired((prev) => ({
                ...prev,
                trade: e.target.value,
              }))
            }
          />

          {/* Course */}
          <Input
            id="functionalCate"
            placeholder="Course *"
            className={`mt-1 border border-gray-300`}
            onChange={(e) =>
              setEmploymentRetired((prev) => ({
                ...prev,
                course: e.target.value,
              }))
            }
          />

          <div className="flex w-full items-center gap-2">
            <div className="w-1/2">
              <Label className="pl-1">Start Date</Label>
              <Input
                id="functionalCate"
                placeholder="Start Date*"
                defaultValue={"Start Date"}
                type="date"
                className={`mt-1 border border-gray-300`}
                onChange={(e) =>
                  setEmploymentRetired((prev) => ({
                    ...prev,
                    startDate: e.target.value,
                  }))
                }
              />
            </div>

            <div className="w-1/2">
              <Label className="pl-1">End Date</Label>
              <Input
                id="functionalCate"
                defaultValue={"End Date"}
                type="date"
                className={`mt-1 border border-gray-300`}
                onChange={(e) =>
                  setEmploymentRetired((prev) => ({
                    ...prev,
                    endDate: e.target.value,
                  }))
                }
              />
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
              <Briefcase className="h-6 w-6 text-gray-500" />
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
                + Add Experience at Bangladesh Army
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

export default EmploymentRetired
