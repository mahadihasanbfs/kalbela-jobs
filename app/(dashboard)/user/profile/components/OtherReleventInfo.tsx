import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import { Plus, Info as InfoIcon } from 'lucide-react';
import "react-quill/dist/quill.snow.css";
import CreatableSelect from 'react-select/creatable';
import { Button } from '@/components/ui/button';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface OptionType {
    label: string;
    value: string;
}

const OtherReleventInfo: React.FC = () => {
    const [keywordOptions, setKeywordOptions] = useState<OptionType[]>([]);
    const [selectedKeywords, setSelectedKeywords] = useState<OptionType[]>([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [careerSummary, setCareerSummary] = useState('');
    const [specialQualification, setSpecialQualification] = useState('');
    const [errors, setErrors] = useState({
        keywords: '',
        careerSummary: '',
        specialQualification: ''
    });

    useEffect(() => {
        if (isEditMode) {
            setCareerSummary(careerSummary);
            setSpecialQualification(specialQualification);
        }
    }, [isEditMode]);

    const validateInputs = () => {
        const newErrors = {
            keywords: selectedKeywords.length > 0 ? '' : 'At least one keyword is required',
            careerSummary: careerSummary ? '' : 'Career Summary is required',
            specialQualification: specialQualification ? '' : 'Special Qualification is required'
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    const handleSave = () => {
        if (!validateInputs()) {
            return;
        }
        setIsEditMode(false);
    };

    const handleCreateOption = (inputValue: string) => {
        const newOption = { label: inputValue, value: inputValue };
        setKeywordOptions([...keywordOptions, newOption]);
        setSelectedKeywords([...selectedKeywords, newOption]);
    };

    return (
        <div className='mb-4 px-4 py-2 w-full'>
            <div className="mt-4">
                <div className="flex items-center justify-between">
                    <h5 className='font-semibold pb-3'>Keywords</h5>

                    {!isEditMode && (
                        <>
                            {(selectedKeywords.length > 0 || careerSummary || specialQualification) && (
                                <Button className='!bg-primary px-4' onClick={() => setIsEditMode(true)}>Edit</Button>
                            )}
                        </>
                    )}
                </div>
                {isEditMode ? (
                    <div>
                        <CreatableSelect
                            isMulti
                            value={selectedKeywords}
                            // @ts-ignore
                            onChange={setSelectedKeywords}
                            options={keywordOptions}
                            onCreateOption={handleCreateOption}
                            placeholder="Enter keywords"
                            className="mb-2"
                            styles={{
                                menu: (provided) => ({ ...provided, zIndex: 500 }),
                                control: (provided, state) => ({
                                    ...provided,
                                    boxShadow: 'none',
                                    borderColor: state.isFocused ? 'inherit' : provided.borderColor,
                                    '&:hover': { borderColor: 'inherit' },
                                }),
                                multiValue: (provided) => ({
                                    ...provided,
                                    backgroundColor: '#1b2a69',
                                    color: 'white',
                                }),
                                multiValueLabel: (provided) => ({
                                    ...provided,
                                    color: 'white',
                                }),
                            }}
                        // styles={{
                        //     control: (provided, state) => ({
                        //         ...provided,
                        //         borderColor: state.isFocused ? 'red' : provided.borderColor,
                        //         '&:hover': {
                        //             borderColor: state.isFocused ? 'red' : provided.borderColor,
                        //         },
                        //     }),
                        // }}
                        />
                        {errors.keywords && <p className="text-red-500">{errors.keywords}</p>}
                    </div>
                ) : (
                    <div>
                        {selectedKeywords.length > 0 ? (
                            selectedKeywords.map((keyword, index) => (
                                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    {keyword.label}
                                </span>
                            ))
                        ) : (
                            <p>No keywords found</p>
                        )}
                    </div>
                )}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-4">
                <div>
                    <h5 className='border-b mb-2 pb-3'>Career Summary</h5>
                    {isEditMode ? (
                        <div>
                            <ReactQuill
                                value={careerSummary}
                                onChange={setCareerSummary}
                                placeholder="Career Summary..."
                            />
                            {errors.careerSummary && <p className="text-red-500">{errors.careerSummary}</p>}
                        </div>
                    ) : (
                        <div>
                            {careerSummary ? (
                                <div dangerouslySetInnerHTML={{ __html: careerSummary }} />
                            ) : (
                                <div>Career summary not found</div>
                            )}
                        </div>
                    )}
                </div>

                <div>
                    <h5 className='border-b mb-2 pb-3'>Special Qualification</h5>
                    {isEditMode ? (
                        <div>
                            <ReactQuill
                                value={specialQualification}
                                onChange={setSpecialQualification}
                                placeholder="Special Qualification..."
                            />
                            {errors.specialQualification && <p className="text-red-500">{errors.specialQualification}</p>}
                        </div>
                    ) : (
                        <div>
                            {specialQualification ? (
                                <div dangerouslySetInnerHTML={{ __html: specialQualification }} />
                            ) : (
                                <div>Special qualification not found</div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex mt-6 items-center gap-2">
                {isEditMode && (
                    <>
                        <Button className='!bg-primary px-4' onClick={handleSave}>Save</Button>
                        <Button className='!bg-red-500 px-4' onClick={() => setIsEditMode(false)}>Cancel</Button>
                    </>
                )}
            </div>

            {!isEditMode && !(selectedKeywords.length > 0 || careerSummary || specialQualification) && (
                <div className="flex flex-col items-center gap-2 text-center text-xl py-12 text-gray-500">
                    <InfoIcon size={50} strokeWidth={1} className="mx-auto text-primary" />
                    <p>No data found.</p>
                    <Button className='!bg-primary mt-8 flex m-auto px-4' onClick={() => setIsEditMode(true)}><Plus /> Add</Button>
                </div>
            )}
        </div>
    );
};

export default OtherReleventInfo;