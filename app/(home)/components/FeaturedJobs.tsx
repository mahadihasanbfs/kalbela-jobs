"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import useApiRequest from "@/app/hooks/useApiRequest"
import HotJobs from "./HotJobs"
import GovJob from "./Govt_jobs"
import Link from "next/link"

const FeaturedJobs: React.FC = () => {
      return (
            <section>
                  <div className="space-y-6 col-span-2">
                        <div className="grid md:grid-cols-4 gap-4">
                              <div className="md:col-span-3">
                                    <HotJobs />
                                    <GovJob />
                              </div>

                              <div className="flex flex-col gap-2">
                                    <Link href={'#'} className="w-full">
                                          <img
                                                src="/assets/banner3.png"
                                                alt="ad"
                                                className="rounded border"
                                          />
                                    </Link>
                                    <iframe
                                          className="w-full aspect-video rounded border"
                                          src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                                                "https://www.facebook.com/watch/?v=1142566183333827"
                                          )}&autoplay=1&mute=1&show_text=false&width=500`}
                                          width="500"
                                          style={{ border: "none", overflow: "hidden" }}
                                          scrolling="no"
                                          frameBorder="0"
                                          allow="autoplay; encrypted-media"
                                          allowFullScreen
                                    />
                                    <Link href={'#'} className="w-full">
                                          <Image src="/assets/add2.jpg" alt="ad" width={500} height={500} className="rounded border" />
                                    </Link>
                                    <Link href={'#'} className="w-full">
                                          <Image src="/assets/add1.jpg" alt="ad" width={500} height={500} className="rounded border" />
                                    </Link>
                                    <Link href={'#'} className="w-full">
                                          <img
                                                src="/add4.jpg"
                                                alt="NBS Resources"
                                                className="w-full"
                                          />
                                    </Link>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default FeaturedJobs
