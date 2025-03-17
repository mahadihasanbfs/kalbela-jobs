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
      Select,
      SelectContent,
      SelectGroup,
      SelectItem,
      SelectLabel,
      SelectTrigger,
      SelectValue,
} from "@/components/ui/select"

const LinkAccountsSM = ({
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

      const [date, setDate] = React.useState<Date>()
      const [endDate, setEndDate] = React.useState<Date>()
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
                              <h1 className="ml-4 text-xl font-medium">Link Account</h1>
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
                              <Select>
                                    <SelectTrigger className="w-full">
                                          <SelectValue placeholder="Choose Account" />
                                    </SelectTrigger>
                                    <SelectContent>
                                          <SelectGroup>
                                                <SelectLabel>Select Choose Account</SelectLabel>
                                                <SelectItem value="apple"> Linkedin</SelectItem>
                                                <SelectItem value="banana">Facebook</SelectItem>
                                                <SelectItem value="blueberry">YouTube</SelectItem>
                                                <SelectItem value="grapes">Github</SelectItem>
                                                <SelectItem value="pineapple">Others</SelectItem>
                                          </SelectGroup>
                                    </SelectContent>
                              </Select>

                              <Input
                                    id="functionalCate"
                                    placeholder="Enter URL *"
                                    type="url"
                                    className={`mt-1 w-full border border-gray-300`}
                                    onBlur={handleBlur}
                              />

                              <div className="flex gap-3 py-20">
                                    <Button className="w-full">Cancel</Button>
                                    <Button className="w-full !bg-blue-700">Save</Button>
                              </div>
                        </div>
                  ) : (
                        <div className="mt-4 h-screen px-2">
                              <Card className="gap-4 p-4">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                                          <Link className="h-6 w-6 text-gray-500" />
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
                                                + Add Link
                                          </Button>
                                    </div>
                              </Card>
                        </div>
                  )}
            </div>
      )
}

export default LinkAccountsSM
