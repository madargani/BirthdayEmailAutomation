# BirthdayEmailAutomation
Simple node program that automatically sends a birthday greeting email based on a google sheet.

## Use instructions
1. Create a google sheet
   - Should have one header row
   - First row should contain emails
   - Second row should contain names
   - Third row should contian birthdates
   ![Google sheet screen shot](/BirthdayEmailListSS.png)

2. Add .env file formatted like so
   ```
   #.env
   EMAIL={YOUR_EMAIL}
   PASSWORD={YOUR_EMAIL_PASSWORD}
   SHEET_ID={GOOGLE_SHEET_ID}
   ```
   The google sheet id is the middle part of the google sheet link:
   >https:<area>//docs.google.com/spreadsheets/d/ ***{GOOGLE_SHEET_ID}*** /edit#gid=0
   
4. Run program daily.
   
