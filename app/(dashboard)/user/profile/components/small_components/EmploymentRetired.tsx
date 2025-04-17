"use client"

import React, { useState } from "react"
import { ChevronLeft, GraduationCap, Pencil, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DateInput, Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select as SelectComponent,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { EditModal } from "../CommonModal"

interface TrainingSummaryType {
  trade: string
  course: string
  commission_date: string
  retirement_date: string
  companyName: string
  rank: string
  type: string
  arms: string
}

const EmploymentRetired = ({
  setActiveSection,
}: {
  setActiveSection: (section: string | null) => void
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [trainings, setTrainings] = useState<TrainingSummaryType[]>([])
  const [errors, setErrors] = useState({
    trade: "",
    course: "",
    commission_date: "",
    retirement_date: "",
    companyName: "",
    rank: "",
    type: "",
    arms: "",
  })

  const [currentTraining, setCurrentTraining] = useState<TrainingSummaryType>({
    trade: "",
    course: "",
    commission_date: "",
    retirement_date: "",
    companyName: "",
    rank: "",
    type: "",
    arms: "",
  })

  const handleAddClick = () => {
    setCurrentTraining({
      trade: "",
      course: "",
      commission_date: "",
      retirement_date: "",
      companyName: "",
      rank: "",
      type: "",
      arms: "",
    })
    setIsEditMode(false)
    setIsDialogOpen(true)
  }

  const handleEditClick = (trainingIndex: number) => {
    setCurrentTraining(trainings[trainingIndex])
    setIsEditMode(true)
    setIsDialogOpen(true)
  }

  const handleDeleteClick = (trainingIndex: number) => {
    const updatedTrainings = [...trainings]
    updatedTrainings.splice(trainingIndex, 1)
    setTrainings(updatedTrainings)
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCurrentTraining((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setCurrentTraining((prev) => ({ ...prev, [name]: value }))
  }

  const validateInputs = () => {
    const newErrors = {
      trade: currentTraining.trade ? "" : "Trade is required",
      course: currentTraining.course ? "" : "Course is required",
      commission_date: currentTraining.commission_date
        ? ""
        : "Date of Commission is required",
      retirement_date: currentTraining.retirement_date
        ? ""
        : "Date of Retirement is required",
      companyName: currentTraining.companyName
        ? ""
        : "Company Name is required",
      rank: currentTraining.rank ? "" : "Rank is required",
      type: currentTraining.type ? "" : "Type is required",
      arms: currentTraining.arms ? "" : "Arms is required",
    }
    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validateInputs()) {
      const newTraining: TrainingSummaryType = {
        trade: currentTraining.trade,
        course: currentTraining.course,
        commission_date: currentTraining.commission_date,
        retirement_date: currentTraining.retirement_date,
        companyName: currentTraining.companyName,
        rank: currentTraining.rank,
        type: currentTraining.type,
        arms: currentTraining.arms,
      }

      if (isEditMode) {
        const updatedTrainings = trainings.map((training) =>
          training === currentTraining ? newTraining : training
        )
        setTrainings(updatedTrainings)
      } else {
        setTrainings([...trainings, newTraining])
      }

      setIsDialogOpen(false)
    }

    const obj = {
      trade: currentTraining.trade,
      course: currentTraining.course,
      commission_date: currentTraining.commission_date,
      retirement_date: currentTraining.retirement_date,
      companyName: currentTraining.companyName,
      rank: currentTraining.rank,
      type: currentTraining.type,
      arms: currentTraining.arms,
    }

  }

  // console.log("checked")
  const toggleEditMode = () => setIsDialogOpen(!isDialogOpen)
  return (
    <div className="mb-4 w-full space-y-6 py-2">
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
          <h1 className="ml-4 text-xl font-medium">Employment Retired </h1>
        </div>
        {isDialogOpen ? (
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
      {trainings.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-4 text-center text-xl text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={58}
            height={58}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user-search m-auto mb-4"
          >
            <circle cx={10} cy={7} r={4} />
            <path d="M10.3 15H7a4 4 0 0 0-4 4v2" />
            <circle cx={17} cy={17} r={3} />
            <path d="m21 21-1.9-1.9" />
          </svg>

          <p>No data found.</p>
          {trainings.length === 0 && (
            <Button className="mt-3 px-6" onClick={handleAddClick}>
              <Plus /> Add
            </Button>
          )}
        </div>
      ) : (
        trainings.map((training, index) => (
          <div
            key={index}
            className="rounded-md border bg-gray-50 p-4 dark:bg-gray-800"
          >
            <header className="flex items-center justify-between">
              <h1 className="text-lg font-semibold">{` Experience-${index + 1}`}</h1>
              <div className="flex items-center gap-3">
                <Button
                  className="!bg-primary text-sm"
                  onClick={() => handleEditClick(index)}
                >
                  Edit
                </Button>
                <Button
                  className="!bg-red-600 text-sm"
                  onClick={() => handleDeleteClick(index)}
                >
                  Delete
                </Button>
              </div>
            </header>
            <main className="mt-3 grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-md font-semibold">Company Name</h3>
                <p className="mt-2 text-gray-500">{training.companyName}</p>
              </div>
              <div>
                <h3 className="text-md font-semibold">Rank</h3>
                <p className="mt-2 text-gray-500">{training.rank}</p>
              </div>
              <div>
                <h3 className="text-md font-semibold">Type</h3>
                <p className="mt-2 text-gray-500">{training.type}</p>
              </div>
              <div>
                <h3 className="text-md font-semibold">Arms</h3>
                <p className="mt-2 text-gray-500">{training.arms}</p>
              </div>
              <div>
                <h3 className="text-md font-semibold">Trade</h3>
                <p className="mt-2 text-gray-500">{training.trade}</p>
              </div>
              <div>
                <h3 className="text-md font-semibold">Course</h3>
                <p className="mt-2 text-gray-500">{training.course}</p>
              </div>
              <div>
                <h3 className="text-md font-semibold">Date of Commission</h3>
                <p className="mt-2 text-gray-500">{training.commission_date}</p>
              </div>
              <div>
                <h3 className="text-md font-semibold">Date of Retirement</h3>
                <p className="mt-2 text-gray-500">{training.retirement_date}</p>
              </div>
            </main>
          </div>
        ))
      )}

      {trainings.length !== 0 && (
        <Button className="px-6" onClick={handleAddClick}>
          <Plus /> Add
        </Button>
      )}

      <EditModal
        className="absolute bottom-10 top-10 mx-auto w-[96%]"
        open={isDialogOpen}
        onOpenChange={handleDialogClose}
        title={isEditMode ? "Edit History" : "Add History"}
      >
        <form onSubmit={handleSubmit} className="space-y-4 pt-6">
          <div className="grid grid-cols-1 gap-2">
            <div className="col-span-2 flex flex-col space-y-2">
              <Label htmlFor="message"></Label>
              <Input
                id="message"
                name="message"
                placeholder="Company Name"
                type="text"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <SelectComponent>
                <SelectTrigger>
                  <SelectValue placeholder="Select a company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Company</SelectLabel>
                    <SelectItem
                      value="companyA"
                      onClick={() =>
                        handleSelectChange("companyName", "companyA")
                      }
                    >
                      Company A
                    </SelectItem>
                    <SelectItem
                      value="companyB"
                      onClick={() =>
                        handleSelectChange("companyName", "companyB")
                      }
                    >
                      Company B
                    </SelectItem>
                    <SelectItem
                      value="companyC"
                      onClick={() =>
                        handleSelectChange("companyName", "companyC")
                      }
                    >
                      Company C
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </SelectComponent>
              {errors.companyName && (
                <p className="text-red-500">{errors.companyName}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <Label htmlFor="rank">Rank</Label>
            <SelectComponent>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a rank" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    value="rankA"
                    onClick={() => handleSelectChange("rank", "rankA")}
                  >
                    Rank A
                  </SelectItem>
                  <SelectItem
                    value="rankB"
                    onClick={() => handleSelectChange("rank", "rankB")}
                  >
                    Rank B
                  </SelectItem>
                  <SelectItem
                    value="rankC"
                    onClick={() => handleSelectChange("rank", "rankC")}
                  >
                    Rank C
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </SelectComponent>
            {errors.rank && <p className="text-red-500">{errors.rank}</p>}
          </div>

          <div className="flex flex-col space-y-2">
            <Label htmlFor="type">Type</Label>
            <SelectComponent>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    value="officer"
                    onClick={() => handleSelectChange("type", "officer")}
                  >
                    Officer
                  </SelectItem>
                  <SelectItem
                    value="jco"
                    onClick={() => handleSelectChange("type", "jco")}
                  >
                    JCO
                  </SelectItem>
                  <SelectItem
                    value="nco"
                    onClick={() => handleSelectChange("type", "nco")}
                  >
                    NCO
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </SelectComponent>
            {errors.type && <p className="text-red-500">{errors.type}</p>}
          </div>

          <div className="flex flex-col space-y-2">
            <Label htmlFor="arms">Arms</Label>
            <SelectComponent>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select arms" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    value="armsA"
                    onClick={() => handleSelectChange("arms", "armsA")}
                  >
                    Arms A
                  </SelectItem>
                  <SelectItem
                    value="armsB"
                    onClick={() => handleSelectChange("arms", "armsB")}
                  >
                    Arms B
                  </SelectItem>
                  <SelectItem
                    value="armsC"
                    onClick={() => handleSelectChange("arms", "armsC")}
                  >
                    Arms C
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </SelectComponent>
            {errors.arms && <p className="text-red-500">{errors.arms}</p>}
          </div>

          <div className="flex flex-col space-y-2">
            <Label htmlFor="trade">Trade</Label>
            <Input
              id="trade"
              name="trade"
              type="text"
              value={currentTraining.trade}
              onChange={handleInputChange}
            />
            {errors.trade && <p className="text-red-500">{errors.trade}</p>}
          </div>

          <div className="flex flex-col space-y-2">
            <Label htmlFor="course">Course</Label>
            <Input
              id="course"
              name="course"
              type="text"
              value={currentTraining.course}
              onChange={handleInputChange}
            />
            {errors.course && <p className="text-red-500">{errors.course}</p>}
          </div>

          <div className="flex flex-col space-y-2">
            <Label htmlFor="commission_date">Date of Commission</Label>
            <DateInput
              id="commission_date"
              type={"date"}
              name="commission_date"
              value={currentTraining.commission_date}
              onChange={handleInputChange}
            />
            {errors.commission_date && (
              <p className="text-red-500">{errors.commission_date}</p>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <Label htmlFor="retirement_date">Date of Retirement</Label>
            <DateInput
              id="retirement_date"
              type={"date"}
              name="retirement_date"
              value={currentTraining.retirement_date}
              onChange={handleInputChange}
            />
            {errors.retirement_date && (
              <p className="text-red-500">{errors.retirement_date}</p>
            )}
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <Button type="submit">Submit</Button>
            <Button
              type="button"
              onClick={handleDialogClose}
              className="!bg-red-500"
            >
              Cancel
            </Button>
          </div>
        </form>
      </EditModal>
    </div>
  )
}

export default EmploymentRetired
