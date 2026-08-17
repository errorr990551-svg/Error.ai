// GA4 Tracking utilities (T14)

export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  } else {
    console.log(`[GA4 Track Event]: ${eventName}`, params);
  }
};

export const trackFormSubmit = (formName, extraData = {}) => {
  trackEvent('form_submit', {
    form_name: formName,
    page_location: typeof window !== 'undefined' ? window.location.href : '',
    ...extraData
  });
};

export const trackCallClick = (phoneNumber = '+91-9876543210') => {
  trackEvent('call_click', {
    phone_number: phoneNumber,
    page_location: typeof window !== 'undefined' ? window.location.href : ''
  });
};

export const trackWhatsappClick = () => {
  trackEvent('whatsapp_click', {
    page_location: typeof window !== 'undefined' ? window.location.href : ''
  });
};

export const trackToolUse = (toolName, toolInputs = {}) => {
  trackEvent('tool_use', {
    tool_name: toolName,
    tool_inputs: JSON.stringify(toolInputs),
    page_location: typeof window !== 'undefined' ? window.location.href : ''
  });
};

export const trackPdfDownload = (pdfTitle) => {
  trackEvent('pdf_download', {
    pdf_title: pdfTitle,
    page_location: typeof window !== 'undefined' ? window.location.href : ''
  });
};
