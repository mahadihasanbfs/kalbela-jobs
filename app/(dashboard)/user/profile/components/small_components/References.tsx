import React, { useState } from "react"
import { ChevronLeft, Pencil, User, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

const References = ({
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
  const [references, setReferences] = useState({
    name: "",
    organization: "",
    designation: "",
    address: "",
    phoneOff: "",
    phoneRes: "",
    phoneNo: "",
    email: "",
  })

  const [storeTag, setStoreTag] = useState<string | null>(null)
  const levels = ["Relative", "Family Friend", "Academic", "Others"]

  const handleSaved = () => {
    console.log("checked", references, storeTag)
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
          <h1 className="ml-4 text-xl font-medium">References</h1>
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
          {/* Name Title */}
          <Input
            id="functionalCate"
            placeholder="Name *"
            className={`mt-1 w-full border border-gray-300`}
            onChange={(e) =>
              setReferences((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />

          {/* Organization */}
          <Input
            id="functionalCate"
            placeholder="Organization *"
            className={`mt-1 w-full border border-gray-300`}
            onChange={(e) =>
              setReferences((prev) => ({
                ...prev,
                organization: e.target.value,
              }))
            }
          />

          {/* Designation  */}
          <Input
            id="functionalCate"
            placeholder="Designation  *"
            className={`mt-1 w-full border border-gray-300`}
            onChange={(e) =>
              setReferences((prev) => ({
                ...prev,
                designation: e.target.value,
              }))
            }
          />

          {/* Address */}
          <Input
            id="functionalCate"
            placeholder="Address *"
            className={`mt-1 w-full border border-gray-300`}
            onChange={(e) =>
              setReferences((prev) => ({
                ...prev,
                address: e.target.value,
              }))
            }
          />

          {/* Phone No */}
          <Input
            id="functionalCate"
            placeholder="Phone No (Office)  *"
            className={`mt-1 w-full border border-gray-300`}
            onChange={(e) =>
              setReferences((prev) => ({
                ...prev,
                phoneOff: e.target.value,
              }))
            }
          />

          {/* Phone No Res */}
          <Input
            id="functionalCate"
            placeholder="Phone No (Res) *"
            className={`mt-1 w-full border border-gray-300`}
            onChange={(e) =>
              setReferences((prev) => ({
                ...prev,
                phoneRes: e.target.value,
              }))
            }
          />

          {/* Phone No */}
          <Input
            id="functionalCate"
            placeholder="Mobile No *"
            className={`mt-1 w-full border border-gray-300`}
            onChange={(e) =>
              setReferences((prev) => ({
                ...prev,
                phoneNo: e.target.value,
              }))
            }
          />

          {/* Email Addess*/}
          <Input
            id="functionalCate"
            placeholder="Emaill Address *"
            className={`mt-1 w-full border border-gray-300`}
            onChange={(e) =>
              setReferences((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />

          <div className="pb-5 pt-2">
            <p className="text-sm font-medium">Relation *</p>

            {levels?.map((level) => (
              <Button
                key={level}
                variant={storeTag === level ? "default" : "outline"}
                onClick={() => {
                  setStoreTag(level)
                }}
              >
                {level}
              </Button>
            ))}
          </div>

          <div className="flex">
            <Button
              onClick={handleSaved}
              className="mb-11 mt-4 w-full !bg-blue-700"
            >
              Save
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-4 h-screen px-2">
          <Card className="gap-4 p-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
              <User className="h-6 w-6 text-gray-500" />
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
                + Add Reference
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

export default References
