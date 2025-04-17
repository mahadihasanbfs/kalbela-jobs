"use client"

import { useState } from "react"
import { ChevronLeft, Pencil, Shield, X } from "lucide-react"
import Select from "react-select"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select as SelectComponent,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SkillOption {
  value: string
  label: string
}

interface SkillCard {
  id: number
  skills: SkillOption[]
  ntvq: boolean
  company?: string
  learningMethods: string[]
}

const Skills = ({
  setActiveSection,
}: {
  setActiveSection: (section: string | null) => void
}) => {
  const [skillCards, setSkillCards] = useState<SkillCard[]>([])
  const [nextId, setNextId] = useState<number>(1)

  const handleAddSkillCard = () => {
    setSkillCards([
      ...skillCards,
      { id: nextId, skills: [], ntvq: false, learningMethods: [] },
    ])
    setNextId(nextId + 1)
  }
  // @ts-ignore
  const handleSaveSkillCard = (
    id: number,
    skills: SkillOption[],
    ntvq: boolean,
    company?: string
  ) => {
    setSkillCards(
      skillCards.map((card) =>
        card.id === id ? { ...card, skills, ntvq, company } : card
      )
    )
  }

  const handleCancelSkillCard = (id: number) => {
    setSkillCards(skillCards.filter((card) => card.id !== id))
  }
  const [isEditing, setIsEditing] = useState<boolean>(true)

  const skillsOption = [
    { value: "Sales Strategy", label: "Sales Strategy" },
    { value: "Sales Execution", label: "Sales Execution" },
    { value: "Sales Support", label: "Sales Support" },
    { value: "Sales Training", label: "Sales Training" },
    { value: "Sales Coaching", label: "Sales Coaching" },
    { value: "Sales Development", label: "Sales Development" },
  ]

  const toggleEditMode = () => setIsEditing(!isEditing)
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
          <h1 className="ml-4 text-xl font-medium">Skills</h1>
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
      {skillCards.length === 0 ? (
        <div className="py-16 text-center text-xl text-gray-500">
          <Shield size={50} strokeWidth={1} className="mx-auto text-primary" />
          <p>No data found.</p>

          <Button className="mt-4 !bg-primary" onClick={handleAddSkillCard}>
            Add Skill
          </Button>
        </div>
      ) : (
        skillCards.map((card) => (
          <SkillCardComponent
            key={card.id}
            card={card}
            skillsOption={skillsOption}
            // @ts-ignore
            onSave={handleSaveSkillCard}
            onCancel={handleCancelSkillCard}
          />
        ))
      )}
    </div>
  )
}

interface SkillCardComponentProps {
  card: SkillCard
  skillsOption: SkillOption[]
  onSave: (
    id: number,
    skills: SkillOption[],
    ntvq: boolean,
    learningMethods: string[],
    company?: string
  ) => void
  onCancel: (id: number) => void
}

const SkillCardComponent: React.FC<SkillCardComponentProps> = ({
  card,
  skillsOption,
  onSave,
  onCancel,
}) => {
  const [selectedSkills, setSelectedSkills] = useState<SkillOption[]>(
    card.skills
  )
  const [ntvq, setNtvq] = useState<boolean>(card.ntvq)
  const [company, setCompany] = useState<string | undefined>(card.company)
  const [isEditing, setIsEditing] = useState<boolean>(true) // Track if the card is in edit mode
  const [learningMethods, setLearningMethods] = useState<string[]>(
    card.learningMethods
  )

  const handleSelectChange = (selectedOptions: any) => {
    setSelectedSkills(selectedOptions)
  }

  const handleCheckboxChange = (method: string, checked: boolean) => {
    setLearningMethods((prevMethods) =>
      checked
        ? [...prevMethods, method]
        : prevMethods.filter((m) => m !== method)
    )
  }

  const handleSave = () => {
    // @ts-ignore
    onSave(card.id, selectedSkills, ntvq, company, learningMethods)
    setIsEditing(false)

    const obj = { selectedSkills, ntvq, company, learningMethods }
  }

  return (
    <div className="border">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold">Skill - {card.id}</h1>
      </div>
      <div className="bg-gray-50 p-4">
        {isEditing ? (
          <div>
            <label
              className="mb-2 block text-sm font-medium text-gray-700"
              htmlFor="skills"
            >
              Skills
            </label>
            <Select
              isMulti
              options={skillsOption}
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
            <h4 className="mt-4 font-[500]">How did you learn the skill?</h4>
            <ul className="mt-1 flex items-center gap-4">
              {[
                { id: "self", label: "Self" },
                { id: "job", label: "Job" },
                { id: "education", label: "Educational" },
                { id: "training", label: "Professional Training" },
              ].map((item) => (
                <li key={item.id} className="mt-2 flex items-center gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={item.id}
                      checked={learningMethods.includes(item.label)}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(item.label, !!checked)
                      }
                    />
                    <label
                      htmlFor={item.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item.label}
                    </label>
                  </div>
                </li>
              ))}

              <li className="mt-2 flex items-center gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="ntvq"
                    checked={ntvq}
                    onCheckedChange={(checked) => setNtvq(!!checked)}
                  />
                  <label
                    htmlFor="ntvq"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    NTVQF
                  </label>
                </div>
              </li>

              {ntvq && (
                <li className="mt-2 flex items-center gap-2">
                  <SelectComponent value={company} onValueChange={setCompany}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Company</SelectLabel>
                        <SelectItem value="companyA">Company A</SelectItem>
                        <SelectItem value="companyB">Company B</SelectItem>
                        <SelectItem value="companyC">Company C</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </SelectComponent>
                </li>
              )}
            </ul>
          </div>
        ) : (
          <div>
            <h4 className="font-[500]">Skills:</h4>
            <ul className="flex flex-wrap gap-2">
              {selectedSkills.map((skill) => (
                <li key={skill.value}>
                  <div className="rounded bg-gray-600 px-3 py-1 text-white">
                    {skill.label}
                  </div>
                </li>
              ))}
            </ul>
            <h4 className="mt-4 font-[500]">How did you learn the skill?</h4>
            <ul className="ml-8 list-inside list-disc">
              {learningMethods.map((method) => (
                <li key={method}>{method}</li>
              ))}
              {ntvq && <li>NTVQF: {company}</li>}
            </ul>
          </div>
        )}
        <div className="flex items-center gap-2">
          {isEditing ? (
            <Button className="mt-4 !bg-primary !py-1" onClick={handleSave}>
              Save
            </Button>
          ) : (
            <Button
              className="mt-4 !bg-primary !py-1"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </Button>
          )}
          <Button
            className="mt-4 !bg-red-500 !py-1"
            onClick={() => onCancel(card.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Skills
