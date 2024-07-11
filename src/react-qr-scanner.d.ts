// src/react-qr-scanner.d.ts

declare module 'react-qr-scanner' {
    import { Component } from 'react';
  
    interface QrScannerProps {
      delay?: number;
      style?: React.CSSProperties;
      onError?: (error: any) => void;
      onScan?: (data: { text: string } | null) => void;
      facingMode?: 'user' | 'environment';
    }
  
    class QrScanner extends Component<QrScannerProps> {}
  
    export default QrScanner;
  }
