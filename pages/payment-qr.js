import { useState, useRef, useEffect } from "react";
import { toCanvas } from "qrcode";

export default function PaymentQR() {
  const [upiID, setUpiID] = useState(""); // Payee's UPI ID
  const [amount, setAmount] = useState(""); // Amount to request
  const [note, setNote] = useState(""); // Payment note
  const [showPaymentQR, setShowPaymentQR] = useState(false); // For payment QR visibility
  const paymentQrCanvasRef = useRef(null);

  useEffect(() => {
    if (upiID && amount) {
      setShowPaymentQR(true);
      generatePaymentQRCode();
    } else {
      setShowPaymentQR(false);
    }
  }, [upiID, amount, note]);

  function generatePaymentQRCode() {
    if (upiID && amount) {
      const upiString = `upi://pay?pa=${encodeURIComponent(upiID)}&am=${encodeURIComponent(amount)}&cu=INR&tn=${encodeURIComponent(note)}`;

      if (paymentQrCanvasRef.current) {
        toCanvas(paymentQrCanvasRef.current, upiString, {
          width: 300,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#ffffff",
          },
        });
      }
    } else {
      alert("UPI ID and Amount are required for generating a payment QR code!");
    }
  }

  function handleDownload(canvasRef, filename) {
    if (canvasRef.current) {
      const link = document.createElement("a");
      link.href = canvasRef.current.toDataURL("image/png");
      link.download = filename;
      link.click();
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Payment QR Code Generator</h1>

      {/* Payment QR Code Section */}
      <div className="flex flex-col items-center gap-6">
        <input
          value={upiID}
          onChange={(e) => setUpiID(e.target.value)}
          className="border p-4 rounded-lg w-80 text-gray-800 focus:outline-none focus:ring-4 focus:ring-green-400"
          type="text"
          placeholder="Enter UPI ID (e.g., abc@upi)"
        />
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-4 rounded-lg w-80 text-gray-800 focus:outline-none focus:ring-4 focus:ring-green-400"
          type="number"
          placeholder="Enter amount (e.g., 500)"
        />
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="border p-4 rounded-lg w-80 text-gray-800 focus:outline-none focus:ring-4 focus:ring-green-400"
          type="text"
          placeholder="Enter payment note (optional)"
        />
        {showPaymentQR && (
          <canvas
            ref={paymentQrCanvasRef}
            className="bg-white rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
        )}
        {showPaymentQR && (
          <button
            onClick={() =>
              handleDownload(paymentQrCanvasRef, "payment-qr-code.png")
            }
            className="bg-green-500 px-4 py-2 rounded-lg font-semibold hover:bg-green-600"
          >
            Download Payment QR Code
          </button>
        )}
      </div>
    </div>
  );
}
