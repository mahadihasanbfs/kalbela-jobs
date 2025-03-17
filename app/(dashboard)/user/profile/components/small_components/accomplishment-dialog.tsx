'use client'

import * as React from 'react'
import { Calendar } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { DateInput, Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

interface AccomplishmentDialogProps {
      type: 'portfolio' | 'publication' | 'award' | 'project' | 'other'
      open: boolean
      onOpenChange: (open: boolean) => void
      onSave: (data: AccomplishmentData) => void
}

interface AccomplishmentData {
      title: string
      issuedOn: string
      url: string
      description: string
      thumbnail?: File | null
}

const MAX_COUNTS = {
      portfolio: 2,
      publication: 5,
      award: 5,
      project: 5,
      other: 5,
}

const TITLES = {
      portfolio: 'Portfolio',
      publication: 'Publication',
      award: 'Award/Honor',
      project: 'Project',
      other: 'Other',
}

export function AccomplishmentDialog({ type, open, onOpenChange, onSave }: AccomplishmentDialogProps) {
      const [data, setData] = React.useState<AccomplishmentData>({
            title: '',
            issuedOn: '',
            url: '',
            description: '',
            thumbnail: null,
      })
      const [errors, setErrors] = React.useState({
            title: '',
            issuedOn: '',
            url: '',
            description: '',
      })

      const validateInputs = () => {
            const newErrors = {
                  title: data.title ? '' : 'Title is required',
                  issuedOn: data.issuedOn ? '' : 'Issued On date is required',
                  url: data.url ? '' : 'URL is required',
                  description: data.description ? '' : 'Description is required',
            }
            setErrors(newErrors)
            return !Object.values(newErrors).some(error => error)
      }

      const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault()
            if (validateInputs()) {
                  onSave(data)
                  onOpenChange(false)
                  console.log(data)  // Log all data to the console
                  setData({ title: '', issuedOn: '', url: '', description: '', thumbnail: null })
                  setErrors({ title: '', issuedOn: '', url: '', description: '' })
            }
      }

      const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files && e.target.files.length > 0) {
                  setData({ ...data, thumbnail: e.target.files[0] })
            }
      }

      return (
            <Dialog open={open} onOpenChange={onOpenChange}>
                  <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                              <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
                                    {TITLES[type]}
                                    <span className="text-sm font-normal text-muted-foreground">
                                          (Max {MAX_COUNTS[type]})
                                    </span>
                              </DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4 mt-6" >
                              {type === 'portfolio' && (
                                    <div className="space-y-2">
                                          <Label htmlFor="thumbnail">Upload Thumbnail</Label>
                                          <Input
                                                id="thumbnail"
                                                type="file"
                                                onChange={handleFileChange}
                                          />
                                    </div>
                              )}


                              <div className="space-y-2">
                                    <Label htmlFor="title" className="required">
                                          Title
                                    </Label>
                                    <Input
                                          id="title"
                                          value={data.title}
                                          onChange={(e) => setData({ ...data, title: e.target.value })}
                                          required
                                    />
                                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                              </div>
                              <div className="space-y-2">
                                    <Label htmlFor="issuedOn">Issued On</Label>
                                    <div className="relative">
                                          <DateInput
                                                id="issuedOn"
                                                type="date"
                                                value={data.issuedOn}
                                                onChange={(e) => setData({ ...data, issuedOn: e.target.value })}
                                                className=""
                                          />
                                    </div>
                                    {errors.issuedOn && <p className="text-red-500 text-sm">{errors.issuedOn}</p>}
                              </div>
                              <div className="space-y-2">
                                    <Label htmlFor="url">URL</Label>
                                    <Input
                                          id="url"
                                          type="url"
                                          value={data.url}
                                          onChange={(e) => setData({ ...data, url: e.target.value })}
                                          placeholder="https://"
                                    />
                                    {errors.url && <p className="text-red-500 text-sm">{errors.url}</p>}
                              </div>
                              <div className="space-y-2">
                                    <Label htmlFor="description" className="required">
                                          Description
                                    </Label>
                                    <Textarea
                                          id="description"
                                          value={data.description}
                                          onChange={(e) => setData({ ...data, description: e.target.value })}
                                          placeholder="Maximum 300 characters"
                                          maxLength={300}
                                          required
                                          className="h-32"
                                    />
                                    <div className="text-xs text-muted-foreground text-right">
                                          {data.description.length}/300
                                    </div>
                                    {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                              </div>

                              <DialogFooter className="gap-2 flex justify-end">
                                    <Button type="submit" className="!bg-primary ">
                                          Save
                                    </Button>
                                    <Button
                                          type="button"
                                          variant="outline"
                                          onClick={() => onOpenChange(false)}
                                    >
                                          Close
                                    </Button>
                              </DialogFooter>
                        </form>
                  </DialogContent>
            </Dialog>
      )
}