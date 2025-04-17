'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Home, HomeIcon, Pencil, Plus } from 'lucide-react'
import { useTheme } from 'next-themes'
import Select from 'react-select'

import { cn, selectCustomStyles } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

import { EditModal } from './CommonModal'
import { Checkbox } from '@/components/ui/checkbox'
import { set_user_data, useUserData } from '@/utils/encript_decript'
import useApiForPost from '@/app/hooks/useApiForPost'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

type Option = {
      value: string
      label: string
}

const fetchCountries = async (): Promise<Option[]> => {
      const response = await fetch(
            'http://api.geonames.org/countryInfoJSON?username=brightfuturesoft'
      )
      const data = await response.json()
      return data?.geonames?.map((country: any) => ({
            value: country.geonameId,
            label: country.countryName,
      }))
}

const fetchDivisions = async (countryId: string): Promise<Option[]> => {
      if (!countryId) return []
      const response = await fetch(
            `http://api.geonames.org/childrenJSON?geonameId=${countryId}&username=brightfuturesoft`
      )
      const data = await response.json()
      return data?.geonames?.map((division: any) => ({
            value: division.geonameId,
            label: division.name,
      }))
}

const fetchCities = async (divisionId: string): Promise<Option[]> => {
      if (!divisionId) return []
      const response = await fetch(
            `http://api.geonames.org/childrenJSON?geonameId=${divisionId}&username=brightfuturesoft`
      )
      const data = await response.json()
      return data?.geonames?.map((city: any) => ({
            value: city.geonameId,
            label: city.name,
      }))
}

const fetchAreas = async (cityId: string): Promise<Option[]> => {
      if (!cityId) return []
      const response = await fetch(
            `http://api.geonames.org/childrenJSON?geonameId=${cityId}&username=brightfuturesoft`
      )
      const data = await response.json()
      return data?.geonames?.map((area: any) => ({
            value: area.geonameId,
            label: area.name,
      }))
}

const fetchPostalCodes = async (areaId: string): Promise<Option[]> => {
      if (!areaId) return []
      const response = await fetch(
            `http://api.geonames.org/postalCodeSearchJSON?placename=${areaId}&username=brightfuturesoft`
      )
      const data = await response.json()
      return data?.postalCodes?.map((postalCode: any) => ({
            value: postalCode.postalCode,
            label: postalCode.postalCode,
      }))
}

const Address = () => {
      const { theme } = useTheme()
      const [user, setUserData] = useUserData()
      const [loading, setLoading] = useState(false)
      const [error_message, set_error_message] = useState('')
      const { apiRequest } = useApiForPost()
      const customStyles = selectCustomStyles(theme || 'light')
      const [editAddressOpen, setEditAddressOpen] = useState(false)
      const [sameAsPresent, setSameAsPresent] = useState(false)
      const [insideBangladesh, setInsideBangladesh] = useState(true)
      const [insideBangladeshPre, setInsideBangladeshPre] = useState(true)

      const [addressData, setAddressData] = useState({
            presentCountry: null as Option | null,
            presentDivision: null as Option | null,
            presentCity: null as Option | null,
            presentArea: null as Option | null,
            presentFullAddress: '',
            permanentCountry: null as Option | null,
            permanentDivision: null as Option | null,
            permanentCity: null as Option | null,
            permanentArea: null as Option | null,
            permanentFullAddress: '',
      })

      useEffect(() => {
            if (user?.address) {
                  setAddressData({
                        ...user?.address,
                  })
            }
      }, [user])

      const { data: countries = [], isLoading: loadingCountries } = useQuery({
            queryKey: ['countries'],
            queryFn: fetchCountries,
      })

      useEffect(() => {
            setAddressData((prev: any) => {
                  const newData = insideBangladesh
                        ? {
                              presentCountry: { value: 1210997, label: 'Bangladesh' },
                              permanentCountry: { value: 1210997, label: 'Bangladesh' },
                        }
                        : {
                              presentCountry: null,
                              permanentCountry: null,
                              presentDivision: null,
                              presentCity: null,
                              presentArea: null,
                              presentFullAddress: '',
                              permanentDivision: null,
                              permanentCity: null,
                              permanentArea: null,
                              permanentFullAddress: '',
                        }

                  // Prevent unnecessary state updates
                  return JSON.stringify(prev.presentCountry) ===
                        JSON.stringify(newData.presentCountry) &&
                        JSON.stringify(prev.permanentCountry) ===
                        JSON.stringify(newData.permanentCountry)
                        ? prev
                        : { ...prev, ...newData }
            })
      }, [insideBangladesh])

      const { data: presentDivisions = [], isLoading: loadingPresentDivisions } =
            useQuery({
                  queryKey: ['divisions', addressData.presentCountry?.value],
                  queryFn: () => fetchDivisions(addressData.presentCountry?.value || ''),
                  enabled: !!addressData.presentCountry,
            })

      const { data: presentCities = [], isLoading: loadingPresentCities } =
            useQuery({
                  queryKey: ['cities', addressData.presentDivision?.value],
                  queryFn: () => fetchCities(addressData.presentDivision?.value || ''),
                  enabled: !!addressData.presentDivision,
            })

      const { data: presentAreas = [], isLoading: loadingPresentAreas } = useQuery({
            queryKey: ['areas', addressData.presentCity?.value],
            queryFn: () => fetchAreas(addressData.presentCity?.value || ''),
            enabled: !!addressData.presentCity,
      })

      const { data: presentFullAddresss = [], isLoading: loadingpresentFullAddresss } =
            useQuery({
                  queryKey: ['postalCodes', addressData.presentArea?.value],
                  queryFn: () => fetchPostalCodes(addressData.presentArea?.value || ''),
                  enabled: !!addressData.presentArea,
            })

      // Permanent Address Queries
      const { data: permanentDivisions = [], isLoading: loadingPermanentDivisions } =
            useQuery({
                  queryKey: ['permanentDivisions', addressData.permanentCountry?.value],
                  queryFn: () => fetchDivisions(addressData.permanentCountry?.value || ''),
                  enabled: !!addressData.permanentCountry && !sameAsPresent,
            })

      const { data: permanentCities = [], isLoading: loadingPermanentCities } =
            useQuery({
                  queryKey: ['permanentCities', addressData.permanentDivision?.value],
                  queryFn: () => fetchCities(addressData.permanentDivision?.value || ''),
                  enabled: !!addressData.permanentDivision && !sameAsPresent,
            })

      const { data: permanentAreas = [], isLoading: loadingPermanentAreas } =
            useQuery({
                  queryKey: ['permanentAreas', addressData.permanentCity?.value],
                  queryFn: () => fetchAreas(addressData.permanentCity?.value || ''),
                  enabled: !!addressData.permanentCity && !sameAsPresent,
            })

      const {
            data: permanentFullAddresss = [],
            isLoading: loadingpermanentFullAddresss,
      } = useQuery({
            queryKey: ['permanentFullAddresss', addressData.permanentArea?.value],
            queryFn: () => fetchPostalCodes(addressData.permanentArea?.value || ''),
            enabled: !!addressData.permanentArea && !sameAsPresent,
      })

      const handleSave = () => {
            update_contact()
            setEditAddressOpen(false)
      }

      const handleSameAsPresent = (checked: boolean) => {
            setSameAsPresent(checked)
            if (checked) {
                  setAddressData((prev) => ({
                        ...prev,
                        permanentCountry: prev.presentCountry,
                        permanentDivision: prev.presentDivision,
                        permanentCity: prev.presentCity,
                        permanentArea: prev.presentArea,
                        permanentFullAddress: prev.presentFullAddress,
                  }))
            } else {
                  setAddressData((prev) => ({
                        ...prev,
                        permanentCountry: null,
                        permanentDivision: null,
                        permanentCity: null,
                        permanentArea: null,
                        permanentFullAddress: '',
                  }))
            }
      }

      const update_contact = async () => {
            setLoading(true)
            const { data, error } = await apiRequest<any>(
                  `api/v1/user/update-profile?id=${user?._id}`,
                  'PUT',
                  {
                        address: addressData,
                  }
            )

            setLoading(false)
            if (error) {
                  set_error_message(error.message)
                  return
            }
            if (data) {
                  set_user_data(data.data)
                  setUserData(data.data)
                  set_error_message('')
                  setEditAddressOpen(false)
            }
      }

      return (
            <div className="mb-4 px-4 py-2 w-full">
                  <div>
                        {Object.values(addressData).some((field) => field) ? (
                              <div className=" text-gray-600 dark:text-slate-200">
                                    <div className="flex justify-end">
                                          <Button
                                                className="!bg-primary ml-auto mb-2 !text-white"
                                                onClick={() => setEditAddressOpen(true)}
                                                variant="outline"
                                          >
                                                <Pencil className="mr-2 h-4 w-4" />
                                                Edit
                                          </Button>
                                    </div>
                                    <div className="mb-4">
                                          <h3 className="font-bold text-lg text-gray-800 border-b pb-2 mb-3">Present Address:</h3>

                                          <ul className="text-md list-disc list-inside ml-6">
                                                <li className="flex items-center gap-2">
                                                      <span className="font-semibold">Present Country : </span> {addressData?.presentCountry?.label}
                                                </li>

                                                <li className="flex items-center gap-2">
                                                      <span className="font-semibold">Present City : </span>
                                                      {addressData?.presentCity?.label}
                                                </li>

                                                <li className="flex items-center gap-2">
                                                      <span className="font-semibold">Present Division : </span>
                                                      {addressData?.presentDivision?.label}
                                                </li>

                                                <li className="flex items-center gap-2">
                                                      <span className="font-semibold">Present Full Address : </span>
                                                      {addressData?.presentFullAddress}
                                                </li>
                                          </ul>
                                    </div>


                                    <div className="mb-4">
                                          <h3 className="font-bold text-lg text-gray-800 border-b pb-2 mb-3">Permanent Address:</h3>

                                          <ul className="text-md list-disc list-inside ml-6">
                                                <li className="flex items-center gap-2">
                                                      <span className="font-semibold">Present Country : </span> {addressData?.permanentCountry?.label}
                                                </li>

                                                <li className="flex items-center gap-2">
                                                      <span className="font-semibold">Present City : </span>
                                                      {addressData?.permanentCity?.label}
                                                </li>

                                                <li className="flex items-center gap-2">
                                                      <span className="font-semibold">Present Division : </span>
                                                      {addressData?.permanentDivision?.label}
                                                </li>

                                                <li className="flex items-center gap-2">
                                                      <span className="font-semibold">Present Full Address : </span>
                                                      {addressData?.permanentFullAddress}
                                                </li>
                                          </ul>
                                    </div>

                              </div>
                        ) : (
                              <div className="text-center text-xl bg-gray-50 py-16 text-gray-500">
                                    <HomeIcon size={50} strokeWidth={1} className="mx-auto text-primary" />
                                    <p>No data found.</p>
                                    <br />
                                    <Button
                                          className="!bg-primary !text-white"
                                          onClick={() => setEditAddressOpen(true)}
                                          variant="outline"
                                    >
                                          <Plus className="mr-2 h-4 w-4" />
                                          Add Address
                                    </Button>
                              </div>

                        )}
                  </div>

                  {editAddressOpen && (
                        <EditModal
                              className="max-w-4xl"
                              open={editAddressOpen}
                              onOpenChange={setEditAddressOpen}
                              title="Edit Address"
                        >
                              <form
                                    onSubmit={(e) => {
                                          e.preventDefault()
                                          handleSave()
                                    }}
                                    className="space-y-6 mt-3"
                              >
                                    <div>
                                          <Label className="mb-2">Present Address</Label>
                                          <div className="flex my-2 items-center">
                                                <label className="flex items-center mr-4">
                                                      <input
                                                            type="radio"
                                                            name="addressType"
                                                            checked={insideBangladesh}
                                                            onChange={() => setInsideBangladesh(true)}
                                                            className="form-radio !border-gray-900"
                                                      />
                                                      <span className="ml-2">Inside Bangladesh</span>
                                                </label>
                                                <label className="flex items-center">
                                                      <input
                                                            type="radio"
                                                            name="addressType"
                                                            checked={!insideBangladesh}
                                                            onChange={() => setInsideBangladesh(false)}
                                                            className="form-radio"
                                                      />
                                                      <span className="ml-2">Outside Bangladesh</span>
                                                </label>
                                          </div>
                                          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                                {!insideBangladesh && (
                                                      <Select
                                                            className="w-full  whitespace-nowrap"
                                                            options={countries}
                                                            value={addressData.presentCountry}
                                                            onChange={(option) =>
                                                                  setAddressData((prev) => ({
                                                                        ...prev,
                                                                        presentCountry: option,
                                                                  }))
                                                            }
                                                            isLoading={loadingCountries}
                                                            placeholder="Select Country"
                                                            styles={customStyles}
                                                      />
                                                )}
                                                <Select
                                                      className="w-full whitespace-nowrap"
                                                      options={presentDivisions}
                                                      value={addressData.presentDivision}
                                                      onChange={(option) =>
                                                            setAddressData((prev) => ({
                                                                  ...prev,
                                                                  presentDivision: option,
                                                            }))
                                                      }
                                                      isLoading={loadingPresentDivisions}
                                                      placeholder="Select Division"
                                                      styles={customStyles}
                                                />
                                                <Select
                                                      className="w-full whitespace-nowrap"
                                                      options={presentCities}
                                                      value={addressData.presentCity}
                                                      onChange={(option) =>
                                                            setAddressData((prev) => ({
                                                                  ...prev,
                                                                  presentCity: option,
                                                            }))
                                                      }
                                                      isLoading={loadingPresentCities}
                                                      placeholder="Select City"
                                                      styles={customStyles}
                                                />
                                                <Select
                                                      className="w-full whitespace-nowrap"
                                                      options={presentAreas}
                                                      value={addressData.presentArea}
                                                      onChange={(option) =>
                                                            setAddressData((prev) => ({
                                                                  ...prev,
                                                                  presentArea: option,
                                                            }))
                                                      }
                                                      isLoading={loadingPresentAreas}
                                                      placeholder="Select Area"
                                                      styles={customStyles}
                                                />
                                          </div>

                                          <div className="mt-4">
                                                <textarea
                                                      className="border rounded w-full p-2 h-20 focus:outline-none focus:ring-1 focus:ring-primary"
                                                      value={addressData.presentFullAddress}
                                                      onChange={(e) =>
                                                            setAddressData((prev) => ({
                                                                  ...prev,
                                                                  presentFullAddress: e.target.value,
                                                            }))
                                                      }
                                                      placeholder="Full Address..."
                                                      name="full_address"
                                                      id="full_address"
                                                ></textarea>
                                          </div>
                                    </div>

                                    <div>
                                          <div className="flex items-center justify-between">
                                                <Label className="mb-2">Permanent Address</Label>
                                                <Label className="mb-2 flex items-center">
                                                      Same as present address
                                                      <Checkbox
                                                            className="ml-2"
                                                            checked={sameAsPresent}
                                                            onCheckedChange={handleSameAsPresent}
                                                      />
                                                </Label>
                                          </div>
                                          {!sameAsPresent && (
                                                <div className="flex my-2 items-center">
                                                      <label className="flex items-center mr-4">
                                                            <input
                                                                  type="radio"
                                                                  name="addressTypePre"
                                                                  checked={insideBangladeshPre}
                                                                  onChange={() => setInsideBangladeshPre(true)}
                                                                  className="form-radio"
                                                            />
                                                            <span className="ml-2">Inside Bangladesh</span>
                                                      </label>
                                                      <label className="flex items-center">
                                                            <input
                                                                  type="radio"
                                                                  name="addressTypePre"
                                                                  checked={!insideBangladeshPre}
                                                                  onChange={() => setInsideBangladeshPre(false)}
                                                                  className="form-radio"
                                                            />
                                                            <span className="ml-2">Outside Bangladesh</span>
                                                      </label>
                                                </div>
                                          )}
                                          {!sameAsPresent && (
                                                <div>
                                                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                                            {!insideBangladeshPre && (
                                                                  <Select
                                                                        options={countries}
                                                                        value={addressData.permanentCountry}
                                                                        onChange={(option) =>
                                                                              setAddressData((prev) => ({
                                                                                    ...prev,
                                                                                    permanentCountry: option,
                                                                              }))
                                                                        }
                                                                        isLoading={loadingCountries}
                                                                        placeholder="Select Country"
                                                                        styles={customStyles}
                                                                  />
                                                            )}
                                                            <Select
                                                                  options={permanentDivisions}
                                                                  value={addressData.permanentDivision}
                                                                  onChange={(option) =>
                                                                        setAddressData((prev) => ({
                                                                              ...prev,
                                                                              permanentDivision: option,
                                                                        }))
                                                                  }
                                                                  isLoading={loadingPermanentDivisions}
                                                                  placeholder="Select Division"
                                                                  styles={customStyles}
                                                            />
                                                            <Select
                                                                  options={permanentCities}
                                                                  value={addressData.permanentCity}
                                                                  onChange={(option) =>
                                                                        setAddressData((prev) => ({
                                                                              ...prev,
                                                                              permanentCity: option,
                                                                        }))
                                                                  }
                                                                  isLoading={loadingPermanentCities}
                                                                  placeholder="Select City"
                                                                  styles={customStyles}
                                                            />
                                                            <Select
                                                                  options={permanentAreas}
                                                                  value={addressData.permanentArea}
                                                                  onChange={(option) =>
                                                                        setAddressData((prev) => ({
                                                                              ...prev,
                                                                              permanentArea: option,
                                                                        }))
                                                                  }
                                                                  isLoading={loadingPermanentAreas}
                                                                  placeholder="Select Area"
                                                                  styles={customStyles}
                                                            />
                                                      </div>
                                                      <div className="mt-4">
                                                            <textarea
                                                                  className="border rounded w-full p-2 h-20 focus:outline-none focus:ring-1 focus:ring-primary"
                                                                  value={addressData.permanentFullAddress}
                                                                  onChange={(e) =>
                                                                        setAddressData((prev) => ({
                                                                              ...prev,
                                                                              permanentFullAddress: e.target.value,
                                                                        }))
                                                                  }
                                                                  placeholder="Full Address..."
                                                                  name="full_address"
                                                                  id="full_address"
                                                            ></textarea>
                                                      </div>
                                                </div>
                                          )}
                                    </div>

                                    <div className="text-right">
                                          <Button type="submit">Save</Button>
                                    </div>
                              </form>
                        </EditModal>
                  )}
            </div>
      )
}

export default Address