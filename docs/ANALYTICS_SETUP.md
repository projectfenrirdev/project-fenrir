# Analytics Tools Setup Guide

This document provides step-by-step instructions for configuring Google Tag Manager, Google Analytics 4, Microsoft Clarity, and Google Search Console.

## Prerequisites

1. Copy `.env.example` to `.env.local` and fill in your actual IDs
2. Ensure your site is deployed and accessible

---

## 1. Google Tag Manager (GTM) Configuration

GTM is the central hub for managing all tracking scripts. Configure it once, and manage everything through the GTM dashboard.

### Step 1: Access GTM Dashboard

1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Select your container: `GTM-M6RBPP2J`

### Step 2: Configure GA4 Tag

1. **Create GA4 Configuration Tag:**
   - Go to **Tags** → **New**
   - Tag Name: `GA4 Configuration`
   - Tag Type: **Google Analytics: GA4 Configuration**
   - Measurement ID: `G-5LQ6L8L54J` (or your GA4 ID)
   - Trigger: **All Pages**

2. **Enable Enhanced Measurement:**
   - In the GA4 Configuration tag, expand **Advanced Settings**
   - Enable **Enhanced Measurement** (scrolls, outbound clicks, file downloads, site search)

3. **Create Consent Initialization Trigger:**
   - Go to **Triggers** → **New**
   - Trigger Name: `Consent Initialization - All Pages`
   - Trigger Type: **Consent Initialization**
   - Consent State: **All Pages**

4. **Update GA4 Tag Trigger:**
   - Edit the GA4 Configuration tag
   - Change trigger to: `Consent Initialization - All Pages`

### Step 3: Configure Microsoft Clarity Tag (Optional - if not using direct integration)

1. **Create Clarity Tag:**
   - Go to **Tags** → **New**
   - Tag Name: `Microsoft Clarity`
   - Tag Type: **Custom HTML**
   - HTML:
   ```html
   <script type="text/javascript">
       (function(c,l,a,r,i,t,y){
           c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
           t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
           y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
       })(window, document, "clarity", "script", "YOUR_CLARITY_PROJECT_ID");
   </script>
   ```
   - Replace `YOUR_CLARITY_PROJECT_ID` with your actual Clarity Project ID
   - Trigger: **All Pages** (with Consent State check)

### Step 4: Set Up Built-in Variables

1. Go to **Variables** → **Configure**
2. Enable these built-in variables:
   - **Page Path**
   - **Page URL**
   - **Click Element**
   - **Click Classes**
   - **Click ID**
   - **Click Text**
   - **Click URL**

### Step 5: Create Custom Event Tags

#### Form Submission Tag

1. **Create Form Submit Trigger:**
   - Go to **Triggers** → **New**
   - Trigger Name: `Form Submit`
   - Trigger Type: **Form Submission**
   - Wait for Tags: **Enabled**
   - Check Validation: **Enabled**

2. **Create Form Submit Tag:**
   - Go to **Tags** → **New**
   - Tag Name: `GA4 - Form Submit`
   - Tag Type: **Google Analytics: GA4 Event**
   - Configuration Tag: `GA4 Configuration`
   - Event Name: `generate_lead`
   - Trigger: `Form Submit`

#### CTA Click Tag

1. **Create CTA Click Trigger:**
   - Go to **Triggers** → **New**
   - Trigger Name: `CTA Button Click`
   - Trigger Type: **Click - All Elements**
   - This trigger fires when: **Some Clicks**
   - Condition: **Click Element** contains `cta-button` (or your CTA class)

2. **Create CTA Click Tag:**
   - Go to **Tags** → **New**
   - Tag Name: `GA4 - CTA Click`
   - Tag Type: **Google Analytics: GA4 Event**
   - Configuration Tag: `GA4 Configuration`
   - Event Name: `select_content`
   - Event Parameters:
     - `content_type`: `cta_button`
     - `button_text`: `{{Click Text}}`
   - Trigger: `CTA Button Click`

### Step 6: Test and Publish

1. **Preview Mode:**
   - Click **Preview** in GTM
   - Enter your website URL
   - Test various interactions (form submissions, clicks)

2. **Submit and Publish:**
   - Once tested, click **Submit**
   - Add version name and description
   - Click **Publish**

---

## 2. Google Analytics 4 (GA4) Configuration

### Step 1: Access GA4 Dashboard

1. Go to [analytics.google.com](https://analytics.google.com)
2. Select your property

### Step 2: Configure Conversions

1. Go to **Admin** → **Events**
2. Mark these events as conversions:
   - `generate_lead` (form submissions)
   - `select_content` (CTA clicks)
   - Any other key user actions

### Step 3: Set Up Audiences

1. Go to **Admin** → **Audiences** → **New Audience**
2. Create audiences such as:
   - **Form Submitters**: Users who triggered `generate_lead`
   - **Service Page Visitors**: Users who viewed service pages
   - **High Engagement**: Users with >3 page views

### Step 4: Link with Search Console

1. Go to **Admin** → **Product Links** → **Search Console Links**
2. Click **Link** and select your Search Console property
3. This enables "Queries" report showing search terms

### Step 5: Configure Data Retention

1. Go to **Admin** → **Data Settings** → **Data Retention**
2. Set retention to **14 months** (or your preference)

---

## 3. Microsoft Clarity Setup

### Step 1: Create Clarity Project

1. Go to [clarity.microsoft.com](https://clarity.microsoft.com)
2. Sign in with Microsoft account
3. Click **New Project**
4. Enter project name and website URL
5. Copy the **Project ID** from the installation code

### Step 2: Add Project ID to Environment Variables

1. Add `NEXT_PUBLIC_CLARITY_ID=your_project_id` to `.env.local`
2. Restart your development server

### Step 3: Verify Installation

1. Visit your website
2. In Clarity dashboard, wait a few minutes
3. You should see "Recording" status

### Step 4: Configure Clarity Settings

1. **Privacy Settings:**
   - Go to **Settings** → **Privacy**
   - Enable **Mask Text** (masks sensitive data)
   - Enable **Mask Images** (if needed)

2. **Heatmaps:**
   - Clarity automatically generates heatmaps
   - View under **Heatmaps** tab

3. **Recordings:**
   - View session recordings under **Recordings** tab
   - Filter by rage clicks, dead clicks, etc.

---

## 4. Google Search Console Setup

### Step 1: Add Property

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click **Add Property**
3. Enter your website URL: `https://www.projectfenrir.dev`
4. Choose verification method: **HTML tag**

### Step 2: Get Verification Code

1. Copy the `content` value from the meta tag shown
2. It looks like: `<meta name="google-site-verification" content="abc123..." />`
3. Copy only the `content` value (the part after `content="`)

### Step 3: Add Verification Code to Environment Variables

1. Add `GOOGLE_SITE_VERIFICATION=your_verification_code` to `.env.local`
2. Restart your development server
3. Deploy to production

### Step 4: Verify Ownership

1. Return to Search Console
2. Click **Verify**
3. If successful, you'll see "Ownership verified"

### Step 5: Submit Sitemap

1. In Search Console, go to **Sitemaps**
2. Enter: `https://www.projectfenrir.dev/sitemap.xml`
3. Click **Submit**
4. Status should show "Success" after Google crawls it

### Step 6: Request Indexing (Optional)

1. Go to **URL Inspection**
2. Enter your homepage URL
3. Click **Request Indexing**

### Step 7: Monitor Performance

1. **Performance Report:**
   - View keywords, clicks, impressions, CTR
   - Check weekly for trends

2. **Coverage Report:**
   - Monitor indexing issues
   - Fix any errors or warnings

3. **Core Web Vitals:**
   - Check LCP, FID, CLS scores
   - Aim for "Good" ratings

---

## 5. Testing Your Setup

### Test GTM Events

1. Open browser DevTools → Network tab
2. Filter by `collect` or `gtm`
3. Interact with your site (submit forms, click CTAs)
4. Verify events are firing

### Test GA4 Events

1. Go to GA4 → **Reports** → **Realtime**
2. Interact with your site
3. Events should appear within seconds

### Test Clarity

1. Visit your site
2. Wait 5-10 minutes
3. Check Clarity dashboard for recordings

### Test Search Console

1. Submit a test URL in URL Inspection
2. Verify it's indexed
3. Check sitemap status

---

## 6. Best Practices

### Event Naming Convention

- Use lowercase with underscores: `contact_form_submit`
- Be descriptive: `service_page_view` not `spv`
- Group related events: `form_submit_contact`, `form_submit_newsletter`

### Privacy Compliance

- ✅ Consent Mode v2 is already implemented
- ✅ Cookie banner respects user preferences
- ✅ Analytics only loads with consent
- ✅ Clarity respects analytics consent

### Performance

- GTM loads asynchronously (non-blocking)
- Clarity loads after consent (non-blocking)
- All scripts use `afterInteractive` strategy

### Monitoring

- Check GA4 Realtime report daily
- Review Clarity insights weekly
- Monitor Search Console monthly
- Set up GA4 alerts for conversion drops

---

## Troubleshooting

### Events Not Firing

1. Check browser console for errors
2. Verify GTM Preview mode
3. Check consent status (must be granted)
4. Verify dataLayer is initialized

### Clarity Not Recording

1. Verify `NEXT_PUBLIC_CLARITY_ID` is set
2. Check consent is granted for analytics
3. Wait 5-10 minutes for first recording
4. Check Clarity dashboard for errors

### Search Console Not Verifying

1. Verify `GOOGLE_SITE_VERIFICATION` is set
2. Check meta tag appears in page source
3. Ensure site is deployed
4. Try alternative verification method (DNS)

---

## Additional Resources

- [GTM Documentation](https://support.google.com/tagmanager)
- [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- [Clarity Documentation](https://docs.microsoft.com/en-us/clarity/)
- [Search Console Help](https://support.google.com/webmasters)
