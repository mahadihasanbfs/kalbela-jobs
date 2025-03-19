'use client';
import { Button } from '@/components/ui/button';
import { DateInput, Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useUserData } from '@/utils/encript_decript';
import { Pencil, Save, X } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import UploadProfile from './UploadProfile';
import { z } from "zod"
import "react-phone-input-2/lib/style.css"
import PhoneInput from "react-phone-input-2"
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useApiRequest from '@/app/hooks/useApiRequest';

interface PersonalDetailsContentProps {
    isEditing: boolean;
    toggleEditMode: () => void;
    handleSave: (userData: any) => void;
}

const PersonalDetailsContent: React.FC<PersonalDetailsContentProps> = ({
    isEditing,
    toggleEditMode,
    handleSave,
}) => {
    const [user] = useUserData();
    const [file, setFile] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        fullName: user?.fullName || '',
        fatherName: user?.fatherName || '',
        motherName: user?.motherName || '',
        dateOfBirth: user?.date_of_birth || '',
        gender: user?.gender,
        email: user?.email,
        religion: user?.religion || 'Muslim',
        nationality: user?.nationality,
        nId: user?.nId,
        passportNumber: user?.passportNumber || '',
        passportIssueDate: '2018-05-15',
        primaryMobile: user?.primaryMobile || '',
        secondaryMobile: user?.secondaryMobile || '',
        alternateEmail: user?.alternateEmail || '',
        height: user?.height || '',
        weight: user?.weight || '',
        profile_picture: user?.profile_picture || '',
    });

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(z.object({
            primaryMobile: z.string().min(10, { message: "Primary mobile number must be at least 10 digits" }),
            secondaryMobile: z.string().optional(),
        })),
        defaultValues: {
            primaryMobile: formData.primaryMobile,
            secondaryMobile: formData.secondaryMobile,
        }
    });

    useEffect(() => {
        setFormData({
            fullName: user?.fullName || '',
            fatherName: user?.fatherName || '',
            motherName: user?.motherName || '',
            dateOfBirth: user?.date_of_birth || '',
            gender: user?.gender,
            email: user?.email,
            religion: user?.religion || 'Muslim',
            nationality: user?.nationality,
            nId: user?.nId,
            passportNumber: user?.passportNumber || '',
            passportIssueDate: user?.passportIssueDate,
            primaryMobile: user?.primaryMobile || '',
            secondaryMobile: user?.secondaryMobile || '',
            alternateEmail: user?.alternateEmail || '',
            height: user?.height || '',
            weight: user?.weight || '',
            profile_picture: user?.profile_picture || '',
        })
    }, [user])

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFile(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        accept: {
            'image/*': []
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const saveData = async (data: any) => {
        const finalData = { ...formData, ...data }
        console.log('Updated data:', finalData);
        // handleSave(finalData);

        setLoading(true)
        const res = await fetch(`${process.env.NEXT_APP_BASE_URL}/api/v2/user/update-profile?id=${user?._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                alternateEmail: finalData?.alternateEmail,
                dateOfBirth: finalData?.dateOfBirth,
                email: finalData?.email,
                fatherName: finalData?.fatherName,
                fullName: finalData?.fullName,
                gender: finalData?.gender,
                height: finalData?.height,
                motherName: finalData?.motherName,
                nId: finalData?.email,
                nationality: finalData?.nationality,
                passportIssueDate: finalData?.passportIssueDate,
                passportNumber: finalData?.passportNumber,
                primaryMobile: finalData?.primaryMobile,
                religion: finalData?.religion,
                secondaryMobile: finalData?.secondaryMobile,
                weight: finalData?.weight,


            }),
        });

        const responseData = await res.json();

        if (res.ok) {
            alert(responseData.message)
            setLoading(false)
            handleSave(finalData);
        }


        // const { data: updatedData, error } = await useApiRequest<any>(
        //     `api/v1/user/update-profile?id=${user?._id}`,
        //     "PUT",
        // {
        //     alternateEmail: finalData?.alternateEmail,
        //     dateOfBirth: finalData?.dateOfBirth,
        //     email: finalData?.email,
        //     fatherName: finalData?.fatherName,
        //     fullName: finalData?.fullName,
        //     gender: finalData?.gender,
        //     height: finalData?.height,
        //     motherName: finalData?.motherName,
        //     nId: finalData?.email,
        //     nationality: finalData?.nationality,
        //     passportIssueDate: finalData?.passportIssueDate,
        //     passportNumber: finalData?.passportNumber,
        //     primaryMobile: finalData?.primaryMobile,
        //     religion: finalData?.religion,
        //     secondaryMobile: finalData?.secondaryMobile,
        //     weight: finalData?.weight,
        //     // height: finalData?.height


        // }
        // )

        // setLoading(false)
        // if (error) {
        //     //@ts-ignore
        //     set_error_message(error.message)
        //     return
        // }
        // if (updatedData) {
        //     console.log('update user data : ', updatedData);
        //     // @ts-ignore
        //     // set_user_data(data.data)
        //     // setUserData(data.data)
        //     set_error_message("")
        //     // setEditNameOpen(false)
        // }


    };

    const religionOptions = ['Muslim', 'Christian', 'Hindu', 'Sikh', 'Buddhist', 'Other'];

    const [loading, setLoading] = useState(false);
    const [error_message, set_error_message] = useState(null);


    return (
        <div>
            <div className="py-4">
                <div className="px-4 py-2 w-full">
                    <div className="flex justify-between">
                        <UploadProfile
                            file={file}
                            profile_picture={file ? URL.createObjectURL(file) : formData.profile_picture}
                            isDragActive={isDragActive} getRootProps={getRootProps}
                            getInputProps={getInputProps}
                            isEditing={isEditing} />

                        {!isEditing && <Button className='mb-4 ml-auto !bg-primary !text-white' variant="outline" size="lg" onClick={toggleEditMode}>
                            <Pencil className="h-4 w-4 " />
                            Edit
                        </Button>}
                    </div>

                    <form onSubmit={handleSubmit(saveData)}>
                        <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input
                                id="fullName"
                                placeholder="First Name"
                                readOnly={!isEditing}
                                className={!isEditing ? "bg-gray-50 !border-gray-50" : "!border-gray-900"}
                                value={formData?.fullName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="grid mt-4 grid-cols-2 gap-x-8 gap-y-4 w-full">
                            <div className="space-y-2">
                                <Label htmlFor="fatherName">Father's Name</Label>
                                <Input
                                    id="fatherName"
                                    placeholder="Father's Name"
                                    readOnly={!isEditing}
                                    className={!isEditing ? "bg-gray-50 !border-gray-50" : "!border-gray-900"}
                                    value={formData.fatherName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="motherName">Mother's Name</Label>
                                <Input
                                    id="motherName"
                                    placeholder="Mother's Name"
                                    readOnly={!isEditing}
                                    className={!isEditing ? "bg-gray-50 !border-gray-50" : "!border-gray-900"}
                                    value={formData.motherName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                                <DateInput
                                    id="dateOfBirth"
                                    type="date"
                                    readOnly={!isEditing}
                                    className={!isEditing ? "bg-gray-50 !border-gray-50" : "!border-gray-900"}
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="gender">Gender</Label>
                                <Select disabled={!isEditing} defaultValue={formData.gender}>
                                    <SelectTrigger id="gender" className={!isEditing ? "bg-gray-100 !border-gray-50" : "!border-gray-900"}>
                                        <SelectValue placeholder="Gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="religion">Religion</Label>
                                <Select
                                    defaultValue={formData?.religion}
                                    disabled={!isEditing}>
                                    <SelectTrigger id="religion" className={!isEditing ? "bg-gray-100 !border-gray-50" : "!border-gray-900"}>
                                        <SelectValue placeholder="Religion" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            religionOptions?.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)
                                        }
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="nationality">Nationality</Label>
                                <Input
                                    id="nationality"
                                    placeholder="Nationality"
                                    readOnly={!isEditing}
                                    className={!isEditing ? "bg-gray-50 !border-gray-50" : "!border-gray-900"}
                                    value={formData.nationality}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="nationality">National Id</Label>
                                <Input
                                    id="nId"
                                    placeholder="National Id"
                                    readOnly={!isEditing}
                                    className={!isEditing ? "bg-gray-50 !border-gray-50" : "!border-gray-900"}
                                    value={formData.nId}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="passportNumber">Passport Number</Label>
                                <DateInput
                                    id="passportNumber"
                                    placeholder="Passport Number"
                                    readOnly={!isEditing}
                                    className={!isEditing ? "bg-gray-50 !border-gray-50" : "!border-gray-900"}
                                    value={formData.passportNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="passportIssueDate">Passport Issue Date</Label>
                                <Input
                                    id="passportIssueDate"
                                    type="date"
                                    readOnly={!isEditing}
                                    className={!isEditing ? "bg-gray-50 !border-gray-50" : "!border-gray-900"}
                                    value={formData.passportIssueDate}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="primaryMobile">Primary Mobile</Label>
                                <Controller
                                    name="primaryMobile"
                                    control={control}
                                    render={({ field }) => (
                                        <PhoneInput
                                            country="bd"
                                            value={field.value}
                                            onChange={(phone) => field.onChange(phone)}
                                            inputProps={{
                                                id: "primaryMobile",
                                                className: `w-full p-2 pl-14 border focus:!outline-none !bg-gray-50 focus:ring-0 focus:outline-none focus:border-transparent ${isEditing ? 'border-transparent' : 'border-transparent'} rounded-md`,
                                            }}
                                            containerClass={`w-full focus:!shadow-none focus:!outline-none focus:!ring-0 focus:!ring-offset-0 focus:!border-none ${!isEditing ? 'border border-gray-50 rounded-md bg-gray-50 overflow-hidden' : 'border rounded-md bg-gray-50  border-gray-800 rounded-md'}`}
                                            buttonClass={`rounded-l-md ${isEditing ? '' : ''}`}
                                            disabled={!isEditing}
                                        />
                                    )}
                                />
                                {errors.primaryMobile && (
                                    <p className="text-sm text-destructive">
                                        {/* @ts-ignore */}
                                        {errors.primaryMobile.message}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="secondaryMobile">Secondary Mobile</Label>
                                <Controller
                                    name="secondaryMobile"
                                    control={control}
                                    render={({ field }) => (
                                        <PhoneInput
                                            country="bd"
                                            value={field.value}
                                            onChange={(phone) => field.onChange(phone)}
                                            inputProps={{
                                                id: "primaryMobile",
                                                className: `w-full bg-gray-50 p-2 pl-14 border focus:!outline-none focus:ring-0 focus:outline-none focus:border-transparent ${isEditing ? 'border-transparent' : 'border-transparent'} rounded-md`,
                                            }}
                                            containerClass={`w-full focus:!shadow-none focus:!outline-none focus:!ring-0 focus:!ring-offset-0 focus:!border-none ${!isEditing ? 'border border-gray-50 rounded-md bg-gray-50 overflow-hidden' : 'border rounded-md bg-gray-50  border-gray-800 rounded-md'}`}
                                            buttonClass={`rounded-l-md ${isEditing ? '' : ''}`}
                                            disabled={!isEditing}
                                        />
                                    )}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="alternateEmail">Alternate Email</Label>
                                <Input
                                    id="alternateEmail"
                                    type="email"
                                    placeholder="Alternate Email"
                                    readOnly={!isEditing}
                                    className={!isEditing ? "bg-gray-50 !border-gray-50" : "!border-gray-900"}
                                    value={formData.alternateEmail}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <div className="flex items-center space-x-2">
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData?.email}
                                        readOnly={true}
                                        className={!isEditing ? "bg-gray-50 !border-gray-50" : "!border-gray-900"}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="height">Height (cm)</Label>
                                <Input
                                    id="height"
                                    type="number"
                                    placeholder="Height"
                                    readOnly={!isEditing}
                                    className={!isEditing ? "bg-gray-50 !border-gray-50" : "!border-gray-900"}
                                    value={formData.height}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="weight">Weight (kg)</Label>
                                <Input
                                    id="weight"
                                    type="number"
                                    placeholder="Weight"
                                    readOnly={!isEditing}
                                    className={!isEditing ? "bg-gray-50 !border-gray-50" : "!border-gray-900"}
                                    value={formData.weight}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            {isEditing &&
                                <div className="flex items-center space-x-2">
                                    <Button className='!bg-primary !text-white' variant="outline" size="lg" type="submit">
                                        <Save className="h-4 w-4 mr-2" />
                                        Save
                                    </Button>
                                    <Button className='!bg-red-500 !text-white' variant="outline" size="lg" onClick={toggleEditMode}>
                                        <X className="h-4 w-4 mr-2" />
                                        Cancel
                                    </Button>
                                </div>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetailsContent;