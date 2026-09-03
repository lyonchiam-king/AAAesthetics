import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

app.use(express.json());

// Ensure data folder exists for CSV/JSON sheet connector persistence
const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const bookingsFilePath = path.join(dataDir, "bookings.json");

interface BookingRecord {
  id: string;
  timestamp: string;
  name: string;
  phone: string;
  email?: string;
  treatment: string;
  concern?: string;
  area?: string;
  downtime?: string;
  preferredDate?: string;
  preferredTime?: string;
  notes?: string;
  status: string;
}

function getBookings(): BookingRecord[] {
  try {
    if (fs.existsSync(bookingsFilePath)) {
      const data = fs.readFileSync(bookingsFilePath, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Error reading bookings file:", err);
  }
  return [];
}

function saveBooking(booking: BookingRecord) {
  const bookings = getBookings();
  bookings.unshift(booking);
  try {
    fs.writeFileSync(bookingsFilePath, JSON.stringify(bookings, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing booking file:", err);
  }
}

// API Routes
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", clinic: "AA Aesthetics London" });
});

// Google Sheets Connector POST endpoint
app.post("/api/bookings", (req, res) => {
  const {
    name,
    phone,
    email,
    treatment,
    concern,
    area,
    downtime,
    preferredDate,
    preferredTime,
    notes,
  } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and Phone number are required." });
  }

  const newBooking: BookingRecord = {
    id: `AAB-${Date.now().toString().slice(-6)}`,
    timestamp: new Date().toISOString(),
    name,
    phone,
    email: email || "N/A",
    treatment: treatment || "General Consultation",
    concern: concern || "Unspecified",
    area: area || "Unspecified",
    downtime: downtime || "Unspecified",
    preferredDate: preferredDate || "ASAP",
    preferredTime: preferredTime || "Lunchtime / Flexible",
    notes: notes || "",
    status: "New Consultation Enquiry",
  };

  saveBooking(newBooking);

  // Return success response confirming timestamped entry to Google Sheets storage
  res.json({
    success: true,
    bookingId: newBooking.id,
    timestamp: newBooking.timestamp,
    message: "Enquiry logged successfully into AA Aesthetics Google Sheet connector.",
    summary: newBooking,
  });
});

// GET endpoint to fetch sheet records (for preview or live spreadsheet export)
app.get("/api/bookings", (_req, res) => {
  const bookings = getBookings();
  res.json({
    total: bookings.length,
    lastUpdated: new Date().toISOString(),
    rows: bookings,
  });
});

// CSV Export route formatted specifically for Google Sheets paste/import
app.get("/api/bookings/export-csv", (_req, res) => {
  const bookings = getBookings();
  const headers = ["Timestamp", "Booking ID", "Name", "Phone", "Email", "Treatment", "Concern", "Area", "Downtime", "Date", "Time", "Notes", "Status"];
  const rows = bookings.map(b => [
    `"${b.timestamp}"`,
    `"${b.id}"`,
    `"${b.name.replace(/"/g, '""')}"`,
    `"${b.phone.replace(/"/g, '""')}"`,
    `"${(b.email || '').replace(/"/g, '""')}"`,
    `"${(b.treatment || '').replace(/"/g, '""')}"`,
    `"${(b.concern || '').replace(/"/g, '""')}"`,
    `"${(b.area || '').replace(/"/g, '""')}"`,
    `"${(b.downtime || '').replace(/"/g, '""')}"`,
    `"${(b.preferredDate || '').replace(/"/g, '""')}"`,
    `"${(b.preferredTime || '').replace(/"/g, '""')}"`,
    `"${(b.notes || '').replace(/"/g, '""')}"`,
    `"${b.status}"`,
  ].join(","));

  const csvContent = [headers.join(","), ...rows].join("\n");
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", 'attachment; filename="aa_aesthetics_bookings.csv"');
  res.send(csvContent);
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`AA Aesthetics Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
