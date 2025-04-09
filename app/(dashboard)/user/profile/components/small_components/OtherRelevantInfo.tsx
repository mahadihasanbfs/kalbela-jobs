import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { Info as InfoIcon, Plus, X } from "lucide-react"

import "react-quill/dist/quill.snow.css"
import { ChevronLeft, Pencil } from "lucide-react"
import CreatableSelect from "react-select/creatable"

import { Button } from "@/components/ui/button"

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

interface OptionType {
  label: string
  value: string
}
const OtherRelevantInfo = ({
  setActiveSection,
}: {
  setActiveSection: (section: string | null) => void
}) => {
  const [keywordOptions, setKeywordOptions] = useState<OptionType[]>([])
  const [selectedKeywords, setSelectedKeywords] = useState<OptionType[]>([])
  const [isEditMode, setIsEditMode] = useState(false)
  const [careerSummary, setCareerSummary] = useState("")
  const [specialQualification, setSpecialQualification] = useState("")
  const [errors, setErrors] = useState({
    keywords: "",
    careerSummary: "",
    specialQualification: "",
  })

  useEffect(() => {
    if (isEditMode) {
      setCareerSummary(careerSummary)
      setSpecialQualification(specialQualification)
    }
  }, [isEditMode])

  const validateInputs = () => {
    const newErrors = {
      keywords:
        selectedKeywords.length > 0 ? "" : "At least one keyword is required",
      careerSummary: careerSummary ? "" : "Career Summary is required",
      specialQualification: specialQualification
        ? ""
        : "Special Qualification is required",
    }
    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error)
  }

  const handleSave = () => {
    if (!validateInputs()) {
      return
    }

    console.log({
      keywords: selectedKeywords,
      careerSummary,
      specialQualification,
    })
    setIsEditMode(false)
  }

  const handleCreateOption = (inputValue: string) => {
    const newOption = { label: inputValue, value: inputValue }
    setKeywordOptions([...keywordOptions, newOption])
    setSelectedKeywords([...selectedKeywords, newOption])
  }

  // fksdaf
  const toggleEditMode = () => setIsEditMode(!isEditMode)
  return (
    <div className="mb-4 w-full py-2">
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
        {isEditMode ? (
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

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h5 className="pb-3 font-semibold">Keywords</h5>
        </div>
        {isEditMode ? (
          <div>
            <CreatableSelect
              isMulti
              value={selectedKeywords}
              // @ts-ignore
              onChange={setSelectedKeywords}
              options={keywordOptions}
              onCreateOption={handleCreateOption}
              placeholder="Enter keywords"
              className="mb-2"
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
              // styles={{
              //     control: (provided, state) => ({
              //         ...provided,
              //         borderColor: state.isFocused ? 'red' : provided.borderColor,
              //         '&:hover': {
              //             borderColor: state.isFocused ? 'red' : provided.borderColor,
              //         },
              //     }),
              // }}
            />
            {errors.keywords && (
              <p className="text-red-500">{errors.keywords}</p>
            )}
          </div>
        ) : (
          <div>
            {selectedKeywords.length > 0 ? (
              selectedKeywords.map((keyword, index) => (
                <span
                  key={index}
                  className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  {keyword.label}
                </span>
              ))
            ) : (
              <p>No keywords found</p>
            )}
          </div>
        )}
      </div>

      <div className="mt-3 grid grid-cols-1">
        <div>
          <h5 className="text-md mb-2 mt-3 border-b pb-1 font-bold">
            Career Summary
          </h5>
          {isEditMode ? (
            <div>
              <ReactQuill
                value={careerSummary}
                onChange={setCareerSummary}
                placeholder="Career Summary..."
              />
              {errors.careerSummary && (
                <p className="text-red-500">{errors.careerSummary}</p>
              )}
            </div>
          ) : (
            <div>
              {careerSummary ? (
                <div dangerouslySetInnerHTML={{ __html: careerSummary }} />
              ) : (
                <div>Career summary not found</div>
              )}
            </div>
          )}
        </div>

        <div>
          <h5 className="text-md mb-2 mt-3 border-b pb-1 font-bold">
            Special Qualification
          </h5>
          {isEditMode ? (
            <div>
              <ReactQuill
                value={specialQualification}
                onChange={setSpecialQualification}
                placeholder="Special Qualification..."
              />
              {errors.specialQualification && (
                <p className="text-red-500">{errors.specialQualification}</p>
              )}
            </div>
          ) : (
            <div>
              {specialQualification ? (
                <div
                  dangerouslySetInnerHTML={{ __html: specialQualification }}
                />
              ) : (
                <div>Special qualification not found</div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mb-10 mt-6 flex items-center gap-2">
        {isEditMode && (
          <>
            <Button className="!bg-primary px-4" onClick={handleSave}>
              Save
            </Button>
            <Button
              className="!bg-red-500 px-4"
              onClick={() => setIsEditMode(false)}
            >
              Cancel
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default OtherRelevantInfo
