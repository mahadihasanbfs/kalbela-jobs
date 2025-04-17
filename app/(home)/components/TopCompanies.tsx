"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Skeleton } from "@/components/ui/skeleton"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import SecondaryBtn from "@/components/SecondaryBtn"
import useApiRequest from "@/app/hooks/useApiRequest"
import CustomTitle from "./CustomTitle"
import NotFoundVector from "@/components/NotFoundVector"

const TopCompanies: React.FC = () => {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const { data, loading, error } = useApiRequest<any>(
    "workspace/feature",
    "GET"
  )

  useEffect(() => {
    if (!api) return
  }, [api])

  const handleNextClick = () => {
    if (api) api.scrollNext()
  }

  const handlePrevClick = () => {
    if (api) api.scrollPrev()
  }

  if (loading) {
    return (
      <section className="py-6 md:py-10">
        <MaxWidthWrapper>
          <CustomTitle title="Top companies hiring now" position="start" />
          <br />
          <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 md:gap-4 gap-2">
            {
              new Array(5).fill('.').map((_, index) => (
                <Skeleton key={index} className=" w-full md:h-[200px] h-[160px]" />
              ))
            }
          </div>
        </MaxWidthWrapper>
      </section>
    )
  }

  if (error || !data) {
    return (
      <section className="py-6 md:py-10">
        <MaxWidthWrapper>
          <CustomTitle title="Top companies hiring now" position="start" />
          <br />
          <h2 className="text-xl text-center text-gray-400">No companies found</h2>
        </MaxWidthWrapper>
      </section>
    )
  }

  return (
    <section className="py-6 md:py-10">
      <MaxWidthWrapper>
        <CustomTitle title="Top companies hiring now" position="start" />
        <br />
        <Carousel
          opts={{ loop: true }}
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="flex w-full items-center justify-between"
        >
          <div className="h-6 w-6">
            <Button
              onClick={handlePrevClick}
              variant="outline"
              size="icon"
              className="h-6 w-6 rounded-full"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
          </div>

          <CarouselContent className="flex">
            {
              data?.data?.map((company: any) => (
                <CarouselItem
                  key={company._id}
                  className="min-w-48 basis-1/2 md:basis-1/4 lg:basis-1/5"
                >
                  <Link
                    href={`companies/${company.company_website}`}
                    className="flex h-full w-full flex-col items-center justify-between rounded-sm border p-2 py-4"
                  >
                    <div className="flex size-24 items-center justify-center">
                      <img
                        className="mr-1 size-full rounded-sm object-scale-down"
                        src={company.logo}
                        alt={`${company.company_name} image`}
                        loading="lazy"
                      />
                    </div>
                    <h3 className="my-2 max-w-40 truncate text-sm font-semibold">
                      {company.company_name}
                    </h3>
                    <SecondaryBtn className="mt-2">View jobs</SecondaryBtn>
                  </Link>
                </CarouselItem>
              ))
            }
          </CarouselContent>

          <div className="h-6 w-6">
            <Button
              onClick={handleNextClick}
              variant="outline"
              size="icon"
              className="h-6 w-6 rounded-full"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </Carousel>
      </MaxWidthWrapper>
    </section>
  )
}

export default TopCompanies
