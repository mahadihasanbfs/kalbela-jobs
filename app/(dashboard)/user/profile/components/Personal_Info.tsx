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
