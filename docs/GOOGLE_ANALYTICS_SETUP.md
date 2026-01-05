# Google Analytics 4 Setup Guide

## Overview
This guide will help you set up Google Analytics 4 (GA4) on your website with proper Consent Mode v2 integration.

## Prerequisites
- A Google Analytics account
- Your website deployed (or running locally for testing)

---

## Step 1: Get Your GA4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property (or create a new one)
3. Navigate to **Admin** (bottom left gear icon)
4. Under **Property** column, click **Data Streams**
5. Click on your web stream (or create one if you don't have it)
6. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

---

## Step 2: Configure Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add your GA4 Measurement ID:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

3. Restart your development server for changes to take effect:

```bash
pnpm dev
```

---

## Step 3: Verify Installation

### Method 1: Using Google Analytics Real-Time Reports

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. Click on **Reports** > **Realtime**
4. Open your website in a new tab
5. Accept cookies when the cookie banner appears
6. You should see your visit appear in the Real-Time report within 30 seconds

### Method 2: Using Browser Developer Tools

1. Open your website
2. Open browser DevTools (F12)
3. Go to the **Network** tab
4. Filter by "google-analytics" or "collect"
5. Refresh the page
6. You should see requests to `www.google-analytics.com/g/collect`

### Method 3: Using Google Tag Assistant

1. Install [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk) Chrome extension
2. Visit your website
3. Click the Tag Assistant icon
4. Click "Enable" and refresh the page
5. You should see your GA4 tag listed and firing

---

## Step 4: Test Consent Mode

Your implementation uses Google Consent Mode v2, which means:

1. **Before consent**: GA4 sends cookieless "pings" (no cookies, limited data)
2. **After consent**: GA4 uses cookies for full tracking

To test this:

1. Open your website in an incognito/private window
2. Open DevTools > Application > Cookies
3. **Before accepting cookies**: You should see minimal or no GA cookies
4. **Accept analytics cookies** via the cookie banner
5. **After accepting**: You should see `_ga`, `_ga_*` cookies appear
6. Check Network tab for `collect` requests with `gcs=` parameter (consent state)

---

## Troubleshooting

### GA4 Not Showing Data

1. **Check Environment Variable**
   ```bash
   # In your terminal
   echo $NEXT_PUBLIC_GA_ID
   ```
   Make sure it returns your GA4 Measurement ID.

2. **Check Browser Console**
   - Open DevTools > Console
   - Look for any errors related to Google Analytics
   - You should see `window.dataLayer` defined

3. **Check Network Requests**
   - Open DevTools > Network
   - Filter by "collect" or "google-analytics"
   - You should see requests to `www.google-analytics.com/g/collect`

4. **Verify Consent Mode**
   - In Console, type: `window.dataLayer`
   - You should see consent events in the array

5. **Check Ad Blockers**
   - Disable any ad blockers or privacy extensions
   - They may block Google Analytics

### Common Issues

#### Issue: "NEXT_PUBLIC_GA_ID is not configured" warning
**Solution**: Add `NEXT_PUBLIC_GA_ID` to your `.env.local` file and restart the dev server.

#### Issue: No data in Real-Time reports
**Solution**: 
- Wait 30-60 seconds after page load
- Make sure you accepted analytics cookies
- Check if your IP is filtered in GA4 settings

#### Issue: Consent Mode not working
**Solution**:
- Make sure `GoogleConsentInit` loads before `GoogleAnalyticsScript`
- Check that `window.gtag` is defined before GA4 loads
- Verify consent updates in `window.dataLayer`

---

## Production Deployment

### Vercel
1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add `NEXT_PUBLIC_GA_ID` with your Measurement ID
4. Redeploy your application

### Other Platforms
Add the environment variable through your platform's dashboard or deployment configuration.

---

## Consent Mode v2 Compliance

Your implementation is compliant with Google's Consent Mode v2 requirements:

✅ Default consent set to "denied" before user interaction  
✅ Consent state updates when user accepts/rejects cookies  
✅ Cookieless pings sent when consent is denied  
✅ Full tracking enabled when consent is granted  
✅ EU GDPR compliant  

---

## Advanced Configuration

### Custom Events
To track custom events, use the `gtag` function:

```typescript
// In your component
if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', 'button_click', {
    'event_category': 'engagement',
    'event_label': 'CTA Button',
    'value': 1
  });
}
```

### Enhanced Measurement
GA4 automatically tracks:
- Page views
- Scrolls
- Outbound clicks
- Site search
- Video engagement
- File downloads

You can configure these in GA4 Admin > Data Streams > Enhanced measurement.

---

## Support

If you continue to have issues:
1. Check the [GA4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
2. Review [Consent Mode v2 Guide](https://developers.google.com/tag-platform/security/guides/consent)
3. Use [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
