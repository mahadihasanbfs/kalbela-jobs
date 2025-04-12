type FaqAnswer =
  | string
  | {
      intro?: string
      list?: string[]
      listType?: "bullet" | "decimal"
      conclusion?: string
    }

type FaqItem = {
  question: string
  answer: FaqAnswer
}

export const faqData: FaqItem[] = [
  {
    question: "1) I have forgot my username and password. How can I retrieve?",
    answer: {
      list: [
        "To retrieve your forgotten Username/Password, follow these steps:",
        "Visit KalbelaJobs.com, and then click on Employers Login.",
        'Click on "Forgot Your Password or Trouble signing in?" available under Login button.',
        "A new page will appear; type your corporate e-mail address which you have provided in your account.",
        "Click on Submit button. Your login information will be sent to your provided e-mail address.",
      ],
      listType: "decimal",
    },
  },
  {
    question: "2) How do I change my password?",
    answer: {
      list: [
        "Log in to your KalbelaJobs account.",
        "Go to your account settings or profile page.",
        'Look for the "Change Password" option.',
        "Enter your current password and then your new password twice to confirm.",
        'Click on "Save" or "Update" to apply the changes.',
      ],
      listType: "decimal",
    },
  },
  {
    question: "3) How do I update my Profile?",
    answer: {
      list: [
        "Log in to your KalbelaJobs account.",
        "Navigate to your profile section.",
        'Click on "Edit Profile" or "Update Profile" button.',
        "Update the necessary information in the form provided.",
        'Click "Save" or "Update" to apply your changes.',
      ],
      listType: "decimal",
    },
  },
  {
    question: "4) Will my contact information be sold to any third parties?",
    answer:
      "No, KalbelaJobs does not sell your personal information to third parties. We respect your privacy and protect your data according to our privacy policy. Your information is only used to connect you with potential employers and for the services you've signed up for on our platform.",
  },
  {
    question: "5) I'm not looking for a job anymore. Should I cancel my account and remove my resumes?",
    answer: {
      intro: "You have several options:",
      list: [
        "You can deactivate your account temporarily if you might use it again in the future.",
        "You can delete your account permanently if you no longer wish to use our services.",
        'Alternatively, you can simply update your profile status to "Not Looking for Jobs" to stop receiving job alerts while keeping your account active.',
      ],
      listType: "decimal",
      conclusion: 'To delete your account, go to Account Settings and select "Delete Account" option.',
    },
  },
  {
    question: "6) Why should I create a Profile?",
    answer: {
      intro: "Creating a profile on KalbelaJobs offers numerous benefits:",
      list: [
        "Employers can find you based on your skills and experience",
        "You can apply to jobs with just one click",
        "You'll receive personalized job recommendations",
        "You can track your job applications",
        "You can save jobs to apply later",
      ],
      listType: "bullet",
    },
  },
  {
    question: "7) Can I use my Employer username and password for my Seeker account?",
    answer:
      "No, you cannot use the same credentials for both accounts. Employer and Seeker accounts are separate in our system to maintain security and proper access control. You will need to create separate accounts with different email addresses for each role.",
  },
  {
    question: "8) What should I do if I have not received the email that allows me to create a new password?",
    answer: {
      list: [
        "Check your spam or junk folder to ensure the email wasn't filtered.",
        "Verify that you entered the correct email address associated with your account.",
        "Wait for a few minutes as email delivery might be delayed.",
        "If you still haven't received the email after 30 minutes, try the password reset process again.",
        "If the problem persists, contact our customer support for assistance.",
      ],
      listType: "decimal",
    },
  },
  {
    question: "9) Does my account expire?",
    answer:
      "Free KalbelaJobs accounts do not expire as long as you log in at least once every 12 months. If your account remains inactive for more than 12 months, it may be deactivated for security reasons. Premium accounts will expire based on the subscription period you've purchased.",
  },
  {
    question: "10) How do I add more information to my resume?",
    answer: {
      list: [
        "Log in to your KalbelaJobs account.",
        'Navigate to the "My Resumes" or "Resume Manager" section.',
        "Select the resume you want to edit.",
        'Click on "Edit" or "Update Resume" button.',
        "Add or modify the information in the relevant sections.",
        'Click "Save" or "Update" to apply your changes.',
      ],
      listType: "decimal",
    },
  },
  {
    question: "11) How can I change the contact information on my resume?",
    answer: {
      list: [
        "Log in to your KalbelaJobs account.",
        'Go to "My Resumes" or "Resume Manager" section.',
        "Select the resume you want to update.",
        'Click on "Edit" or "Update Resume" button.',
        'Navigate to the "Contact Information" section.',
        "Update your contact details as needed.",
        'Click "Save" or "Update" to apply your changes.',
      ],
      listType: "decimal",
    },
  },
  {
    question: "12) Who will see my resume?",
    answer:
      "Your resume will be visible to employers and recruiters who have registered with KalbelaJobs. You can control the visibility of your resume through privacy settings in your account. You can choose to make it visible to all employers, only to employers you apply to, or completely private where only you can see it.",
  },
  {
    question: "13) Who is viewing my resume?",
    answer:
      "Premium account holders can access detailed information about who has viewed their resume, including the company name and when it was viewed. This feature helps you track employer interest and follow up accordingly. Free account users can see the number of views but not the specific details of who viewed their resume.",
  },
  {
    question: "14) What happens when I delete a resume?",
    answer:
      "When you delete a resume, it is permanently removed from our system and will no longer be visible to employers. Any applications you've submitted with that resume will still exist, but employers won't be able to access the resume itself. We recommend updating your resume instead of deleting it unless you're sure you no longer want to use it.",
  },
  {
    question: "15) How can I confirm that my resume and cover letter have been submitted?",
    answer: {
      list: [
        "After submitting your application, you should see a confirmation message on the screen.",
        "You will also receive a confirmation email at the address associated with your account.",
        'You can check your "Application History" or "Applied Jobs" section in your account to see all your submitted applications.',
        'The status of your application will be displayed as "Submitted" or "Applied".',
      ],
      listType: "decimal",
    },
  },
  {
    question: "16) How do I search for jobs?",
    answer: {
      list: [
        "Log in to your KalbelaJobs account.",
        "Use the search bar at the top of the page to enter keywords, job titles, or company names.",
        "Use filters to narrow down results by location, job type, salary range, etc.",
        "Browse through the search results to find jobs that match your criteria.",
        "Click on any job title to view the full job description and application details.",
      ],
      listType: "decimal",
    },
  },
  {
    question: "17) How do I save a job search?",
    answer: {
      list: [
        "Perform your job search with your preferred criteria and filters.",
        'Look for the "Save Search" button near the search results.',
        "Click on it and give your saved search a name.",
        "Choose how often you want to receive email alerts for new matching jobs (daily, weekly, etc.).",
        'Click "Save" to confirm.',
        'You can access your saved searches in the "Saved Searches" section of your account.',
      ],
      listType: "decimal",
    },
  },
  {
    question: "18) How can I email a copy of a job posting to a friend?",
    answer: {
      list: [
        "Open the job posting you want to share.",
        'Look for the "Share" or "Email to Friend" button, usually located near the top or bottom of the job description.',
        "Enter your friend's email address in the provided field.",
        "Add a personal message if you wish.",
        'Click "Send" to email the job posting to your friend.',
      ],
      listType: "decimal",
    },
  },
  {
    question: "19) How do I print a job posting?",
    answer: {
      list: [
        "Open the job posting you want to print.",
        'Look for the "Print" icon or button, usually located near the top or bottom of the job description.',
        "Alternatively, you can use your browser's print function (Ctrl+P or Command+P).",
        "Adjust the print settings as needed in the print dialog box.",
        'Click "Print" to send the job posting to your printer.',
      ],
      listType: "decimal",
    },
  },
  {
    question: "20) Where can I find the salary information of a job?",
    answer:
      'Salary information, when provided by the employer, is typically displayed in the job description under a section labeled "Salary" or "Compensation". Not all employers choose to disclose salary information publicly. If the salary is not listed, you may see terms like "Competitive salary" or "Salary negotiable". You can also use our salary estimation tool to get an idea of the typical salary range for similar positions.',
  },
  {
    question: "21) What happens when I apply online for a job?",
    answer: {
      list: [
        "Your application, resume, and cover letter (if provided) are sent to the employer.",
        "You will receive a confirmation email that your application has been submitted.",
        "The employer will review your application and decide whether to proceed with your candidacy.",
        "If interested, the employer will contact you directly using the contact information provided in your profile or resume.",
        'You can track the status of your application in the "Applied Jobs" section of your account.',
      ],
      listType: "decimal",
    },
  },
  {
    question: "22) Do I need to be kalbelajobs.com account holder to apply for jobs?",
    answer:
      "Yes, you need to create an account on KalbelaJobs.com to apply for jobs through our platform. Creating an account is free and allows you to upload your resume, save job searches, track your applications, and receive job alerts. This also enables employers to contact you if they're interested in your profile.",
  },
  {
    question: "23) Do I need a resume to apply to a job posting?",
    answer:
      "Yes, most job applications through KalbelaJobs require a resume. You can upload your existing resume or create one using our resume builder tool. Some employers may allow applications without a resume, but having a well-crafted resume significantly increases your chances of getting noticed by employers.",
  },
  {
    question: "24) Why didn't I receive a response when I applied online?",
    answer: {
      intro: "There could be several reasons why you haven't received a response:",
      list: [
        "The employer received a large number of applications and is still reviewing them.",
        "Your qualifications may not match what the employer is looking for.",
        "The position may have been filled internally or the hiring process put on hold.",
        "There might be technical issues with the employer's email system.",
        "The employer typically only contacts candidates they wish to interview.",
      ],
      listType: "bullet",
      conclusion: "We recommend following up with the employer directly if you haven't heard back after 2-3 weeks.",
    },
  },
  {
    question: "25) How can I track the jobs I've applied for?",
    answer: {
      list: [
        "Log in to your KalbelaJobs account.",
        'Navigate to the "My Jobs" or "Applied Jobs" section.',
        "Here you'll find a list of all the jobs you've applied for through our platform.",
        "You can see the date of application and the current status of each application.",
        "You can also set reminders to follow up on specific applications.",
      ],
      listType: "decimal",
    },
  },
  {
    question: "26) Can I apply for the same job more than once?",
    answer:
      "Generally, it's not recommended to apply for the same job multiple times in a short period as it may appear unprofessional to employers. However, if significant time has passed (e.g., 3-6 months) since your initial application, or if you've substantially improved your qualifications, you may consider reapplying. Our system will typically notify you if you're attempting to apply for a job you've already applied to.",
  },
  {
    question: "27) What is Recruitment Agent?",
    answer:
      "A Recruitment Agent is a professional who works on behalf of employers to find suitable candidates for their job openings. On KalbelaJobs, recruitment agents have special accounts that allow them to post jobs, search for candidates, and manage applications for multiple client companies. They serve as intermediaries between job seekers and employers, helping to match the right talent with the right opportunities.",
  },
  {
    question: "28) How I can see all the features at one page?",
    answer:
      'You can view all the features of KalbelaJobs on our "Features" or "Services" page, accessible from the main navigation menu. This page provides a comprehensive overview of all the tools and services available to job seekers and employers. Additionally, your account dashboard displays the key features relevant to your account type, with quick access links to each feature.',
  },
  {
    question: "29) Is there any way to apply for Local Government jobs through kalbelajobs.com?",
    answer:
      'Yes, KalbelaJobs regularly posts Local Government job opportunities. You can find these jobs by using the search filters and selecting "Government" or "Local Government" in the job category or industry filter. We also have a dedicated section for Government Jobs in our Quick Links menu, where you can browse all available government positions.',
  },
  {
    question: "30) What are my benefits if I submit my resume at kalbelajobs.com?",
    answer: {
      intro: "Submitting your resume on KalbelaJobs offers numerous benefits:",
      list: [
        "Access to thousands of job opportunities from top employers",
        "Your resume becomes visible to employers searching for candidates with your skills",
        "Personalized job recommendations based on your profile and preferences",
        "Job alerts for new positions matching your criteria",
        "Career resources and tools to help improve your job search",
        "Application tracking to manage your job search efficiently",
        "Professional networking opportunities within your industry",
      ],
      listType: "bullet",
    },
  },
]
