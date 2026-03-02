# Google Sheets Waitlist Setup

## Step 1: Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet
2. Name it **Repfolio Waitlist**
3. In Row 1, add these headers in columns A, B, C:
   - A1: `Timestamp`
   - B1: `Email`
   - C1: `Source`

## Step 2: Create the Apps Script Web App

1. In your Google Sheet, click **Extensions -> Apps Script**
2. Delete any existing code and paste the following:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.email || '',
      data.source || 'unknown'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 3: Deploy as Web App

1. Click **Deploy -> New deployment**
2. Click the gear icon next to "Type" and select **Web app**
3. Set the following:
   - **Description**: Repfolio Waitlist Handler
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. Copy the **Web app URL** — it looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`

## Step 4: Add to Your Project

Open `.env.local` and add:

```
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the ID from your deployed Web App URL.

## Step 5: Redeploy After Any Script Changes

If you update the Apps Script code, you must create a **new deployment** (not update existing) for changes to take effect. Use the new URL each time.

## Notes

- The form uses `mode: 'no-cors'` because Google Apps Script doesn't return CORS headers in all cases. This means the browser can't read the response — the app assumes success if no network error is thrown.
- All signups will appear in real time in your Google Sheet.
- You can share the sheet with teammates for visibility.
