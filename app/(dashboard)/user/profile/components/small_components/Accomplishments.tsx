import { useState } from "react"
import {
  ChevronLeft,
  Code,
  FileKey,
  Monitor,
  Pencil,
  Trophy,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import { AccomplishmentDialog } from "../small_components/accomplishment-dialog"

interface AccomplishmentData {
  title: string
  issuedOn: string
  url: string
  description: string
  type: "portfolio" | "publication" | "award" | "project" | "other"
}
const Accomplishments = ({
  setActiveSection,
}: {
  setActiveSection: (section: string | null) => void
}) => {
  const [activeDialog, setActiveDialog] = useState<
    "portfolio" | "publication" | "award" | "project" | "other" | null
  >(null)
  const [accomplishmentData, setAccomplishmentData] = useState<
    AccomplishmentData[]
  >([])

  const handleSaveAccomplishment = (data: AccomplishmentData) => {
    // @ts-ignore
    if (activeDialog) {
      setAccomplishmentData([
        ...accomplishmentData,
        { ...data, type: activeDialog },
      ])
    }
  }

  const portfolio = accomplishmentData.filter(
    (item) => item.type === "portfolio"
  )
  const publications = accomplishmentData.filter(
    (item) => item.type === "publication"
  )
  const awards = accomplishmentData.filter((item) => item.type === "award")
  const projects = accomplishmentData.filter((item) => item.type === "project")
  const others = accomplishmentData.filter((item) => item.type === "other")
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
        /* @ts-ignore */
        onSave={handleSaveAccomplishment}
      />

      {portfolio.length > 0 && (
        <div className="mt-6">
          <h1 className="text-md border-b pb-2 font-semibold">
            Portfolio ({portfolio.length})
          </h1>
          <ul className="mt-3 space-y-3">
            {portfolio?.map((data, index) => (
              <li
                key={index}
                className="grid-cols-6 gap-2 rounded border p-4 duration-300 hover:shadow-md md:grid"
              >
                <div className="flex !h-[100px] !w-[100px] items-center justify-center rounded bg-[#001968] text-white">
                  <Code size={50} />
                </div>
                <div className="col-span-5">
                  <div className="flex justify-between">
                    <h3 className="text-md font-semibold capitalize">
                      {data?.title}
                    </h3>

                    <p className="text-sm text-gray-500 duration-300">
                      {data?.issuedOn}
                    </p>
                  </div>

                  <a
                    target={"_blank"}
                    href={data?.url}
                    className="text-sm text-primary duration-300 hover:text-blue-500"
                  >
                    {data?.url.slice(0, 50)} {data?.url.length > 50 && "..."}
                  </a>

                  <p className="text-sm text-gray-500">
                    {data?.description.slice(0, 200)}{" "}
                    {data?.description.length > 100 && "..."}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {publications.length > 0 && (
        <div className="mt-6">
          <h1 className="text-md border-b pb-2 font-semibold">
            Publications ({publications.length})
          </h1>
          <ul className="mt-3 space-y-3">
            {publications?.map((data, index) => (
              <li
                key={index}
                className="grid-cols-6 gap-2 rounded border p-4 duration-300 hover:shadow-md md:grid"
              >
                <div className="flex !h-[100px] !w-[100px] items-center justify-center rounded bg-[#006868] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={52}
                    height={52}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-book-check"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                    <path d="m9 9.5 2 2 4-4" />
                  </svg>
                </div>
                <div className="col-span-5">
                  <div className="flex justify-between">
                    <h3 className="text-md font-semibold capitalize">
                      {data?.title}
                    </h3>

                    <p className="text-sm text-gray-500 duration-300">
                      {data?.issuedOn}
                    </p>
                  </div>

                  <a
                    target={"_blank"}
                    href={data?.url}
                    className="text-sm text-primary duration-300 hover:text-blue-500"
                  >
                    {data?.url.slice(0, 50)} {data?.url.length > 50 && "..."}
                  </a>

                  <p className="text-sm text-gray-500">
                    {data?.description.slice(0, 200)}{" "}
                    {data?.description.length > 100 && "..."}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {awards.length > 0 && (
        <div className="mt-6">
          <h1 className="text-md border-b pb-2 font-semibold">
            Awards/Honors ({awards.length})
          </h1>
          <ul className="mt-3 space-y-3">
            {awards?.map((data, index) => (
              <li
                key={index}
                className="grid-cols-6 gap-2 rounded border p-4 duration-300 hover:shadow-md md:grid"
              >
                <div className="flex !h-[100px] !w-[100px] items-center justify-center rounded bg-[#00682b] text-white">
                  <Trophy strokeWidth={1.25} size={50} />
                </div>
                <div className="col-span-5">
                  <div className="flex justify-between">
                    <h3 className="text-md font-semibold capitalize">
                      {data?.title}
                    </h3>

                    <p className="text-sm text-gray-500 duration-300">
                      {data?.issuedOn}
                    </p>
                  </div>

                  <a
                    target={"_blank"}
                    href={data?.url}
                    className="text-sm text-primary duration-300 hover:text-blue-500"
                  >
                    {data?.url.slice(0, 50)} {data?.url.length > 50 && "..."}
                  </a>

                  <p className="text-sm text-gray-500">
                    {data?.description.slice(0, 200)}{" "}
                    {data?.description.length > 100 && "..."}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {projects.length > 0 && (
        <div className="mt-6">
          <h1 className="text-md border-b pb-2 font-semibold">
            Projects ({projects.length})
          </h1>
          <ul className="mt-3 space-y-3">
            {projects?.map((data, index) => (
              <li
                key={index}
                className="grid-cols-6 gap-2 rounded border p-4 duration-300 hover:shadow-md md:grid"
              >
                <div className="flex !h-[100px] !w-[100px] items-center justify-center rounded bg-[#005068] text-white">
                  <Monitor strokeWidth={1.25} size={50} />
                </div>
                <div className="col-span-5">
                  <div className="flex justify-between">
                    <h3 className="text-md font-semibold capitalize">
                      {data?.title}
                    </h3>

                    <p className="text-sm text-gray-500 duration-300">
                      {data?.issuedOn}
                    </p>
                  </div>

                  <a
                    target={"_blank"}
                    href={data?.url}
                    className="text-sm text-primary duration-300 hover:text-blue-500"
                  >
                    {data?.url.slice(0, 50)} {data?.url.length > 50 && "..."}
                  </a>

                  <p className="text-sm text-gray-500">
                    {data?.description.slice(0, 200)}{" "}
                    {data?.description.length > 100 && "..."}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {others.length > 0 && (
        <div className="mt-6">
          <h1 className="text-md border-b pb-2 font-semibold">
            Others ({others.length})
          </h1>
          <ul className="mt-3 space-y-3">
            {others?.map((data, index) => (
              <li
                key={index}
                className="grid-cols-6 gap-2 rounded border p-4 duration-300 hover:shadow-md md:grid"
              >
                <div className="flex !h-[100px] !w-[100px] items-center justify-center rounded bg-[#ad196ff3] text-white">
                  <FileKey size={50} strokeWidth={1.25} />
                </div>
                <div className="col-span-5">
                  <div className="flex justify-between">
                    <h3 className="text-md font-semibold capitalize">
                      {data?.title}
                    </h3>

                    <p className="text-sm text-gray-500 duration-300">
                      {data?.issuedOn}
                    </p>
                  </div>

                  <a
                    target={"_blank"}
                    href={data?.url}
                    className="text-sm text-primary duration-300 hover:text-blue-500"
                  >
                    {data?.url.slice(0, 50)} {data?.url.length > 50 && "..."}
                  </a>

                  <p className="text-sm text-gray-500">
                    {data?.description.slice(0, 200)}{" "}
                    {data?.description.length > 100 && "..."}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
export default Accomplishments
