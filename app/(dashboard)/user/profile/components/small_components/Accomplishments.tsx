import React, { useState } from "react"
import { format } from "date-fns"
import {
  AlertCircle,
  Award,
  BaggageClaimIcon,
  BarChart2,
  Briefcase,
  CalendarIcon,
  ChevronLeft,
  Eye,
  FileBadge2,
  Globe,
  GraduationCap,
  Grid,
  Home,
  Key,
  Laptop,
  LifeBuoy,
  Link,
  LocateIcon,
  LucideCookie,
  Pencil,
  Save,
  Star,
  Type,
  X,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

const Accomplishments = ({
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

  // Career Edite
  const [accountPlishment, setAccountPlishment] = useState({
    title: "",
    IssuedDate: "",
    urlLink: "",
    description: "",
  })

  const handleSaved = () => {
    console.log("checked", accountPlishment)
  }

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
          <h1 className="ml-4 text-xl font-medium">Accomplishments</h1>
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
        <div className="mx-auto px-2 py-4">
          {/* Certification Title */}

          <Label className="">Title *</Label>
          <Input
            id="primaryMobile"
            className={`mt-1 w-full border border-gray-300`}
            onChange={(e) =>
              setAccountPlishment((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
          />

          <Label className="-pb-5">Issued on *</Label>
          <Input
            id="functionalCate"
            type="date"
            className={`mt-1 border border-gray-300`}
            onChange={(e) =>
              setAccountPlishment((prev) => ({
                ...prev,
                IssuedDate: e.target.value,
              }))
            }
          />

          <Label htmlFor="primaryMobile" className="-pb-5">
            URL *
          </Label>
          <Input
            id="primaryMobile"
            type="url"
            className={`mt-1 w-full border border-gray-300`}
            onChange={(e) =>
              setAccountPlishment((prev) => ({
                ...prev,
                urlLink: e.target.value,
              }))
            }
          />
          <Label>Description *</Label>
          <Textarea
            onChange={(e) =>
              setAccountPlishment((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            className="mt-1"
          />

          <div className="flex gap-3 py-20">
            <Button className="w-full">Cancel</Button>
            <Button onClick={handleSaved} className="w-full !bg-blue-700">
              Save
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-4 h-screen px-2">
          {/* Shandcn ui Tabs use */}

          <div>
            <Tabs defaultValue="portfolio" className="w-full">
              <ScrollArea className="mb-10 w-full">
                <TabsList className="flex space-x-3">
                  <TabsTrigger
                    className="rounded-md px-8 transition data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                    value="portfolio"
                  >
                    Portfolio
                  </TabsTrigger>
                  <TabsTrigger
                    className="rounded-md px-8 transition data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                    value="projects"
                  >
                    Projects
                  </TabsTrigger>
                  <TabsTrigger
                    className="rounded-md px-8 transition data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                    value="publications"
                  >
                    Publications
                  </TabsTrigger>
                  <TabsTrigger
                    className="rounded-md px-8 transition data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                    value="awards"
                  >
                    Awards
                  </TabsTrigger>
                  <TabsTrigger
                    className="rounded-md px-8 transition data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                    value="others"
                  >
                    Others
                  </TabsTrigger>
                </TabsList>
                <ScrollBar className="w-0" orientation="horizontal" />
              </ScrollArea>

              <TabsContent value="portfolio">
                <Card className="gap-4 p-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                    <Laptop className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-center text-sm text-gray-500">
                      There is currently no data! To add your training Details,
                      kindly click the following button.
                    </p>

                    <Button
                      onClick={toggleEditMode}
                      className="mt-3 w-full !bg-blue-500"
                    >
                      + Add Portfolio
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="projects">
                <Card className="gap-4 p-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                    <Laptop className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-center text-sm text-gray-500">
                      There is currently no data! To add your training Details,
                      kindly click the following button.
                    </p>

                    <Button
                      onClick={toggleEditMode}
                      className="mt-3 w-full !bg-blue-500"
                    >
                      + Add Projects
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="publications">
                <Card className="gap-4 p-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                    <Laptop className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-center text-sm text-gray-500">
                      There is currently no data! To add your training Details,
                      kindly click the following button.
                    </p>

                    <Button
                      onClick={toggleEditMode}
                      className="mt-3 w-full !bg-blue-500"
                    >
                      + Add Publications
                    </Button>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="awards">
                <Card className="gap-4 p-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                    <Laptop className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-center text-sm text-gray-500">
                      There is currently no data! To add your training Details,
                      kindly click the following button.
                    </p>

                    <Button
                      onClick={toggleEditMode}
                      className="mt-3 w-full !bg-blue-500"
                    >
                      + Add Awards
                    </Button>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="others">
                <Card className="gap-4 p-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                    <Laptop className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-center text-sm text-gray-500">
                      There is currently no data! To add your training Details,
                      kindly click the following button.
                    </p>

                    <Button
                      onClick={toggleEditMode}
                      className="mt-3 w-full !bg-blue-500"
                    >
                      + Add others
                    </Button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  )
}

export default Accomplishments
