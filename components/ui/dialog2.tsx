"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog2 = DialogPrimitive.Root
const DialogTrigger2 = DialogPrimitive.Trigger
const DialogPortal2 = DialogPrimitive.Portal
const DialogClose2 = DialogPrimitive.Close

// Overlay: Dims the background
const DialogOverlay2 = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={`${cn(
            "fixed inset-0 z-50 px-2 bg-black/20 backdrop-blur-[1.5px] transition-opacity data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",
            className
        )} z-[2000]`}
        {...props}
    />
))
DialogOverlay2.displayName = DialogPrimitive.Overlay.displayName

// Content: Appears at the bottom of the screen
const DialogContent2 = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className = "", children, ...props }, ref) => {
    // Check if className includes any width-related props
    const hasWidthProps = /(^|\s)(w-|max-w-)/.test(className)

    return (
        <DialogPortal2>
            <DialogOverlay2 />
            <DialogPrimitive.Content
                ref={ref}
                className={cn(
                    "fixed w-full text-start z-50 bg-white p-6 shadow-lg transition-all duration-300 ",
                    !hasWidthProps && "max-w-lg", // Apply max-w-lg if no width-related props are provided
                    "sm:rounded-lg", // Rounded corners on larger screens
                    "z-[21000] left-1/2 -translate-x-1/2 md:rounded-[10px] rounded-[8px] top-[100px] lg:top-[200px] translate-y-[0px]", // Bottom for mobile, centered for larger screens
                    className
                )}
                {...props}
            >
                {children}

                {/* Close Button */}
                <DialogPrimitive.Close className="absolute right-4 top-4 rounded-full bg-gray-200 p-1 hover:bg-gray-300 transition">
                    <X className="h-5 w-5 text-gray-600" />
                </DialogPrimitive.Close>
            </DialogPrimitive.Content>
        </DialogPortal2>
    )
})
DialogContent2.displayName = DialogPrimitive.Content.displayName

// Header
const DialogHeader2 = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("text-center", className)} {...props} />
)
DialogHeader2.displayName = "DialogHeader"

// Footer
const DialogFooter2 = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex justify-start gap-4 mt-4", className)} {...props} />
)
DialogFooter2.displayName = "DialogFooter"

// Title
const DialogTitle2 = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
))
DialogTitle2.displayName = DialogPrimitive.Title.displayName

// Description
const DialogDescription2 = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description ref={ref} className={cn("text-sm text-gray-500", className)} {...props} />
))
DialogDescription2.displayName = DialogPrimitive.Description.displayName

export {
    Dialog2,
    DialogPortal2,
    DialogOverlay2,
    DialogClose2,
    DialogTrigger2,
    DialogContent2,
    DialogHeader2,
    DialogFooter2,
    DialogTitle2,
    DialogDescription2,
}
