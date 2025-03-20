import React, { useState } from "react"
import { format } from "date-fns"
import {
  Briefcase,
  CalendarIcon,
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  Pencil,
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

const EmploymentHistorys = ({
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

  const [arrowDown, setArrowDown] = useState(false)

  const [employmentHis, setEmploymentHis] = useState({
    companyName: "",
    companyBus: "",
    companyLocation: "",
    designation: "",
    department: "",
    responibilities: "",
    expertis: "",
    startDate: "",
    endDate: "",
  })

  const handlerSave = async () => {
    console.log("checked", employmentHis)
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
          <h1 className="ml-4 text-xl font-medium">Employement History</h1>
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
          {/* Company Name */}
          <Input
            id="functionalCate"
            placeholder="Company Name *"
            className={`mt-1 border border-gray-300`}
            onChange={(e) =>
              setEmploymentHis((prev) => ({
                ...prev,
                companyName: e.target.value,
              }))
            }
          />
          {/* Company Business*/}
          <Input
            id="functionalCate"
            placeholder="Company Business *"
            className={`mt-1 border border-gray-300`}
            onChange={(e) =>
              setEmploymentHis((prev) => ({
                ...prev,
                companyBus: e.target.value,
              }))
            }
          />

          {/* Company location*/}
          <Input
            id="functionalCate"
            placeholder="Company Location "
            className={`mt-1 border border-gray-300`}
            onChange={(e) =>
              setEmploymentHis((prev) => ({
                ...prev,
                companyLocation: e.target.value,
              }))
            }
          />

          {/* Company location*/}
          <Input
            id="functionalCate"
            placeholder="Designation *"
            className={`mt-1 border border-gray-300`}
            onChange={(e) =>
              setEmploymentHis((prev) => ({
                ...prev,
                designation: e.target.value,
              }))
            }
          />

          {/* Company location*/}
          <Input
            id="functionalCate"
            placeholder="Department *"
            className={`mt-1 border border-gray-300`}
            onChange={(e) =>
              setEmploymentHis((prev) => ({
                ...prev,
                department: e.target.value,
              }))
            }
          />

          {/* Company location*/}
          <Input
            id="functionalCate"
            placeholder="Responibilities *"
            className={`mt-1 border border-gray-300`}
            onChange={(e) =>
              setEmploymentHis((prev) => ({
                ...prev,
                responibilities: e.target.value,
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
                  setEmploymentHis((prev) => ({
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
                  setEmploymentHis((prev) => ({
                    ...prev,
                    endDate: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          {/* Check Box Area */}
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Currently working
            </label>
          </div>

          {/* duration */}
          <Input
            id="functionalCate"
            placeholder="Please enter your Area of Expertis.."
            className={`mt-1 border border-gray-300`}
            onChange={(e) =>
              setEmploymentHis((prev) => ({
                ...prev,
                expertis: e.target.value,
              }))
            }
          />

          <div>
            <Button onClick={handlerSave} className="my-4 mb-11 w-full">
              Save
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-4 h-screen px-2">
          <Card>
            <div className="flex items-center gap-4 p-4">
              <div className="rounded-full bg-gray-200 p-2">
                <Briefcase className="h-6 w-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500">
                  01 jun 2025 to 01 jun 2026
                </p>
              </div>
            </div>

            <div>
              <p
                onClick={() => setArrowDown(true)}
                className={`${arrowDown ? "hidden" : ""} mb-2 flex justify-end px-3 pb-1`}
              >
                <ChevronDown />
              </p>
              {arrowDown ? (
                <div className="space-y-4 pl-5">
                  <div>
                    <h3 className="text-sm font-semibold">Location</h3>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold"> Company Business</h3>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold"> Department</h3>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Area of Expertise</h3>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Responsibilities</h3>
                  </div>

                  <p
                    onClick={() => setArrowDown(false)}
                    className="flex justify-end px-3 pb-2"
                  >
                    <ChevronUp />
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

export default EmploymentHistorys
