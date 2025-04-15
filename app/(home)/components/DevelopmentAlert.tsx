'use client';

import {
    Dialog2,
    DialogContent2,
} from '@/components/ui/dialog2';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DEVELOPMENT_ALERT_KEY = 'developmentAlertShown';

const DevelopmentAlert = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if the alert has already been shown in this session
        if (!sessionStorage.getItem(DEVELOPMENT_ALERT_KEY)) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem(DEVELOPMENT_ALERT_KEY, 'true');
            }, 3000);

            return () => clearTimeout(timer); // Clean up the timeout
        }
    }, []);

    useEffect(() => {
        if (isOpen && sessionStorage.getItem(DEVELOPMENT_ALERT_KEY)) {
            const timer = setTimeout(() => {
                setIsOpen(false);
            }, 5000); // Adjust the delay before closing if needed
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <Dialog2 open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent2 className="sm:max-w-[800px] w-[95%] bg-white p-6 rounded-xl shadow-xl border">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                                type: 'spring',
                                stiffness: 180,
                                damping: 18,
                            }}
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <img alt="construction" src="/constaction3.png" />
                                </div>

                                <div className="h-full flex flex-col justify-center">
                                    <h1 className="md:text-4xl text-xl font-bold capitalize md:text-start text-center">
                                        under construction
                                    </h1>
                                    <h1 className="md:text-lg mt-2 md:text-start text-center">Will be back soon!</h1>
                                    <p className="mt-3 text-gray-500 md:text-start text-center">
                                        This site is currently under development. We appreciate your patience.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </DialogContent2>
        </Dialog2>
    );
};

export default DevelopmentAlert;