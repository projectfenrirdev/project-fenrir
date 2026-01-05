# GA4 Testing Checklist

Quick reference for testing Google Analytics 4 implementation.

## ✅ Pre-Flight Checks

- [ ] `.env.local` file exists with `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
- [ ] Development server restarted after adding environment variable
- [ ] No console errors related to Google Analytics
- [ ] Cookie banner appears on first visit

---

## 🧪 Browser Testing

### Test 1: Script Loading
1. Open DevTools > Network tab
2. Refresh page
3. **Expected**: See requests to `googletagmanager.com/gtag/js`

### Test 2: Consent Mode Initialization
1. Open DevTools > Console
2. Type: `window.dataLayer`
3. **Expected**: Array with consent 'default' event showing all denied

### Test 3: Cookie Banner Interaction
1. Click "Accept All" on cookie banner
2. Check Console > `window.dataLayer`
3. **Expected**: New consent 'update' event with analytics_storage: 'granted'

### Test 4: Analytics Requests
1. Open DevTools > Network tab
2. Filter by "collect"
3. Accept cookies and navigate
4. **Expected**: Requests to `www.google-analytics.com/g/collect`

### Test 5: Cookies Set
1. Open DevTools > Application > Cookies
2. Accept analytics cookies
3. **Expected**: See `_ga` and `_ga_XXXXXXXXX` cookies

---

## 🌐 Google Analytics Dashboard Testing

### Real-Time Report
1. Go to GA4 > Reports > Realtime
2. Open your site in new tab
3. Accept cookies
4. Navigate between pages
5. **Expected**: See active user and pageviews in real-time

### Debug View (Recommended)
1. Install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
2. Enable the extension
3. Open Console
4. **Expected**: Detailed GA4 event logs

---

## 🔍 Common Issues & Quick Fixes

| Issue | Quick Fix |
|-------|-----------|
| No GA requests in Network tab | Check `NEXT_PUBLIC_GA_ID` is set |
| "GA ID not configured" warning | Restart dev server after adding env var |
| No data in Real-Time | Wait 30-60 seconds, accept cookies |
| Cookies not setting | Check if ad blocker is active |
| Consent mode not working | Verify `GoogleConsentInit` loads first |

---

## 📊 Expected Network Requests

When working correctly, you should see:

1. **Initial Load** (before consent):
   - `gtag/js?id=G-XXXXXXXXXX` - Script load
   - `g/collect?...gcs=G100` - Cookieless ping (consent denied)

2. **After Accepting Cookies**:
   - `g/collect?...gcs=G111` - Full tracking (consent granted)
   - Multiple collect requests for events

---

## 🎯 Quick Console Commands

```javascript
// Check if gtag is loaded
typeof window.gtag

// View dataLayer
window.dataLayer

// Check consent state (look for latest consent event)
window.dataLayer.filter(e => e[0] === 'consent')

// Manually trigger test event
window.gtag('event', 'test_event', { test: true })
```

---

## 📞 Still Not Working?

1. Clear browser cache and cookies
2. Test in incognito/private mode
3. Disable all browser extensions
4. Check GA4 property settings (not filtered IPs)
5. Verify Measurement ID format: `G-XXXXXXXXXX`
6. Check if GA4 property is active (not deleted)

---

## ✨ Success Criteria

Your GA4 is working correctly when:

✅ Network requests to `google-analytics.com/g/collect` appear  
✅ Real-Time report shows active users  
✅ Consent mode events appear in dataLayer  
✅ Cookies set after accepting consent  
✅ No console errors  
✅ Pageviews tracked in GA4 dashboard  
