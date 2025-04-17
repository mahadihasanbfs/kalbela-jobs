"use client"

import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { ChevronLeft, Pencil, Plus, X } from "lucide-react"
import Select from "react-select"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DateInput, Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { EditModal } from "../CommonModal"

interface TrainingSummaryType {
  companyName: string
  companyBusiness: string
  designation: string
  department: string
  employmentFrom: string
  employmentTo: string
  responsibilities: string
  skills: string[]
  index?: number
}

const EmploymentHistorys = ({
  setActiveSection,
}: {
  setActiveSection: (section: string | null) => void
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [trainings, setTrainings] = useState<TrainingSummaryType[]>([])
  const [selectedSkills, setSelectedSkills] = useState<any[]>([])
  const [currentWork, setCurrentWork] = useState(false)
  const [errors, setErrors] = useState({
    companyName: "",
    companyBusiness: "",
    designation: "",
    department: "",
    employmentFrom: "",
    employmentTo: "",
    responsibilities: "",
    skills: "",
  })

  const {
    data: skillsOptions = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["configuer-skills"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_APP_BASE_URL}/api/v1/config/skills`
      )

      if (!res.ok) {
        throw new Error("Failed to fetch certifications")
      }

      const data = await res.json()
      return data.data.map((skill: any) => ({
        value: skill?.name,
        label: skill?.name,
      }))
    },
  })

  const [currentTraining, setCurrentTraining] = useState<TrainingSummaryType>({
    companyName: "",
    companyBusiness: "",
    designation: "",
    department: "",
    employmentFrom: "",
    employmentTo: "",
    responsibilities: "",
    skills: [],
  })

  const handleAddClick = () => {
    setCurrentTraining({
      companyName: "",
      companyBusiness: "",
      designation: "",
      department: "",
      employmentFrom: "",
      employmentTo: "",
      responsibilities: "",
      skills: [],
    })
    setSelectedSkills([])
    setCurrentWork(false)
    setIsEditMode(false)
    setIsDialogOpen(true)
  }

  const handleEditClick = (training: TrainingSummaryType, index: number) => {
    setCurrentTraining({ ...training, index })
    setSelectedSkills(
      training.skills.map((skill) => ({ value: skill, label: skill }))
    )
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

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setCurrentTraining((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: any) => {
    setCurrentWork(e.target.checked)
    if (e.target.checked) {
      setCurrentTraining((prev) => ({ ...prev, employmentTo: "Present" }))
    } else {
      setCurrentTraining((prev) => ({ ...prev, employmentTo: "" }))
    }
  }

  const handleSelectChange = (selectedOptions: any) => {
    setSelectedSkills(selectedOptions)
  }

  const validateInputs = () => {
    const newErrors = {
      companyName: currentTraining.companyName
        ? ""
        : "Company Name is required",
      companyBusiness: currentTraining.companyBusiness
        ? ""
        : "Company Business is required",
      designation: currentTraining.designation ? "" : "Designation is required",
      department: currentTraining.department ? "" : "Department is required",
      employmentFrom: currentTraining.employmentFrom
        ? ""
        : "Employment From date is required",
      employmentTo:
        currentTraining.employmentTo || currentWork
          ? ""
          : "Employment To date is required",
      responsibilities: currentTraining.responsibilities
        ? ""
        : "Responsibilities are required",
      skills: selectedSkills.length > 0 ? "" : "At least one skill is required",
    }
    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (validateInputs()) {
      const data: TrainingSummaryType = {
        companyName: currentTraining.companyName,
        companyBusiness: currentTraining.companyBusiness,
        designation: currentTraining.designation,
        department: currentTraining.department,
        employmentFrom: currentTraining.employmentFrom,
        employmentTo: currentTraining.employmentTo,
        responsibilities: currentTraining.responsibilities,
        skills: selectedSkills.map((skill) => skill.value),
      }

      if (isEditMode && currentTraining.index !== undefined) {
        const updatedTrainings = trainings.map((training, index) =>
          index === currentTraining.index ? data : training
        )
        setTrainings(updatedTrainings)
      } else {
        setTrainings([...trainings, data])
      }

      setIsDialogOpen(false)
    }

    const obj = {
      ...currentTraining,
      skills: selectedSkills.map((skill) => skill.value),
    }
  }
  // colollecion
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
          <h1 className="ml-4 text-xl font-medium">Professional Cartifica</h1>
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
        <div className="flex flex-col items-center justify-center py-8 text-center text-xl text-gray-500">
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
              <h1 className="text-lg font-semibold">{` Experience-${trainings.length}`}</h1>
              <div className="flex items-center gap-3">
                <Button
                  className="!bg-primary text-sm"
                  onClick={() => handleEditClick(training, index)}
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
            <main className="mt-3 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-md font-semibold">Company Name</h3>
                <p className="mt-2 text-gray-500">{training.companyName}</p>
              </div>
              <div>
                <h3 className="text-md font-semibold">Company Business</h3>
                <p className="mt-2 text-gray-500">{training.companyBusiness}</p>
              </div>
              <div>
                <h3 className="text-md font-semibold">Designation</h3>
                <p className="mt-2 text-gray-500">{training.designation}</p>
              </div>
              <div>
                <h3 className="text-md font-semibold">Department</h3>
                <p className="mt-2 text-gray-500">{training.department}</p>
              </div>
              <div>
                <h3 className="text-md font-semibold">Employment Period</h3>
                <p className="mt-2 text-gray-500">
                  {training.employmentFrom} to {training.employmentTo}
                </p>
              </div>
              <div>
                <h3 className="text-md font-semibold">Responsibilities</h3>
                <p className="mt-2 text-gray-500">
                  {training.responsibilities}
                </p>
              </div>
              <div>
                <h3 className="text-md font-semibold">Skills</h3>
                <p className="mt-2 text-gray-500">
                  <p className="mt-2 flex flex-col flex-wrap gap-2 md:flex-row md:flex-nowrap">
                    {training.skills.map((skill: string, index: number) => (
                      <span
                        key={index}
                        className="mr-2 rounded bg-primary px-2 py-1 text-sm text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </p>
                </p>
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
          <div className="flex flex-col space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              name="companyName"
              type="text"
              value={currentTraining.companyName}
              onChange={handleInputChange}
            />
            {errors.companyName && (
              <p className="text-red-500">{errors.companyName}</p>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="companyBusiness">Company Business</Label>
            <Input
              id="companyBusiness"
              name="companyBusiness"
              type="text"
              value={currentTraining.companyBusiness}
              onChange={handleInputChange}
            />
            {errors.companyBusiness && (
              <p className="text-red-500">{errors.companyBusiness}</p>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="designation">Designation</Label>
            <Input
              id="designation"
              name="designation"
              type="text"
              value={currentTraining.designation}
              onChange={handleInputChange}
            />
            {errors.designation && (
              <p className="text-red-500">{errors.designation}</p>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="department">Department</Label>
            <Input
              id="department"
              name="department"
              type="text"
              value={currentTraining.department}
              onChange={handleInputChange}
            />
            {errors.department && (
              <p className="text-red-500">{errors.department}</p>
            )}
          </div>
          <div className="w-full items-center gap-4 md:flex">
            <div className="flex w-full flex-col space-y-2">
              <Label htmlFor="employmentFrom">Employment From</Label>
              <DateInput
                className="!w-full"
                id="employmentFrom"
                name="employmentFrom"
                type="date"
                value={currentTraining.employmentFrom}
                onChange={handleInputChange}
              />
              {errors.employmentFrom && (
                <p className="text-red-500">{errors.employmentFrom}</p>
              )}
            </div>
            <div className="flex w-full flex-col space-y-2">
              <Label htmlFor="employmentTo">Employment To</Label>
              <DateInput
                className="!w-full"
                id="employmentTo"
                name="employmentTo"
                type="date"
                value={currentTraining.employmentTo}
                onChange={handleInputChange}
                disabled={currentWork} // Disable when checkbox is checked
              />
              {errors.employmentTo && (
                <p className="text-red-500">{errors.employmentTo}</p>
              )}
            </div>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <input
              type="checkbox"
              id="currentlyEmployed"
              checked={currentWork}
              onChange={handleCheckboxChange}
            />
            <Label htmlFor="currentlyEmployed">Currently Employed</Label>
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="responsibilities">Responsibilities</Label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              className="rounded-md border !border-gray-300 p-2 focus:outline-none"
              rows={3}
              value={currentTraining.responsibilities}
              onChange={handleInputChange}
            ></textarea>
            {errors.responsibilities && (
              <p className="text-red-500">{errors.responsibilities}</p>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="skills">Skills</Label>
            <Select
              isMulti
              options={skillsOptions}
              value={selectedSkills}
              onChange={handleSelectChange}
              styles={{
                menu: (provided) => ({ ...provided, zIndex: 500 }),
                control: (provided, state) => ({
                  ...provided,
                  boxShadow: "none",
                  borderColor: state.isFocused
                    ? "inherit"
                    : provided.borderColor,
                  "&:hover": { borderColor: "inherit" },
                }),
                multiValue: (provided) => ({
                  ...provided,
                  backgroundColor: "#1b2a69",
                  color: "white",
                }),
                multiValueLabel: (provided) => ({
                  ...provided,
                  color: "white",
                }),
              }}
              className="basic-multi-select"
              classNamePrefix="select"
            />
            {errors.skills && <p className="text-red-500">{errors.skills}</p>}
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Button
              onClick={() => setIsDialogOpen(false)}
              className="!bg-red-500 text-white"
            >
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </EditModal>
    </div>
  )
}

export default EmploymentHistorys
