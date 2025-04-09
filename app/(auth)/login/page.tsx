"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { set_user_data, useUserData } from "@/utils/encript_decript"
import { Eye, EyeOff } from "lucide-react"
import { signIn } from "next-auth/react"
import { FileEdit, FileText, Upload, Coffee } from "lucide-react"

import PrimaryBtn from "@/components/PrimaryBtn"
import SecondaryBtn from "@/components/SecondaryBtn"
import useApiForPost from "@/app/hooks/useApiForPost"

import AuthAnimation from "../components/AuthAnimation"
import { googleLogin } from "@/app/hooks/firebse"
import Cookies from "js-cookie"
import LoginForm from "../components/LoginForm"
import SupportSection from "../components/SupportSection"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"


const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

interface FormData {
  email: string
  password: string
}
const RegistrationPage = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false)
  const router = useRouter() // Next.js Router
  const [error_message, set_error_message] = useState("")
  const [loading, setLoading] = useState(false)
  const [user, setUserData] = useUserData()

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const { apiRequest } = useApiForPost()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await apiRequest<any>(
      "api/v1/auth/signin-user",
      "POST",
      formData
    )

    setLoading(false)
    if (error) {
      set_error_message(error.message)
      return
    }
    if (data) {
      set_user_data(data.data)
      set_error_message("")

      router.push("/user")
    }
  }

  // const handleLogin = async () => {
  //       await googleLogin();
  //       const get_user = user
  //       console.log("get_user::::::::::::", get_user);
  //       if (get_user) {
  //             router.push('/user');
  //       }
  // };


  const handleLogin = async () => {
    await googleLogin();

    setTimeout(() => {
      const get_user = Cookies.get("kalbelajobs_user");
      console.log("get_user::::::::::::", get_user);
      if (get_user) {
        router.push('/user');
      }
    }, 500);
  };

  useEffect(() => {
    if (user) {
      router.push('/user');
    }
  }, [user]);


  return (
    <section>
      <MaxWidthWrapper className="grid grid-cols-1 lg:grid-cols-2 mt-4">
        <AuthAnimation />
        <LoginForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          error_message={error_message}
          loading={loading}
          set_error_message={set_error_message}
          isPasswordVisible={isPasswordVisible}
          setPasswordVisible={setPasswordVisible}
          handleLogin={handleLogin}

        />
      </MaxWidthWrapper>
      <div className="flex flex-col items-center justify-center bg-white dark:bg-black dark:text-gray-100 text-gray-800 h-full w-full pt-10">
        <div className="w-full max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100 ">Easiest Way To Apply</h2>

          {/* Red line with dots */}
          <div className="relative flex justify-center mb-12">
            <div className="w-full max-w-3xl h-px bg-red-500 relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center justify-center bg-white px-4">
                  <div className="w-2 h-2 rounded-full bg-red-500 mx-0.5"></div>
                  <div className="w-2 h-2 rounded-full bg-red-500 mx-0.5"></div>
                  <div className="w-2 h-2 rounded-full bg-red-500 mx-0.5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Four steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* First Step */}
            <div className="flex flex-col items-center">
              <div className="text-center mb-2">First Step</div>
              <div className="border border-gray-300 rounded-md p-8 mb-4 w-full flex justify-center">
                <img src="/icons/step-1.png" alt="" />
              </div>
              <div className="text-center font-medium">Signup with Kalbelajobs.com</div>
            </div>

            {/* Second Step */}
            <div className="flex flex-col items-center">
              <div className="text-center mb-2">Second Step</div>
              <div className="border border-gray-300 rounded-md p-8 mb-4 w-full flex justify-center">
                <img src="/icons/step-2.png" alt="" />
              </div>
              <div className="text-center font-medium">Create your profile</div>
            </div>

            {/* Third Step */}
            <div className="flex flex-col items-center">
              <div className="text-center mb-2">Third Step</div>
              <div className="border border-gray-300 rounded-md p-8 mb-4 w-full flex justify-center">
                <img src="/icons/step-3.png" alt="" />
              </div>
              <div className="text-center font-medium">Upload your resume</div>
            </div>

            {/* Now it's our turn */}
            <div className="flex flex-col items-center">
              <div className="text-center mb-2">Now it's our turn</div>
              <div className="border border-gray-300 rounded-md p-8 mb-4 w-full flex justify-center">
                <img src="/icons/step-4.png" alt="" />
              </div>
              <div className="text-center font-medium">Now relax :)</div>
            </div>
          </div>
        </div>

        <SupportSection />
      </div>
    </section>
  )
}

export default RegistrationPage
