import React, { useState } from "react";
import QrReader from "react-web-qr-reader";

const Example = () => {
	const delay = 500;

	const previewStyle = {
		height: 240,
		width: 320,
	};

	const [result, setResult] = useState("No result");

	const handleScan = ({data}) => {
		if (data) {
      console.log(data)
			// setResult(result);
		}
	};

	const handleError = (error) => {
		console.log(error);
	};

	return (
		<>
			<QrReader
				delay={delay}
				style={previewStyle}
				onError={handleError}
				onScan={handleScan}
			/>
			<p>{result}</p>
		</>
	);
};

export default Example;
