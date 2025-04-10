import React, { useState } from "react"
import { GraduationCap, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DateInput, Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { EditModal } from "./CommonModal"

interface Education {
  label: string
  degree: string
  board: string
  institute: string
  result: string
  year: string
}

const EducationTraining = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [educations, setEducations] = useState<Education[]>([])
  const [currentEducation, setCurrentEducation] = useState<Education>({
    label: "",
    degree: "",
    board: "",
    institute: "",
    result: "",
    year: "",
  })
  const [errors, setErrors] = useState({
    label: "",
    degree: "",
    board: "",
    institute: "",
    result: "",
    year: "",
  })

  const handleAddClick = () => {
    setCurrentEducation({
      label: "",
      degree: "",
      board: "",
      institute: "",
      result: "",
      year: "",
    })
    setIsEditMode(false)
    setIsDialogOpen(true)
  }

  const handleEditClick = (education: Education) => {
    setCurrentEducation(education)
    setIsEditMode(true)
    setIsDialogOpen(true)
  }

  const handleDeleteClick = (educationIndex: number) => {
    const updatedEducations = [...educations]
    updatedEducations.splice(educationIndex, 1)
    setEducations(updatedEducations)
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCurrentEducation((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setCurrentEducation((prev) => ({ ...prev, [name]: value }))
  }

  const validateInputs = () => {
    const newErrors = {
      label: currentEducation.label ? "" : "Label of Education is required",
      degree: currentEducation.degree ? "" : "Degree is required",
      board: currentEducation.board ? "" : "Board is required",
      institute: currentEducation.institute ? "" : "Institute is required",
      result: currentEducation.result ? "" : "Result is required",
      year: currentEducation.year ? "" : "Passing Year is required",
    }
    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error)
  }

  const handleSubmit = () => {
    if (validateInputs()) {
      if (isEditMode) {
        const updatedEducations = educations.map((education) =>
          education === currentEducation ? currentEducation : education
        )
        setEducations(updatedEducations)
      } else {
        setEducations([...educations, currentEducation])
      }
      setIsDialogOpen(false)
    }

    const obj = {
      label: currentEducation.label,
      degree: currentEducation.degree,
      board: currentEducation.board,
      institute: currentEducation.institute,
      result: currentEducation.result,
      year: currentEducation.year,
    }
    console.log("education data", obj)
  }

  return (
    <div className="mb-4 w-full space-y-6 px-4 py-2">
      {educations.length === 0 ? (
        <div className="py-8 text-center text-xl text-gray-500">
          <GraduationCap
            size={50}
            strokeWidth={1}
            className="mx-auto text-primary"
          />
          <p>No educations found.</p>
          {educations.length === 0 && (
            <Button className="mt-4 px-6" onClick={handleAddClick}>
              <Plus /> Add{" "}
            </Button>
          )}
        </div>
      ) : (
        educations.map((education, index) => (
          <div
            key={index}
            className="rounded-md border bg-gray-50 p-4 dark:bg-gray-800"
          >
            <header className="flex items-center justify-between">
              <h1 className="text-lg font-semibold">{education.label}</h1>
              <div className="flex items-center gap-3">
                <Button
                  className="!bg-primary text-sm"
                  onClick={() => handleEditClick(education)}
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
              <div className="">
                <h3 className="text-md font-semibold">Label of education</h3>
                <p className="mt-2 text-gray-500">{education.label}</p>
              </div>
              <div className="">
                <h3 className="text-md font-semibold">Exam/Degree Title</h3>
                <p className="mt-2 text-gray-500">{education.degree}</p>
              </div>
              <div className="">
                <h3 className="text-md font-semibold">Board</h3>
                <p className="mt-2 text-gray-500">{education.board}</p>
              </div>
              <div className="">
                <h3 className="text-md font-semibold">Institute Name</h3>
                <p className="mt-2 text-gray-500">{education.institute}</p>
              </div>
              <div className="">
                <h3 className="text-md font-semibold">Result</h3>
                <p className="mt-2 text-gray-500">{education.result}</p>
              </div>
              <div className="">
                <h3 className="text-md font-semibold">Passing Year</h3>
                <p className="mt-2 text-gray-500">{education.year}</p>
              </div>
            </main>
          </div>
        ))
      )}

      {educations.length !== 0 && (
        <Button className="px-6" onClick={handleAddClick}>
          <Plus /> Add{" "}
        </Button>
      )}

      <EditModal
        open={isDialogOpen}
        onOpenChange={handleDialogClose}
        title={isEditMode ? "Edit Education" : "Add Education"}
      >
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="font-semibold" htmlFor="labelOfEducation">
              Label of Education
            </label>
            <Select
              value={currentEducation.label}
              onValueChange={(value) => handleSelectChange("label", value)}
            >
              <SelectTrigger className="input">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Labels</SelectLabel>
                  <SelectItem value="SSC">SSC</SelectItem>
                  <SelectItem value="HSC">HSC</SelectItem>
                  <SelectItem value="BSC">BSC</SelectItem>
                  <SelectItem value="MSC">MSC</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.label && <p className="text-red-500">{errors.label}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold" htmlFor="degree">
              Exam/Degree Title
            </label>
            <Select
              value={currentEducation.degree}
              onValueChange={(value) => handleSelectChange("degree", value)}
            >
              <SelectTrigger className="input">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Degrees</SelectLabel>
                  <SelectItem value="SSC">SSC</SelectItem>
                  <SelectItem value="HSC">HSC</SelectItem>
                  <SelectItem value="BSC">BSC</SelectItem>
                  <SelectItem value="MSC">MSC</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.degree && <p className="text-red-500">{errors.degree}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold" htmlFor="board">
              Board
            </label>
            <Input
              name="board"
              value={currentEducation.board}
              onChange={handleInputChange}
              type="text"
            />
            {errors.board && <p className="text-red-500">{errors.board}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold" htmlFor="institute">
              Institute Name
            </label>
            <Input
              name="institute"
              value={currentEducation.institute}
              onChange={handleInputChange}
              type="text"
            />
            {errors.institute && (
              <p className="text-red-500">{errors.institute}</p>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold" htmlFor="result">
              Result
            </label>
            <Input
              name="result"
              value={currentEducation.result}
              onChange={handleInputChange}
              type="text"
            />
            {errors.result && <p className="text-red-500">{errors.result}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-semibold" htmlFor="year">
              Passing Year
            </label>
            <DateInput
              type="date"
              className="w-full"
              name="year"
              value={currentEducation.year}
              onChange={handleInputChange}
            />
            {errors.year && <p className="text-red-500">{errors.year}</p>}
          </div>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <Button
            className="!bg-red-500 !text-white"
            onClick={handleDialogClose}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            {isEditMode ? "Update" : "Add"}
          </Button>
        </div>
      </EditModal>
    </div>
  )
}

export default EducationTraining
