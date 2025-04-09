"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { set_user_data, useUserData } from "@/utils/encript_decript"
import { Eye, EyeOff } from "lucide-react"
import { signIn } from "next-auth/react"

import PrimaryBtn from "@/components/PrimaryBtn"
import SecondaryBtn from "@/components/SecondaryBtn"
import useApiForPost from "@/app/hooks/useApiForPost"

import AuthAnimation from "../components/AuthAnimation"
import { googleLogin } from "@/app/hooks/firebse"
import Cookies from "js-cookie"
import LoginForm from "../components/LoginForm"


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
                  <div className="grid grid-cols-1 lg:grid-cols-2 mt-4">
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
                  </div>
            </section>
      )
}

export default RegistrationPage