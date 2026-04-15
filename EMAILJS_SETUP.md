# EmailJS Setup Guide

This guide will help you set up EmailJS to send appointment emails from the frontend to the doctor's email.

## What is EmailJS?

EmailJS is a service that allows you to send emails directly from your frontend code without needing a backend server. Perfect for this appointment form!

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in the left sidebar
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email service)
4. Fill in the form:
   - **Service Name:** `gmail` (or any name)
   - **Gmail Email:** Your clinic's email (e.g., clinic@example.com)
   - Click **Connect Account** and authorize Gmail
5. Save the service and note the **Service ID** (looks like: `service_abc123xyz`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the sidebar
2. Click **Create New Template**
3. Fill in the template details:

**Template Name:** `appointment_request`

**Email Subject:**
```
New Appointment Request from {{from_name}}
```

**Email Body (HTML):**
```html
<h2>New Appointment Request</h2>

<p><strong>Patient Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Preferred Date:</strong> {{appointment_date}}</p>

<h3>Message:</h3>
<p>{{message}}</p>

<hr>
<p><small>From: {{clinic_name}}</small></p>
```

4. Save the template and note the **Template ID** (looks like: `template_abc123xyz`)

## Step 4: Get Public Key

1. Go to **Account** → **API Keys** or **Integration** in the sidebar
2. Copy your **Public Key** (starts with `[your_public_key]`)

## Step 5: Update Environment Variables

Update `.env` file with your credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123xyz
VITE_EMAILJS_TEMPLATE_ID=template_abc123xyz
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace with your actual IDs from EmailJS.

## Step 6: Test the Form

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Fill out the appointment form and submit
3. Check the doctor's email inbox for the appointment request

## Troubleshooting

### Email not sending?

1. **Check EmailJS Dashboard:**
   - Go to EmailJS → **Email Status** → Check if there are failed emails
   - Click on the email to see the error message

2. **Common Issues:**
   - **Invalid Service ID/Template ID:** Double-check the IDs in `.env`
   - **Gmail blocked:** Google may block the first sign-in. Go to [Google Account Security](https://myaccount.google.com/security) and allow less secure apps or use an App Password
   - **CORS Error:** This usually means the Public Key is wrong

3. **Test with Console:**
   - Open browser DevTools (F12)
   - Go to **Console** tab
   - Check for error messages when submitting the form

### Email Variables Not Filling?

Make sure the template variable names match exactly:
- `{{from_name}}` - Patient name
- `{{from_email}}` - Patient email
- `{{phone}}` - Patient phone
- `{{appointment_date}}` - Appointment date
- `{{message}}` - Additional message
- `{{clinic_name}}` - Clinic name

## EmailJS Pricing

- **Free Plan:** 200 emails/month (Perfect for a clinic!)
- **Paid Plans:** Starting at $9.99/month for more emails

## Security Notes

- The **Public Key** is safe to expose in frontend code
- It's designed to be public
- EmailJS requires the Service ID and Template ID, which only you have access to
- Your clinic email is protected by Gmail's security

## How It Works

```
User fills form → EmailJS sends email → Doctor receives in Gmail ✅
```

No backend server needed!

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- Contact Support: https://www.emailjs.com/contact/

---

**Once set up, users can submit appointments and you'll receive emails automatically!** 🎉
