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

interface LinkAccountCard {
  id: number
  accountType: string
  url: string
}

const LinkAccountsSM = ({
  setActiveSection,
}: {
  setActiveSection: (section: string | null) => void
}) => {
  const [linkAccountCards, setLinkAccountCards] = useState<LinkAccountCard[]>(
    []
  )
  const [nextId, setNextId] = useState<number>(1)

  const handleAddLinkAccountCard = () => {
    setLinkAccountCards([
      ...linkAccountCards,
      { id: nextId, accountType: "", url: "" },
    ])
    setNextId(nextId + 1)
  }

  const handleSaveLinkAccountCard = (
    id: number,
    accountType: string,
    url: string
  ) => {
    setLinkAccountCards(
      linkAccountCards.map((card) =>
        card.id === id ? { ...card, accountType, url } : card
      )
    )
  }

  const handleCancelLinkAccountCard = (id: number) => {
    setLinkAccountCards(linkAccountCards.filter((card) => card.id !== id))
  }

  const accountOptions = [
    { value: "facebook", label: "Facebook" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "twitter", label: "Twitter" },
    { value: "github", label: "GitHub" },
    { value: "others", label: "Others" },
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
          <h1 className="ml-4 text-xl font-medium">Link Accounts</h1>
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
      {linkAccountCards.length === 0 ? (
        <div className="py-16 text-center text-xl text-gray-500">
          <Shield size={50} strokeWidth={1} className="mx-auto text-primary" />
          <p>No data found.</p>
          <Button
            className="mt-4 !bg-primary"
            onClick={handleAddLinkAccountCard}
          >
            Add Account
          </Button>
        </div>
      ) : (
        linkAccountCards.map((card) => (
          <LinkAccountCardComponent
            key={card.id}
            card={card}
            accountOptions={accountOptions}
            onSave={handleSaveLinkAccountCard}
            onCancel={handleCancelLinkAccountCard}
          />
        ))
      )}
    </div>
  )
}

interface LinkAccountCardComponentProps {
  card: LinkAccountCard
  accountOptions: { value: string; label: string }[]
  onSave: (id: number, accountType: string, url: string) => void
  onCancel: (id: number) => void
}

const LinkAccountCardComponent: React.FC<LinkAccountCardComponentProps> = ({
  card,
  accountOptions,
  onSave,
  onCancel,
}) => {
  const [accountType, setAccountType] = useState<string>(card.accountType)
  const [url, setUrl] = useState<string>(card.url)
  const [isEditing, setIsEditing] = useState<boolean>(true) // Track if the card is in edit mode

  const handleSave = () => {
    onSave(card.id, accountType, url)
    setIsEditing(false)

    const obj = { accountType, url }
    console.log("link data", obj)
  }

  return (
    <div className="border">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold uppercase">{accountType}</h1>
      </div>
      <div className="bg-gray-50 p-4">
        {isEditing ? (
          <div>
            <label
              className="mb-2 block text-sm font-medium text-gray-700"
              htmlFor="accountType"
            >
              Choose Account
            </label>
            <SelectComponent value={accountType} onValueChange={setAccountType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Account Type</SelectLabel>
                  {accountOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </SelectComponent>

            <label
              className="mb-2 mt-4 block text-sm font-medium text-gray-700"
              htmlFor="url"
            >
              URL
            </label>
            <Input
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="mb-4 !bg-white"
              placeholder="Enter URL"
            />
          </div>
        ) : (
          <div className="border-b pb-4">
            <div className="flex items-center gap-2 font-[500]">
              Account Type : <p>{accountType}</p>
            </div>

            <div className="mt-2 flex items-center gap-2 font-[500]">
              URL:{" "}
              <a target={"_blank"} className="text-blue-500" href={url}>
                {url}
              </a>
            </div>
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

export default LinkAccountsSM
