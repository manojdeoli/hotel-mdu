# QR Code Demo Setup

## How It Works

### User Flow:
1. **User opens app on mobile**: `https://your-app.vercel.app`
2. **Verifies phone number**: e.g., +61400500800
3. **Phone number saved** in browser localStorage
4. **Scans QR code** at any location (entrance, check-in, elevator, room)
5. **App automatically**:
   - Reads zone from URL (`?zone=entrance`)
   - Retrieves phone number from localStorage
   - Triggers location-based actions
   - Updates big screen in real-time

### Generate QR Codes:
Visit: `https://your-app.vercel.app/qr-codes`

This page shows 4 QR codes:
- 🏨 Hotel Entrance
- ✅ Check-in Kiosk  
- 🛗 Elevator
- 🚪 Room 1337

### Print & Place:
1. Download each QR code
2. Print them
3. Place at different locations in your demo area
4. Attendees scan with their phones

### Big Screen Display:
- Open `https://your-app.vercel.app` on big screen
- Shows real-time map and status updates
- Displays when users scan QR codes

## Zone Actions:

**Entrance QR** → Shows welcome message
**Check-in QR** → Auto check-in + RFID verification
**Elevator QR** → Identity check + grants floor access
**Room QR** → Identity check + unlocks room

## No Backend Needed!
Everything runs in the browser using localStorage for phone number storage.
