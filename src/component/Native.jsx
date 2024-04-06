import React, { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

const QrCodeScanner = () => {
	const scannerRef = useRef(null);

	useEffect(() => {
		const qrCodeScanner = new Html5Qrcode(scannerRef.current.id);

		qrCodeScanner
			.start(
				{ facingMode: "environment" },
				{ fps: 10, qrbox: 250 },
				(qrCodeMessage) => {
					// Fill your input field with qrCodeMessage
					document.getElementById("your-input-field-id").value = qrCodeMessage;
				},
				(errorMessage) => {
					console.log(`QR code scanning error: ${errorMessage}`);
				}
			)
			.catch((err) => {
				console.log(`Unable to start scanning: ${err}`);
			});

		return () => {
			qrCodeScanner
				.stop()
				.catch((err) => console.log(`Unable to stop scanning: ${err}`));
		};
	}, []);

	return <div id='your-html-element-id' ref={scannerRef} />;
};

export default QrCodeScanner;
