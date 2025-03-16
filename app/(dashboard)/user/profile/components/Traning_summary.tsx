'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectContent, SelectGroup, SelectLabel, SelectItem, SelectValue } from '@/components/ui/select';
import { GraduationCap, Plus } from 'lucide-react';
import React, { useState } from 'react';
import { EditModal } from './CommonModal';

interface TrainingSummaryType {
    name: string;
    title: string;
    country: string;
    topics: string;
    year: string;
    institution: string;
    duration: string;
    location: string;
    index?: number;
}

const TrainingSummary = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [trainings, setTrainings] = useState<TrainingSummaryType[]>([]);
    const [currentTraining, setCurrentTraining] = useState<TrainingSummaryType>({
        name: '',
        title: '',
        country: '',
        topics: '',
        year: '',
        institution: '',
        duration: '',
        location: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        title: '',
        country: '',
        topics: '',
        year: '',
        institution: '',
        duration: '',
        location: ''
    });

    const handleAddClick = () => {
        setCurrentTraining({
            name: '',
            title: '',
            country: '',
            topics: '',
            year: '',
            institution: '',
            duration: '',
            location: ''
        });
        setIsEditMode(false);
        setIsDialogOpen(true);
    };

    const handleEditClick = (training: TrainingSummaryType, index: number) => {
        setCurrentTraining({ ...training, index });
        setIsEditMode(true);
        setIsDialogOpen(true);
    };

    const handleDeleteClick = (trainingIndex: number) => {
        const updatedTrainings = [...trainings];
        updatedTrainings.splice(trainingIndex, 1);
        setTrainings(updatedTrainings);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setCurrentTraining((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: any, value: any) => {
        setCurrentTraining((prev) => ({ ...prev, [name]: value }));
    };

    const validateInputs = () => {
        const newErrors = {
            name: currentTraining.name ? '' : 'Training Name is required',
            title: currentTraining.title ? '' : 'Training Title is required',
            country: currentTraining.country ? '' : 'Country is required',
            topics: currentTraining.topics ? '' : 'Topics Covered is required',
            year: currentTraining.year ? '' : 'Year is required',
            institution: currentTraining.institution ? '' : 'Institution Name is required',
            duration: currentTraining.duration ? '' : 'Duration is required',
            location: currentTraining.location ? '' : 'Location is required'
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (validateInputs()) {
            if (isEditMode && currentTraining.index !== undefined) {
                const updatedTrainings = trainings.map((training, index) =>
                    index === currentTraining.index ? currentTraining : training
                );
                setTrainings(updatedTrainings);
            } else {
                setTrainings([...trainings, currentTraining]);
            }
            setIsDialogOpen(false);
        }

        const obj = {
            name: currentTraining.name,
            title: currentTraining.title,
            country: currentTraining.country,
            topics: currentTraining.topics,
            year: currentTraining.year,
            institution: currentTraining.institution,
            duration: currentTraining.duration,
            location: currentTraining.location
        }

        console.log("--->", obj);
    };

    return (
        <div className='mb-4 px-4 py-2 w-full space-y-6'>
            {trainings.length === 0 ? (
                <div className="text-center text-xl py-8 text-gray-500">
                    <GraduationCap size={50} strokeWidth={1} className="mx-auto text-primary" />
                    <p>No summary found.</p>

                    <Button className='px-6 mt-4' onClick={handleAddClick}><Plus /> Add</Button>
                </div>
            ) : (
                trainings.map((training, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-md p-4 border">
                        <header className="flex items-center justify-between">
                            <h1 className="text-lg font-semibold">{training.name}</h1>
                            <div className="flex items-center gap-3">
                                <Button className="text-sm !bg-primary" onClick={() => handleEditClick(training, index)}>Edit</Button>
                                <Button className="text-sm !bg-red-600" onClick={() => handleDeleteClick(index)}>Delete</Button>
                            </div>
                        </header>
                        <main className="grid grid-cols-3 gap-8 mt-3">
                            <div className="">
                                <h3 className="text-md font-semibold">Training Name</h3>
                                <p className="text-gray-500 mt-2">{training.name}</p>
                            </div>
                            <div className="">
                                <h3 className="text-md font-semibold">Training Title</h3>
                                <p className="text-gray-500 mt-2">{training.title}</p>
                            </div>
                            <div className="">
                                <h3 className="text-md font-semibold">Country</h3>
                                <p className="text-gray-500 mt-2">{training.country}</p>
                            </div>
                            <div className="">
                                <h3 className="text-md font-semibold">Topics Covered</h3>
                                <p className="text-gray-500 mt-2">{training.topics}</p>
                            </div>
                            <div className="">
                                <h3 className="text-md font-semibold">Year</h3>
                                <p className="text-gray-500 mt-2">{training.year}</p>
                            </div>
                            <div className="">
                                <h3 className="text-md font-semibold">Institution</h3>
                                <p className="text-gray-500 mt-2">{training.institution}</p>
                            </div>
                            <div className="">
                                <h3 className="text-md font-semibold">Duration</h3>
                                <p className="text-gray-500 mt-2">{training.duration}</p>
                            </div>
                            <div className="">
                                <h3 className="text-md font-semibold">Location</h3>
                                <p className="text-gray-500 mt-2">{training.location}</p>
                            </div>
                        </main>
                    </div>
                ))
            )}

            {trainings.length !== 0 && <Button className='px-6' onClick={handleAddClick}><Plus /> Add</Button>}

            <EditModal
                open={isDialogOpen}
                onOpenChange={handleDialogClose}
                title={isEditMode ? "Edit Training" : "Add Training"}
            >
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="space-y-2 flex flex-col">
                            <label className='font-semibold' htmlFor="name">Training Name</label>
                            <Input name="name" value={currentTraining.name} onChange={handleInputChange} type="text" />
                            {errors.name && <p className="text-red-500">{errors.name}</p>}
                        </div>
                        <div className="space-y-2 flex flex-col">
                            <label className='font-semibold' htmlFor="title">Training Title</label>
                            <Input name="title" value={currentTraining.title} onChange={handleInputChange} type="text" />
                            {errors.title && <p className="text-red-500">{errors.title}</p>}
                        </div>
                        <div className="space-y-2 flex flex-col">
                            <label className='font-semibold' htmlFor="country">Country</label>
                            <Input name="country" value={currentTraining.country} onChange={handleInputChange} type="text" />
                            {errors.country && <p className="text-red-500">{errors.country}</p>}
                        </div>
                        <div className="space-y-2 flex flex-col">
                            <label className='font-semibold' htmlFor="topics">Topics Covered</label>
                            <Input name="topics" value={currentTraining.topics} onChange={handleInputChange} type="text" />
                            {errors.topics && <p className="text-red-500">{errors.topics}</p>}
                        </div>
                        <div className="space-y-2 flex flex-col">
                            <label className='font-semibold' htmlFor="year">Year</label>
                            <input className='border border-gray-200 rounded-md py-[6px] px-2' name="year" value={currentTraining.year} onChange={handleInputChange} type="date" />
                            {errors.year && <p className="text-red-500">{errors.year}</p>}
                        </div>
                        <div className="space-y-2 flex flex-col">
                            <label className='font-semibold' htmlFor="institution">Institution Name</label>
                            <Input name="institution" value={currentTraining.institution} onChange={handleInputChange} type="text" />
                            {errors.institution && <p className="text-red-500">{errors.institution}</p>}
                        </div>
                        <div className="space-y-2 flex flex-col">
                            <label className='font-semibold' htmlFor="duration">Duration</label>
                            <Input name="duration" value={currentTraining.duration} onChange={handleInputChange} type="text" />
                            {errors.duration && <p className="text-red-500">{errors.duration}</p>}
                        </div>
                        <div className="space-y-2 flex flex-col">
                            <label className='font-semibold' htmlFor="location">Location</label>
                            <Input name="location" value={currentTraining.location} onChange={handleInputChange} type="text" />
                            {errors.location && <p className="text-red-500">{errors.location}</p>}
                        </div>
                    </div>
                    <div className="mt-4 flex justify-end gap-2">
                        <Button type="button" onClick={handleDialogClose} className="!bg-red-500">Cancel</Button>
                        <Button type="submit">{isEditMode ? 'Update' : 'Add'}</Button>
                    </div>
                </form>
            </EditModal>
        </div>
    );
};

export default TrainingSummary;