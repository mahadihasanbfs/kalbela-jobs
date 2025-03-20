import { useState } from "react"
import {
  AlertCircle,
  Briefcase,
  ChevronLeft,
  Eye,
  FileBadge2,
  Home,
  LifeBuoy,
  LucideCookie,
  Pencil,
  Save,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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

const Career = ({
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

  const [activeLevel, setActiveLevel] = useState<string | null>(null)
  const [activeJobs, setActiveJobs] = useState<string | null>(null)

  const jobLevels = ["Entry Level Job", "Mid Level Job", "Top Level Job"]
  const availableLevels = [
    "Full Time",
    "Part Time",
    "Contact",
    "Intership",
    "Freelance",
  ]
  // const [error, setError] = useState(false)
  const [careerData, setCareerData] = useState({
    objectiveName: "",
    presentSalary: "",
    expecteSalary: "",
  })

  const handerCareer = async () => {
    const allCareerData = {
      objectiveName: careerData?.objectiveName,
      presentSalary: careerData?.presentSalary,
      expecteSalary: careerData?.expecteSalary,
      jobLooking: activeJobs,
      availableJobs: activeLevel,
    }

    // console.log("checked coloect", allCareerData)
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
          <h1 className="ml-4 text-xl font-medium">Career and Application</h1>
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
            <Label htmlFor="objective" className="flex items-center gap-1">
              Objective *
            </Label>
            <Input
              id="objective"
              placeholder="Enter your objective"
              className={`mt-1 border border-gray-300`}
              value={careerData?.objectiveName}
              onChange={(e) =>
                setCareerData((prev) => ({
                  ...prev,
                  objectiveName: e.target.value,
                }))
              }
            />
          </div>

          {/* modal use eye */}
          <div>
            <Dialog>
              <DialogTrigger className="flex items-center gap-2 text-sm text-gray-600">
                <Eye className="h-4 w-4 text-blue-500" /> EXAMPLE
              </DialogTrigger>
              <DialogContent>
                <DialogTitle className="mb-2 text-start font-bold">
                  Objective
                </DialogTitle>
                <DialogHeader>
                  <DialogTitle className="text-start">
                    Good Example?
                  </DialogTitle>
                  <DialogDescription className="text-start">
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers. This
                    action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>

                <DialogHeader className="mt-4 text-start">
                  <DialogTitle>Bad Example?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers. This
                    action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          <div className="">
            <p className="text-sm">Present Salary (Tk / Month)</p>
            <Input
              id="objective"
              placeholder="Enter Present Salary"
              onChange={(e) =>
                setCareerData((prev) => ({
                  ...prev,
                  presentSalary: e.target.value,
                }))
              }
              className={`mt-1 border border-gray-300`}
            />
          </div>

          <div className="">
            <p className="text-sm">Expection Salary (Tk / Month)</p>
            <Input
              id="objective"
              placeholder="Enter Expection Salary"
              className={`mt-1 border border-gray-300`}
              onChange={(e) =>
                setCareerData((prev) => ({
                  ...prev,
                  expecteSalary: e.target.value,
                }))
              }
            />
          </div>

          {/* Tag Active */}
          <div className="">
            <p className="text-sm font-medium">Looking for (Job Level)</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {jobLevels.map((level) => (
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

          {/* Tag Active2 */}
          <div className="">
            <p className="text-sm font-medium">Available for (Job Nature)</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {availableLevels?.map((level) => (
                <Button
                  key={level}
                  variant={activeJobs === level ? "default" : "outline"}
                  onClick={() => setActiveJobs(level)}
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>

          <div onClick={handerCareer} className="py-20">
            <Button className="w-full">Save</Button>
          </div>
        </div>
      ) : (
        <div className="h-screen px-4">
          <div className="my-8 flex items-center justify-start gap-3">
            <div>
              <Home className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm text-blue-800"> Objective</h3>
            </div>
          </div>

          {/* second content */}
          <div className="flex items-center justify-between">
            <div className="flex items-start justify-center gap-3">
              <div>
                <FileBadge2 className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm text-blue-800"> Present Salary</h3>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div>
                <LifeBuoy className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm text-blue-800"> Expected Salary</h3>
              </div>
            </div>
          </div>

          {/* thrid content */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-start justify-center gap-3">
              <div>
                <LucideCookie className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm text-blue-800">Looking for</h3>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div>
                <Briefcase className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm text-blue-800"> Available for job</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Career
