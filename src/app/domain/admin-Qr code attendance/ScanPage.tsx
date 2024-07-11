// src/pages/admin-Qr code attendance/ScanPage.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QrScanner from 'react-qr-scanner';
import PrimaryButton from '../../shared/components/buttons/PrimaryButton';
import './ScanPage.scss';

const ScanPage: React.FC = () => {
  const [scannedData, setScannedData] = useState('');
  const [isScanning, setIsScanning] = useState(true);
  const navigate = useNavigate();

  const handleScan = (data: { text: string } | null) => {
    if (data) {
      setScannedData(data.text);
      setIsScanning(false);
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  const handleBackClick = () => {
    navigate('/dashboard/attendance');
  };

  const handleStopClick = () => {
    setIsScanning(false);
  };

  const handleSaveClick = () => {
    // Save scanned data logic here
    navigate('/dashboard/attendance');
  };

  return (
    <div className="scan-page">
      <div className="top-bar">
        <PrimaryButton buttonText="Back" handleButtonClick={handleBackClick} />
      </div>
      {isScanning ? (
        <QrScanner
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      ) : (
        <div className="scan-success">
          <p>Scanned Successfully</p>
        </div>
      )}
      <div className="button-container">
        {isScanning && (
          <PrimaryButton buttonText="Stop" handleButtonClick={handleStopClick} />
        )}
        {!isScanning && (
          <PrimaryButton buttonText="Save" handleButtonClick={handleSaveClick} />
        )}
      </div>
      {scannedData && (
        <div className="scanned-data">
          <h2>Scanned Data:</h2>
          <p>{scannedData}</p>
        </div>
      )}
    </div>
  );
};

export default ScanPage;
