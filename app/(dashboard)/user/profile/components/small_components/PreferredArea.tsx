"use client"

import React, { useState } from "react"
import { useUserData } from "@/utils/encript_decript"
import { useQuery } from "@tanstack/react-query"
import { ChevronLeft, Pencil, Plus, PlusIcon, X } from "lucide-react"
import Select from "react-select"

import { Button } from "@/components/ui/button"

const PreferredArea = ({
  setActiveSection,
}: {
  setActiveSection: (section: string | null) => void
}) => {
  // const [isEditing, setIsEditing] = useState(false)

  // const toggleEditMode = () => setIsEditing(!isEditing)
  // const handleSave = () => {

  //   setIsEditing(false)
  // }

  // Preferred Areas
  // const [formData, setFormData] = useState({
  //   category: "",
  //   jobCategory: "",
  //   organizations: "",
  //   district: "",
  //   countries: "",
  // })

  // const handleSelectChange = (field: string, value: string) => {
  //   setFormData((prev) => ({ ...prev, [field]: value }))

  // }

  // Career Edite

  // const [objective, setObjective] = useState("")
  // const [error, setError] = useState(false)

  // const handleSaves = async () => {
  //   console.log("checked", formData)
  // }

  //  all Countries api
  // const [countries, setCountries] = useState<string[]>([])

  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     try {
  //       const res = await fetch("https://restcountries.com/v3.1/all")
  //       const data = await res.json()

  //       // Extract only country names
  //       const countryNames = data.map((country: any) => country.name.common)
  //       setCountries(countryNames)
  //     } catch (error) {
  //       console.error("Error fetching countries:", error)
  //     }
  //   }

  //   fetchCountries()
  // }, [])

  // All Distric
  // const [districts, setDistricts] = useState<string[]>([])
  // useEffect(() => {
  //   const fetchDistricts = async () => {
  //     try {
  //       const res = await fetch("https://bdapi.vercel.app/api/v.1/district")
  //       const data = await res.json()

  //       const districtNames = data.data.map((district: any) => district.name)
  //       setDistricts(districtNames)
  //     } catch (error) {
  //       console.error("Error fetching districts:", error)
  //     }
  //   }

  //   fetchDistricts()
  // }, [])

  const categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
    "Category 7",
    "Category 8",
    "Category 9",
    "Category 10",
    "Category 11",
    "Category 12",
    "Category 13",
    "Category 14",
    "Category 15",
    "Category 16",
    "Category 17",
    "Category 18",
    "Category 19",
    "Category 20",
  ]

  const districts = [
    "District 1",
    "District 2",
    "District 3",
    "District 4",
    "District 5",
    "District 6",
    "District 7",
    "District 8",
    "District 9",
    "District 10",
    "District 11",
    "District 12",
    "District 13",
    "District 14",
    "District 15",
  ]

  const countries = [
    "Country 1",
    "Country 2",
    "Country 3",
    "Country 4",
    "Country 5",
    "Country 6",
    "Country 7",
    "Country 8",
    "Country 9",
    "Country 10",
  ]

  const organizationTypes = [
    "Organization Type 1",
    "Organization Type 2",
    "Organization Type 3",
    "Organization Type 4",
    "Organization Type 5",
    "Organization Type 6",
    "Organization Type 7",
    "Organization Type 8",
    "Organization Type 9",
    "Organization Type 10",
    "Organization Type 11",
    "Organization Type 12",
  ]

  const [user] = useUserData()

  const {
    data: demoLocations = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["demoLocations"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_APP_BASE_URL}/api/v1/config/locations?token=${user._id}`
      )
      const data = await res.json()
      return data.data
    },
  })

  const {
    data: categoriesList = [],
    isLoading: categoryLoading,
    refetch: categoryRefetch,
  } = useQuery({
    queryKey: ["categoriesList"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_APP_BASE_URL}/api/v1/category?token=${user._id}`
      )
      const data = await res.json()
      return data.data
    },
  })
  console.log(categoriesList, "location : ")

  const [checkedLocations, setCheckedLocations] = useState<string[]>([])
  const [checkedCategories, setCheckedCategories] = useState<string[]>([])
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([])
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])
  const [selectedOrganizationTypes, setSelectedOrganizationTypes] = useState<
    string[]
  >([])
  const [isEditing, setIsEditing] = useState(false)

  const [errors, setErrors] = useState({
    locations: "",
    categories: "",
    districts: "",
    countries: "",
    organizationTypes: "",
  })

  const handleLocationChange = (location: string) => {
    if (checkedLocations.includes(location)) {
      setCheckedLocations((prevState) =>
        prevState.filter((item) => item !== location)
      )
    } else if (checkedLocations.length < 3) {
      setCheckedLocations((prevState) => [...prevState, location])
    }
  }

  const handleCategoryChange = (category: string) => {
    if (checkedCategories.includes(category)) {
      setCheckedCategories((prevState) =>
        prevState.filter((item) => item !== category)
      )
    } else if (checkedCategories.length < 3) {
      setCheckedCategories((prevState) => [...prevState, category])
    }
  }

  const handleDeleteLocation = (location: string) => {
    setCheckedLocations((prevState) =>
      prevState.filter((item) => item !== location)
    )
  }

  const handleDeleteCategory = (category: string) => {
    setCheckedCategories((prevState) =>
      prevState.filter((item) => item !== category)
    )
  }

  const handleDistrictChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions
      ? selectedOptions.map((option: any) => option.value)
      : []
    if (selectedValues.length <= 3) {
      setSelectedDistricts(selectedValues)
    }
  }

  const handleCountryChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions
      ? selectedOptions.map((option: any) => option.value)
      : []
    if (selectedValues.length <= 3) {
      setSelectedCountries(selectedValues)
    }
  }

  const handleOrganizationTypeChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions
      ? selectedOptions.map((option: any) => option.value)
      : []
    if (selectedValues.length <= 3) {
      setSelectedOrganizationTypes(selectedValues)
    }
  }

  const validateInputs = () => {
    const newErrors = {
      locations:
        checkedLocations.length === 0
          ? "Please select at least one location"
          : "",
      categories:
        checkedCategories.length === 0
          ? "Please select at least one category"
          : "",
      districts:
        selectedDistricts.length === 0
          ? "Please select at least one district"
          : "",
      countries:
        selectedCountries.length === 0
          ? "Please select at least one country"
          : "",
      organizationTypes:
        selectedOrganizationTypes.length === 0
          ? "Please select at least one organization type"
          : "",
    }
    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error)
  }

  const handleSave = () => {
    if (!validateInputs()) {
      return
    }

    const data = {
      locations: checkedLocations,
      categories: checkedCategories,
      districts: selectedDistricts,
      countries: selectedCountries,
      organizationTypes: selectedOrganizationTypes,
    }

    console.log("data : ", data)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  const toggleEditMode = () => setIsEditing(!isEditing)
  return (
    <div>
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
          <h1 className="ml-4 text-xl font-medium">Preferred Area</h1>
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
      <div className="relative mb-4 w-full px-4 py-2">
        {isEditing ? (
          <>
            <div className="mt-4 grid grid-cols-1 gap-6">
              <div>
                <h2 className="text-md mb-2 font-semibold">
                  Inside Bangladesh - Add Districts (max 3)
                </h2>
                <Select
                  options={districts.map((d) => ({ value: d, label: d }))}
                  onChange={handleDistrictChange}
                  placeholder="Select districts..."
                  isMulti
                  isClearable
                  value={selectedDistricts.map((d) => ({ value: d, label: d }))}
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
                  maxMenuHeight={150}
                  closeMenuOnSelect={false}
                />
                {errors.districts && (
                  <p className="text-red-500">{errors.districts}</p>
                )}
              </div>

              <div>
                <h2 className="text-md mb-2 font-semibold">
                  Outside Bangladesh - Add Countries (max 3)
                </h2>
                <Select
                  options={countries.map((c) => ({ value: c, label: c }))}
                  onChange={handleCountryChange}
                  placeholder="Select countries..."
                  isMulti
                  isClearable
                  value={selectedCountries.map((c) => ({ value: c, label: c }))}
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
                  maxMenuHeight={150}
                  closeMenuOnSelect={false}
                />
                {errors.countries && (
                  <p className="text-red-500">{errors.countries}</p>
                )}
              </div>
            </div>

            <br />
            <div>
              <h2 className="text-md mb-2 font-semibold">
                Add Your Preferred Organization Type (max 3)
              </h2>
              <Select
                options={organizationTypes.map((o) => ({ value: o, label: o }))}
                onChange={handleOrganizationTypeChange}
                placeholder="Select organization types..."
                isMulti
                isClearable
                value={selectedOrganizationTypes.map((o) => ({
                  value: o,
                  label: o,
                }))}
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
                maxMenuHeight={150}
                closeMenuOnSelect={false}
              />
              {errors.organizationTypes && (
                <p className="text-red-500">{errors.organizationTypes}</p>
              )}
            </div>

            <br />
            <div className="grid grid-cols-1 gap-6">
              <div>
                <div className="rounded-md border border-gray-200 bg-gray-50 px-4 pb-2 pt-4">
                  <h2 className="text-md mb-4 font-semibold">
                    Select Locations (max 3)
                  </h2>
                  <div className="chat-box h-[200px] overflow-y-auto border-t pt-2">
                    <ul className="space-y-2">
                      {demoLocations?.map((location: any, index: any) => (
                        <li key={index} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={`location-${index}`}
                            checked={checkedLocations.includes(location?.name)}
                            onChange={() =>
                              handleLocationChange(location?.name)
                            }
                            className="form-checkbox h-5 w-5 text-blue-900 !accent-blue-900"
                            disabled={
                              !checkedLocations.includes(location?.name) &&
                              checkedLocations.length >= 3
                            }
                          />
                          <label
                            htmlFor={`location-${index}`}
                            className="text-lg"
                          >
                            {location?.name}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3">
                    <ul className="flex flex-wrap gap-1">
                      {checkedLocations.map((location, index) => (
                        <li
                          className="flex items-center gap-2 rounded-md bg-primary px-2 py-1 text-white"
                          key={index}
                        >
                          {location}
                          <button
                            onClick={() => handleDeleteLocation(location)}
                          >
                            <X />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {errors.locations && (
                    <p className="text-red-500">{errors.locations}</p>
                  )}
                </div>
              </div>
              <div>
                <div className="rounded-md border border-gray-200 bg-gray-50 px-4 pb-2 pt-4">
                  <h2 className="text-md mb-4 font-semibold">
                    Select Categories (max 3)
                  </h2>
                  <div className="chat-box h-[200px] overflow-y-auto border-t pt-2">
                    <ul className="space-y-2">
                      {categoriesList?.map((category: any, index: any) => (
                        <li key={index} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={`category-${index}`}
                            checked={checkedCategories.includes(category?.name)}
                            onChange={() =>
                              handleCategoryChange(category?.name)
                            }
                            className="form-checkbox h-5 w-5 text-blue-600 !accent-blue-900"
                            disabled={
                              !checkedCategories.includes(category?.name) &&
                              checkedCategories.length >= 3
                            }
                          />
                          <label
                            htmlFor={`category-${index}`}
                            className="text-lg"
                          >
                            {category?.name}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3">
                    <ul className="flex flex-wrap gap-1">
                      {checkedCategories.map((category, index) => (
                        <li
                          className="flex items-center gap-2 rounded-md bg-primary px-2 py-1 text-white"
                          key={index}
                        >
                          {category}
                          <button
                            onClick={() => handleDeleteCategory(category)}
                          >
                            <X />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {errors.categories && (
                    <p className="text-red-500">{errors.categories}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-10 mt-4">
              <Button
                className="rounded-md !bg-primary px-4 py-2 text-white"
                onClick={handleSave}
              >
                Save
              </Button>
              <Button
                className="ml-2 rounded-md !bg-red-500 px-4 py-2 text-white"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
          </>
        ) : (
          <div className="mb-11 mt-4 max-w-3xl space-y-8">
            <div>
              <h2 className="text-md mb-4 font-bold text-gray-700">
                Preferred Job Categories
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap gap-2">
                    {checkedCategories.length > 0 ? (
                      checkedCategories.map((category, index) => (
                        <span
                          key={index}
                          className="rounded-md bg-gray-100 px-3 py-1.5 text-sm text-gray-700"
                        >
                          {category}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500">
                        No categories selected
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-md mb-4 font-bold text-gray-700">
                Preferred Job Location
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-base font-semibold text-gray-600">
                    Inside Bangladesh
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedDistricts.length > 0 ? (
                      selectedDistricts.map((district, index) => (
                        <span
                          key={index}
                          className="rounded-md bg-gray-100 px-3 py-1.5 text-sm text-gray-700"
                        >
                          {district}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500">
                        No districts selected
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 font-bold text-gray-600">
                    Outside Bangladesh
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCountries.length > 0 ? (
                      selectedCountries.map((country, index) => (
                        <span
                          key={index}
                          className="rounded-md bg-gray-100 px-3 py-1.5 text-sm text-gray-700"
                        >
                          {country}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500">
                        No countries selected
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PreferredArea
