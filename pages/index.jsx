import { useState } from "react";
import QRCode from "react-qr-code";


export default function Home() {
  const [input, setInput] = useState("")

  function handleInputChange(e) {
    setInput(e.target.value)
  }

  return (
    <div className="flex flex-col items-center gap-8 container mx-auto p-20">
      <p className="text-center text-4xl font-bold">QR Code Generator</p>
      {input ? (
        <div style={{ height: "auto", margin: "0 auto", maxWidth: 256, width: "100%" }}>
          <QRCode
            size={500}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={input}
            viewBox={`0 0 256 256`}
          />
        </div>
      ) : (
        <div className="w-64 h-64 bg-gray-300 rounded-lg flex flex-col items-center justify-center">
          <p className="text-gray-600 text-center">Nothing to show</p>
        </div>
      )}

      <input
        value={input}
        onChange={(event) => handleInputChange(event)}
        className="border p-4 rounded-lg w-72"
        type="url"
        placeholder="example.com"
      />

    </div>
  );
}
