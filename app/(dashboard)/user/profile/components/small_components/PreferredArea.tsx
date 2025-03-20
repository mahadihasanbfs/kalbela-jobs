import { useEffect, useState } from "react"
import {
  AlertCircle,
  BaggageClaimIcon,
  Briefcase,
  ChevronLeft,
  Eye,
  FileBadge2,
  Home,
  LifeBuoy,
  LocateIcon,
  LucideCookie,
  Pencil,
  Save,
  Type,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const PreferredArea = ({
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

  // Preferred Areas
  const [formData, setFormData] = useState({
    category: "",
    jobCategory: "",
    organizations: "",
    district: "",
    countries: "",
  })

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // console.log({ ...formData, [field]: value }) // Logs the updated state
  }

  // Career Edite

  const [objective, setObjective] = useState("")
  const [error, setError] = useState(false)

  const handleSaves = async () => {
    console.log("checked", formData)
  }

  //  all Countries api
  const [countries, setCountries] = useState<string[]>([])

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all")
        const data = await res.json()

        // Extract only country names
        const countryNames = data.map((country: any) => country.name.common)
        setCountries(countryNames)
      } catch (error) {
        console.error("Error fetching countries:", error)
      }
    }

    fetchCountries()
  }, [])

  // All Distric
  const [districts, setDistricts] = useState<string[]>([])
  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const res = await fetch("https://bdapi.vercel.app/api/v.1/district")
        const data = await res.json()

        // Extract only district names
        const districtNames = data.data.map((district: any) => district.name)
        setDistricts(districtNames)
      } catch (error) {
        console.error("Error fetching districts:", error)
      }
    }

    fetchDistricts()
  }, [])

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
          <h1 className="ml-4 text-xl font-medium">Preferred Areas</h1>
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
          {/* category */}
          <div>
            {/* Preferred Functional */}
            <div className="">
              <Select
                onValueChange={(value) => handleSelectChange("category", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Preferred Functional Job Categori." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel> Select Preferred Functional </SelectLabel>

                    <SelectItem value="Accounting/Finance">
                      Accounting/Finance
                    </SelectItem>
                    <SelectItem value="IT/Telecommunication">
                      IT/Telecommunication
                    </SelectItem>
                    <SelectItem value="Healthcare/Medical">
                      Healthcare/Medical
                    </SelectItem>
                    <SelectItem value="NGO/Development">
                      NGO/Development
                    </SelectItem>
                    <SelectItem value="Research/Consultancy">
                      Research/Consultancy
                    </SelectItem>
                    <SelectItem value="Marketing/Sales">
                      Marketing/Sales
                    </SelectItem>
                    <SelectItem value=" Research/Consultancy">
                      Research/Consultancy
                    </SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Label
              htmlFor="objective"
              className="flex items-center gap-1 pl-2 text-[12px] text-gray-600"
            >
              Functional job categories maximum 3
            </Label>
          </div>

          {/* categories */}
          <div className="">
            <div className="">
              <Select
                onValueChange={(value) =>
                  handleSelectChange("jobCategory", value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Special Skilled Job Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>
                      Select Special Skilled Job Categories
                    </SelectLabel>

                    <SelectItem value="Data Antry/Computer oparator">
                      Data Antry/Computer oparator
                    </SelectItem>
                    <SelectItem value="Mekanical">Mekanical</SelectItem>
                    <SelectItem value="Nurse">Nurse</SelectItem>
                    <SelectItem value=" Driver">Driver</SelectItem>
                    <SelectItem value="Seph">Seph</SelectItem>
                    <SelectItem value="Graphic Designer">
                      Graphic Designer
                    </SelectItem>

                    <SelectItem value="Others">Others</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Label
              htmlFor="objective"
              className="flex items-center gap-1 pl-2 text-[12px] text-gray-600"
            >
              Special Skilled job categories maximum 3
            </Label>
          </div>

          {/* organizations*/}
          <div className="">
            <div className="">
              <Select
                onValueChange={(value) =>
                  handleSelectChange("organizations", value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Special Skilled Job Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>
                      Select Special Skilled Job Categories
                    </SelectLabel>

                    <SelectItem value="Advertising Ageny">
                      Advertising Ageny
                    </SelectItem>
                    <SelectItem value="Airline">Airline</SelectItem>
                    <SelectItem value="Amusement Park">
                      Amusement Park
                    </SelectItem>
                    <SelectItem value="Animal">Animal</SelectItem>
                    <SelectItem value="Architecture Firm">
                      Architecture Firm
                    </SelectItem>
                    <SelectItem value=" Automobile">Automobile</SelectItem>

                    <SelectItem value="Others">Others</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Label
              htmlFor="objective"
              className="flex items-center gap-1 pl-2 text-[12px] text-gray-600"
            >
              Organiztions maximum 12
            </Label>
          </div>

          {/* districts */}
          <div className="">
            <p className="text-sm font-bold">Preferred Job Location*</p>
            <p className="text-[12px] font-medium"> Inside Bangladesh</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Button variant="outline"> Any where in Bangladesh</Button>
              <Button className="bg-blue-600 text-white">Districts</Button>
            </div>

            {/* districts */}

            <div className="pt-2">
              <Select
                onValueChange={(value) => handleSelectChange("district", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Districts" />
                </SelectTrigger>
                <SelectContent className="mt-10">
                  <SelectGroup>
                    <SelectLabel>Select Districts</SelectLabel>
                    {districts?.map((district, index) => (
                      <SelectItem
                        className="space-y-2"
                        key={index}
                        value={district}
                      >
                        {district}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Label
                htmlFor="objective"
                className="flex items-center gap-1 pl-2 text-[12px] text-gray-600"
              >
                districts maximum 15
              </Label>
            </div>

            {/* countries */}
            <div className="">
              <p className="text-sm">Outside Bangladesh</p>
              {/* countries */}
              <div className="mt-3">
                <Select
                  onValueChange={(value) =>
                    handleSelectChange("countries", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Countries" />
                  </SelectTrigger>
                  <SelectContent className="mt-10">
                    <SelectGroup>
                      <SelectLabel>Select countries</SelectLabel>
                      {countries?.map((country, index) => (
                        <SelectItem
                          className="space-y-2"
                          key={index}
                          value={country}
                        >
                          {country}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <Label
                htmlFor="objective"
                className="flex items-center gap-1 pl-2 text-[12px] text-gray-600"
              >
                Countries/Regions maximum 10
              </Label>
            </div>
          </div>

          <div>
            <Button onClick={handleSaves} className="mb-11 mt-4 w-full">
              Save
            </Button>
          </div>
        </div>
      ) : (
        <div className="h-screen px-4">
          <div className="my-8 flex items-center justify-start gap-3">
            <div>
              <Briefcase className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm text-blue-800">
                Preferred Functional Job Categories
              </h3>
            </div>
          </div>

          <div className="my-8 flex items-center justify-start gap-3">
            <div>
              <Briefcase className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm text-blue-800">
                Preferred Special Skilled Job Categories
              </h3>
            </div>
          </div>

          <div className="my-8 flex items-center justify-start gap-3">
            <div>
              <Type className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm text-blue-800">
                Preferred Organization Type
              </h3>
            </div>
          </div>

          <div className="my-8 flex items-center justify-start gap-3">
            <div>
              <LocateIcon className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <h3 className="text-sm text-blue-800"> Preferred Job Locaion </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PreferredArea
