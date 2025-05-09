import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type IframePreviewProps = {
  width: number;
  height: number;
  children: React.ReactNode;
};

const IframePreview = ({ width, height, children }: IframePreviewProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeBody, setIframeBody] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const injectStyles = () => {
      const doc = iframe.contentDocument;
      const head = doc?.head;
      if (!head) return;

      // Clone all <style> and <link rel="stylesheet"> from parent to iframe
      document
        .querySelectorAll('style, link[rel="stylesheet"]')
        .forEach((el) => {
          head.appendChild(el.cloneNode(true));
        });

      setIframeBody(doc.body);
    };

    if (iframe.contentDocument?.readyState === 'complete') {
      injectStyles();
    } else {
      iframe.addEventListener('load', injectStyles);
      return () => iframe.removeEventListener('load', injectStyles);
    }
  }, []);

  return (
    <iframe ref={iframeRef} width={width} height={height}>
      {iframeBody && createPortal(children, iframeBody)}
    </iframe>
  );
};

export default IframePreview;
