"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { encryptId } from "@/utils/encriptDecriptGenarator"
import { useUserData } from "@/utils/encript_decript"
import {
  Award,
  BarChart2,
  Briefcase,
  Building,
  Camera,
  ChevronLeft,
  Eye,
  FileText,
  Globe,
  GraduationCap,
  LinkIcon,
  MapPin,
  Monitor,
  Pencil,
  Phone,
  Save,
  Trophy,
  User,
  Users,
  View,
  X,
} from "lucide-react"

import LoadingSpinner from "@/components/ui/LoadingSpinner"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ChevronLeft, Camera, User, Phone, Briefcase, MapPin, FileText, GraduationCap, BarChart2, Award, Building, Globe, LinkIcon, Users, Trophy, Pencil, Save, X, Monitor, View, Eye, Home } from 'lucide-react'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useMediaQuery } from "@/app/hooks/use_media_query"

import Address from "./Address"
import CareerObjective from "./CareerObjective"
import CitificationSummary from "./CirtificationSummary"
import DisabilityInformation from "./DisabilityInformation"
import EducationTraining from "./EducationTraining"
import EmploymentHistory from "./EmployeementHistory"
import OtherReleventInfo from "./OtherReleventInfo"
import PersonalDetailsContent from "./PersonalDetailsContent"
import PreferredAreas from "./PreferredAreas"
import ProfileTabList from "./ProfileTabList"
import TrainingSummary from "./Traning_summary"
import AcademicQualification from "./small_components/AcademicQualification"
import Career from "./small_components/Career"
import ContactUpdate from "./small_components/Contact_update"
import EmploymentHistorys from "./small_components/EmploymentHistorys"
import EmploymentRetired from "./small_components/EmploymentRetired"
import LanguageProficiencys from "./small_components/LanguageProficiencys"
import LinkAccounts from "./small_components/LinkAccounts"
import OtherRelevantInfo from "./small_components/OtherRelevantInfo"
import PersonalDetailsEdit from "./small_components/PersonalDetailsEdit"
import PreferredArea from "./small_components/PreferredArea"
import ProfessionalCartifications from "./small_components/ProfessionalCartifications"
import ProfileUpdate from "./small_components/Profile_update"
import References from "./small_components/References"
import Skills from "./small_components/Skills"
import TrainingSummarys from "./small_components/TrainingSummarys"
import { AccomplishmentDialog } from "./small_components/accomplishment-dialog"

import CitificationSummary from "./CirtificationSummary"
import EmploymentHistory from "./EmployeementHistory"
import EmployeeHistoryForRetired from "./EmploymentHistoryForRetire"
import OtherSkills from "./OtherSkills"
import LanguageProficiency from "./LanguageProficency"
import ReferenceInput from "./Reference"
import LinkAccounts from "./LinksAccount"
import UserAssets from "./UserAssets"



export default function ProfileForm() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("home")
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const savedTab = localStorage.getItem("activeProfileTab")
    if (savedTab) {
      setActiveTab(savedTab)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("activeProfileTab", activeTab)
  }, [activeTab])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  const toggleEditMode = () => {
    setIsEditing(!isEditing)
  }

  const handleSave = () => {
    setIsEditing(false)
  }

  if (isMobile === null) {
    return (
      <div className="flex h-12 items-center justify-center">
        <LoadingSpinner size="medium" className="text-primary" />
      </div>
    )
  }
  if (isMobile) {
    return (
      <MobileProfileView
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isEditing={isEditing}
        toggleEditMode={toggleEditMode}
        handleSave={handleSave}
      />
    )
  }

  // @ts-ignore

  return (
    <DesktopProfileView
      activeTab={activeTab}
      handleTabChange={handleTabChange}
      isEditing={isEditing}
      toggleEditMode={toggleEditMode}
      handleSave={handleSave}
    />
  )
}

function MobileProfileView({
  activeSection,
  setActiveSection,
  isEditing,
  toggleEditMode,
  handleSave,
}: {
  activeSection: string | null
  setActiveSection: (section: string | null) => void
  isEditing: boolean
  toggleEditMode: () => void
  handleSave: () => void
}) {
  const [user, setUserData] = useUserData()
  if (activeSection === "personalDetails") {
    return <PersonalDetailsEdit setActiveSection={setActiveSection} />
  }
  if (activeSection === "profilePhoto") {
    return <ProfileUpdate setActiveSection={setActiveSection} />
  }
  if (activeSection === "contactDetails") {
    return <ContactUpdate setActiveSection={setActiveSection} />
  }
  if (activeSection === "careers") {
    return <Career setActiveSection={setActiveSection} />
  }
  if (activeSection === "preferreds") {
    return <PreferredArea setActiveSection={setActiveSection} />
  }
  if (activeSection === "otherRelevants") {
    return <OtherRelevantInfo setActiveSection={setActiveSection} />
  }
  if (activeSection === "academicQualifica") {
    return <AcademicQualification setActiveSection={setActiveSection} />
  }
  if (activeSection === "trainingSummary") {
    return <TrainingSummarys setActiveSection={setActiveSection} />
  }
  if (activeSection === "professionalCartification") {
    return <ProfessionalCartifications setActiveSection={setActiveSection} />
  }
  if (activeSection === "employmentHis") {
    return <EmploymentHistorys setActiveSection={setActiveSection} />
  }
  if (activeSection === "employmentRetired") {
    return <EmploymentRetired setActiveSection={setActiveSection} />
  }
  if (activeSection === "languageProficiencys") {
    return <LanguageProficiencys setActiveSection={setActiveSection} />
  }
  if (activeSection === "linkAccounts") {
    return <LinkAccounts setActiveSection={setActiveSection} />
  }
  if (activeSection === "references") {
    return <References setActiveSection={setActiveSection} />
  }
  if (activeSection === "skills") {
    return <Skills setActiveSection={setActiveSection} />
  }

  const router = useRouter()
  const shareProfileHandler = (id: string) => {
    const encryptedId = encodeURIComponent(encryptId(id))
    router.push(`/portfolio/${encryptedId}`)
  }

  return (
    <div className="mb-20 rounded bg-gray-100">
      <div className="flex flex-col items-center rounded-t-lg bg-light-theme py-4 text-white dark:bg-dark-theme">
        <div className="relative mb-2 h-20 w-20 overflow-hidden rounded-full bg-gray-300">
          <Image
            src={user?.profile_picture}
            alt="Profile"
            width={80}
            height={80}
            className="h-full w-full object-scale-down"
          />
        </div>
        <h1 className="text-xl font-medium text-black">{user?.fullName}</h1>
      </div>

      <div className="bg-gray-100 p-4">
        <div className="mb-2 text-center text-lg font-medium">
          Statistics of Kalbela Jobs Profile
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center rounded-md bg-white p-4">
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm text-gray-500">Viewed</div>
          </div>
          <div className="flex flex-col items-center rounded-md bg-white p-4">
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm text-gray-500">Downloaded</div>
          </div>
          <div className="flex flex-col items-center rounded-md bg-white p-4">
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm text-gray-500">Emailed</div>
          </div>
        </div>
      </div>

      <hr className="my-4" />
      <div className="bg-gray-100 p-4">
        <h2 className="mb-4 text-gray-500">Personal Information</h2>
        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full justify-start bg-white"
            onClick={() => setActiveSection("profilePhoto")}
          >
            <Camera className="mr-2 h-5 w-5 text-gray-500" />
            Upload Photo
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start bg-white"
            onClick={() => setActiveSection("personalDetails")}
          >
            <User className="mr-2 h-5 w-5 text-gray-500" />
            Personal Details
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start bg-white"
            onClick={() => setActiveSection("contactDetails")}
          >
            <Phone className="mr-2 h-5 w-5 text-gray-500" />
            Contact Details
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start bg-white"
            onClick={() => setActiveSection("careers")}
          >
            <Briefcase className="mr-2 h-5 w-5 text-gray-500" />
            Career and Application Information
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start bg-white"
            onClick={() => setActiveSection("preferreds")}
          >
            <MapPin className="mr-2 h-5 w-5 text-gray-500" />
            Preferred Areas
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start bg-white"
            onClick={() => setActiveSection("otherRelevants")}
          >
            <FileText className="mr-2 h-5 w-5 text-gray-500" />
            Other Relevant Information
          </Button>
        </div>
      </div>

      <div className="p-4">
        <h2 className="mb-4 text-gray-500">Education / Training</h2>
        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full justify-start bg-white"
            onClick={() => setActiveSection("academicQualifica")}
          >
            <GraduationCap className="mr-2 h-5 w-5 text-gray-500" />
            Academic Qualification
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start bg-white"
            onClick={() => setActiveSection("trainingSummary")}
          >
            <BarChart2 className="mr-2 h-5 w-5 text-gray-500" />
            Training Summary
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start bg-white"
            onClick={() => setActiveSection("professionalCartification")}
          >
            <Award className="mr-2 h-5 w-5 text-gray-500" />
            Professional Certification Summary
          </Button>
        </div>
      </div>

      <div className="p-4">
        <h2 className="mb-4 text-gray-500">Employment History</h2>
        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full justify-start bg-white"
            onClick={() => setActiveSection("employmentHis")}
          >
            <Building className="mr-2 h-5 w-5 text-gray-500" />
            Employment History
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start bg-white"
            onClick={() => setActiveSection("employmentRetired")}
          >
            <Building className="mr-2 h-5 w-5 text-gray-500" />
            Employment History (Retired Army Person)
          </Button>
        </div>
      </div>

      <div className="p-4">
        <h2 className="mb-4 text-gray-500">Skills & Others</h2>
        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full justify-start bg-white"
            onClick={() => setActiveSection("skills")}
          >
            <BarChart2 className="mr-2 h-5 w-5 text-gray-500" />
            Skill
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start bg-white"
            onClick={() => setActiveSection("languageProficiencys")}
          >
            <Globe className="mr-2 h-5 w-5 text-gray-500" />
            Language Proficiency
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start bg-white"
            onClick={() => setActiveSection("linkAccounts")}
          >
            <LinkIcon className="mr-2 h-5 w-5 text-gray-500" />
            Link Account
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start bg-white"
            onClick={() => setActiveSection("references")}
          >
            <Users className="mr-2 h-5 w-5 text-gray-500" />
            References
          </Button>
        </div>
      </div>

      <div className="p-4">
        <h2 className="mb-4 text-gray-500">Accomplishment</h2>
        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full justify-start bg-white"
            onClick={() => {}}
          >
            <Trophy className="mr-2 h-5 w-5 text-gray-500" />
            Accomplishment
          </Button>
          <p className="px-2 text-sm text-gray-500">
            Select & Add your portfolio, Project, Paper/Journal, Publication,
            etc to enhance your profile
          </p>
        </div>
      </div>

      <div className="fixed bottom-20 right-4">
        <Button
          onClick={() => shareProfileHandler(user?._id)}
          className="h-10 w-10 rounded-full bg-green-500 hover:bg-green-600"
        >
          <Eye className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

function DesktopProfileView({
  activeTab,
  handleTabChange,
  isEditing,
  toggleEditMode,
  handleSave,
}: {
  activeTab: string
  handleTabChange: (value: string) => void
  isEditing: boolean
  toggleEditMode: () => void
  handleSave: () => void
}) {

  const [activeDialog, setActiveDialog] = useState<
    "portfolio" | "publication" | "award" | "project" | "other" | null
  >(null)

  const handleSaveAccomplishment = (data: any) => {
    console.log("Saving accomplishment:", data)
    // Handle saving the accomplishment data here
  }

  return (
    <div>
      <div className="overflow-hidden rounded-lg bg-white shadow-sm">
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <ProfileTabList />

          <TabsContent value="home" className="m-0">
            <Accordion
              defaultValue="item-1"
              type="single"
              collapsible
              className="mt-6 w-full space-y-3"
            >
              <AccordionItem className="border" value="item-1">
                <AccordionTrigger className="font-regular bg-gray-50 px-4 text-lg">
                  Personal Details
                </AccordionTrigger>
                <AccordionContent>
                  <PersonalDetailsContent
                    isEditing={isEditing}
                    toggleEditMode={toggleEditMode}
                    handleSave={handleSave}
                  />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem className="border" value="item-2">
                <AccordionTrigger className="font-regular bg-gray-50 px-4 text-lg">
                  Address Details{" "}
                </AccordionTrigger>
                <AccordionContent>
                  <Address />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem className="border" value="item-3">
                <AccordionTrigger className="font-regular bg-gray-50 px-4 text-lg">
                  Career and Application Information{" "}
                </AccordionTrigger>
                <AccordionContent>
                  <CareerObjective isEditing={isEditing} />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem className="border" value="item-4">
                <AccordionTrigger className="font-regular bg-gray-50 px-4 text-lg">
                  Preferred Areas
                </AccordionTrigger>
                <AccordionContent>
                  <PreferredAreas />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem className="border" value="item-5">
                <AccordionTrigger className="font-regular bg-gray-50 px-4 text-lg">
                  Other Relevant Information
                </AccordionTrigger>
                <AccordionContent>
                  <OtherReleventInfo />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem className="border" value="item-6">
                <AccordionTrigger className="font-regular bg-gray-50 px-4 text-lg">
                  Disability Information (if any)
                </AccordionTrigger>
                <AccordionContent>
                  <DisabilityInformation />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="education" className="m-0">
            <Accordion
              defaultValue="academic"
              type="single"
              collapsible
              className="mt-6 w-full space-y-3"
            >
              <AccordionItem className="border" value="academic">
                <AccordionTrigger className="font-regular bg-gray-50 px-4 text-lg">
                  Academic Summary
                </AccordionTrigger>
                <AccordionContent>
                  <EducationTraining />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem className="border" value="trining">
                <AccordionTrigger className="font-regular bg-gray-50 px-4 text-lg">
                  Training Summary
                </AccordionTrigger>
                <AccordionContent>
                  <TrainingSummary />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem className="border" value="cirtification">
                <AccordionTrigger className="font-regular bg-gray-50 px-4 text-lg">
                  Professional Certification Summary
                </AccordionTrigger>
                <AccordionContent>
                  <CitificationSummary />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="employment" className="m-0">
            <Accordion
              defaultValue="academic"
              type="single"
              collapsible
              className="mt-6 w-full space-y-3"
            >
              <AccordionItem className="border" value="academic">
                <AccordionTrigger className="font-regular bg-gray-50 px-4 text-lg">
                  Employment History
                </AccordionTrigger>
                <AccordionContent>
                  <EmploymentHistory />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="other" className="m-0">
            <div className="flex items-center justify-between border-b p-4">
              <h1 className="text-lg font-medium">
                Skills & Other Information
              </h1>
              {isEditing ? (
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={handleSave}>
                    <Save className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" onClick={toggleEditMode}>
                    <X className="mr-2 h-4 w-4" />
                    Cancel
                  </Button>
                </div>
              ) : (
                <Button variant="outline" size="sm" onClick={toggleEditMode}>
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit
                </Button>
              )}
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="mb-4 text-lg font-medium">Skills</h2>
                  <div className="rounded-md bg-gray-50 p-4">
                    <p className="text-gray-500">No skills added yet.</p>
                    {isEditing && (
                      <Button variant="outline" size="sm" className="mt-2">
                        Add Skills
                      </Button>
                    )}
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-lg font-medium">
                    Language Proficiency
                  </h2>
                  <div className="rounded-md bg-gray-50 p-4">
                    <p className="text-gray-500">No languages added yet.</p>
                    {isEditing && (
                      <Button variant="outline" size="sm" className="mt-2">
                        Add Language
                      </Button>
                    )}



      return (
            <div>
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                              <ProfileTabList />

                              <TabsContent value="home" className="m-0">
                                    <Accordion defaultValue="item-1" type="single" collapsible className="w-full mt-6 space-y-3">
                                          <AccordionItem className="border" value="item-1">
                                                <AccordionTrigger className="font-regular text-lg  px-4 bg-gray-50 flex items-center gap-2">
                                                      <div className="flex items-center gap-2">
                                                            <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  width={28}
                                                                  height={28}
                                                                  viewBox="0 0 24 24"
                                                                  fill="none"
                                                                  stroke="currentColor"
                                                                  strokeWidth={1}
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="lucide lucide-shield-user"
                                                            >
                                                                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                                                  <path d="M6.376 18.91a6 6 0 0 1 11.249.003" />
                                                                  <circle cx={12} cy={11} r={4} />
                                                            </svg>


                                                            Personal Details
                                                      </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                      <PersonalDetailsContent
                                                            isEditing={isEditing}
                                                            toggleEditMode={toggleEditMode}
                                                            handleSave={handleSave}
                                                      />
                                                </AccordionContent>
                                          </AccordionItem>

                                          <AccordionItem className="border" value="item-2">
                                                <AccordionTrigger className="font-regular text-lg  px-4 bg-gray-50">
                                                      <div className="flex items-center gap-2">
                                                            <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  width={30}
                                                                  height={30}
                                                                  viewBox="0 0 24 24"
                                                                  fill="none"
                                                                  stroke="currentColor"
                                                                  //      @ts-ignore
                                                                  strokewidth={1}
                                                                  strokelinecap="round"
                                                                  strokelinejoin="round"
                                                                  classname="lucide lucide-house-plus"
                                                            >
                                                                  <path d="M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354" />
                                                                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                                                                  <path d="M15 6h6" />
                                                                  <path d="M18 3v6" />
                                                            </svg>



                                                            Address Details
                                                      </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                      <Address />
                                                </AccordionContent>
                                          </AccordionItem>

                                          <AccordionItem className="border" value="item-3">
                                                <AccordionTrigger className="font-regular text-lg  px-4 bg-gray-50">

                                                      <div className="flex items-center gap-2">
                                                            <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  width={30}
                                                                  height={30}
                                                                  viewBox="0 0 24 24"
                                                                  fill="none"
                                                                  stroke="currentColor"
                                                                  strokeWidth={1}
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="lucide lucide-user-round-cog"
                                                            >
                                                                  <path d="M2 21a8 8 0 0 1 10.434-7.62" />
                                                                  <circle cx={10} cy={8} r={5} />
                                                                  <circle cx={18} cy={18} r={3} />
                                                                  <path d="m19.5 14.3-.4.9" />
                                                                  <path d="m16.9 20.8-.4.9" />
                                                                  <path d="m21.7 19.5-.9-.4" />
                                                                  <path d="m15.2 16.9-.9-.4" />
                                                                  <path d="m21.7 16.5-.9.4" />
                                                                  <path d="m15.2 19.1-.9.4" />
                                                                  <path d="m19.5 21.7-.4-.9" />
                                                                  <path d="m16.9 15.2-.4-.9" />
                                                            </svg>


                                                            Career and Application Information
                                                      </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                      <CareerObjective isEditing={isEditing} />
                                                </AccordionContent>
                                          </AccordionItem>

                                          <AccordionItem className="border" value="item-4">
                                                <AccordionTrigger className="font-regular text-lg  px-4 bg-gray-50">
                                                      <div className="flex items-center gap-2">
                                                            <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  width={30}
                                                                  height={30}
                                                                  viewBox="0 0 24 24"
                                                                  fill="none"
                                                                  stroke="currentColor"
                                                                  strokeWidth={1}
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="lucide lucide-map-pin-house"
                                                            >
                                                                  <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
                                                                  <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
                                                                  <path d="M18 22v-3" />
                                                                  <circle cx={10} cy={10} r={3} />
                                                            </svg>
                                                            Preferred Areas
                                                      </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                      <PreferredAreas />
                                                </AccordionContent>
                                          </AccordionItem>


                                          <AccordionItem className="border" value="item-5">
                                                <AccordionTrigger className="font-regular text-lg  px-4 bg-gray-50">
                                                      <div className="flex items-center gap-2">
                                                            <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  width={28}
                                                                  height={28}
                                                                  viewBox="0 0 24 24"
                                                                  fill="none"
                                                                  stroke="currentColor"
                                                                  strokeWidth={1}
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="lucide lucide-info"
                                                            >
                                                                  <circle cx={12} cy={12} r={10} />
                                                                  <path d="M12 16v-4" />
                                                                  <path d="M12 8h.01" />
                                                            </svg>

                                                            Other Relevant Information
                                                      </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                      <OtherReleventInfo />
                                                </AccordionContent>
                                          </AccordionItem>


                                          <AccordionItem className="border" value="item-6">
                                                <AccordionTrigger className="font-regular text-lg  px-4 bg-gray-50">
                                                      <div className="flex items-center gap-2">
                                                            <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  width={28}
                                                                  height={28}
                                                                  viewBox="0 0 24 24"
                                                                  fill="none"
                                                                  stroke="currentColor"
                                                                  strokeWidth={1}
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="lucide lucide-unplug"
                                                            >
                                                                  <path d="m19 5 3-3" />
                                                                  <path d="m2 22 3-3" />
                                                                  <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
                                                                  <path d="M7.5 13.5 10 11" />
                                                                  <path d="M10.5 16.5 13 14" />
                                                                  <path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" />
                                                            </svg>
                                                            Disability Information (if any)
                                                      </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                      <DisabilityInformation />
                                                </AccordionContent>
                                          </AccordionItem>
                                    </Accordion>
                              </TabsContent>

                              <TabsContent value="education" className="m-0">
                                    <Accordion defaultValue="academic" type="single" collapsible className="w-full mt-6 space-y-3">
                                          <AccordionItem className="border" value="academic">
                                                <AccordionTrigger className="font-regular text-lg  px-4 bg-gray-50">
                                                      <div className="flex items-center gap-2">
                                                            <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  width={28}
                                                                  height={28}
                                                                  viewBox="0 0 24 24"
                                                                  fill="none"
                                                                  stroke="currentColor"
                                                                  strokeWidth={1}
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="lucide lucide-graduation-cap"
                                                            >
                                                                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                                                                  <path d="M22 10v6" />
                                                                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                                                            </svg>

                                                            Academic Summary
                                                      </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                      <EducationTraining />
                                                </AccordionContent>
                                          </AccordionItem>

                                          <AccordionItem className="border" value="trining">
                                                <AccordionTrigger className="font-regular text-lg  px-4 bg-gray-50">
                                                      <div className="flex items-center gap-2">
                                                            <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  width={28}
                                                                  height={28}
                                                                  viewBox="0 0 24 24"
                                                                  fill="none"
                                                                  stroke="currentColor"
                                                                  strokeWidth={1}
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="lucide lucide-graduation-cap"
                                                            >
                                                                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                                                                  <path d="M22 10v6" />
                                                                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                                                            </svg>
                                                            Training Summary
                                                      </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                      <TrainingSummary />
                                                </AccordionContent>
                                          </AccordionItem>

                                          <AccordionItem className="border" value="cirtification">
                                                <AccordionTrigger className="font-regular text-lg  px-4 bg-gray-50">
                                                      <div className="flex items-center gap-2">
                                                            <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  width={28}
                                                                  height={28}
                                                                  viewBox="0 0 24 24"
                                                                  fill="none"
                                                                  stroke="currentColor"
                                                                  strokeWidth={1}
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="lucide lucide-graduation-cap"
                                                            >
                                                                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                                                                  <path d="M22 10v6" />
                                                                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                                                            </svg>
                                                            Professional Certification Summary
                                                      </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                      <CitificationSummary />
                                                </AccordionContent>
                                          </AccordionItem>
                                    </Accordion>
                              </TabsContent>

                              <TabsContent value="employment" className="m-0">
                                    <Accordion defaultValue="academic" type="single" collapsible className="w-full mt-6 space-y-3">
                                          <AccordionItem className="border" value="academic">
                                                <AccordionTrigger className="font-regular text-lg  px-4 bg-gray-50">
                                                      <div className="flex items-center gap-2">
                                                            {/* @ts-ignore */}
                                                            <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  width={28}
                                                                  height={28}
                                                                  viewBox="0 0 24 24"
                                                                  fill="none"
                                                                  stroke="currentColor"
                                                                  strokeWidth={1}
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="lucide lucide-users"
                                                            >
                                                                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                                                  <circle cx={9} cy={7} r={4} />
                                                                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                                                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                                            </svg>

                                                            Employment History
                                                      </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                      <EmploymentHistory />
                                                </AccordionContent>
                                          </AccordionItem>
                                          <AccordionItem className="border" value="retired">
                                                <AccordionTrigger className="font-regular text-lg  px-4 bg-gray-50">
                                                      <div className="flex items-center gap-2">
                                                            {/* @ts-ignore */}
                                                            <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  width={28}
                                                                  height={28}
                                                                  viewBox="0 0 24 24"
                                                                  fill="none"
                                                                  stroke="currentColor"
                                                                  strokeWidth={1}
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="lucide lucide-users"
                                                            >
                                                                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                                                  <circle cx={9} cy={7} r={4} />
                                                                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                                                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                                            </svg>
                                                            Employment History (For Retired Army Person)
                                                      </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                      <EmployeeHistoryForRetired />
                                                </AccordionContent>
                                          </AccordionItem>

                                    </Accordion>
                              </TabsContent>



                              <TabsContent value="other" className="m-0">
                                    <Accordion defaultValue="skill_info" type="single" collapsible className="w-full mt-6 space-y-3">
                                          <AccordionItem className="border" value="skill_info">
                                                <AccordionTrigger className="font-regular text-lg  px-4 bg-gray-50">
                                                      <div className="flex items-center gap-2">
                                                            {/* @ts-ignore */}
                                                            <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  width={28}
                                                                  height={28}
                                                                  viewBox="0 0 24 24"
                                                                  fill="none"
                                                                  stroke="currentColor"
                                                                  strokeWidth={1}
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="lucide lucide-brain"
                                                            >
                                                                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                                                                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                                                                  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                                                                  <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                                                                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                                                                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                                                                  <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                                                                  <path d="M6 18a4 4 0 0 1-1.967-.516" />
                                                                  <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                                                            </svg>

                                                            Skills
                                                      </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                      <OtherSkills />
                                                </AccordionContent>
                                          </AccordionItem>

                                          <AccordionItem className="border" value="language">
                                                <AccordionTrigger className="font-regular text-lg  px-4 bg-gray-50">
                                                      <div className="flex items-center gap-2">
                                                            {/* @ts-ignore */}
                                                            <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  width={28}
                                                                  height={28}
                                                                  viewBox="0 0 24 24"
                                                                  fill="none"
                                                                  stroke="currentColor"
                                                                  strokeWidth={1}
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="lucide lucide-languages"
                                                            >
                                                                  <path d="m5 8 6 6" />
                                                                  <path d="m4 14 6-6 2-3" />
                                                                  <path d="M2 5h12" />
                                                                  <path d="M7 2h1" />
                                                                  <path d="m22 22-5-10-5 10" />
                                                                  <path d="M14 18h6" />
                                                            </svg>

                                                            Language Proficiency
                                                      </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                      <LanguageProficiency />
                                                </AccordionContent>
                                          </AccordionItem>

                                          <AccordionItem className="border" value="link">
                                                <AccordionTrigger className="font-regular text-lg  px-4 bg-gray-50">
                                                      <div className="flex items-center gap-2">
                                                            {/* @ts-ignore */}
                                                            <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  width={28}
                                                                  height={28}
                                                                  viewBox="0 0 24 24"
                                                                  fill="none"
                                                                  stroke="currentColor"
                                                                  strokeWidth={1}
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="lucide lucide-link"
                                                            >
                                                                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                                                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                                            </svg>


                                                            Links Account
                                                      </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                      <LinkAccounts />
                                                </AccordionContent>
                                          </AccordionItem>

                                          <AccordionItem className="border" value="references">
                                                <AccordionTrigger className="font-regular text-lg  px-4 bg-gray-50">
                                                      <div className="flex items-center gap-2">
                                                            {/* @ts-ignore */}
                                                            <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  width={28}
                                                                  height={28}
                                                                  viewBox="0 0 24 24"
                                                                  fill="none"
                                                                  stroke="currentColor"
                                                                  strokeWidth={1}
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  className="lucide lucide-user-round-check"
                                                            >
                                                                  <path d="M2 21a8 8 0 0 1 13.292-6" />
                                                                  <circle cx={10} cy={8} r={5} />
                                                                  <path d="m16 19 2 2 4-4" />
                                                            </svg>

                                                            References
                                                      </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                      <ReferenceInput />
                                                </AccordionContent>
                                          </AccordionItem>

                                    </Accordion>
                              </TabsContent>
                              <TabsContent value="accomplishment" className="m-0">
                                    <UserAssets />
                              </TabsContent>
                        </Tabs>
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-lg font-medium">References</h2>
                  <div className="rounded-md bg-gray-50 p-4">
                    <p className="text-gray-500">No references added yet.</p>
                    {isEditing && (
                      <Button variant="outline" size="sm" className="mt-2">
                        Add Reference
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="accomplishment" className="m-0">
            <div className="p-6">
              <div className="flex flex-col items-center justify-center space-y-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#001968]/10">
                  <Monitor className="h-8 w-8 text-[#001968]" />
                </div>
                <p className="max-w-lg text-gray-600">
                  Currently no data exists! Select & add your portfolio url,
                  Papers/Journal, Publications, etc to enhance your profile
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    variant="outline"
                    className="border-[#001968] text-[#001968] hover:bg-[#001968]/10"
                    onClick={() => setActiveDialog("portfolio")}
                  >
                    Portfolio
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#001968] text-[#001968] hover:bg-[#001968]/10"
                    onClick={() => setActiveDialog("publication")}
                  >
                    Publications
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#001968] text-[#001968] hover:bg-[#001968]/10"
                    onClick={() => setActiveDialog("award")}
                  >
                    Awards/Honors
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#001968] text-[#001968] hover:bg-[#001968]/10"
                    onClick={() => setActiveDialog("project")}
                  >
                    Projects
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#001968] text-[#001968] hover:bg-[#001968]/10"
                    onClick={() => setActiveDialog("other")}
                  >
                    Others
                  </Button>
                </div>
              </div>

              <AccomplishmentDialog
                type={activeDialog || "portfolio"}
                open={!!activeDialog}
                onOpenChange={(open) => !open && setActiveDialog(null)}
                onSave={handleSaveAccomplishment}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
