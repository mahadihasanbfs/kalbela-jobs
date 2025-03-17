'use client';

import { Button } from '@/components/ui/button';
import { DateInput, Input } from '@/components/ui/input';
import { GraduationCap, Plus } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { EditModal } from './CommonModal';

interface CertificationSummaryType {
    certification: string;
    institute: string;
    location: string;
    from: string;
    to: string;
}

const CertificationSummary = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [certifications, setCertifications] = useState<CertificationSummaryType[]>([]);
    const currentCertificationRef = useRef<CertificationSummaryType>({
        certification: '',
        institute: '',
        location: '',
        from: '',
        to: ''
    });
    const [errors, setErrors] = useState({
        certification: '',
        institute: '',
        location: '',
        from: '',
        to: ''
    });

    const handleAddClick = () => {
        currentCertificationRef.current = {
            certification: '',
            institute: '',
            location: '',
            from: '',
            to: ''
        };
        setIsEditMode(false);
        setIsDialogOpen(true);
    };

    const handleEditClick = (certification: CertificationSummaryType, index: number) => {
        currentCertificationRef.current = { ...certification, index } as CertificationSummaryType & { index: number };
        setIsEditMode(true);
        setIsDialogOpen(true);
    };

    const handleDeleteClick = (certificationIndex: number) => {
        const updatedCertifications = [...certifications];
        updatedCertifications.splice(certificationIndex, 1);
        setCertifications(updatedCertifications);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        currentCertificationRef.current = { ...currentCertificationRef.current, [name]: value };
    };

    const validateInputs = () => {
        const newErrors = {
            certification: currentCertificationRef.current.certification ? '' : 'Certification is required',
            institute: currentCertificationRef.current.institute ? '' : 'Institute is required',
            location: currentCertificationRef.current.location ? '' : 'Location is required',
            from: currentCertificationRef.current.from ? '' : 'From date is required',
            to: currentCertificationRef.current.to ? '' : 'To date is required'
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateInputs()) {
            if (isEditMode && (currentCertificationRef.current as any).index !== undefined) {
                const updatedCertifications = certifications.map((cert, index) =>
                    index === (currentCertificationRef.current as any).index ? currentCertificationRef.current : cert
                );
                setCertifications(updatedCertifications);
            } else {
                setCertifications([...certifications, currentCertificationRef.current]);
            }
            setIsDialogOpen(false);
        }

        const obj = {
            certification: currentCertificationRef.current.certification,
            institute: currentCertificationRef.current.institute,
            location: currentCertificationRef.current.location,
            from: currentCertificationRef.current.from,
            to: currentCertificationRef.current.to
        }

        console.log("cirtification : ", obj);
    };

    return (
        <div className='mb-4 px-4 py-2 w-full space-y-6'>
            {certifications.length === 0 ? (
                <div className="text-center text-xl py-8 text-gray-500">
                    <GraduationCap size={50} strokeWidth={1} className="mx-auto text-primary" />
                    <p>No certifications found.</p>
                    <br />
                    <Button className='px-6' onClick={handleAddClick}><Plus size={16} /> Add Certification</Button>
                </div>
            ) : (
                certifications.map((certification, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-md p-4 border">
                        <header className="flex items-center justify-between">
                            <h1 className="text-lg font-semibold">{certification.certification}</h1>
                            <div className="flex items-center gap-3">
                                <Button className="text-sm !bg-primary" onClick={() => handleEditClick(certification, index)}>Edit</Button>
                                <Button className="text-sm !bg-red-600" onClick={() => handleDeleteClick(index)}>Delete</Button>
                            </div>
                        </header>
                        <main className="grid grid-cols-3 gap-8 mt-3">
                            <div className="">
                                <h3 className="text-md font-semibold">Certification</h3>
                                <p className="text-gray-500 mt-2">{certification.certification}</p>
                            </div>
                            <div className="">
                                <h3 className="text-md font-semibold">Institute</h3>
                                <p className="text-gray-500 mt-2">{certification.institute}</p>
                            </div>
                            <div className="">
                                <h3 className="text-md font-semibold">Location</h3>
                                <p className="text-gray-500 mt-2">{certification.location}</p>
                            </div>
                            <div className="">
                                <h3 className="text-md font-semibold">Duration</h3>
                                <p className="text-gray-500 mt-2">{certification.from} to {certification.to}</p>
                            </div>
                        </main>
                    </div>
                ))
            )}

            {certifications.length !== 0 && <Button className='px-6' onClick={handleAddClick}><Plus size={16} /> Add Certification</Button>}

            <EditModal
                open={isDialogOpen}
                onOpenChange={handleDialogClose}
                title={isEditMode ? "Edit Certification" : "Add Certification"}
            >
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="space-y-2 flex flex-col">
                            <label className='font-semibold' htmlFor="certification">Certification</label>
                            <Input name="certification" defaultValue={currentCertificationRef.current.certification} onChange={handleInputChange} type="text" />
                            {errors.certification && <p className="text-red-500">{errors.certification}</p>}
                        </div>
                        <div className="space-y-2 flex flex-col">
                            <label className='font-semibold' htmlFor="institute">Institute</label>
                            <Input name="institute" defaultValue={currentCertificationRef.current.institute} onChange={handleInputChange} type="text" />
                            {errors.institute && <p className="text-red-500">{errors.institute}</p>}
                        </div>
                        <div className="space-y-2 flex flex-col">
                            <label className='font-semibold' htmlFor="location">Location</label>
                            <Input name="location" defaultValue={currentCertificationRef.current.location} onChange={handleInputChange} type="text" />
                            {errors.location && <p className="text-red-500">{errors.location}</p>}
                        </div>
                        <div className="space-y-2 flex flex-col">
                            <label className='font-semibold' htmlFor="from">From</label>
                            <DateInput
                                name="fromDate"
                                defaultValue={currentCertificationRef.current.from}
                                onChange={(e) => currentCertificationRef.current.from = e.target.value}
                                type="date"
                            />
                            {errors.from && <p className="text-red-500">{errors.from}</p>}
                        </div>
                        <div className="space-y-2 flex flex-col">
                            <label className='font-semibold' htmlFor="to">To</label>
                            <DateInput
                                className=' date-input'
                                name="toDate"
                                defaultValue={currentCertificationRef.current.to}
                                onChange={(e) => currentCertificationRef.current.to = e.target.value}
                                type="date"
                            />
                            {errors.to && <p className="text-red-500">{errors.to}</p>}
                        </div>
                    </div>

                    <div className="mt-4 flex justify-end gap-2">
                        <Button type='button' onClick={handleDialogClose} className="!bg-red-500">Cancel</Button>

                        <Button type='submit'>{isEditMode ? 'Update' : 'Add'}</Button>
                    </div>
                </form>
            </EditModal>
        </div>
    );
};

export default CertificationSummary;