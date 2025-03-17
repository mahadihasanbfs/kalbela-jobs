import React, { useState } from "react"
import {
  AlertCircle,
  BaggageClaimIcon,
  Briefcase,
  ChevronLeft,
  Eye,
  FileBadge2,
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

const OtherRelevantInfo = ({
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
          <h1 className="ml-4 text-xl font-medium">Other Relevant Info</h1>
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
              placeholder="Career Summary"
              className={`mt-1 border border-gray-300`}
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              onBlur={handleBlur}
            />
            <Label
              htmlFor="objective"
              className="flex items-center gap-1 pl-2 text-[12px] text-gray-600"
            >
              What is Career Summary ?
            </Label>
          </div>

          <div className="">
            <div>
              <Dialog>
                <DialogTrigger className="flex items-center gap-2 text-sm text-gray-600">
                  <Eye className="h-4 w-4 text-blue-500" /> EXAMPLE
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-start">
                      Career Summary?
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
            <Input
              id="objective"
              placeholder="Special Qualification"
              className={`mt-1 border border-gray-300`}
              onBlur={handleBlur}
            />
            <Label
              htmlFor="objective"
              className="flex items-center gap-1 pl-2 text-[12px] text-gray-600"
            >
              What is Special Qualification ?
            </Label>
          </div>

          <div className="">
            <div>
              <Dialog>
                <DialogTrigger className="flex items-center gap-2 text-sm text-gray-600">
                  <Eye className="h-4 w-4 text-blue-500" /> EXAMPLE
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle className="mb-2 text-start font-bold">
                    Special Qualification
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
            <Input
              id="objective"
              placeholder="Keywords *"
              className={`mt-1 border border-gray-300`}
              onBlur={handleBlur}
            />
            <Label
              htmlFor="objective"
              className="flex items-center gap-1 pl-2 text-[12px] text-gray-600"
            >
              What is Keywords ?
            </Label>
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
              <h3 className="text-sm text-blue-800">Career Summary</h3>
            </div>
          </div>

          <div className="my-8 flex items-center justify-start gap-3">
            <div>
              <Star className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm text-blue-800">Special Qualification</h3>
            </div>
          </div>

          <div className="my-8 flex items-center justify-start gap-3">
            <div>
              <Key className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm text-blue-800">Keywords</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default OtherRelevantInfo
