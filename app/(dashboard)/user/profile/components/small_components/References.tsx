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
import { Textarea } from "@/components/ui/textarea"

interface ReferenceCard {
  id: number
  name: string
  designation: string
  organization: string
  email: string
  relation: string
  phone: string
  address: string
}

const References = ({
  setActiveSection,
}: {
  setActiveSection: (section: string | null) => void
}) => {
  const [referenceCards, setReferenceCards] = useState<ReferenceCard[]>([])
  const [nextId, setNextId] = useState<number>(1)

  const handleAddReferenceCard = () => {
    setReferenceCards([
      ...referenceCards,
      {
        id: nextId,
        name: "",
        designation: "",
        organization: "",
        email: "",
        relation: "",
        phone: "",
        address: "",
      },
    ])
    setNextId(nextId + 1)
  }

  const handleSaveReferenceCard = (
    id: number,
    name: string,
    designation: string,
    organization: string,
    email: string,
    relation: string,
    phone: string,
    address: string
  ) => {
    setReferenceCards(
      referenceCards.map((card) =>
        card.id === id
          ? {
              ...card,
              name,
              designation,
              organization,
              email,
              relation,
              phone,
              address,
            }
          : card
      )
    )
  }

  const handleCancelReferenceCard = (id: number) => {
    setReferenceCards(referenceCards.filter((card) => card.id !== id))
  }

  const relationOptions = [
    { value: "colleague", label: "Colleague" },
    { value: "supervisor", label: "Supervisor" },
    { value: "mentor", label: "Mentor" },
    { value: "friend", label: "Friend" },
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
          <h1 className="ml-4 text-xl font-medium">References</h1>
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
      {referenceCards.length === 0 ? (
        <div className="py-8 text-center text-xl text-gray-500">
          <Shield size={50} strokeWidth={1} className="mx-auto text-primary" />
          <p>No data found.</p>
          <Button className="mt-4 !bg-primary" onClick={handleAddReferenceCard}>
            Add Reference
          </Button>
        </div>
      ) : (
        referenceCards.map((card) => (
          <ReferenceCardComponent
            key={card.id}
            card={card}
            relationOptions={relationOptions}
            onSave={handleSaveReferenceCard}
            onCancel={handleCancelReferenceCard}
          />
        ))
      )}
    </div>
  )
}

interface ReferenceCardComponentProps {
  card: ReferenceCard
  relationOptions: { value: string; label: string }[]
  onSave: (
    id: number,
    name: string,
    designation: string,
    organization: string,
    email: string,
    relation: string,
    phone: string,
    address: string
  ) => void
  onCancel: (id: number) => void
}

const ReferenceCardComponent: React.FC<ReferenceCardComponentProps> = ({
  card,
  relationOptions,
  onSave,
  onCancel,
}) => {
  const [name, setName] = useState<string>(card.name)
  const [designation, setDesignation] = useState<string>(card.designation)
  const [organization, setOrganization] = useState<string>(card.organization)
  const [email, setEmail] = useState<string>(card.email)
  const [relation, setRelation] = useState<string>(card.relation)
  const [phone, setPhone] = useState<string>(card.phone)
  const [address, setAddress] = useState<string>(card.address)
  const [isEditing, setIsEditing] = useState<boolean>(true) // Track if the card is in edit mode

  const handleSave = () => {
    onSave(
      card.id,
      name,
      designation,
      organization,
      email,
      relation,
      phone,
      address
    )
    setIsEditing(false)

    const obj = {
      name,
      designation,
      organization,
      email,
      relation,
      phone,
      address,
    }
    console.log("reference data", obj)
  }

  return (
    <div className="border">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold">Reference - {card.id}</h1>
      </div>
      <div className="bg-gray-50 p-4">
        {isEditing ? (
          <div>
            <label
              className="mb-2 block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-4 !bg-white"
            />

            <label
              className="mb-2 block text-sm font-medium text-gray-700"
              htmlFor="designation"
            >
              Designation
            </label>
            <Input
              id="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="mb-4 !bg-white"
            />

            <label
              className="mb-2 block text-sm font-medium text-gray-700"
              htmlFor="organization"
            >
              Organization
            </label>
            <Input
              id="organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="mb-4 !bg-white"
            />

            <label
              className="mb-2 block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 !bg-white"
            />

            <label
              className="mb-2 block text-sm font-medium text-gray-700"
              htmlFor="relation"
            >
              Relation
            </label>
            <SelectComponent value={relation} onValueChange={setRelation}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Relation</SelectLabel>
                  {relationOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </SelectComponent>

            <label
              className="mb-2 mt-4 block text-sm font-medium text-gray-700"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mb-4 !bg-white"
            />

            <label
              className="mb-2 mt-4 block text-sm font-medium text-gray-700"
              htmlFor="address"
            >
              Address
            </label>
            <Textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mb-4 !bg-white"
            />
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            <div className="">
              <h4 className="font-semibold text-gray-700">Name</h4>
              <p className="text-gray-500">{name}</p>
            </div>

            <div className="">
              <h4 className="font-semibold text-gray-700">Designation</h4>
              <p className="text-gray-500">{designation}</p>
            </div>

            <div className="">
              <h4 className="font-semibold text-gray-700">Organization</h4>
              <p className="text-gray-500">{organization}</p>
            </div>

            <div className="">
              <h4 className="font-semibold text-gray-700">Email</h4>
              <p className="text-gray-500">{email}</p>
            </div>

            <div className="">
              <h4 className="font-semibold text-gray-700">phone</h4>
              <p className="text-gray-500">{phone}</p>
            </div>

            <div className="">
              <h4 className="font-semibold text-gray-700">Relation</h4>
              <p className="text-gray-500">{relation}</p>
            </div>

            <div className="">
              <h4 className="font-semibold text-gray-700">Address</h4>
              <p className="text-gray-500">{address}</p>
            </div>
            {/* <h4 className="font-[500]">Name:</h4>
                        <p>{name}</p>
                        <h4 className="font-[500] mt-4">Designation:</h4>
                        <p>{designation}</p>
                        <h4 className="font-[500] mt-4">Organization:</h4>
                        <p>{organization}</p>
                        <h4 className="font-[500] mt-4">Email:</h4>
                        <p>{email}</p>
                        <h4 className="font-[500] mt-4">Relation:</h4>
                        <p>{relation}</p>
                        <h4 className="font-[500] mt-4">Phone Number:</h4>
                        <p>{phone}</p>
                        <h4 className="font-[500] mt-4">Address:</h4>
                        <p>{address}</p> */}
          </div>
        )}
        <div className="mb-5 flex items-center gap-2">
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

export default References
