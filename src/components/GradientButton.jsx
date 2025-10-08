import React from 'react'

const GradientButton = ({ text, link, className = "", target, download }) => {
  const handleClick = (e) => {
    if (download && target === "_blank") {
      e.preventDefault();
      // Open in new tab
      window.open(link, '_blank');
      // Trigger download
      const downloadLink = document.createElement('a');
      downloadLink.href = link;
      downloadLink.download = download;
      downloadLink.click();
    }
  };

  return (
    <>
        <a 
          href={link} 
          target={target}
          download={download}
          onClick={handleClick}
          className={`btn uppercase font-heading border-2 border-transparent text-center min-w-[205px] px-12 py-2 lg:py-3 rounded-full max-sm:text-lg ${className}`}
        >
          {text}
        </a>
    </>
  )
}

export default GradientButton