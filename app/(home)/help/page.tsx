import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { faqData } from "@/public/data/faq-data"
import QuickLinks from "../components/QuickLinks"
import PageBanner from "@/components/PageBanner"

export default function HelpPage() {
  return (
    <div>
      <PageBanner image='/contact_us_bg.jpg' title='Help & Support' description='We Are Here to Help You' />
      <MaxWidthWrapper className="py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main FAQ Section */}
          <div className="col-span-1 md:col-span-2">
            <Card>
              <CardHeader className="text-center border-b pb-6">
                <CardTitle className="text-2xl font-bold">FAQ/Help</CardTitle>
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
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((faq, index) => (
                    <AccordionItem key={`item-${index + 1}`} value={`item-${index + 1}`}>
                      <AccordionTrigger className="text-left font-normal">{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-4 border-l-2 border-gray-200">
                          <p className="font-semibold mb-2">Answer:</p>
                          {typeof faq.answer === "string" ? (
                            <p>{faq.answer}</p>
                          ) : (
                            <div>
                              {faq.answer.intro && <p>{faq.answer.intro}</p>}
                              {faq.answer.list && (
                                <ol
                                  className={`${faq.answer.listType === "bullet" ? "list-disc" : "list-decimal"} pl-5 space-y-1 mt-2`}
                                >
                                  {faq.answer.list.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ol>
                              )}
                              {faq.answer.conclusion && <p className="mt-2">{faq.answer.conclusion}</p>}
                            </div>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Quick Links Sidebar */}
          <QuickLinks />
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
