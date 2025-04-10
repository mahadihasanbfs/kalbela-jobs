"use client"

import { useState } from "react"
import { ChevronLeft, Pencil, Shield, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select as SelectComponent,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface LanguageProficiencyCard {
  id: number
  language: string
  reading: string
  writing: string
  speaking: string
}

const LanguageProficiencys = ({
  setActiveSection,
}: {
  setActiveSection: (section: string | null) => void
}) => {
  const [languageCards, setLanguageCards] = useState<LanguageProficiencyCard[]>(
    []
  )
  const [nextId, setNextId] = useState<number>(1)

  const handleAddLanguageCard = () => {
    setLanguageCards([
      ...languageCards,
      { id: nextId, language: "", reading: "", writing: "", speaking: "" },
    ])
    setNextId(nextId + 1)
  }

  const handleSaveLanguageCard = (
    id: number,
    language: string,
    reading: string,
    writing: string,
    speaking: string
  ) => {
    setLanguageCards(
      languageCards.map((card) =>
        card.id === id
          ? { ...card, language, reading, writing, speaking }
          : card
      )
    )
  }

  const handleCancelLanguageCard = (id: number) => {
    setLanguageCards(languageCards.filter((card) => card.id !== id))
  }

  const proficiencyOptions = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
    { value: "native", label: "Native" },
  ]
  const [isEditing, setIsEditing] = useState<boolean>(true)
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
          <h1 className="ml-4 text-xl font-medium">Language Proficiencys</h1>
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
      {languageCards.length === 0 ? (
        <div className="py-16 text-center text-xl text-gray-500">
          <Shield size={50} strokeWidth={1} className="mx-auto text-primary" />
          <p>No data found.</p>
          <Button className="mt-4 !bg-primary" onClick={handleAddLanguageCard}>
            Add Language
          </Button>
        </div>
      ) : (
        languageCards.map((card) => (
          <LanguageCardComponent
            key={card.id}
            card={card}
            proficiencyOptions={proficiencyOptions}
            onSave={handleSaveLanguageCard}
            onCancel={handleCancelLanguageCard}
          />
        ))
      )}
    </div>
  )
}

interface LanguageCardComponentProps {
  card: LanguageProficiencyCard
  proficiencyOptions: { value: string; label: string }[]
  onSave: (
    id: number,
    language: string,
    reading: string,
    writing: string,
    speaking: string
  ) => void
  onCancel: (id: number) => void
}

const LanguageCardComponent: React.FC<LanguageCardComponentProps> = ({
  card,
  proficiencyOptions,
  onSave,
  onCancel,
}) => {
  const [language, setLanguage] = useState<string>(card.language)
  const [reading, setReading] = useState<string>(card.reading)
  const [writing, setWriting] = useState<string>(card.writing)
  const [speaking, setSpeaking] = useState<string>(card.speaking)
  const [isEditing, setIsEditing] = useState<boolean>(true) // Track if the card is in edit mode

  const handleSave = () => {
    onSave(card.id, language, reading, writing, speaking)
    setIsEditing(false)

    const obj = { language, reading, writing, speaking }
    console.log("language data", obj)
  }

  return (
    <div className="border">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold">Language - {card.id}</h1>
      </div>
      <div className="bg-gray-50 p-4">
        {isEditing ? (
          <div>
            <label
              className="mb-2 block text-sm font-medium text-gray-700"
              htmlFor="language"
            >
              Language
            </label>
            <Input
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              placeholder="Enter language"
              className="mb-4 !bg-white"
            />

            <label
              className="mb-2 block text-sm font-medium text-gray-700"
              htmlFor="reading"
            >
              Reading
            </label>
            <SelectComponent value={reading} onValueChange={setReading}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Reading</SelectLabel>
                  {proficiencyOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </SelectComponent>

            <label
              className="mb-2 mt-4 block text-sm font-medium text-gray-700"
              htmlFor="writing"
            >
              Writing
            </label>
            <SelectComponent value={writing} onValueChange={setWriting}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Writing</SelectLabel>
                  {proficiencyOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </SelectComponent>

            <label
              className="mb-2 mt-4 block text-sm font-medium text-gray-700"
              htmlFor="speaking"
            >
              Speaking
            </label>
            <SelectComponent value={speaking} onValueChange={setSpeaking}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Speaking</SelectLabel>
                  {proficiencyOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </SelectComponent>
          </div>
        ) : (
          <div>
            <h4 className="font-[500]">Language:</h4>
            <p>{language}</p>
            <h4 className="mt-4 font-[500]">Proficiency:</h4>
            <ul className="ml-8 list-inside list-disc">
              <li>Reading: {reading}</li>
              <li>Writing: {writing}</li>
              <li>Speaking: {speaking}</li>
            </ul>
          </div>
        )}
        <div className="mb-8 flex items-center gap-2">
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

export default LanguageProficiencys
