import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const MobileDialog = DialogPrimitive.Root
const MobileMobileDialogTrigger = DialogPrimitive.Trigger
const MobileDialogPortal = DialogPrimitive.Portal
const MobileDialogClose = DialogPrimitive.Close

// Overlay: Dims the background
const DialogOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(
    ({ className, ...props }, ref) => (
        <DialogPrimitive.Overlay
            ref={ref}
            className={cn(
                "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out",
                className
            )}
            {...props}
        />
    )
)
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

// Content: Appears at the bottom of the screen
const MobileDialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(
    ({ className = "", children, ...props }, ref) => {
        // Check if className includes any width-related props
        const hasWidthProps = /(^|\s)(w-|max-w-)/.test(className)

        return (
            <MobileDialogPortal>
                <DialogOverlay />
                <DialogPrimitive.Content
                    ref={ref}
                    className={cn(
                        "fixed w-full text-start z-50 bg-white p-6 shadow-lg transition-all duration-300",
                        !hasWidthProps && "max-w-lg",
                        "sm:rounded-lg",
                        "bottom-0 z-50 left-0 rounded-t-[20px] lg:bottom-auto lg:top-0 lg:-translate-y-1/2",
                        "animate-slide-up data-[state=closed]:animate-slide-down", // Add the slide-down animation for closing
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
            </MobileDialogPortal>
        )
    }
)
MobileDialogContent.displayName = DialogPrimitive.Content.displayName

// Header
const MobileDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("text-center", className)} {...props} />
)
MobileDialogHeader.displayName = "MobileDialogHeader"

// Footer
const MobileDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex justify-start gap-4 mt-4", className)} {...props} />
)
MobileDialogFooter.displayName = "MobileDialogFooter"

// Title
const MobileDialogTitle = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(
    ({ className, ...props }, ref) => (
        <DialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
    )
)
MobileDialogTitle.displayName = DialogPrimitive.Title.displayName

// Description
const MobileDialogDescription = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Description>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>(
    ({ className, ...props }, ref) => (
        <DialogPrimitive.Description ref={ref} className={cn("text-sm text-gray-500", className)} {...props} />
    )
)
MobileDialogDescription.displayName = DialogPrimitive.Description.displayName

export {
    MobileDialog,
    MobileDialogPortal,
    DialogOverlay,
    MobileDialogClose,
    MobileMobileDialogTrigger,
    MobileDialogContent,
    MobileDialogHeader,
    MobileDialogFooter,
    MobileDialogTitle,
    MobileDialogDescription,
}
