'use client';
import useJobsSearch from '@/app/hooks/useJobSearch';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import JobcardLarge from '../../search-details/components/JobCardLarge';
import NoVacancies from '../../search-details/components/NoVacancies';
import { QuickLinks } from '../../world-wide-job/_components/QuickLinks';
import fallback_image from "@/public/fallback_img.png"
import { Banknote, Briefcase, Calendar, MapPin } from 'lucide-react';
import { formatTimeAgo } from '@/lib/formatedTimeAgo';
import { differenceInDays, format, parseISO } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Router } from 'next/router';

function formatExpiryDate(dateString: string): JSX.Element {
    const date = parseISO(dateString);
    const formattedDate = format(date, 'EEEE, MMMM d, yyyy');
    const daysLeft = differenceInDays(date, new Date());

    return (
        <div className='flex md:flex-col flex-row'>
            <p>
                {formattedDate}
            </p>
            <p>
                ({daysLeft} day{daysLeft !== 1 ? 's' : ''}) left
            </p>
        </div>
    );
}
const NewlyPostPage = () => {
    const { slug } = useParams();
    const jobs = [
        {
            "_id": "67dbea29d1618b20a5328e7e",
            "job_title": "Teacher-Primary(Art & Music)",
            "category": "6783ca530b1197df0d28b8cf",
            "job_type": "Full Time",
            "salary_type": "monthly",
            "skills": [
                "Adaptibility",
                "Communication in English",
                "Computer skill",
                "Leadership and teamwork",
                "Microsoft Office Applications"
            ],
            "vacancy": "2",
            "expiry_date": "2025-04-30",
            "experience_level": "mid-level",
            "salary_negotiable": true,
            "state": [
                "Dhaka"
            ],
            "input_location": "Dhaka (Uttara Sector 6)",
            "job_description": "<p><strong>Education</strong></p><ul><li>Master of Fine Arts (M.F.A) in Theater &amp; Music, Master of Fine Arts (M.F.A) in Fine Arts</li></ul><p><strong>Experience</strong></p><ul><li>3 to 5 years</li><li>The applicants should have experience in the following business area(s): College, School</li></ul><p><strong>Additional Requirements</strong></p><ul><li>Preference will be given to candidates from renowned Universities along with O and A level educational background.&nbsp;</li><li>Diploma/Additional courses related to the subjects.</li></ul>",
            "responsibilities": "<p><strong>Required Subject: Art &amp; Music</strong></p><p>Glenrich International School Uttara is a leading educational institution dedicated to providing exceptional learning experiences for learners. We pride ourselves on creating an inclusive, nurturing, and innovative environment where students can thrive academically and personally.&nbsp;&nbsp;</p><p>Glenrich International School Uttara (junior school) is seeking a dedicated and dynamic Art &amp; Music Teacher. The ideal candidate will be responsible to teach in Pre-Primary (KG I-KG II) and Primary (Grades 1-5).&nbsp;&nbsp;</p><p><br></p><p><strong>Responsibilities are given below:&nbsp;&nbsp;</strong></p><ul><li>Develop and deliver engaging lesson plans for music and art education, catering to diverse age groups and skill levels.&nbsp;&nbsp;</li><li>Foster a creative and supportive learning environment that encourages students to explore their artistic talents.&nbsp;&nbsp;</li><li>Organize and oversee school art competition, music performances, and other creative events.&nbsp;&nbsp;</li><li>Assess and evaluate student progress, providing constructive feedback to support their growth.&nbsp;&nbsp;</li><li>Prepare lesson plans and developing curriculum for in-person. Collaborate with colleagues to integrate music and art into the broader school curriculum.&nbsp;&nbsp;</li><li>Maintain and manage art stuffs, musical instruments, and classroom resources.&nbsp;&nbsp;</li><li>Strong knowledge of music theory, art techniques, and artistic practices related with our culture.&nbsp;&nbsp;</li><li>Communicate effectively with parents to report student progress and address any concerns.</li><li>Handling exams, parent interactions, and other academic duties. Implement daily programs under school leadership.&nbsp;</li><li>Conduct online classes via Zoom, Google Meet, or similar platforms.&nbsp;</li><li>Excellent communication and interpersonal skills.&nbsp;Ability to work collaboratively with students, parents, and staff.&nbsp;&nbsp;</li><li>Passion for nurturing creativity and artistic expression in young learners&nbsp;</li></ul>",
            "benefit": "<p><strong>Compensation &amp; Other Benefits:</strong></p><ul><li>Provident Fund&nbsp;&nbsp;</li><li>Gratuity&nbsp;</li><li>Workers Profit Participation Fund&nbsp;</li><li>Two Festival Bonus&nbsp;</li></ul>",
            "cvEmailSent": true,
            "cvEmailAddress": "career@uttara.glenrich.edu.bd ",
            "url": "teacher-primaryart-music-glenrich-international-school-uttara",
            "company_info": {
                "name": "Glenrich International School Uttara",
                "logo": "https://image.kalbelajobs.com/api/v2/image/3.png",
                "website": "glenrichinternationalschooluttara",
                "company_size": "101-500",
                "industry": "",
                "about": "<p><span style=\"background-color: rgb(244, 244, 244); color: rgb(51, 51, 51);\">Glenrich International School Uttara</span></p>",
                "company_id": "67dbe905d1618b20a5328e5d",
                "company_address": "Plot 4, Road 13, Sector 6, Uttara Model Town, Dhaka-1230"
            },
            "location": {
                "division": [
                    "Dhaka"
                ],
                "country": "Bangladesh",
                "location": "Dhaka (Uttara Sector 6)"
            },
            "postedBy": {
                "name": "Glenrich International School Uttara",
                "email": "info@uttara.glenrich.edu.bd",
                "user_id": "67dbe7ded1618b20a5328e4c"
            },
            "cv_email_sent": true,
            "created_at": "2025-03-20T10:12:57.381Z",
            "updated_at": "2025-04-08T15:45:11.044Z",
            "status": true,
            "applications_count": 0,
            "feature_status": true
        },
        {
            "_id": "67dbeb30d1618b20a5328e87",
            "job_title": "Teacher-Primary(Grade 1-5)",
            "category": "6783ca530b1197df0d28b8cf",
            "job_type": "Full Time",
            "salary_type": "monthly",
            "age_range": {
                "min": "30"
            },
            "skills": [
                "Team player",
                "Microsoft Office Applications",
                "Computer skill",
                "Communication in English",
                "CAIE Training",
                "Adaptability and Resilience"
            ],
            "expiry_date": "2025-04-30",
            "experience_level": "mid-level",
            "salary_negotiable": true,
            "state": [
                "Dhaka"
            ],
            "input_location": "Dhaka (Uttara Sector 6)",
            "job_description": "<p><strong>Education</strong></p><ul><li>Master of Science (MSc) in Mathematics, Master of Arts (MA) in English, Master of Social Science (MSS), Master of Science (MSc) in Computer Science</li></ul><p><strong>Experience</strong></p><ul><li>2 to 5 years</li><li>The applicants should have experience in the following business area(s):College, School</li></ul><p><strong>Additional Requirements</strong></p><ul><li>Age at least 30 years</li><li>Preference will be given to candidates from renowned Universities along with O and A level educational background.&nbsp;</li><li>Diploma/Additional professional courses related to the subjects.</li></ul>",
            "responsibilities": "<p><strong>Required Subject: English, Bangla, Mathematics, SST, CSc.(Robotics).</strong></p><p><br></p><p>Glenrich International School is a leading educational institution dedicated to providing exceptional learning experiences for learners. We pride ourselves on creating an inclusive, nurturing, and innovative environment where students can thrive academically and personally.&nbsp;</p><p>Glenrich International School Uttara (Junior) is seeking a dedicated and dynamic English, Bangla, Mathematics, SST, CSc (Robotics) Teacher. The ideal candidate will be responsible to teach Grades 1–5.&nbsp;</p><p><br></p><p><strong>Responsibilities are given below:</strong>&nbsp;&nbsp;&nbsp;</p><ul><li>Plan and deliver lessons in alignment with the Cambridge English curriculum for Grades 1-5.&nbsp;</li><li>Teach foundational literacy skills, including phonics, reading comprehension, writing, speaking, and listening.&nbsp;</li><li>Utilize a variety of teaching strategies such as interactive activities, storytelling, and technology to engage students.</li><li>Prepare lesson plans and developing curriculum for in-person, distance, and virtual learning that fulfil the requirements curriculum program.&nbsp;</li><li>Differentiate instruction to cater to students’ varied learning styles and abilities.</li><li>Engage students in meaningful learning experiences Assess student performance through formative and summative assessments, providing regular feedback to students and parents.&nbsp;</li><li>Maintain classroom management with a positive and supportive learning environment.&nbsp;</li><li>Collaborate with colleagues and participate in school-wide activities, meetings, and professional development opportunities.&nbsp;&nbsp;</li><li>Communicate effectively with parents to report student progress and address any concerns.</li><li>Handle exams, parent interactions, and other academic duties Implement daily programs under school leadership.</li><li>&nbsp;Conduct online classes via Zoom, Google Meet, or similar platforms.</li><li>Promote critical thinking, creativity, and a love for learning in a culturally diverse classroom setting.&nbsp;&nbsp;</li></ul>",
            "benefit": "<p><strong>Compensation &amp; Other Benefits:</strong></p><ul><li>Provident Fund&nbsp;&nbsp;</li><li>Gratuity&nbsp;</li><li>Workers Profit Participation Fund&nbsp;</li><li>Two Festival Bonus&nbsp;</li></ul>",
            "cvEmailSent": true,
            "cvEmailAddress": "career@uttara.glenrich.edu.bd ",
            "url": "teacher-primarygrade-1-5-glenrich-international-school-uttara",
            "company_info": {
                "name": "Glenrich International School Uttara",
                "logo": "https://image.kalbelajobs.com/api/v2/image/3.png",
                "website": "glenrichinternationalschooluttara",
                "company_size": "101-500",
                "industry": "",
                "about": "<p><span style=\"background-color: rgb(244, 244, 244); color: rgb(51, 51, 51);\">Glenrich International School Uttara</span></p>",
                "company_id": "67dbe905d1618b20a5328e5d",
                "company_address": "Plot 4, Road 13, Sector 6, Uttara Model Town, Dhaka-1230"
            },
            "location": {
                "division": [
                    "Dhaka"
                ],
                "country": "Bangladesh",
                "location": "Dhaka (Uttara Sector 6)"
            },
            "postedBy": {
                "name": "Glenrich International School Uttara",
                "email": "info@uttara.glenrich.edu.bd",
                "user_id": "67dbe7ded1618b20a5328e4c"
            },
            "cv_email_sent": true,
            "created_at": "2025-03-20T10:17:20.089Z",
            "updated_at": "2025-04-08T15:44:52.605Z",
            "status": true,
            "applications_count": 0,
            "feature_status": true
        },
        {
            "_id": "67dbea29d1618b20a5328e7e",
            "job_title": "Teacher-Primary(Art & Music)",
            "category": "6783ca530b1197df0d28b8cf",
            "job_type": "Full Time",
            "salary_type": "monthly",
            "skills": [
                "Adaptibility",
                "Communication in English",
                "Computer skill",
                "Leadership and teamwork",
                "Microsoft Office Applications"
            ],
            "vacancy": "2",
            "expiry_date": "2025-04-30",
            "experience_level": "mid-level",
            "salary_negotiable": true,
            "state": [
                "Dhaka"
            ],
            "input_location": "Dhaka (Uttara Sector 6)",
            "job_description": "<p><strong>Education</strong></p><ul><li>Master of Fine Arts (M.F.A) in Theater &amp; Music, Master of Fine Arts (M.F.A) in Fine Arts</li></ul><p><strong>Experience</strong></p><ul><li>3 to 5 years</li><li>The applicants should have experience in the following business area(s): College, School</li></ul><p><strong>Additional Requirements</strong></p><ul><li>Preference will be given to candidates from renowned Universities along with O and A level educational background.&nbsp;</li><li>Diploma/Additional courses related to the subjects.</li></ul>",
            "responsibilities": "<p><strong>Required Subject: Art &amp; Music</strong></p><p>Glenrich International School Uttara is a leading educational institution dedicated to providing exceptional learning experiences for learners. We pride ourselves on creating an inclusive, nurturing, and innovative environment where students can thrive academically and personally.&nbsp;&nbsp;</p><p>Glenrich International School Uttara (junior school) is seeking a dedicated and dynamic Art &amp; Music Teacher. The ideal candidate will be responsible to teach in Pre-Primary (KG I-KG II) and Primary (Grades 1-5).&nbsp;&nbsp;</p><p><br></p><p><strong>Responsibilities are given below:&nbsp;&nbsp;</strong></p><ul><li>Develop and deliver engaging lesson plans for music and art education, catering to diverse age groups and skill levels.&nbsp;&nbsp;</li><li>Foster a creative and supportive learning environment that encourages students to explore their artistic talents.&nbsp;&nbsp;</li><li>Organize and oversee school art competition, music performances, and other creative events.&nbsp;&nbsp;</li><li>Assess and evaluate student progress, providing constructive feedback to support their growth.&nbsp;&nbsp;</li><li>Prepare lesson plans and developing curriculum for in-person. Collaborate with colleagues to integrate music and art into the broader school curriculum.&nbsp;&nbsp;</li><li>Maintain and manage art stuffs, musical instruments, and classroom resources.&nbsp;&nbsp;</li><li>Strong knowledge of music theory, art techniques, and artistic practices related with our culture.&nbsp;&nbsp;</li><li>Communicate effectively with parents to report student progress and address any concerns.</li><li>Handling exams, parent interactions, and other academic duties. Implement daily programs under school leadership.&nbsp;</li><li>Conduct online classes via Zoom, Google Meet, or similar platforms.&nbsp;</li><li>Excellent communication and interpersonal skills.&nbsp;Ability to work collaboratively with students, parents, and staff.&nbsp;&nbsp;</li><li>Passion for nurturing creativity and artistic expression in young learners&nbsp;</li></ul>",
            "benefit": "<p><strong>Compensation &amp; Other Benefits:</strong></p><ul><li>Provident Fund&nbsp;&nbsp;</li><li>Gratuity&nbsp;</li><li>Workers Profit Participation Fund&nbsp;</li><li>Two Festival Bonus&nbsp;</li></ul>",
            "cvEmailSent": true,
            "cvEmailAddress": "career@uttara.glenrich.edu.bd ",
            "url": "teacher-primaryart-music-glenrich-international-school-uttara",
            "company_info": {
                "name": "Glenrich International School Uttara",
                "logo": "https://image.kalbelajobs.com/api/v2/image/3.png",
                "website": "glenrichinternationalschooluttara",
                "company_size": "101-500",
                "industry": "",
                "about": "<p><span style=\"background-color: rgb(244, 244, 244); color: rgb(51, 51, 51);\">Glenrich International School Uttara</span></p>",
                "company_id": "67dbe905d1618b20a5328e5d",
                "company_address": "Plot 4, Road 13, Sector 6, Uttara Model Town, Dhaka-1230"
            },
            "location": {
                "division": [
                    "Dhaka"
                ],
                "country": "Bangladesh",
                "location": "Dhaka (Uttara Sector 6)"
            },
            "postedBy": {
                "name": "Glenrich International School Uttara",
                "email": "info@uttara.glenrich.edu.bd",
                "user_id": "67dbe7ded1618b20a5328e4c"
            },
            "cv_email_sent": true,
            "created_at": "2025-03-20T10:12:57.381Z",
            "updated_at": "2025-04-08T15:45:11.044Z",
            "status": true,
            "applications_count": 0,
            "feature_status": true
        },
        {
            "_id": "67dbeb30d1618b20a5328e87",
            "job_title": "Teacher-Primary(Grade 1-5)",
            "category": "6783ca530b1197df0d28b8cf",
            "job_type": "Full Time",
            "salary_type": "monthly",
            "age_range": {
                "min": "30"
            },
            "skills": [
                "Team player",
                "Microsoft Office Applications",
                "Computer skill",
                "Communication in English",
                "CAIE Training",
                "Adaptability and Resilience"
            ],
            "expiry_date": "2025-04-30",
            "experience_level": "mid-level",
            "salary_negotiable": true,
            "state": [
                "Dhaka"
            ],
            "input_location": "Dhaka (Uttara Sector 6)",
            "job_description": "<p><strong>Education</strong></p><ul><li>Master of Science (MSc) in Mathematics, Master of Arts (MA) in English, Master of Social Science (MSS), Master of Science (MSc) in Computer Science</li></ul><p><strong>Experience</strong></p><ul><li>2 to 5 years</li><li>The applicants should have experience in the following business area(s):College, School</li></ul><p><strong>Additional Requirements</strong></p><ul><li>Age at least 30 years</li><li>Preference will be given to candidates from renowned Universities along with O and A level educational background.&nbsp;</li><li>Diploma/Additional professional courses related to the subjects.</li></ul>",
            "responsibilities": "<p><strong>Required Subject: English, Bangla, Mathematics, SST, CSc.(Robotics).</strong></p><p><br></p><p>Glenrich International School is a leading educational institution dedicated to providing exceptional learning experiences for learners. We pride ourselves on creating an inclusive, nurturing, and innovative environment where students can thrive academically and personally.&nbsp;</p><p>Glenrich International School Uttara (Junior) is seeking a dedicated and dynamic English, Bangla, Mathematics, SST, CSc (Robotics) Teacher. The ideal candidate will be responsible to teach Grades 1–5.&nbsp;</p><p><br></p><p><strong>Responsibilities are given below:</strong>&nbsp;&nbsp;&nbsp;</p><ul><li>Plan and deliver lessons in alignment with the Cambridge English curriculum for Grades 1-5.&nbsp;</li><li>Teach foundational literacy skills, including phonics, reading comprehension, writing, speaking, and listening.&nbsp;</li><li>Utilize a variety of teaching strategies such as interactive activities, storytelling, and technology to engage students.</li><li>Prepare lesson plans and developing curriculum for in-person, distance, and virtual learning that fulfil the requirements curriculum program.&nbsp;</li><li>Differentiate instruction to cater to students’ varied learning styles and abilities.</li><li>Engage students in meaningful learning experiences Assess student performance through formative and summative assessments, providing regular feedback to students and parents.&nbsp;</li><li>Maintain classroom management with a positive and supportive learning environment.&nbsp;</li><li>Collaborate with colleagues and participate in school-wide activities, meetings, and professional development opportunities.&nbsp;&nbsp;</li><li>Communicate effectively with parents to report student progress and address any concerns.</li><li>Handle exams, parent interactions, and other academic duties Implement daily programs under school leadership.</li><li>&nbsp;Conduct online classes via Zoom, Google Meet, or similar platforms.</li><li>Promote critical thinking, creativity, and a love for learning in a culturally diverse classroom setting.&nbsp;&nbsp;</li></ul>",
            "benefit": "<p><strong>Compensation &amp; Other Benefits:</strong></p><ul><li>Provident Fund&nbsp;&nbsp;</li><li>Gratuity&nbsp;</li><li>Workers Profit Participation Fund&nbsp;</li><li>Two Festival Bonus&nbsp;</li></ul>",
            "cvEmailSent": true,
            "cvEmailAddress": "career@uttara.glenrich.edu.bd ",
            "url": "teacher-primarygrade-1-5-glenrich-international-school-uttara",
            "company_info": {
                "name": "Glenrich International School Uttara",
                "logo": "https://image.kalbelajobs.com/api/v2/image/3.png",
                "website": "glenrichinternationalschooluttara",
                "company_size": "101-500",
                "industry": "",
                "about": "<p><span style=\"background-color: rgb(244, 244, 244); color: rgb(51, 51, 51);\">Glenrich International School Uttara</span></p>",
                "company_id": "67dbe905d1618b20a5328e5d",
                "company_address": "Plot 4, Road 13, Sector 6, Uttara Model Town, Dhaka-1230"
            },
            "location": {
                "division": [
                    "Dhaka"
                ],
                "country": "Bangladesh",
                "location": "Dhaka (Uttara Sector 6)"
            },
            "postedBy": {
                "name": "Glenrich International School Uttara",
                "email": "info@uttara.glenrich.edu.bd",
                "user_id": "67dbe7ded1618b20a5328e4c"
            },
            "cv_email_sent": true,
            "created_at": "2025-03-20T10:17:20.089Z",
            "updated_at": "2025-04-08T15:44:52.605Z",
            "status": true,
            "applications_count": 0,
            "feature_status": true
        },
        {
            "_id": "67dbea29d1618b20a5328e7e",
            "job_title": "Teacher-Primary(Art & Music)",
            "category": "6783ca530b1197df0d28b8cf",
            "job_type": "Full Time",
            "salary_type": "monthly",
            "skills": [
                "Adaptibility",
                "Communication in English",
                "Computer skill",
                "Leadership and teamwork",
                "Microsoft Office Applications"
            ],
            "vacancy": "2",
            "expiry_date": "2025-04-30",
            "experience_level": "mid-level",
            "salary_negotiable": true,
            "state": [
                "Dhaka"
            ],
            "input_location": "Dhaka (Uttara Sector 6)",
            "job_description": "<p><strong>Education</strong></p><ul><li>Master of Fine Arts (M.F.A) in Theater &amp; Music, Master of Fine Arts (M.F.A) in Fine Arts</li></ul><p><strong>Experience</strong></p><ul><li>3 to 5 years</li><li>The applicants should have experience in the following business area(s): College, School</li></ul><p><strong>Additional Requirements</strong></p><ul><li>Preference will be given to candidates from renowned Universities along with O and A level educational background.&nbsp;</li><li>Diploma/Additional courses related to the subjects.</li></ul>",
            "responsibilities": "<p><strong>Required Subject: Art &amp; Music</strong></p><p>Glenrich International School Uttara is a leading educational institution dedicated to providing exceptional learning experiences for learners. We pride ourselves on creating an inclusive, nurturing, and innovative environment where students can thrive academically and personally.&nbsp;&nbsp;</p><p>Glenrich International School Uttara (junior school) is seeking a dedicated and dynamic Art &amp; Music Teacher. The ideal candidate will be responsible to teach in Pre-Primary (KG I-KG II) and Primary (Grades 1-5).&nbsp;&nbsp;</p><p><br></p><p><strong>Responsibilities are given below:&nbsp;&nbsp;</strong></p><ul><li>Develop and deliver engaging lesson plans for music and art education, catering to diverse age groups and skill levels.&nbsp;&nbsp;</li><li>Foster a creative and supportive learning environment that encourages students to explore their artistic talents.&nbsp;&nbsp;</li><li>Organize and oversee school art competition, music performances, and other creative events.&nbsp;&nbsp;</li><li>Assess and evaluate student progress, providing constructive feedback to support their growth.&nbsp;&nbsp;</li><li>Prepare lesson plans and developing curriculum for in-person. Collaborate with colleagues to integrate music and art into the broader school curriculum.&nbsp;&nbsp;</li><li>Maintain and manage art stuffs, musical instruments, and classroom resources.&nbsp;&nbsp;</li><li>Strong knowledge of music theory, art techniques, and artistic practices related with our culture.&nbsp;&nbsp;</li><li>Communicate effectively with parents to report student progress and address any concerns.</li><li>Handling exams, parent interactions, and other academic duties. Implement daily programs under school leadership.&nbsp;</li><li>Conduct online classes via Zoom, Google Meet, or similar platforms.&nbsp;</li><li>Excellent communication and interpersonal skills.&nbsp;Ability to work collaboratively with students, parents, and staff.&nbsp;&nbsp;</li><li>Passion for nurturing creativity and artistic expression in young learners&nbsp;</li></ul>",
            "benefit": "<p><strong>Compensation &amp; Other Benefits:</strong></p><ul><li>Provident Fund&nbsp;&nbsp;</li><li>Gratuity&nbsp;</li><li>Workers Profit Participation Fund&nbsp;</li><li>Two Festival Bonus&nbsp;</li></ul>",
            "cvEmailSent": true,
            "cvEmailAddress": "career@uttara.glenrich.edu.bd ",
            "url": "teacher-primaryart-music-glenrich-international-school-uttara",
            "company_info": {
                "name": "Glenrich International School Uttara",
                "logo": "https://image.kalbelajobs.com/api/v2/image/3.png",
                "website": "glenrichinternationalschooluttara",
                "company_size": "101-500",
                "industry": "",
                "about": "<p><span style=\"background-color: rgb(244, 244, 244); color: rgb(51, 51, 51);\">Glenrich International School Uttara</span></p>",
                "company_id": "67dbe905d1618b20a5328e5d",
                "company_address": "Plot 4, Road 13, Sector 6, Uttara Model Town, Dhaka-1230"
            },
            "location": {
                "division": [
                    "Dhaka"
                ],
                "country": "Bangladesh",
                "location": "Dhaka (Uttara Sector 6)"
            },
            "postedBy": {
                "name": "Glenrich International School Uttara",
                "email": "info@uttara.glenrich.edu.bd",
                "user_id": "67dbe7ded1618b20a5328e4c"
            },
            "cv_email_sent": true,
            "created_at": "2025-03-20T10:12:57.381Z",
            "updated_at": "2025-04-08T15:45:11.044Z",
            "status": true,
            "applications_count": 0,
            "feature_status": true
        },
        {
            "_id": "67dbeb30d1618b20a5328e87",
            "job_title": "Teacher-Primary(Grade 1-5)",
            "category": "6783ca530b1197df0d28b8cf",
            "job_type": "Full Time",
            "salary_type": "monthly",
            "age_range": {
                "min": "30"
            },
            "skills": [
                "Team player",
                "Microsoft Office Applications",
                "Computer skill",
                "Communication in English",
                "CAIE Training",
                "Adaptability and Resilience"
            ],
            "expiry_date": "2025-04-30",
            "experience_level": "mid-level",
            "salary_negotiable": true,
            "state": [
                "Dhaka"
            ],
            "input_location": "Dhaka (Uttara Sector 6)",
            "job_description": "<p><strong>Education</strong></p><ul><li>Master of Science (MSc) in Mathematics, Master of Arts (MA) in English, Master of Social Science (MSS), Master of Science (MSc) in Computer Science</li></ul><p><strong>Experience</strong></p><ul><li>2 to 5 years</li><li>The applicants should have experience in the following business area(s):College, School</li></ul><p><strong>Additional Requirements</strong></p><ul><li>Age at least 30 years</li><li>Preference will be given to candidates from renowned Universities along with O and A level educational background.&nbsp;</li><li>Diploma/Additional professional courses related to the subjects.</li></ul>",
            "responsibilities": "<p><strong>Required Subject: English, Bangla, Mathematics, SST, CSc.(Robotics).</strong></p><p><br></p><p>Glenrich International School is a leading educational institution dedicated to providing exceptional learning experiences for learners. We pride ourselves on creating an inclusive, nurturing, and innovative environment where students can thrive academically and personally.&nbsp;</p><p>Glenrich International School Uttara (Junior) is seeking a dedicated and dynamic English, Bangla, Mathematics, SST, CSc (Robotics) Teacher. The ideal candidate will be responsible to teach Grades 1–5.&nbsp;</p><p><br></p><p><strong>Responsibilities are given below:</strong>&nbsp;&nbsp;&nbsp;</p><ul><li>Plan and deliver lessons in alignment with the Cambridge English curriculum for Grades 1-5.&nbsp;</li><li>Teach foundational literacy skills, including phonics, reading comprehension, writing, speaking, and listening.&nbsp;</li><li>Utilize a variety of teaching strategies such as interactive activities, storytelling, and technology to engage students.</li><li>Prepare lesson plans and developing curriculum for in-person, distance, and virtual learning that fulfil the requirements curriculum program.&nbsp;</li><li>Differentiate instruction to cater to students’ varied learning styles and abilities.</li><li>Engage students in meaningful learning experiences Assess student performance through formative and summative assessments, providing regular feedback to students and parents.&nbsp;</li><li>Maintain classroom management with a positive and supportive learning environment.&nbsp;</li><li>Collaborate with colleagues and participate in school-wide activities, meetings, and professional development opportunities.&nbsp;&nbsp;</li><li>Communicate effectively with parents to report student progress and address any concerns.</li><li>Handle exams, parent interactions, and other academic duties Implement daily programs under school leadership.</li><li>&nbsp;Conduct online classes via Zoom, Google Meet, or similar platforms.</li><li>Promote critical thinking, creativity, and a love for learning in a culturally diverse classroom setting.&nbsp;&nbsp;</li></ul>",
            "benefit": "<p><strong>Compensation &amp; Other Benefits:</strong></p><ul><li>Provident Fund&nbsp;&nbsp;</li><li>Gratuity&nbsp;</li><li>Workers Profit Participation Fund&nbsp;</li><li>Two Festival Bonus&nbsp;</li></ul>",
            "cvEmailSent": true,
            "cvEmailAddress": "career@uttara.glenrich.edu.bd ",
            "url": "teacher-primarygrade-1-5-glenrich-international-school-uttara",
            "company_info": {
                "name": "Glenrich International School Uttara",
                "logo": "https://image.kalbelajobs.com/api/v2/image/3.png",
                "website": "glenrichinternationalschooluttara",
                "company_size": "101-500",
                "industry": "",
                "about": "<p><span style=\"background-color: rgb(244, 244, 244); color: rgb(51, 51, 51);\">Glenrich International School Uttara</span></p>",
                "company_id": "67dbe905d1618b20a5328e5d",
                "company_address": "Plot 4, Road 13, Sector 6, Uttara Model Town, Dhaka-1230"
            },
            "location": {
                "division": [
                    "Dhaka"
                ],
                "country": "Bangladesh",
                "location": "Dhaka (Uttara Sector 6)"
            },
            "postedBy": {
                "name": "Glenrich International School Uttara",
                "email": "info@uttara.glenrich.edu.bd",
                "user_id": "67dbe7ded1618b20a5328e4c"
            },
            "cv_email_sent": true,
            "created_at": "2025-03-20T10:17:20.089Z",
            "updated_at": "2025-04-08T15:44:52.605Z",
            "status": true,
            "applications_count": 0,
            "feature_status": true
        },
    ]

    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    return (
        <div className='bg-gray-50'>
            <MaxWidthWrapper className='py-8'>
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-3">
                        <Button onClick={goBack}>Back</Button>
                        <div className="space-y-4 mt-3">
                            {jobs?.length > 0 ? (
                                jobs?.map((job, index) => {
                                    const formatLocation = () => {
                                        if (job?.location?.country === "Remote") return "Remote";

                                        const { country, division, location } = job?.location || {};

                                        return [
                                            country,
                                            // Removed 'district' as it is not defined
                                            Array.isArray(division) ? division.join(", ") : division,
                                            location
                                        ]
                                            .filter(Boolean)
                                            .join(", ");
                                    };

                                    return (
                                        <div className='relative bg-white duration-200 hover:shadow-md border border-gray-200' key={index}>
                                            <div className="md:p-8 p-3">
                                                <header className="flex gap-6">
                                                    <div className="w-16 h-16 border md:w-20 md:h-20 rounded-xl overflow-hidden">
                                                        <Link
                                                            href={`/companies/${job?.company_info?.website}`}>
                                                            <Image
                                                                className="rounded-md  bg-gray-200 w-full h-full object-scale-down p-2 "
                                                                src={job.company_info?.logo || fallback_image.src}
                                                                width={400}
                                                                height={400}
                                                                alt={`${job.company_info?.name} logo`}
                                                            />
                                                        </Link>
                                                    </div>

                                                    <div className="">
                                                        <Link href={`/jobs/${job.url}`}>
                                                            <h4 className="text-primary_blue text-lg">{job?.job_title}</h4>
                                                        </Link>

                                                        <Link href={`/companies${job?.company_info?.website}`} className="text-sm text-gray-500 hover:text-blue-800">
                                                            <h3 className="my-0.5">{job.company_info?.name} </h3>
                                                        </Link>
                                                    </div>

                                                    <div className="md:flex hidden text-sm absolute right-0 top-0 border-gray-300 rounded-bl-md text-gray-500 !border-l border-b p-2 gap-2 items-center">
                                                        {formatExpiryDate(job.expiry_date)}
                                                    </div>
                                                </header>
                                                <main>
                                                    <ul className="mt-3 flex flex-wrap md:gap-6 gap-3">
                                                        <li className="flex gap-2 items-center">
                                                            <MapPin size={20} />
                                                            {formatLocation()}
                                                        </li>

                                                        <li className="flex gap-2 items-center">
                                                            <Briefcase size={20} />
                                                            {job?.job_type}
                                                        </li>

                                                        <li className="flex gap-2 items-center">
                                                            <Banknote size={20} />
                                                            {job.salary_negotiable
                                                                ? "Negotiable"
                                                                : "Salary not specified"
                                                            }
                                                        </li>

                                                        <li className="flex gap-2 items-start">
                                                            <Calendar size={20} />
                                                            {formatExpiryDate(job.expiry_date)}
                                                        </li>
                                                    </ul>
                                                </main>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <div className="flex min-h-[60vh] items-center justify-center">
                                    <NoVacancies />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="">
                        <QuickLinks />
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default NewlyPostPage;