import { useState, useRef, useEffect } from "react";
import { toCanvas } from "qrcode";

export default function LiveQR() {
  const [input, setInput] = useState(""); // For general QR code text
  const [qrColor, setQrColor] = useState("#000000");
  const [showQR, setShowQR] = useState(false); // For general QR code visibility
  const qrCanvasRef = useRef(null);

  useEffect(() => {
    if (input) {
      setShowQR(true);
      generateQRCode();
    } else {
      setShowQR(false);
    }
  }, [input, qrColor]);

  function generateQRCode() {
    if (input && qrCanvasRef.current) {
      toCanvas(qrCanvasRef.current, input, {
        width: 256,
        margin: 1,
        color: {
          dark: qrColor,
          light: "#ffffff",
        },
      });
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
      <h1 className="text-4xl font-bold mb-8">Live QR Code Generator</h1>

      {/* General QR Code Section */}
      <div className="flex flex-col items-center gap-6">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-4 rounded-lg w-80 text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-400"
          type="text"
          placeholder="Enter text or URL for QR Code"
        />
        {showQR && (
          <canvas
            ref={qrCanvasRef}
            className="bg-white rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
        )}
        {showQR && (
          <button
            onClick={() => handleDownload(qrCanvasRef, "qr-code.png")}
            className="bg-blue-500 px-4 py-2 rounded-lg font-semibold hover:bg-blue-600"
          >
            Download QR Code
          </button>
        )}
      </div>
    </div>
  );
}
