import { useState } from "react"
import {
  AlertCircle,
  BaggageClaimIcon,
  Briefcase,
  ChevronLeft,
  Eye,
  FileBadge2,
  Home,
  LifeBuoy,
  LocateIcon,
  LucideCookie,
  Pencil,
  Save,
  Type,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const PreferredArea = ({
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
          <h1 className="ml-4 text-xl font-medium">Preferred Areas</h1>
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
        <div className="mx-auto space-y-4 p-4">
          <div>
            <Input
              id="functionalCate"
              placeholder="Preferred Functional job Catego.."
              className={`mt-1 border border-gray-300`}
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              onBlur={handleBlur}
            />
            <Label
              htmlFor="objective"
              className="flex items-center gap-1 pl-2 text-[12px] text-gray-600"
            >
              Functional job categories maximum 3
            </Label>
          </div>

          <div className="">
            <Input
              id="objective"
              placeholder="Preferred Functional job Catego.."
              className={`mt-1 border border-gray-300`}
              onBlur={handleBlur}
            />
            <Label
              htmlFor="objective"
              className="flex items-center gap-1 pl-2 text-[12px] text-gray-600"
            >
              Special Skilled job categories maximum 3
            </Label>
          </div>

          <div className="">
            <Input
              id="objective"
              placeholder=" Preferred Organiztions Type"
              className={`mt-1 border border-gray-300`}
              onBlur={handleBlur}
            />
            <Label
              htmlFor="objective"
              className="flex items-center gap-1 pl-2 text-[12px] text-gray-600"
            >
              Organiztions maximum 12
            </Label>
          </div>

          <div className="">
            <p className="text-sm font-bold">Preferred Job Location*</p>
            <p className="text-[12px] font-medium"> Inside Bangladesh</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Button variant="outline"> Any where in Bangladesh</Button>
              <Button className="bg-blue-600 text-white">Districts</Button>
            </div>

            <div className="pt-2">
              <Input
                id="objective"
                placeholder="Add District *"
                className={`mt-1 border border-gray-300`}
                onBlur={handleBlur}
              />
              <Label
                htmlFor="objective"
                className="flex items-center gap-1 pl-2 text-[12px] text-gray-600"
              >
                districts maximum 15
              </Label>
            </div>

            <div className="">
              <p className="text-sm">Outside Bangladesh</p>
              <Input
                id="objective"
                placeholder="Add Country/Region *"
                className={`mt-1 border border-gray-300`}
                onBlur={handleBlur}
              />
              <Label
                htmlFor="objective"
                className="flex items-center gap-1 pl-2 text-[12px] text-gray-600"
              >
                Countries/Regions maximum 10
              </Label>
            </div>
          </div>

          <div className="py-20">
            <Button className="w-full">Save</Button>
          </div>
        </div>
      ) : (
        <div className="h-screen px-4">
          <div className="my-8 flex items-center justify-start gap-3">
            <div>
              <Briefcase className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm text-blue-800">
                Preferred Functional Job Categories
              </h3>
            </div>
          </div>

          <div className="my-8 flex items-center justify-start gap-3">
            <div>
              <Briefcase className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm text-blue-800">
                Preferred Special Skilled Job Categories
              </h3>
            </div>
          </div>

          <div className="my-8 flex items-center justify-start gap-3">
            <div>
              <Type className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm text-blue-800">
                {" "}
                Preferred Organization Type
              </h3>
            </div>
          </div>

          <div className="my-8 flex items-center justify-start gap-3">
            <div>
              <LocateIcon className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <h3 className="text-sm text-blue-800"> Preferred Job Locaion </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PreferredArea
