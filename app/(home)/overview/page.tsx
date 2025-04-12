import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import QuickLinks from "../components/QuickLinks"
import { overviewSections } from "@/public/data/overview-data"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Page } from "react-pdf"
import PageBanner from "@/components/PageBanner"

export default function OverviewPage() {
  return (
    <main>
      <PageBanner image='/about_us.jpg' title='Overview' description='We Are Here to Help You' />
      <MaxWidthWrapper className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl py-8 md:py-12">
        {/* Main Content Section */}
        <div className="col-span-1 md:col-span-2">
          <Card className="rounded-sm">
            <CardHeader className="text-center border-b pb-6">
              <CardTitle className="text-2xl font-bold">Overview</CardTitle>
              <div className="flex justify-center mt-2">
                <div className="w-24 h-1 bg-red-500 relative">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-12 h-3">
                    <div className="flex justify-between">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-8">
                {overviewSections.map((section, index) => (
                  <div key={index} className="space-y-4">
                    {section.title && <h2 className="text-xl font-bold text-gray-800">{section.title}</h2>}
                    <div className="space-y-4">
                      {section.paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Links Sidebar */}
        <QuickLinks />
      </MaxWidthWrapper>
    </main>
  )
}
