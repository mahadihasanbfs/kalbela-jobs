import { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

interface SecondaryBtnProps extends HTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "reset" | "button" | undefined
  children: React.ReactNode
  disabled?: boolean
}

const SecondaryBtn: React.FC<SecondaryBtnProps> = ({
  type,
  disabled,
  children,
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "whitespace-normal rounded border px-5 py-1 text-center text-sm font-medium shadow-none transition-colors duration-200 hover:shadow-xl",
        "bg-white text-[#001968] hover:bg-slate-100 dark:border-slate-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default SecondaryBtn
