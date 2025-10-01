# Email Setup Guide for Contact Form

Your contact form is now configured to send emails using **EmailJS**. Follow these steps to set it up:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (100 emails/month free)
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your email: `mikiyasalemayehu537@gmail.com`
5. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** `portfolio_contact`

**Subject:** `New Contact from {{from_name}}`

**Content:**
```
Hello Mikiyas,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Copy the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcXYZ123_456def`)

## Step 5: Update Your Code

Open `src/components/Contact.jsx` and replace these lines (around line 47-49):

```javascript
const serviceId = 'YOUR_SERVICE_ID'      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'      // Replace with your Public Key
```

**Example:**
```javascript
const serviceId = 'service_abc123'
const templateId = 'template_xyz789'
const publicKey = 'abcXYZ123_456def'
```

## Step 6: Install Dependencies & Test

1. Install the EmailJS package:
```bash
npm install
```

2. Restart your dev server:
```bash
npm run dev
```

3. Test the contact form on your website!

## Troubleshooting

- **Emails not sending?** Check your EmailJS dashboard for error logs
- **Gmail blocking?** Enable "Less secure app access" or use App Password
- **Rate limit?** Free tier allows 100 emails/month
- **Still not working?** Users can still click your email link to send directly

## Alternative: FormSubmit (No Setup Required)

If you prefer a simpler solution without signup, you can use FormSubmit:

Replace the form's `onSubmit` with a direct form action:

```jsx
<form action="https://formsubmit.co/mikiyasalemayehu537@gmail.com" method="POST">
  <input type="hidden" name="_subject" value="New Portfolio Contact!" />
  <input type="hidden" name="_captcha" value="false" />
  {/* Your form fields */}
</form>
```

---

**Need help?** Contact me or check the EmailJS documentation: https://www.emailjs.com/docs/
