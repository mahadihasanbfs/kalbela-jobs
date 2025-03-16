import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pencil, Plus, Save, X } from 'lucide-react';
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface CareerObjectiveProps {
      isEditing: boolean
}

const CareerObjective: React.FC<CareerObjectiveProps> = ({ isEditing }) => {
      const [editing, setEditing] = useState(isEditing);
      const [careerObjective, setCareerObjective] = useState({
            postalCode: '',
            presentSalary: '',
            expectedSalary: '',
            jobLevel: 'entry',  // Set default to the first item
            jobNature: 'fullTime'  // Set default to the first item
      });
      const [errors, setErrors] = useState({
            postalCode: '',
            presentSalary: '',
            expectedSalary: ''
      });

      useEffect(() => {
            console.log('Career Objective Data:', careerObjective);
      }, [careerObjective]);

      const handleSave = () => {
            if (validateInputs()) {
                  // Save data logic here
                  setEditing(false);
                  console.log('Saved Data:', careerObjective);
            }
      };

      const handleChange = (field: string, value: any) => {
            setCareerObjective(prev => ({ ...prev, [field]: value }));
      };

      const validateInputs = () => {
            const newErrors = {
                  postalCode: careerObjective.postalCode ? '' : 'Postal Code is required',
                  presentSalary: careerObjective.presentSalary ? '' : 'Present Salary is required',
                  expectedSalary: careerObjective.expectedSalary ? '' : 'Expected Salary is required'
            };
            setErrors(newErrors);
            return !Object.values(newErrors).some(error => error);
      };

      const isDataEmpty = () => {
            return !careerObjective.postalCode && !careerObjective.presentSalary && !careerObjective.expectedSalary;
      };

      return (
            <div className="mb-4 px-4 py-2 w-full">
                  <div className="mt-3">
                        <div className='space-y-2'>
                              <div className="flex items-end pb-2 justify-between">
                                    <h1 className=''>Career Objective</h1>

                                    {!editing && (
                                          <div>
                                                {!isDataEmpty() ? <Button className="!bg-primary !text-white" onClick={() => setEditing(true)} variant="outline">
                                                      <Pencil className="mr-2 h-4 w-4" />
                                                      Edit
                                                </Button> : ''}

                                          </div>
                                    )}
                              </div>
                              <div className="mt-4">
                                    {editing ? (
                                          <div>
                                                <ReactQuill
                                                      value={careerObjective.postalCode}
                                                      onChange={(value: string) => handleChange('postalCode', value)}
                                                      placeholder="Postal Code..."
                                                />
                                                {errors.postalCode && <p className="text-red-500">{errors.postalCode}</p>}
                                          </div>
                                    ) : (
                                          <div className="">
                                                {!careerObjective?.postalCode &&
                                                      careerObjective?.postalCode === ''
                                                      ? (
                                                            <div className='text-center border py-12 rounded'>
                                                                  <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={66}
                                                                        height={66}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth={1}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        className="m-auto lucide lucide-user-round-check"
                                                                  >
                                                                        <path d="M2 21a8 8 0 0 1 13.292-6" />
                                                                        <circle cx={10} cy={8} r={5} />
                                                                        <path d="m16 19 2 2 4-4" />
                                                                  </svg>

                                                                  <h1 className="text-lg mt-2 font-semibold">No data found 😥</h1>

                                                                  <p className="text-gray-400">
                                                                        Sorry you don't have any career objective data. Please add career objective data.
                                                                  </p>
                                                                  {isDataEmpty() && (
                                                                        <Button className="!bg-primary mt-6 !text-white" onClick={() => setEditing(true)} variant="outline">
                                                                              <Plus className="  h-4 w-4" />
                                                                              Add
                                                                        </Button>
                                                                  )}
                                                            </div>

                                                      )
                                                      : <div dangerouslySetInnerHTML={{ __html: careerObjective.postalCode }} />
                                                }
                                          </div>
                                    )}
                              </div>
                        </div>
                        <div className={`${editing ? 'mt-6' : 'mt-6'} grid grid-cols-2 gap-4 `}>
                              <div className="space-y-2">
                                    <Label>Present Salary <i className='!text-xs text-gray-500'>(TK per month)</i> </Label>
                                    {editing ? (
                                          <div>
                                                <Input
                                                      placeholder='10,0000'
                                                      className='py-1'
                                                      type={"number"}
                                                      value={careerObjective?.presentSalary}
                                                      onChange={(e) => handleChange('presentSalary', e.target.value)}
                                                />
                                                {errors.presentSalary && <p className="text-red-500">{errors.presentSalary}</p>}
                                          </div>
                                    ) : (
                                          <p>{careerObjective.presentSalary ? `${careerObjective.presentSalary} ৳` : 'N/A'}</p>
                                    )}
                              </div>
                              <div className="space-y-2">
                                    <Label>Expected Salary <i className='!text-xs text-gray-500'>(TK per month)</i> </Label>
                                    {editing ? (
                                          <div>
                                                <Input
                                                      placeholder='20,0000'
                                                      className='py-1'
                                                      type={"number"}
                                                      value={careerObjective.expectedSalary}
                                                      onChange={(e) => handleChange('expectedSalary', e.target.value)}
                                                />
                                                {errors.expectedSalary && <p className="text-red-500">{errors.expectedSalary}</p>}
                                          </div>
                                    ) : (
                                          <p>{careerObjective.expectedSalary ? `${careerObjective?.expectedSalary} ৳` : 'N/A'}</p>
                                    )}
                              </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                              <div className="space-y-2">
                                    <Label>Job Level</Label>
                                    {editing ? (
                                          <Select defaultValue='entry' value={careerObjective.jobLevel} onValueChange={(value) => handleChange('jobLevel', value)}>
                                                <SelectTrigger>
                                                      <SelectValue placeholder="Mid Level" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                      <SelectItem value="entry">Entry Level</SelectItem>
                                                      <SelectItem value="mid">Mid Level</SelectItem>
                                                      <SelectItem value="senior">Senior Level</SelectItem>
                                                </SelectContent>
                                          </Select>
                                    ) : (
                                          <p>{careerObjective?.jobLevel ? careerObjective?.jobLevel : 'N/A'}</p>
                                    )}
                              </div>
                              <div className="space-y-2">
                                    <Label>Job Nature</Label>
                                    {editing ? (
                                          <Select defaultValue='fullTime' value={careerObjective.jobNature} onValueChange={(value) => handleChange('jobNature', value)}>
                                                <SelectTrigger>
                                                      <SelectValue placeholder="Full Time" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                      <SelectItem value="fullTime">Full time</SelectItem>
                                                      <SelectItem value="partTime">Part time</SelectItem>
                                                      <SelectItem value="intern">Internship</SelectItem>
                                                      <SelectItem value="freelance">Freelance</SelectItem>
                                                </SelectContent>
                                          </Select>
                                    ) : (
                                          <p>{careerObjective.jobNature ? careerObjective.jobNature : 'N/A'}</p>
                                    )}
                              </div>
                              {editing && (
                                    <div className="flex items-center gap-2">
                                          <Button className="!bg-primary w-[160px] !text-white" onClick={handleSave} variant="outline">
                                                <Save className=" h-4 w-4" />
                                                Save
                                          </Button>

                                          <Button className="!bg-red-500 w-[160px] !text-white" onClick={() => setEditing(false)} variant="outline">
                                                <X className=" h-4 w-4" />
                                                Cancel
                                          </Button>
                                    </div>
                              )}
                        </div>
                  </div>
            </div >
      );
};

export default CareerObjective;